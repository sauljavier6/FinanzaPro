import { useQuery } from "@tanstack/react-query";
import { getFacturas } from "../../../api/customerApis/cuentasApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { formatDate } from "../../../utils/formatDate";

export interface Invoice {
  entity: string;
  currency: string;
  trandate: string;
  duedate: string;
  id: number;
  balance: number;
  status: string;
  statusColor: string;
  amount: number;
  tranid: string;
}

export interface Info {
  pagadoEsteMes: number;
  totalSaldo: number;
  vencimientoProximo: string;
  variacion: any;
}

type CuentasProps = {
  onAbrirFactura: (id: number) => void;
};

export default function Facturas({ onAbrirFactura }: CuentasProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const { data } = useQuery({
    queryKey: ["cuentasCliente", page, pageSize, debouncedSearch],
    queryFn: () => getFacturas(page, pageSize, debouncedSearch),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const totalPages = data?.totalPages ?? 1;
  const invoices = data?.invoices ?? [];
  const dataInfo = data?.resumen;

  const v = data?.resumen?.variacion;

  const toggleInvoice = (id: number) => {
    setSelectedInvoices((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handlePagar = () => {
    if (selectedInvoices.length === 0) return;

    const ids = selectedInvoices.join(",");
    navigate(`/clientes/pagar/${ids}`);
  };

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

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Facturas
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Resumen financiero y gestión de facturas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
              <button onClick={handlePagar} className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  credit_card
                </span>
                Pagar Ahora
              </button>
            </div>
          </div>

          {/* Saldos Totales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-10 sm:gap-4">
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-5xl sm:text-6xl">
                  account_balance
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Saldo Total Pendiente
              </p>
              <p className="text-2xl sm:text-3xl font-black text-primary">
                {formatoMoneda.format(dataInfo?.TotalSaldoPendiente || 0)}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-red-500 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  {v?.trend === "up"
                    ? "trending_up"
                    : v?.trend === "down"
                      ? "trending_down"
                      : "trending_flat"}
                </span>
                <span>
                  {v?.percent > 0 && `${v?.percent}% `}
                  {v?.label}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Próximo Vencimiento
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                {formatDate(dataInfo?.ProximoVencimiento)}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span>
                  {dataInfo?.diasRestantes !== null
                    ? dataInfo?.diasRestantes > 0
                      ? `En ${dataInfo?.diasRestantes} días`
                      : dataInfo?.diasRestantes === 0
                        ? "Vence hoy"
                        : `Vencido hace ${Math.abs(dataInfo?.diasRestantes)} días`
                    : "--"}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Último Pago Realizado
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                {formatoMoneda.format(dataInfo?.UltimoPago?.monto || 0)}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-green-600 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                <span>Completado el {formatDate(dataInfo?.UltimoPago?.fecha)}</span>
              </div>
            </div>
          </div>

          {/*Tabla */}
          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold">
                Facturas Pendientes
              </h3>

              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  search
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm w-full focus:ring-2 focus:ring-primary"
                  placeholder="Buscar factura..."
                  type="text"
                />
              </div>
            </div>

            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {invoices.map((f: Invoice) => (
                <div key={f.id} className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input
                        disabled={f.balance === 0}
                        type="checkbox"
                        checked={selectedInvoices.includes(f.id)}
                        onChange={() => toggleInvoice(f.id)}
                        aria-label={`Seleccionar factura ${f.id}`}
                        className="h-3.5 w-3.5 accent-primary cursor-pointer"
                      />
                      <span className="font-bold text-sm">{f.id}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${f.statusColor}`}
                    >
                      {f.status}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500">
                    Emisión: {formatDate(f.trandate)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Vence: {formatDate(f.duedate)}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-black">{f.amount}</span>
                    <button
                      onClick={() => onAbrirFactura?.(f.id)}
                      className="text-primary font-bold text-sm"
                    >
                      Ver detalle
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-gray-800/50">
                    <th className="px-4 py-4 text-xs font-bold text-gray-400 uppercase w-12">
                      <span className="sr-only">Seleccionar</span>
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Nº Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Fecha Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  {invoices.map((f: Invoice) => (
                    <tr
                      key={f.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <input
                          disabled={f.balance === 0}
                          type="checkbox"
                          checked={selectedInvoices.includes(f.id)}
                          onChange={() => toggleInvoice(f.id)}
                          aria-label={`Seleccionar factura ${f.id}`}
                          className="h-3.5 w-3.5 accent-primary cursor-pointer"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">
                        {f.tranid}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(f.trandate)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(f.duedate)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${f.statusColor}`}
                        >
                          {f.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black">
                        {f.amount}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => onAbrirFactura?.(f.id)}
                          className="text-primary font-bold text-sm hover:underline"
                        >
                          Ver detalle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400">
                Mostrando {invoices.length} de {data?.total} factura(s)
                pendientes
              </p>

              <div className="flex gap-2 justify-end">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={`size-8 flex items-center justify-center rounded border
                  ${page === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-400 hover:bg-gray-100"
                    }
                `}
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
                    className={`size-8 flex items-center justify-center rounded border text-xs font-bold
                        ${p === page
                        ? "border-primary bg-primary text-white"
                        : p === "..."
                          ? "border-transparent text-gray-400 cursor-default"
                          : "border-[#cfd7e7] text-gray-500 hover:bg-gray-100"
                      }
                      `}
                  >
                    {p}
                  </button>
                ))}
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className={`size-8 flex items-center justify-center rounded border
                  ${page === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-400 hover:bg-gray-100"
                    }
                `}
                >
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#0f4bd8] via-[#135bec] to-[#0f4bd8] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="size-10 sm:size-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  headset_mic
                </span>
              </div>

              <div>
                <p className="text-base sm:text-lg font-bold leading-tight">
                  ¿Tienes dudas sobre tu estado de cuenta?
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  Nuestro equipo de soporte financiero está disponible de lunes
                  a viernes en un horario de 8 A.M. a 5 P.M.
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-white text-primary px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
              Contactar Soporte
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
