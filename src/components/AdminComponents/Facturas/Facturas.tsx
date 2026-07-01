import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getInvoices, getInvoicesInfo } from "../../../api/AdminApis/facturaApi";
import { getInitials } from "../../../utils/getInitials";
import { formatDate } from "../../../utils/formatDate";
import { formatoMoneda } from "../../../utils/formatMoneda";


interface Customer {
  id: string;
  companyname: string;
  fullname?: string;
}

interface CustomerInvoice {
  id: number;
  tranid: string;
  entity: string;
  trandate: string;
  duedate: string;
  amount?: number;
  balance?: number;
  amountpaid?: number;
  status?: string;
  statusColor?: string;
  currency?: string;
  subtotal?: number;
  tax?: number;
  location?: string;
  tipocompra?: string;
  estatuspresupuesto?: string;
  lastmodifieddate?: string;
  isinactive?: boolean;
  customer?: Customer;
}

interface CarteraProps {
  onSuccess: (facturaId: number) => void;
}

export default function Facturas({ onSuccess }: CarteraProps) {
  const [search, setSearch] = useState("");
  const [estado, setEstado] = useState<"Todos" | "Pagado" | "Pendiente" | "Vencida">("Todos");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setPage(1);
  }, [estado, search]);


  const { data: info } = useQuery({
    queryKey: ["InvoiocesadminInfo"],
    queryFn: () => getInvoicesInfo(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const infodata = info?.data;

  const { data } = useQuery({
    queryKey: ["Invoiocesadmin", page, pageSize, search, estado],
    queryFn: () => getInvoices(page, pageSize, search, estado),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('info', data)

  const totalPages = data?.totalPages || 1;
  const currentPage = data?.page || 1;

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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Módulo de Facturas
              </h2>
              <p className="text-[#4c669a] text-sm">
                Administre y supervise todas las facturas emitidas por el
                sistema.
              </p>
            </div>
          </div>

          {/* */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Total Facturado
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold break-words">
                  {formatoMoneda.format(infodata?.totalFacturadoMes || 0)}
                </p>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  Este Mes
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Por Cobrar
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold text-orange-600 break-words">
                  {formatoMoneda.format(infodata?.totalPendiente || 0)}
                </p>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  {infodata?.totalFacturasPendientes} Facturas
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Pagadas
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold text-green-600 break-words">
                  {formatoMoneda.format(infodata?.totalPagadoMes || 0)}
                </p>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  +12.5%
                </span>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-white dark:bg-[#161b2a] rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Nombre del Cliente
                </label>

                <div className="bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-0 focus:ring-0"
                    placeholder="Ej. Tech Cloud"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Estado de Pago
                </label>

                <div className="bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4 transition-all focus-within:ring-2 focus-within:ring-primary/20 relative">
                  <select
                    value={estado}
                    onChange={(e) =>
                      setEstado(e.target.value as typeof estado)
                    }
                    className="w-full bg-transparent py-2 text-sm outline-none border-0 focus:ring-0 appearance-none cursor-pointer"
                  >
                    <option value="Todos">Todos los estados</option>
                    <option value="Pagada">Pagada</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Vencida">Vencida</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/**/}
          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/**/}
            <div className="lg:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {data?.invoices?.map((row: CustomerInvoice) => {

                const status = (() => {
                  if (Number(row.balance) === 0) return "Pagada";
                  if (new Date(row.duedate) < new Date()) return "Vencida";
                  return "Pendiente";
                })();

                const statusColor = {
                  Pagada: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                  Pendiente: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                  Vencida: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                };

                const initials = (row.customer?.companyname || "CL")
                  .substring(0, 2)
                  .toUpperCase();

                const color = "bg-blue-100 text-primary";

                return (
                  <div key={row.id} className="p-4 space-y-3">

                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold text-primary max-w-full break-all leading-snug" >
                          #{row.tranid}
                        </p>
                        <p className="text-xs text-[#4c669a]">
                          Emisión: {formatDate(row.trandate)}
                        </p>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${statusColor[status]}`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded flex items-center justify-center font-bold text-[10px] ${color}`}
                      >
                        {initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold">
                          {row.customer?.companyname || "Cliente"}
                        </p>
                        <p className="text-xs text-[#4c669a]">
                          Vence: {formatDate(row.duedate)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-[#e7ebf3] dark:border-gray-800">
                      <p className="text-sm font-bold">
                        {formatoMoneda.format(row.amount || 0)}
                      </p>
                      <button onClick={() => onSuccess(row.id)} className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Nro. Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto Total
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  {data?.invoices?.map((row: CustomerInvoice) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px]">
                            {getInitials(row.customer?.companyname) || "CL"}
                          </div>
                          <p className="text-sm font-bold">
                            {row.customer?.companyname || "Cliente"}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a className="text-sm font-bold text-primary hover:underline" onClick={() => onSuccess(row.id)}>
                          #{row.tranid}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#4c669a]">
                        {formatDate(row.trandate)}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#4c669a]">
                        {formatDate(row.duedate)}
                      </td>

                      <td className="px-6 py-4 text-sm font-bold">
                        {formatoMoneda.format(row.amount || 0)}
                      </td>

                      <td className="px-6 py-4">
                        <span className={`${row.statusColor} px-2.5 py-1 rounded-full text-[10px] font-bold uppercase`}>
                          {row.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button onClick={() => onSuccess(row.id)} className="text-gray-400 hover:text-primary transition-colors">
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

            {/**/}
            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between overflow-hidden">
              <p className="text-sm text-gray-400 break-words">
                Mostrando {data?.invoices?.length} de {data?.totalRecords} Factura(s)
              </p>

              <div className="flex flex-wrap gap-1.5 justify-end max-w-full overflow-hidden">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="h-8 min-w-8 px-2 flex items-center justify-center rounded border shrink-0 text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>

                {getPages().map((p: number | string, i) => (
                  <button
                    key={i}
                    disabled={p === "..."}
                    onClick={() => typeof p === "number" && setPage(p)}
                    className={`h-8 min-w-8 px-2 flex items-center justify-center rounded border text-xs font-bold shrink-0 ${p === page
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
                  className="h-8 min-w-8 px-2 flex items-center justify-center rounded border shrink-0 text-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-100"
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
