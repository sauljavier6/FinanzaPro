import { useQuery } from "@tanstack/react-query";
import { getdataCustomers, getdataCustomersInfo } from "../../../api/AdminApis/clientesApi";
import { useState } from "react";

export interface Client {
  id: number;
  entityid: string;
  companyname: string;
  fullname: string;
  email: string | null;
  phone: string | null;
  rfc: string | null;
  terms: string | null;
  estadoRiesgo: string;
  estadoRiesgoColor: string;
  receivablesaccount: string | null;
  saldoPendiente: number;
  facturasPendiente: number;
  currency: string;
  balance: number | null;
  clasificacionCliente: string | null;
  isinactive: boolean;
  datecreated: string;
  lastmodifieddate: string;
}


interface ClientProps {
  onSelectCliente: (id: number) => void
}

export default function Clientes({ onSelectCliente }: ClientProps) {
  const [search, setSearch] = useState("");
  const [estado, setEstado] = useState<"Todos" | "Pagado" | "Vigente" | "Crítico">("Todos");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data } = useQuery({
    queryKey: ["dashboarAdminClientes", page, pageSize, estado, search],
    queryFn: () => getdataCustomers(page, pageSize, estado, search),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const { data: info } = useQuery({
    queryKey: ["dashboarAdminClientesInfo"],
    queryFn: () => getdataCustomersInfo(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const dataTabla = data?.clients

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
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Gestión de Clientes
              </h2>
              <p className="text-sm text-[#64748b] mt-1 break-words">
                Administra la cartera activa y gestiona recordatorios de cobro.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl">
                  <span className="material-symbols-outlined block">group</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full dark:bg-green-900/20">
                  +4 este mes
                </span>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Total Clientes
              </p>
              <p className="text-md lg:2xl font-extrabold">{info?.data?.totalClientes}</p>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    warning
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Clientes con Deuda
              </p>
              <p className="text-lg lg:2xl font-extrabold text-orange-600">{info?.data?.clientesConDeuda}</p>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    trending_up
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Tasa de Mora (%)
              </p>
              <p className="text-lg lg:2xl font-extrabold text-red-600">{info?.data?.tasaMora.toFixed(2)}%</p>
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

          {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] rounded-2xl border border-border-color dark:border-gray-800 shadow-sm overflow-hidden">
            {/* 📱 MOBILE - CARDS */}
            <div className="md:hidden divide-y divide-border-color dark:divide-gray-800">
              {/* Card 1 */}
              {dataTabla?.map((row: Client) => (
                <div key={row.id} className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0jCiXy1zhK_3vcSRGQNwmkHqgGWrp8-Ssizim5DrBt9qibXBbu9VdMwGgrMahE7fXWyp5lsU9b1vgMOzfZIJo5PH1dHJiNeB0UUbNt6DRTnld0zdN-gIAnoDHImQjJoS3Dlj3i3Ul84Y1eubbPbuurg1j77zNiTGJNbgYrWXVvNfmybPR0XUB14FlNCqcg9fm17WkzvX5bnARNdYSSbjyRh5D7EiG6ljbii3kG4FS-6D0e-4vF5DkzkqhRk5NBrlJsKnAcLlnIo"
                        className="h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{row.companyname || row.fullname}</p>
                      <p className="text-xs text-slate-500">{row.rfc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold">
                        Saldo
                      </p>
                      <p className="font-bold">${row.saldoPendiente.toFixed(2)}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">
                        {row.facturasPendiente} facturas pendientes
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold">
                        Riesgo
                      </p>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.estadoRiesgoColor}`}>
                        {row.estadoRiesgo}
                      </span>
                    </div>

                    <div className="col-span-2">
                      <p className="text-slate-400 text-xs uppercase font-bold">
                        Última Gestión
                      </p>
                      <p className="text-sm">Correo recordatorio</p>
                      <p className="text-[10px] italic text-slate-400">
                        Hace 2 días
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button className="p-2 text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        mail
                      </span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 💻 DESKTOP - TABLA */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full table-fixed text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="w-[28%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="hidden lg:table-cell w-[14%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      ID Fiscal
                    </th>
                    <th className="w-[16%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Saldo Pendiente
                    </th>
                    <th className="w-[14%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Estado de Riesgo
                    </th>
                    <th className="w-[18%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Última Gestión
                    </th>
                    <th className="w-[10%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border-color dark:divide-gray-800">
                  {dataTabla?.map((row: Client) => (
                    <tr
                      key={row.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors"
                    >

                      <td className="px-4 lg:px-6 py-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                            <img
                              alt="Tech Cloud"
                              className="h-full w-full object-cover"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0jCiXy1zhK_3vcSRGQNwmkHqgGWrp8-Ssizim5DrBt9qibXBbu9VdMwGgrMahE7fXWyp5lsU9b1vgMOzfZIJo5PH1dHJiNeB0UUbNt6DRTnld0zdN-gIAnoDHImQjJoS3Dlj3i3Ul84Y1eubbPbuurg1j77zNiTGJNbgYrWXVvNfmybPR0XUB14FlNCqcg9fm17WkzvX5bnARNdYSSbjyRh5D7EiG6ljbii3kG4FS-6D0e-4vF5DkzkqhRk5NBrlJsKnAcLlnIo"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold truncate">
                              {row.companyname || row.fullname}
                            </p>
                            <p className="text-xs text-[#64748b] truncate">
                              {row.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="hidden lg:table-cell px-4 lg:px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 truncate">
                        {row.rfc}
                      </td>

                      <td className="px-4 lg:px-6 py-4">
                        <p className="text-sm font-bold truncate">${row.saldoPendiente.toFixed(2)}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase truncate">
                          {row.facturasPendiente} facturas pendientes
                        </p>
                      </td>

                      <td className="px-4 lg:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.estadoRiesgoColor}`}>
                            {row.estadoRiesgo}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 lg:px-6 py-4 text-sm text-[#64748b]">
                        <div className="flex flex-col min-w-0">
                          <span className="truncate">Correo recordatorio</span>
                          <span className="text-[10px] font-medium italic truncate">
                            Hace 2 días
                          </span>
                        </div>
                      </td>

                      <td className="px-4 lg:px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">
                              mail
                            </span>
                          </button>
                          <button onClick={() => onSelectCliente(row.id)} className="p-2 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">
                              visibility
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/*  */}
              <div className="p-4 border-t border-[#cfd7e7] dark:border-gray-800 bg-[#f8f9fc] dark:bg-gray-800/30 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-xs text-[#4c669a]">
                  Mostrando{" "}
                  <span className="font-bold text-[#0d121b] dark:text-white">
                    {pageSize}
                  </span>{" "}
                  de{" "}
                  <span className="font-bold text-[#0d121b] dark:text-white">
                    {data?.pagination?.total}
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
          </div>

        </div>
      </main>
    </div>
  );
}
