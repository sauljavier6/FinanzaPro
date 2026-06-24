import { getReporteG } from "../../../api/AdminApis/reportesApi";
import { useEffect, useState } from "react";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { formatoCompacto } from "../../../utils/formatoCompacto";

export default function Reporte() {

  const [dataGrafica, setDataGrafica] = useState({
    meses: [],
    ventas: [],
    cobranzas: [],
    total: 0,
    porcentajes: [],
    totalMesActual: 0,
    totalMesAnterior: 0,
    comparacion: {
      porcentajeCambio: 0,
      tendencia: "equal",
      mesAnterior: 0
    },
    cobradoMesActual: 0,
    cobradoMesAnterior: 0,
    porcentajerecMesActual: 0,
    porcentajerecMesAnterior: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getReporteG();
      console.log(res)

      if (res.success) {
        setDataGrafica(res.data);
      }
    };

    fetchData();
  }, []);

  console.log('reporte', dataGrafica)

  const generarPath = (data: number[], height: number, width: number) => {
    if (!data.length) return "";

    const max = Math.max(...data, 1);
    const stepX = width / (data.length - 1);

    return data
      .map((valor, i) => {
        const x = i * stepX;
        const y = height - (valor / max) * height;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  const height = 300;
  const width = 600;

  const pathVentas = generarPath(dataGrafica.ventas, height, width);
  const pathPagos = generarPath(dataGrafica.cobranzas, height, width);
  const max = Math.max(...dataGrafica.ventas, 1);

  const colores = [
    "bg-blue-500",
    "bg-green-500",
    "bg-amber-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500"
  ];

  const totalPorcentaje = dataGrafica.porcentajes.reduce((a, b) => a + b, 0);

  const porcentajesNormalizados = dataGrafica.porcentajes.map(p =>
    (p / totalPorcentaje) * 100
  );

  const tablaMensual = dataGrafica.meses.map((mes, i) => {
    const ventas = dataGrafica.ventas[i] || 0;
    const cobrado = dataGrafica.cobranzas[i] || 0;

    return {
      mes,
      ventas,
      cobrado,
      porcentaje: ventas > 0 ? (cobrado / ventas) * 100 : 0
    };
  });

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Centro de Graficas y Estadísticas
              </h2>
              <p className="text-sm text-[#64748b] mt-1 break-words">
                Monitoreo de indicadores clave y desempeño de cobranza
                administrativa.
              </p>
            </div>
          </div>

          {/* */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Total facturado (Mes anterior)
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold">
                    {formatoMoneda.format(dataGrafica?.totalMesAnterior || 0)}
                  </h3>
                  <span className="text-xs font-bold text-yellow-500 flex items-center gap-1">
                    Periodo cerrado
                  </span>
                </div>

                <div className="hidden sm:block h-10 w-20">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path
                      d="M0 30 Q 25 35 50 15 T 100 5"
                      fill="none"
                      stroke="#135bec"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Recuperación de Mora (Mes anterior)
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(dataGrafica?.cobradoMesAnterior || 0)}</h3>
                  <span className="text-xs font-bold text-slate-400">
                    Meta: ${formatoCompacto.format(dataGrafica?.totalMesAnterior || 0)}
                  </span>
                </div>

                <div className="hidden sm:flex h-12 w-12 relative items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-slate-100 dark:text-slate-800"
                      cx="24"
                      cy="24"
                      r="20"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <circle
                      className="text-primary transition-all duration-500"
                      cx="24"
                      cy="24"
                      r="20"
                      fill="transparent"
                      stroke="currentColor"
                      strokeDasharray={2 * Math.PI * 20}
                      strokeDashoffset={2 * Math.PI * 20 * (1 - (dataGrafica?.porcentajerecMesAnterior || 0) / 100)}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute text-[9px] font-bold">
                    {formatoCompacto.format(dataGrafica?.porcentajerecMesAnterior || 0)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Total Facturado (Mes actual)
              </p>

              <div className="flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(dataGrafica?.totalMesActual || 0)}</h3>
                  {(() => {
                    const comp = dataGrafica?.comparacion;

                    if (!comp) return null;

                    const esPositivo = comp.tendencia === "up";
                    const esNegativo = comp.tendencia === "down";

                    return (
                      <span
                        className={`text-xs font-bold flex items-center gap-1 ${esPositivo
                          ? "text-green-500"
                          : esNegativo
                            ? "text-red-500"
                            : "text-slate-400"
                          }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {esPositivo
                            ? "trending_up"
                            : esNegativo
                              ? "trending_down"
                              : "trending_flat"}
                        </span>

                        {comp.mesAnterior > 0
                          ? `${esPositivo ? "+" : ""}${comp.porcentajeCambio.toFixed(1)}%`
                          : "—"}
                      </span>
                    );
                  })()}
                </div>

                <div className="hidden sm:flex h-12 w-20 items-end gap-1">
                  <div className="w-2 bg-primary/20 h-[60%] rounded-full"></div>
                  <div className="w-2 bg-primary/40 h-[80%] rounded-full"></div>
                  <div className="w-2 bg-primary/60 h-[70%] rounded-full"></div>
                  <div className="w-2 bg-primary/80 h-[90%] rounded-full"></div>
                  <div className="w-2 bg-primary h-[100%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Recuperación de Mora (Mes actual)
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(dataGrafica?.cobradoMesActual || 0)}</h3>
                  <span className="text-xs font-bold text-slate-400">
                    Meta: ${formatoCompacto.format(dataGrafica?.totalMesActual || 0)}
                  </span>
                </div>

                <div className="hidden sm:flex h-12 w-12 relative items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-slate-100 dark:text-slate-800"
                      cx="24"
                      cy="24"
                      r="20"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <circle
                      className="text-primary transition-all duration-500"
                      cx="24"
                      cy="24"
                      r="20"
                      fill="transparent"
                      stroke="currentColor"
                      strokeDasharray={2 * Math.PI * 20}
                      strokeDashoffset={2 * Math.PI * 20 * (1 - (dataGrafica?.porcentajerecMesActual || 0) / 100)}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute text-[9px] font-bold">
                    {formatoCompacto.format(dataGrafica?.porcentajerecMesActual || 0)}%
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/*  */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* =================== GRAFICA PRINCIPAL =================== */}
            <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm p-5 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold">
                    Ingresos vs. Ventas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Comparativa detallada
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-xs font-medium text-slate-500">
                      Ingresos
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-slate-500">
                      Ventas
                    </span>
                  </div>
                </div>
              </div>

              {/* Área gráfica responsive */}
              <div className="h-[260px] sm:h-[320px] lg:h-[350px] relative pb-5">

                {/* Ejes Y */}
                <div className="absolute left-0 top-0 h-full hidden sm:flex flex-col justify-between text-[10px] text-slate-400 font-bold">
                  {[1, 0.75, 0.5, 0.25, 0].map((p, i) => (
                    <span key={i}>
                      ${(max * p / 1000000).toFixed(1)}M
                    </span>
                  ))}
                </div>

                {/* Área gráfica */}
                <div className="sm:ml-10 h-full border-l border-b border-slate-100 dark:border-slate-800 relative overflow-x-auto">

                  {/* líneas horizontales */}
                  <div className="absolute w-full top-1/4 border-t border-dashed border-slate-100 dark:border-slate-800"></div>
                  <div className="absolute w-full top-2/4 border-t border-dashed border-slate-100 dark:border-slate-800"></div>
                  <div className="absolute w-full top-3/4 border-t border-dashed border-slate-100 dark:border-slate-800"></div>

                  {/* ventas */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 260"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={pathVentas}
                      fill="none"
                      stroke="#22c55e"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>

                  {/* pagos */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 260"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={pathPagos}
                      fill="none"
                      stroke="#135bec"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>

                </div>

                {/* Meses */}
                <div className="sm:ml-10 mt-4 flex justify-between text-[10px] sm:text-[11px] text-slate-400 font-bold">
                  {dataGrafica.meses.map((mes, i) => (
                    <span key={i} className="min-w-[60px] text-center">
                      {mes}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* =================== DONUT =================== */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm p-5 sm:p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold">
                  Composición de ventas
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Distribución por mes
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 sm:mb-8">
                  <svg className="w-full h-full" viewBox="0 0 42 42">
                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#135bec"
                      strokeDasharray={`${porcentajesNormalizados[0]} ${100 - porcentajesNormalizados[0]}`}
                      strokeWidth="5"
                    />

                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#10b981"
                      strokeDasharray={`${porcentajesNormalizados[1]} ${100 - porcentajesNormalizados[1]}`}
                      strokeDashoffset={-porcentajesNormalizados[0]}
                      strokeWidth="5"
                    />

                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#f59e0b"
                      strokeDasharray={`${porcentajesNormalizados[2]} ${100 - porcentajesNormalizados[2]}`}
                      strokeDashoffset={-(porcentajesNormalizados[0] + porcentajesNormalizados[1])}
                      strokeWidth="5"
                    />

                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#ef4444"
                      strokeDasharray={`${porcentajesNormalizados[3]} ${100 - porcentajesNormalizados[3]}`}
                      strokeDashoffset={-(porcentajesNormalizados[0] + porcentajesNormalizados[1] + porcentajesNormalizados[2])}
                      strokeWidth="5"
                    />

                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#8b5cf6"
                      strokeDasharray={`${porcentajesNormalizados[4]} ${100 - porcentajesNormalizados[4]}`}
                      strokeDashoffset={-(porcentajesNormalizados[0] + porcentajesNormalizados[1] + porcentajesNormalizados[2] + porcentajesNormalizados[3])}
                      strokeWidth="5"
                    />

                    <circle
                      cx="21"
                      cy="21"
                      r="15.915"
                      fill="transparent"
                      stroke="#ec4899"
                      strokeDasharray={`${porcentajesNormalizados[5]} ${100 - porcentajesNormalizados[5]}`}
                      strokeDashoffset={-(porcentajesNormalizados[0] + porcentajesNormalizados[1] + porcentajesNormalizados[2] + porcentajesNormalizados[3] + porcentajesNormalizados[4])}
                      strokeWidth="5"
                    />

                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-extrabold">
                      {formatoCompacto.format(dataGrafica.total || 0)}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                      Total
                    </span>
                  </div>
                </div>

                {/* Leyenda */}
                <div className="w-full space-y-3 text-sm">
                  {dataGrafica.meses.map((mes, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${colores[i % colores.length]}`}
                        ></div>
                        <span className="text-slate-600 dark:text-slate-400">
                          {mes}
                        </span>
                      </div>
                      <span className="font-bold">
                        {porcentajesNormalizados[i]?.toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm overflow-hidden">
            {/* HEADER */}
            <div className="px-6 md:px-8 py-5 border-b border-card-border dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg font-bold">Desempeño</h3>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="block md:hidden divide-y divide-slate-100 dark:divide-slate-800">
              {[...tablaMensual].reverse().map((item, i) => {
                const porcentaje = item.ventas > 0
                  ? (item.cobrado / item.ventas) * 100
                  : 0;

                return (
                  <div key={i} className="p-5 space-y-4">

                    {/* MES */}
                    <div>
                      <p className="text-sm font-bold capitalize">
                        {item.mes}
                      </p>
                    </div>

                    {/* VENTAS */}
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Ventas</span>
                      <span className="font-bold">
                        {formatoMoneda.format(item.ventas)}
                      </span>
                    </div>

                    {/* COBRADO */}
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Cobrado</span>
                      <span className="font-bold text-green-500">
                        {formatoMoneda.format(item.cobrado)}
                      </span>
                    </div>

                    {/* % RECUPERACIÓN */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">% Recuperación</span>
                        <span className="font-bold">
                          {porcentaje.toFixed(1)}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full transition-all"
                          style={{ width: `${Math.min(porcentaje, 100)}%` }}
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Locacion
                    </th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Monto facturado
                    </th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Monto pagado
                    </th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Eficiencia
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[...tablaMensual].reverse().map((item, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >

                      {/* Mes */}
                      <td className="px-8 py-4">
                        <p className="text-sm font-bold capitalize">
                          {item.mes}
                        </p>
                        <p className="text-xs text-slate-500">
                          Ventas vs Cobrado
                        </p>
                      </td>

                      {/* Ventas */}
                      <td className="px-8 py-4 text-sm font-bold">
                        {formatoMoneda.format(item.ventas)}
                      </td>

                      {/* Cobrado */}
                      <td className="px-8 py-4 text-sm font-bold text-green-500">
                        {formatoMoneda.format(item.cobrado)}
                      </td>

                      {/* % recuperación */}
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">

                          <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="bg-primary h-full transition-all"
                              style={{ width: `${Math.min(item.porcentaje, 100)}%` }}
                            />
                          </div>

                          <span className="text-xs font-bold">
                            {item.porcentaje.toFixed(1)}%
                          </span>

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
