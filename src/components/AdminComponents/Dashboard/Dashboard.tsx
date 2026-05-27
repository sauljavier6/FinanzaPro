import { useQuery } from "@tanstack/react-query";
import { getdata } from "../../../api/AdminApis/homeApi";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReporteG } from "../../../api/AdminApis/reportesApi";
import { formatoCompacto } from "../../../utils/formatoCompacto";

export interface Invoice {
  entity: string;
  currency: string;
  trandate: string;
  duedate: string;
  id: number;
  balance: number;
  status: string;
  amount: number;
  tranid: string;
}

export default function Dashboar() {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["dashboarAdmin"],
    queryFn: async () => {
      const res = await getdata();
      return res;
    },
  });

  console.log(data)

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

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* ================= BIENVENIDA ================= */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold mb-1">Bienvenido 👋</h1>
            <p className="text-[#4c669a] text-sm">
              Aquí puedes consultar los estado de cuenta, facturas y pagos.
            </p>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Card */}
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  account_balance_wallet
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  {data?.countPendientes} Facturas
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Total por cobrar
              </p>
              <p className="text-md lg:2xl font-extrabold">
                {formatoMoneda.format(data?.totalPendiente || 0)}
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  event_busy
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-red-900/20">
                  {data?.countVencidas} Facturas
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Cartera Vencida
              </p>
              <p className="text-md lg:2xl font-extrabold text-red-600">
                {formatoMoneda.format(data?.totalVencido || 0)}
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  check_circle
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  {data?.porcentajeRecuperado}%
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Recuperado (Mes)
              </p>
              <p className="text-md lg:2xl font-extrabold">
                {formatoMoneda.format(data?.recuperadoMes || 0)}
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  schedule
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  Actual
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Promedio de pago
              </p>
              <p className="text-md lg:2xl font-extrabold">
                {data?.promedioPago} días
              </p>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 mb-8">
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

          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#e7ebf3] dark:border-gray-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold">
                Pagos Recientes
              </h3>   
            </div>

            {/* ===================== */}
            {/* MÓVIL – CARDS */}
            {/* ===================== */}
            <div className="sm:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {data?.data?.map((p: Invoice) => (
                <div key={p.id} className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">

                      <p className="text-sm font-bold">{p.entity}</p>
                    </div>
                    <span className="font-bold">{formatoMoneda.format(p.amount || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#4c669a]">Factura</span>
                    <span className="font-bold">{p.tranid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#4c669a]">Fecha</span>
                    <span>{p.trandate}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${p.status}`}
                    >
                      {p.status}
                    </span>
                    <button
                      onClick={() => navigate(`/admin/facturas/${p.id}`)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-100 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ===================== */}
            {/* DESKTOP – TABLA */}
            {/* ===================== */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  {data?.data?.map((item: any) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                          {item.customer?.companyname?.substring(0, 2).toUpperCase()}
                        </div>
                        <p className="text-sm font-bold">
                          {item.customer?.companyname}
                        </p>
                      </td>

                      <td
                        className="px-6 py-4 text-sm font-medium cursor-pointer text-primary hover:underline"
                        onClick={() => navigate(`/admin/facturas/${item.id}`)}
                      >
                        {item.tranid}
                      </td>

                      <td className="px-6 py-4 text-sm text-[#4c669a]">
                        {new Date(item.duedate).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {formatoMoneda.format(item.amount || 0)}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold
                          ${item.balance === 0
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            }`}
                        >
                          {item.balance === 0 ? "Pagada" : "Pendiente"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => navigate(`/admin/facturas/${item.id}`)}
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-100 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
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
