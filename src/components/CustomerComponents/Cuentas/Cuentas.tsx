import { useQuery } from "@tanstack/react-query";
import { getCuentas } from "../../../api/customerApis/cuentasApi";
import { useEffect, useState } from "react";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { formatDate } from "../../../utils/formatDate";
import { useAuth } from "../../../context/AuthContext";
import { getMesActual } from "../../../utils/mesActual";

type CuentasProps = {
  onAbrirFactura: (id: number) => void;
  onAbrirPago: (id: number) => void;
};

export default function Cuentas({ onAbrirFactura, onAbrirPago }: CuentasProps) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { user } = useAuth();

  const fechasIniciales = getMesActual();
  const [fechaInicio, setFechaInicio] = useState(fechasIniciales.fechaInicio);
  const [fechaFin, setFechaFin] = useState(fechasIniciales.fechaFin);


  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, fechaInicio, fechaFin]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const { data } = useQuery({
    queryKey: ["estadoCuentaCliente", page, pageSize, fechaInicio, fechaFin, debouncedSearch],
    queryFn: () => getCuentas(page, pageSize, fechaInicio, fechaFin, debouncedSearch),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('data', data)

  const totalPages = data?.totalPages ?? 1;
  const movimientos = data?.movimientos ?? [];
  const resumen = data?.resumen;

  const getPages = () => {
    const pages = [];
    const delta = 2;

    const left = Math.max(2, page - delta);
    const right = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const handlePrintReporte = async () => {
    try {
      if (!user?.netsuiteId) {
        console.error("Usuario o netsuiteId no disponible");
        return;
      }

      const query = new URLSearchParams({
        customerId: user.netsuiteId.toString(),
        fechaInicio,
        fechaFin
      }).toString();

      window.open(
        `${import.meta.env.VITE_API_URL}/customer/cuentas/reporte?${query}`
      );
    } catch (error) {
      console.error("Error al imprimir el ticket:", error);
    }
  };

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Estado de Cuenta
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Movimientos, facturas y pagos aplicados.
              </p>
            </div>

            <button onClick={handlePrintReporte} className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Descargar PDF
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-10">

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Total pendiente
              </p>

              <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white break-words">
                {formatoMoneda.format(resumen?.balance || 0)}
              </p>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Total vencido
              </p>

              <p className="text-2xl sm:text-3xl font-black text-green-600 break-words">
                {formatoMoneda.format(resumen?.duebalance || 0)}
              </p>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Limite de Crédito
              </p>

              <p className="text-2xl sm:text-3xl font-black text-primary break-words">
                {formatoMoneda.format(resumen?.creditlimit || 0)}
              </p>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Días de Crédito
              </p>

              <p className="text-2xl sm:text-3xl font-black text-yellow-500 break-words">
                {String(resumen?.terms || "-").replace(/d.as/i, "días")}
              </p>
            </div>

          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

              <h3 className="text-base sm:text-lg font-bold">
                Últimos movimientos
              </h3>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                {/* Fecha inicio */}
                <input
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  className="px-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
                />

                {/* Fecha fin */}
                <input
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  className="px-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
                />

                {/* Buscador */}
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    search
                  </span>

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm w-full border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary"
                    placeholder="Buscar referencia..."
                    type="text"
                  />
                </div>

              </div>
            </div>

            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {movimientos.map((m: any) => (
                <div key={m.id} className="p-4 space-y-2">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p
                        className="font-bold text-sm truncate block min-w-0 max-w-[150px] sm:max-w-none"
                        title={m.referencia}
                      >
                        {m.referencia}
                      </p>
                      <p className="text-xs text-gray-500">{m.concepto}</p>
                    </div>

                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${m.tipo === "PAGO"
                        ? "bg-green-100 text-green-700"
                        : m.estado === "Vencida"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                        }`}
                    >
                      {m.tipo === "PAGO" ? "Pago" : m.estado}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div>Fecha: {formatDate(m.fecha)}</div>
                    <div>Vence: {formatDate(m.vencimiento)}</div>
                    <div>Cargo: {m.cargo > 0 ? formatoMoneda.format(m.cargo || 0) : "-"}</div>
                    <div>Abono: {m.abono > 0 ? formatoMoneda.format(m.abono || 0) : "-"}</div>
                  </div>

                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-xs text-gray-500">Saldo</span>
                    <span className="font-black">
                      {formatoMoneda.format(m.saldoAcumulado || 0)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-gray-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Referencia
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Concepto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Cargo
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Abono
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Saldo
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  {movimientos.map((m: any) => (
                    <tr
                      key={m.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(m.fecha)}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {m.referencia}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {m.concepto}
                      </td>

                      <td className="px-6 py-4 text-sm font-black text-right">
                        {m.cargo > 0 ? formatoMoneda.format(m.cargo || 0) : "-"}
                      </td>

                      <td className="px-6 py-4 text-sm font-black text-right text-green-600">
                        {m.abono > 0 ? formatoMoneda.format(m.abono || 0) : "-"}
                      </td>

                      <td className="px-6 py-4 text-sm font-black text-right">
                        {formatoMoneda.format(m.saldoAcumulado || 0)}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${m.tipo === "PAGO"
                            ? "bg-green-100 text-green-700"
                            : m.estado === "Vencida"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                            }`}
                        >
                          {m.tipo === "PAGO" ? "Pago" : m.estado}
                        </span>
                      </td>
                      {/* Acciones */}
                      <td className="px-3 py-3 text-right">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() => {
                              if (m.tipo === "PAGO") {
                                onAbrirPago(m.idinterno);
                              } else {
                                onAbrirFactura(m.idinterno);
                              }
                            }}
                            className="p-2 rounded-md bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400">
                Mostrando {movimientos.length} de {data?.total} Movimiento(s)
              </p>

              <div className="flex gap-2 justify-end">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="size-8 flex items-center justify-center rounded border text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>

                {getPages().map((p, i) => (
                  <button
                    key={i}
                    disabled={p === "..."}
                    onClick={() => typeof p === "number" && setPage(p)}
                    className={`size-8 flex items-center justify-center rounded border text-xs font-bold ${p === page
                      ? "border-primary bg-primary text-white"
                      : p === "..."
                        ? "border-transparent text-gray-400 cursor-default"
                        : "border-[#cfd7e7] text-gray-500 hover:bg-gray-100"
                      }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="size-8 flex items-center justify-center rounded border text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}