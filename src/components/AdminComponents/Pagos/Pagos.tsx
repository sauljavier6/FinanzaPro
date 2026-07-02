import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPayments, getPaymentsInfo } from "../../../api/AdminApis/pagosApi";
import { formatDate } from "../../../utils/formatDate";
import { getInitials } from "../../../utils/getInitials";
import { formatoMoneda } from "../../../utils/formatMoneda";

interface CustomerInvoicePayment {
  id: number;
  tranid: string;
  transactionnumber: string;
  trandate: string;
  total: number;
  paymentmethod?: string;
  customer?: Customer;
  applications?: PaymentApplication
}

interface Customer {
  id: number;
  companyname: string;
}

interface invoice {
  id: number;
  tranid: string;
}

interface PaymentApplication {
  amount: number;
  invoice?: invoice
}

interface PagosProps {
  onSuccess: (facturaId: number) => void;
}

export default function Pagos({ onSuccess }: PagosProps) {
  const [search, setSearch] = useState("");
  const [estado, setEstado] = useState<"Todos" | "Pagado" | "Vigente" | "Crítico">("Todos");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data: info } = useQuery({
    queryKey: ["dashboarPagosInfo"],
    queryFn: () => getPaymentsInfo(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const { data } = useQuery({
    queryKey: ["dashboarPagos", page, pageSize, search],
    queryFn: () => getPayments(page, pageSize, search),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const payments = data?.payments;

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
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Módulo de Pagos y Conciliación
              </h2>
              <p className="text-sm text-[#4c669a] max-w-xl">
                Historial centralizado y gestión de ingresos recibidos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Total Facturas del mes
                </span>
                <span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg material-symbols-outlined">
                  pending_actions
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl md:text-2xl font-extrabold">{formatoMoneda.format(info?.data?.totalFacturas || 0)}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Total Recaudado (Mes)
                </span>
                <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg material-symbols-outlined">
                  trending_up
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl md:text-2xl font-extrabold">{formatoMoneda.format(info?.data?.totalRecaudadoMes || 0)}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Tasa de Éxito
                </span>
                <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg material-symbols-outlined">
                  verified
                </span>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-border-color dark:border-gray-800 shadow-sm mb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* 🔎 BUSCADOR */}
              <div className="relative w-full lg:max-w-sm">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <span className="material-symbols-outlined text-lg">
                    search
                  </span>
                </span>

                <input
                  type="text"
                  placeholder="Buscar cliente..."
                  value={search}
                  onChange={(e) => {
                    setEstado("Todos");
                    setSearch(e.target.value);
                  }}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 📊 FILTROS */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="hidden sm:inline text-sm font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  Estado:
                </span>

                <div className="flex flex-wrap bg-slate-100 dark:bg-gray-800 p-1 rounded-xl">
                  {["Todos", "Pagado", "Vigente", "Critico"].map((e) => (
                    <button
                      key={e}
                      className={`px-4 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap
                      ${estado === e ? "bg-white dark:bg-gray-700 shadow-sm" : "text-slate-500 hover:text-primary transition-colors"}`}
                      onClick={() => setEstado(e as any)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* MOBILE VIEW */}
            <div className="block md:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {payments?.map((pago: CustomerInvoicePayment) => (
                <div key={pago.id} className="p-4 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="text-sm font-bold">{formatDate(pago.trandate)}</p>
                      <p className="text-xs text-[#4c669a]">14:25 PM</p>
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full whitespace-nowrap">
                      {pago.tranid}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">
                      {getInitials(pago.customer?.companyname)}
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-bold overflow-hidden text-ellipsis line-clamp-2 leading-snug break-words"
                      >
                        {pago.customer?.companyname}
                      </p>
                      <div className="text-xs text-[#4c669a]">
                        {Array.isArray(pago.applications) && pago.applications.length > 0 ? (
                          pago.applications.map((app: any, i: number) => (
                            <div key={i}>
                              #{app.invoice?.tranid || "Sin factura"}
                            </div>
                          ))
                        ) : (
                          <span className="text-gray-400">Sin aplicar</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#4c669a]">{pago.paymentmethod}</span>
                    <span className="font-bold">{formatoMoneda.format(pago.total || 0)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#4c669a]"></span>
                    <span className="font-bold"> <button
                      onClick={() => onSuccess(pago.id)}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </button> </span>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 w-[50px]"></th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Tranid
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Método
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  {payments?.map((pago: CustomerInvoicePayment) => (
                    <tr
                      key={pago.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px]">
                          {getInitials(pago.customer?.companyname)}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {pago.tranid || ""}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {pago.customer?.companyname}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {Array.isArray(pago.applications) && pago.applications.length > 0 ? (
                          pago.applications.map((app: any, i: number) => (
                            <div key={i}>
                              #{app.invoice?.tranid || "Sin factura"}
                            </div>
                          ))
                        ) : (
                          <span className="text-gray-400">Sin aplicar</span>
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {pago.paymentmethod}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {formatDate(pago.trandate || "")}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {formatoMoneda.format(pago.total || 0)}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        <button
                          onClick={() => onSuccess(pago.id)}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FOOTER */}
            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 border-t border-[#e7ebf3] dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between overflow-hidden">
              <p className="text-sm text-gray-400 break-words">
                Mostrando {data?.payments?.length} de {data?.totalRecords} Pago(s)
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-end max-w-full overflow-hidden">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="h-8 min-w-8 px-2 flex items-center justify-center rounded border shrink-0 text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>

                {getPages().map((p: number | string, i: number) => (
                  <button
                    key={i}
                    disabled={p === "..."}
                    onClick={() => typeof p === "number" && setPage(p)}
                    className={`h-8 min-w-8 px-2 flex items-center justify-center rounded border text-xs font-bold shrink-0 ${p === page
                      ? "border-primary bg-primary text-white"
                      : p === "..."
                        ? "border-transparent text-gray-400 cursor-default"
                        : "border-[#cfd7e7] text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="h-8 min-w-8 px-2 flex items-center justify-center rounded border shrink-0 text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
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
