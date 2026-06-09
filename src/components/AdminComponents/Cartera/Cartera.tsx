import { useQuery } from "@tanstack/react-query";
import { getdatacartera, getdatacarteraTable } from "../../../api/AdminApis/carteraApi";
import { useEffect, useState } from "react";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { useRoles } from "../../../hooks/useRoles";

interface Customer {
  id: string;
  companyname: string;
}

interface DataTable {
  id: number;
  entity: string;
  status: string;
  subtotal: number;
  companyname: string;
  amount: number;
  trandate: string;
  duedate: string;
  balance: number;
  tranid: string;
  customer: Customer;
}

interface CarteraProps {
  onSuccess: (facturaId: number) => void;
}

export default function Cartera({ onSuccess }: CarteraProps) {
  const { hasRole } = useRoles();
  const [search, setSearch] = useState("");
  const [estado, setEstado] = useState<"Todos" | "Pagado" | "Vigente" | "Critico">("Todos");
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    setPage(1);
    setSearch("");
  }, [estado]);

  const { data } = useQuery({
    queryKey: ["dashboarCartera"],
    queryFn: async () => {
      const res = await getdatacartera();
      return res;
    },
  });

  const { data: dataTable } = useQuery({
    queryKey: ["dashboarAdminClientes", page, pageSize, estado, search],
    queryFn: () => getdatacarteraTable(page, pageSize, estado, search),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const currentPage = dataTable?.pagination?.page || 1;
  const totalPages = dataTable?.pagination?.totalPages || 0;

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

  const getDiasAtraso = (fecha?: string) => {
    if (!fecha) return 0;

    const hoy = new Date().getTime();
    const vencimiento = new Date(fecha).getTime();

    return Math.max(0, Math.floor((hoy - vencimiento) / (1000 * 60 * 60 * 24)));
  };

  const getPaymentStatus = (balance: number, duedate?: string) => {
    const dias = getDiasAtraso(duedate);

    if (balance === 0) {
      return {
        label: "Pagado",
        className: "bg-green-50 text-green-700 border-green-200",
      };
    }

    if (dias >= 0 && dias <= 30) {
      return {
        label: "Vigente",
        className: "bg-orange-50 text-orange-600 border-orange-200",
      };
    }

    if (dias > 30) {
      return {
        label: "Crítico",
        className: "bg-red-50 text-red-600 border-red-200",
      };
    }

    return {
      label: "Vigente",
      className: "bg-orange-50 text-orange-600 border-orange-200",
    };
  };

  const handleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id) // quitar
        : [...prev, id] // agregar
    );
  };

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Page Title and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Gestión de Cartera
              </h2>
              <p className="text-[#4c669a] text-sm">
                Monitoreo y seguimiento de saldos pendientes por cliente
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {hasRole(1, 2) && (
                <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[20px]">
                    campaign
                  </span>
                  <span>Enviar recordatorio masivo</span>
                </button>
              )}
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#161b2a] p-5 sm:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm min-w-0">
              <div className="flex justify-between items-start gap-3">
                <p className="text-[#4c669a] dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider break-words">
                  Cartera Total
                </p>

                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  account_balance
                </span>
              </div>

              <p className="text-red-500 dark:text-red-400 text-xl sm:text-2xl font-bold tracking-tight mt-4 break-words">
                {formatoMoneda.format(data?.totalPendiente || 0)}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-[#161b2a] p-5 sm:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm min-w-0">
              <div className="flex justify-between items-start gap-3">
                <p className="text-[#4c669a] dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider break-words">
                  Monto Vencido
                </p>

                <span className="material-symbols-outlined text-orange-500 text-xl shrink-0">
                  warning
                </span>
              </div>

              <p className="text-red-500 dark:text-red-400 text-xl sm:text-2xl font-bold tracking-tight mt-4 break-words">
                {formatoMoneda.format(data?.totalVencido || 0)}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-[#161b2a] p-5 sm:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm min-w-0">
              <div className="flex justify-between items-start gap-3">
                <p className="text-[#4c669a] dark:text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider break-words">
                  Casos Críticos
                </p>

                <span className="material-symbols-outlined text-red-600 text-xl shrink-0">
                  error
                </span>
              </div>

              <p className="text-red-500 dark:text-red-400 text-xl sm:text-2xl font-bold tracking-tight mt-4 break-words">
                {data?.countVencidas || 0}
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="relative bg-white dark:bg-[#161b2a] border border-[#cfd7e7] dark:border-gray-800 rounded-xl p-2 mb-6 grid grid-cols-2 md:grid-cols-4 gap-2 shadow-sm">
            <div
              className={"transition-all duration-300 relative"}
            >
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
                  search
                </span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 bg-[#f0f2f7] dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-[#4c669a] dark:text-white"
                  placeholder="Buscar..."
                  type="text"
                />
              </div>
            </div>

            <button
              onClick={() => setEstado("Todos")}
              className={`h-10 flex items-center justify-center gap-2 rounded-lg text-sm font-bold border transition-all
              ${estado === "Todos"
                  ? "bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white border-primary/30"
                  : "bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white border-transparent hover:border-primary/30"
                }`}
            >
              <span>Todos</span>
            </button>

            <button
              onClick={() => setEstado("Vigente")}
              className={`h-10 flex items-center justify-center gap-2 rounded-lg text-sm font-bold border transition-all
              ${estado === "Vigente"
                  ? "bg-[#fff9eb] text-orange-600 border-orange-300"
                  : "bg-[#fff9eb] text-orange-600 border-orange-200 hover:border-orange-300"
                }`}
            >
              <span>Vigente</span>
            </button>

            <button
              onClick={() => setEstado("Critico")}
              className={`h-10 flex items-center justify-center gap-2 rounded-lg text-sm font-bold border transition-all
              ${estado === "Critico"
                  ? "bg-red-50 text-red-600 border-red-300"
                  : "bg-red-50 text-red-600 border-red-100 hover:border-red-300"
                }`}
            >
              <span>Crítico</span>
            </button>
          </div>

          {/* Clients Table*/}
          <div className="bg-white dark:bg-[#161b2a] border border-[#cfd7e7] dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mb-10">
            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {dataTable?.data?.map((m: DataTable) => {
                return (
                  <div
                    key={m.id}
                    className={`p-4 rounded-xl mb-4 shadow-sm transition ${selectedIds.includes(m.id)
                      ? "bg-primary/10"
                      : "bg-white dark:bg-[#161b2a]"
                      }`}
                  >
                    {/* HEADER */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start gap-3">
                        {/* checkbox */}
                        {hasRole(1, 2) && (
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(m.id)}
                            onChange={() => handleSelect(m.id)}
                            className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                          />
                        )}

                        {/* avatar + name */}
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col leading-tight">
                            <span className="font-semibold text-sm text-[#0d121b] dark:text-white">
                              {m.customer?.companyname}
                            </span>
                            <span className="block text-xs text-[#6b7a99] break-all leading-snug max-w-full">
                              {m.tranid}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* acciones */}
                      <div className="flex gap-1">
                        {hasRole(1, 2) && (
                          <button className="p-2 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[18px]">
                              send
                            </span>
                          </button>
                        )}

                        <button
                          onClick={() => onSuccess(m.id)}
                          className="p-2 rounded-md bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            visibility
                          </span>
                        </button>
                      </div>

                    </div>

                    {/* DATA */}
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#4c669a]">Monto Total</span>
                        <span className="font-semibold">
                          {formatoMoneda.format(m.amount || m.subtotal || 0)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-[#4c669a]">Días de Atraso</span>
                        <span className="text-red-600 font-medium">
                          {Math.max(
                            0,
                            Math.floor(
                              (new Date().getTime() - new Date(m.duedate).getTime()) /
                              (1000 * 60 * 60 * 24)
                            )
                          )} días
                        </span>
                      </div>

                      <div className="flex justify-end pt-1">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getPaymentStatus(m.balance, m.duedate).className
                            }`}
                        >
                          {getPaymentStatus(m.balance, m.duedate).label}
                        </span>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#cfd7e7] dark:border-gray-800 bg-[#f8f9fc] dark:bg-gray-800/50">

                    <th className="w-10 px-2 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-center">
                      #
                    </th>

                    <th className="px-3 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>

                    <th className="px-3 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto Total
                    </th>

                    <th className="px-3 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-center">
                      Días
                    </th>

                    <th className="px-3 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>

                    <th className="px-3 py-3 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  {dataTable?.data?.map((m: DataTable) => {

                    const initials = m.customer?.companyname
                      ?.split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase();

                    return (
                      <tr
                        key={m.id}
                        className={`transition-colors ${selectedIds.includes(m.id)
                          ? "bg-primary/10"
                          : "hover:bg-primary/5"
                          }`}
                      >

                        {/* checkbox */}
                        <td className="px-2 py-3 text-center">
                          {hasRole(1, 2) && (
                            <input
                              type="checkbox"
                              checked={selectedIds.includes(m.id)}
                              onChange={() => handleSelect(m.id)}
                              className="w-4 h-4 accent-primary cursor-pointer"
                            />
                          )}
                        </td>

                        {/* Cliente */}
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-3">

                            <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                              {initials}
                            </div>

                            <div className="flex flex-col leading-tight">
                              <span className="font-semibold text-sm text-[#0d121b] dark:text-white">
                                {m.customer?.companyname}
                              </span>
                              <span className="text-[11px] text-[#6b7a99]">
                                ID: {m.tranid}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Monto */}
                        <td className="px-3 py-3">
                          <span className="text-sm font-semibold">
                            {formatoMoneda.format(m.amount || m.subtotal || 0)}
                          </span>
                        </td>

                        {/* Días */}
                        <td className="px-3 py-3 text-center">
                          <span className="text-sm font-medium text-red-600">
                            {Math.max(
                              0,
                              Math.floor(
                                (new Date().getTime() - new Date(m.duedate).getTime()) /
                                (1000 * 60 * 60 * 24)
                              )
                            )} días
                          </span>
                        </td>

                        {/* Estado */}
                        <td className="px-3 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${getPaymentStatus(m.balance, m.duedate).className
                              }`}
                          >
                            {getPaymentStatus(m.balance, m.duedate).label}
                          </span>
                        </td>

                        {/* Acciones */}
                        <td className="px-3 py-3 text-right">
                          <div className="flex justify-end gap-1">

                            {hasRole(1, 2) && (
                              <button className="p-2 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                                <span className="material-symbols-outlined text-[18px]">
                                  send
                                </span>
                              </button>
                            )}

                            <button
                              onClick={() => onSuccess(m.id)}
                              className="p-2 rounded-md bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                visibility
                              </span>
                            </button>

                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/*  */}
            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between overflow-hidden">
              <p className="text-sm text-gray-400 break-words">
                Mostrando {dataTable?.pagination?.pageSize} de {dataTable?.pagination?.total} cliente(s)
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
