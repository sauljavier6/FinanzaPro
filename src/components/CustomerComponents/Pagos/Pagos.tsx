import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPayments } from "../../../api/customerApis/PagosApi";
import { formatDate } from "../../../utils/formatDate";
import { formatoMoneda } from "../../../utils/formatMoneda";
import formatRelativeTime from "../../../utils/daytime";
import { useNavigate } from "react-router-dom";

interface CustomerPayments {
  id: number
  companyname: string
}

interface CustomerPayments {
  applications: []
  customer: CustomerPayments
  id: number
  paymentmethod: string
  total: number
  trandate: string
  tranid: string
  transactionnumber: string
}


export default function Pagos() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data } = useQuery({
    queryKey: ["pagosbycliente", page, pageSize, search],
    queryFn: () => getPayments(page, pageSize, search),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('data', data)

  const tabla = data?.payments;
  const resumen = data?.resumen;


  const currentPage = data?.page || 1;
  const totalPages = data?.totalPages || 0;

  const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:justify-between sm:items-end">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Historial de Pagos
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Consulta y descarga los comprobantes de tus transacciones
                realizadas.
              </p>
            </div>
          </div>

          {/* Totales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-10">
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Total Pagado este Año
              </p>
              <p className="text-2xl sm:text-3xl font-black text-primary">
                {formatoMoneda.format(resumen?.totalPagadoAnio || 0)}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-green-600 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>Ejecutado a tiempo</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Último Pago
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                  {formatoMoneda.format(resumen?.ultimoPago?.total || 0)}
                </p>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-blue-500 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span>{formatRelativeTime(resumen?.ultimoPago?.trandate)}</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Método de Pago más usado
              </p>
              <div className="flex items-center gap-3">
                <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                  {resumen?.metodoPagoMasUsado?.metodo}
                </p>
                <span className="material-symbols-outlined text-gray-400">
                  credit_card
                </span>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-sm">
                  history
                </span>
                <span>{resumen?.metodoPagoMasUsado?.porcentaje}% de tus transacciones</span>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:flex-1">
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg pointer-events-none">
                    search
                  </span>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Buscar por factura..."
                    className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm w-full focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {tabla?.map((row: CustomerPayments) => (
                <div key={row.id} className="p-4 flex flex-col gap-2">

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">
                      {row.tranid}
                    </span>

                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                      <span className="material-symbols-outlined text-[20px]">
                        receipt_long
                      </span>
                    </button>
                  </div>

                  <div className="text-xs text-gray-500">
                    Fecha: {formatDate(row.trandate)}
                  </div>

                  <div className="text-xs text-gray-500">
                    Método: {row.paymentmethod}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-black text-base">
                      {row.total}
                    </span>

                    <button className="text-primary font-bold text-sm">
                      Comprobante
                    </button>
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
                      Método
                    </th>

                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Monto
                    </th>

                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Estado
                    </th>

                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  {tabla?.map((row: CustomerPayments) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(row.trandate)}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {row.tranid}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {row.paymentmethod}
                      </td>

                      <td className="px-6 py-4 text-sm font-black text-right">
                        {row.total}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                          Pago
                        </span>
                      </td>

                      <td className="px-3 py-3 text-right">
                        <div className="flex justify-end gap-1">
                          <button
                            onClick={() => navigate(`/clientes/pagos/${row.id}`)}
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
              <p className="text-xs text-[#4c669a]">
                Mostrando{" "}
                <span className="font-bold text-[#0d121b] dark:text-white">
                  {pageSize}
                </span>{" "}
                de{" "}
                <span className="font-bold text-[#0d121b] dark:text-white">
                  {data?.total}
                </span>{" "}
                facturas
              </p>

              {/* BOTONES */}
              <div className="flex gap-2 items-center overflow-x-auto">
                {/* Anterior */}
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`size-8 flex items-center justify-center rounded border ${currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e7ebf3]"
                    }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_left
                  </span>
                </button>

                {/* Números */}
                <div className="hidden sm:flex gap-2">
                  {getPages().map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`size-8 flex items-center justify-center rounded text-xs font-bold transition-colors
                        ${p === currentPage
                          ? "bg-primary text-white"
                          : "bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#4c669a] hover:bg-[#e7ebf3]"
                        }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                {/* Mobile */}
                <div className="flex sm:hidden gap-1">
                  <span className="size-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs px-2">
                    {currentPage}
                  </span>
                </div>

                {/* Siguiente */}
                <button
                  onClick={() =>
                    setPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`size-8 flex items-center justify-center rounded border ${currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e7ebf3]"
                    }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_right
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-6 sm:mt-10 px-4 py-4 sm:px-8 sm:py-6 lg:px-20 lg:py-10 rounded-xl border border-dashed border-primary/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 bg-blue-50 dark:bg-blue-950">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 size-10 sm:size-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  info
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100">
                  ¿Falta algún pago en tu historial?
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm leading-snug">
                  Los pagos por transferencia SPEI u OXXO pueden tardar hasta 48
                  horas en verse reflejados.
                </p>
              </div>
            </div>

            <button
              className="w-full md:w-auto text-blue-700 dark:text-blue-300 px-4 sm:px-6 py-2 rounded-lg font-bold text-sm border border-blue-400 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              Reportar un Pago
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
