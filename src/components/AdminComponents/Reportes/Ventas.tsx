import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getReporteV } from "../../../api/AdminApis/reportesApi";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { formatoCompacto } from "../../../utils/formatoCompacto";
import { formatDate } from "../../../utils/formatDate";

export default function Ventas() {
    const [parametrosReporte, setParametrosReporte] = useState({
        fechaini: "",
        fechafin: "",
        search: "",
        customerId: "",
    });

    const {
        data: reporte,
        refetch
    } = useQuery({
        queryKey: ["reporteV", parametrosReporte],
        queryFn: () => getReporteV(parametrosReporte),
        enabled: false,
    });

    console.log('EstadoCuentas', reporte)

    const getData = async () => {
        const { fechaini, fechafin } = parametrosReporte;

        if (!fechaini || !fechafin) {
            alert("Debes seleccionar fecha inicio y fecha fin");
            return;
        }

        try {
            refetch();
        } catch (error) {
            console.error(error);
            alert("Error al generar datos");
        }
    };

    const handlePrintReporte = async () => {

        const query = new URLSearchParams(parametrosReporte).toString();

        try {
            window.open(`${import.meta.env.VITE_API_URL}/admin/reportes/ventasexcel?${query}`);
        } catch (error) {
            console.error("Error al imprimir el ticket:", error);
        }
    };

    const clearFilters = () => {
        setParametrosReporte({
            fechaini: "",
            fechafin: "",
            search: "",
            customerId: "",
        });
    };

    return (
        <div className="flex overflow-hidden">
            <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="p-3 sm:p-8">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="min-w-0">
                            <h2 className="text-2xl font-extrabold tracking-tight">
                                Ventas
                            </h2>
                            <p className="text-sm text-[#64748b] mt-1 break-words">
                                Analiza ingresos, volumen de facturación y desempeño de ventas en el periodo.
                            </p>
                        </div>

                        {/* BOTÓN */}
                        <button
                            onClick={handlePrintReporte}
                            disabled={!parametrosReporte.fechaini || !parametrosReporte.fechafin}
                            className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-lg transition-all
                                ${parametrosReporte.fechaini && parametrosReporte.fechafin
                                    ? "bg-primary text-white hover:opacity-90 shadow-primary/20"
                                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                download
                            </span>
                            Descargar
                        </button>
                    </div>


                    <div className="mb-8 p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 w-full">
                                <div className="w-full lg:w-auto">
                                    <label className="text-xs text-slate-500 mb-1 block">Desde</label>
                                    <input
                                        value={parametrosReporte.fechaini}
                                        onChange={(e) =>
                                            setParametrosReporte((prev) => ({
                                                ...prev,
                                                fechaini: e.target.value
                                            }))
                                        }
                                        type="date"
                                        className="w-full lg:w-[160px] text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="w-full lg:w-auto">
                                    <label className="text-xs text-slate-500 mb-1 block">Hasta</label>
                                    <input
                                        value={parametrosReporte.fechafin}
                                        onChange={(e) =>
                                            setParametrosReporte((prev) => ({
                                                ...prev,
                                                fechafin: e.target.value
                                            }))
                                        }
                                        type="date"
                                        className="w-full lg:w-[160px] text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>


                            <div className="flex gap-2 w-full lg:w-auto">
                                <button onClick={getData} className="w-full lg:w-auto text-sm font-bold px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md transition-all">
                                    Generar
                                </button>

                                <button
                                    onClick={clearFilters}
                                    className="w-full lg:w-auto text-sm font-semibold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mb-8">
                        <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Total facturado
                            </p>

                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(reporte?.data?.totalFacturado || 0)}</h3>
                                </div>

                                <div className="hidden sm:flex h-12 w-20 items-end gap-1">
                                    <div className="w-2 bg-slate-200 h-[80%] rounded-full"></div>
                                    <div className="w-2 bg-slate-200 h-[60%] rounded-full"></div>
                                    <div className="w-2 bg-slate-200 h-[70%] rounded-full"></div>
                                    <div className="w-2 bg-slate-200 h-[50%] rounded-full"></div>
                                    <div className="w-2 bg-red-400 h-[90%] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Recuperación
                            </p>

                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(reporte?.data?.totalPagado || 0)}</h3>
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
                                            className="text-primary"
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            fill="transparent"
                                            stroke="currentColor"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="30"
                                            strokeWidth="4"
                                        />
                                    </svg>
                                    <span className="absolute text-[9px] font-bold">{(reporte?.data?.porcentajePagado ?? 0).toFixed(2)}%</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Pendiente
                            </p>

                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold">
                                        {formatoMoneda.format(reporte?.data?.pendiente || 0)}
                                    </h3>
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
                                Total vencido
                            </p>

                            <div className="flex items-end justify-between gap-4">
                                <div className="min-w-0">
                                    <h3 className="text-xl sm:text-2xl font-extrabold">{formatoMoneda.format(reporte?.data?.totalVencido || 0)}</h3>
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

                    </div>

                    {/*  */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                        <div className="xl:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm">

                            {/* HEADER */}
                            <div className="px-5 sm:px-6 lg:px-8 py-5 border-b border-card-border dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <h3 className="text-base sm:text-lg font-bold">
                                    Ventas
                                </h3>
                            </div>

                            {/* ================= MOBILE ================= */}
                            <div className="block md:hidden divide-y divide-slate-100 dark:divide-slate-800">
                                {reporte?.tabla?.slice(0, 7).map((item: any) => {
                                    const porcentajePagado =
                                        item.amount > 0
                                            ? (item.amountpaid / item.amount) * 100
                                            : 0;

                                    const colorBar =
                                        porcentajePagado >= 90
                                            ? "bg-green-500"
                                            : porcentajePagado >= 50
                                                ? "bg-yellow-500"
                                                : "bg-red-500";

                                    return (
                                        <div key={item.id} className="p-5 space-y-4">
                                            {/* Cliente */}
                                            <div>
                                                <p className="text-sm font-bold">
                                                    {formatDate(item.trandate)}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    Ticket: {item.tranid}
                                                </p>
                                            </div>

                                            {/* Monto */}
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500">Monto factura</span>
                                                <span className="font-bold">
                                                    {formatoMoneda.format(item.amount || 0)}
                                                </span>
                                            </div>

                                            {/* Pagado / eficiencia */}
                                            <div>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span className="text-slate-500">Pagado</span>
                                                    <span className="font-bold">
                                                        {porcentajePagado.toFixed(0)}%
                                                    </span>
                                                </div>

                                                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={`${colorBar} h-full`}
                                                        style={{ width: `${porcentajePagado}%` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Balance */}
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-slate-500">
                                                    Pendiente
                                                </span>

                                                <span className="font-bold text-sm">
                                                    ${Number(item.balance).toLocaleString("es-MX")}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* ================= DESKTOP ================= */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Fecha
                                            </th>
                                            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Ticket
                                            </th>
                                            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Monto de la factura
                                            </th>
                                            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                Pagado
                                            </th>
                                            <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                                                Balance
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {reporte?.tabla?.slice(0, 7).map((item: any) => {
                                            const porcentajePagado = item.amount > 0
                                                ? (item.amountpaid / item.amount) * 100
                                                : 0;

                                            return (
                                                <tr
                                                    key={item.id}
                                                    className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                                                >
                                                    {/* Cliente */}
                                                    <td className="px-6 py-4">
                                                        <p className="text-sm font-semibold">
                                                            {formatDate(item.trandate)}
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            {item.tranid}
                                                        </p>
                                                    </td>

                                                    {/* Ticket */}
                                                    <td className="px-6 py-4 text-sm font-semibold">
                                                        {item.tranid}
                                                    </td>

                                                    {/* Monto factura */}
                                                    <td className="px-6 py-4 text-sm">
                                                        {formatoMoneda.format(item.amount || 0)}
                                                    </td>

                                                    {/* Pagado (barra + %) */}
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-20 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                                <div
                                                                    className="bg-primary h-full"
                                                                    style={{ width: `${porcentajePagado}%` }}
                                                                ></div>
                                                            </div>
                                                            <span className="text-xs font-semibold">
                                                                {porcentajePagado.toFixed(0)}%
                                                            </span>
                                                        </div>
                                                    </td>

                                                    {/* Balance */}
                                                    <td className="px-6 py-4 text-right text-sm font-semibold">
                                                        ${Number(item.balance).toLocaleString("es-MX")}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* =================== DONUT =================== */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm p-5 sm:p-6 lg:p-8 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-base sm:text-lg font-bold">
                                    Composición de Cartera
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500">
                                    Distribución
                                </p>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 sm:mb-8">
                                    <svg className="w-full h-full" viewBox="0 0 42 42">
                                        {/* Pagado */}
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="15.915"
                                            fill="transparent"
                                            stroke="#10b981"
                                            strokeDasharray={`${reporte?.data?.pPagado} ${100 - reporte?.data?.pPagado}`}
                                            strokeWidth="5"
                                        />

                                        {/* Vigente */}
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="15.915"
                                            fill="transparent"
                                            stroke="#135bec"
                                            strokeDasharray={`${reporte?.data?.pVigente} ${100 - reporte?.data?.pVigente}`}
                                            strokeDashoffset={-reporte?.data?.pPagado}
                                            strokeWidth="5"
                                        />

                                        {/* Vencido */}
                                        <circle
                                            cx="21"
                                            cy="21"
                                            r="15.915"
                                            fill="transparent"
                                            stroke="#ef4444"
                                            strokeDasharray={`${reporte?.data?.pVencido} ${100 - reporte?.data?.pVencido}`}
                                            strokeDashoffset={-(reporte?.data?.pPagado + reporte?.data?.pVigente)}
                                            strokeWidth="5"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl sm:text-3xl font-extrabold">
                                            {formatoCompacto.format(reporte?.data?.totalFacturado || 0)}
                                        </span>
                                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                                            Total
                                        </span>
                                    </div>
                                </div>

                                {/* Leyenda */}
                                <div className="w-full space-y-3 text-sm">
                                    {[
                                        ["Pagado", reporte?.data?.pPagado, "bg-emerald-500"],
                                        ["Vigente", reporte?.data?.pVigente, "bg-primary"],
                                        ["Vencido", reporte?.data?.pVencido, "bg-red-500"],
                                    ].map(([label, value, color]: any, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                                                <span className="text-slate-600 dark:text-slate-400">
                                                    {label}
                                                </span>
                                            </div>
                                            <span className="font-bold">
                                                {Number.isFinite(value) ? `${value.toFixed(1)}%` : "0%"}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main >
        </div >
    );
}
