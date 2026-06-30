import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatDate";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { Link, useNavigate } from "react-router-dom";
import { getPaymentById } from "../../../api/customerApis/PagosApi";
import { getTimelineConfig } from "../../../utils/timelineHelper";

interface FacturaProps {
    paymentId: number;
    onBack: () => void;
}

interface CustomerInvoice {
    id: number;
    tranid: string;
    total: number;
    trandate: string;
}

interface PaymentApplication {
    payment_id: number;
    invoice_id: number;
    amount: number;
    nexttype: string;
    previoustype: string;
    payment_trandate: string;
    invoice_trandate: string;
    status: string;
    lastmodifieddate: string;
    invoice?: CustomerInvoice;
}

export default function PagoDetails({ paymentId, onBack }: FacturaProps) {
    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ["dashboarCustomerpaymentId", paymentId],
        queryFn: () => getPaymentById(paymentId),
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev,
    });

    const cabecera = data?.data?.cabecera
    const customer = data?.data?.customer
    const info = data?.data
    const pagos = data?.data.payments
    const timeline = data?.data?.timeline || [];

    const timelineItems = [
        ...(timeline || []),
        {
            id: "invoice-created",
            timelineType: "INVOICE_CREATED",
            title: "Factura Emitida",
            description: "Generación inicial de la Factura",
            createdAt: cabecera?.trandate,
        },
    ];

    return (
        <div className="flex w-full max-w-full overflow-x-hidden">
            <main className="flex-1 min-w-0 flex flex-col overflow-y-auto overflow-x-hidden bg-background-light dark:bg-background-dark">
                <div className="w-full max-w-full p-3 sm:p-8 overflow-x-hidden">
                    <div className="flex flex-wrap items-center gap-2 pb-2 text-sm min-w-0">
                        <button
                            onClick={onBack}
                            className="text-primary font-medium hover:underline truncate"
                            type="button"
                        >
                            Pagos
                        </button>

                        <span className="text-gray-400 font-medium">/</span>

                        <span className="text-gray-900 dark:text-white font-bold truncate min-w-0">
                            Pago #{cabecera?.tranid}
                        </span>
                    </div>

                    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 min-w-0">
                        <div className="flex flex-col gap-2 w-full min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 min-w-0">
                                <h1 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.02em] truncate min-w-0">
                                    Pago #{cabecera?.tranid}
                                </h1>

                                <span className="w-fit shrink-0 px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800 whitespace-nowrap">
                                    {cabecera?.status}
                                </span>
                            </div>

                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                                Emitido el {formatDate(cabecera?.trandate)}
                                <span className={`ml-2 font-semibold rounded-full px-2 ${data?.data?.estatusColor}`}>
                                    {data?.data?.estatus}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3 border-y border-gray-200 dark:border-gray-800 my-4 min-w-0">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:flex gap-2 w-full md:w-auto min-w-0">
                            {["Imprimir", "Enviar", "Compartir"].map((label) => (
                                <button
                                    key={label}
                                    className="min-w-0 md:min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                                    title={label}
                                >
                                    <span className="material-symbols-outlined">
                                        {label === "Imprimir" ? "print" : label === "Enviar" ? "mail" : "share"}
                                    </span>
                                    <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                                </button>
                            ))}
                        </div>

                        <button className="w-full md:w-auto shrink-0 flex items-center justify-center rounded-lg h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            <span className="whitespace-nowrap">Descargar</span>
                        </button>
                    </div>

                    <div className="grid w-full max-w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 min-w-0">
                        <div className="min-w-0 bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-5xl sm:text-6xl">receipt_long</span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                                Total Facturado
                            </p>
                            <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white break-words">
                                {formatoMoneda.format(cabecera?.total || 0)}
                            </p>
                        </div>

                        <div className="min-w-0 bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-5xl sm:text-6xl">payments</span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                                Monto Pagado
                            </p>
                            <p className="text-2xl sm:text-3xl font-black text-green-600 break-words">
                                {formatoMoneda.format(cabecera?.foreignpaymentamountused || 0)}
                            </p>
                        </div>

                        <div className="min-w-0 bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden sm:col-span-2 xl:col-span-1">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-5xl sm:text-6xl">
                                    account_balance_wallet
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                                Saldo Pendiente
                            </p>
                            <p className="text-2xl sm:text-3xl font-black text-primary break-words">
                                {formatoMoneda.format(
                                    cabecera?.foreignpaymentamountunused > 0.9
                                        ? cabecera?.foreignpaymentamountunused
                                        : 0
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="grid w-full max-w-full grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 min-w-0">
                        <div className="xl:col-span-2 flex flex-col gap-4 sm:gap-6 min-w-0">
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 min-w-0 overflow-hidden">
                                <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold mb-4 flex items-center gap-2 min-w-0">
                                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                                        person
                                    </span>
                                    Información personal
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Cliente
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-words">
                                            {customer?.companyname}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                                            RFC: {customer?.rfc}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Contacto
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-all">
                                            {customer?.email}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Teléfono
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                                            {customer?.phone}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Saldo
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-words">
                                            {formatoMoneda.format(customer?.balance || 0)}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Límite de crédito
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-words">
                                            {formatoMoneda.format(customer?.creditlimit || 0)}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Crédito vencido
                                        </p>
                                        <p className="text-red-600 font-bold break-words">
                                            {formatoMoneda.format(customer?.duebalance || 0)}
                                        </p>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Términos
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-words">
                                            {customer?.terms?.replace("�", "í") || "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden min-w-0">
                                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 min-w-0">
                                    <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                                        Facturas aplicadas
                                    </h3>

                                    <span className="self-start sm:self-auto text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded whitespace-nowrap">
                                        {pagos?.length} factura(s)
                                    </span>
                                </div>

                                <ul className="divide-y divide-gray-100 dark:divide-gray-800 min-w-0">
                                    {pagos?.map((pago: PaymentApplication) => (
                                        <li
                                            key={`${pago.payment_id}-${pago.invoice_id}`}
                                            className="px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors min-w-0"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0">
                                                <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                                                    <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 shrink-0">
                                                        <span className="material-symbols-outlined text-xl">
                                                            account_balance_wallet
                                                        </span>
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-base truncate">
                                                            Transferencia Bancaria
                                                        </p>

                                                        <p className="text-gray-500 text-xs break-words">
                                                            {formatDate(pago.invoice?.trandate)} • Ref:{" "}
                                                            <Link
                                                                to={`/admin/facturas/${pago.invoice?.id}`}
                                                                className="text-primary hover:underline break-all"
                                                            >
                                                                {pago.invoice?.tranid}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto shrink-0">
                                                    <p className="text-gray-900 dark:text-white font-black text-base sm:text-lg leading-none whitespace-nowrap">
                                                        {formatoMoneda.format(pago.amount || 0)}
                                                    </p>

                                                    <button
                                                        onClick={() => navigate(`/admin/pagos/${pago.payment_id}`)}
                                                        className="text-gray-400 hover:text-primary transition-colors flex items-center shrink-0"
                                                    >
                                                        <span className="material-symbols-outlined text-[20px] leading-none">
                                                            visibility
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="xl:col-span-1 flex flex-col gap-4 sm:gap-6 min-w-0">
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm min-w-0 overflow-hidden">
                                <div className="relative flex items-start gap-4 min-w-0">
                                    {timelineItems.map((item: any, index: number) => {
                                        const config = getTimelineConfig(item.timelineType);

                                        return (
                                            <div key={item.id || index} className="relative flex items-start gap-4 min-w-0">
                                                <div
                                                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full ring-4 ring-white dark:ring-gray-900 shrink-0 ${config.circle}`}
                                                >
                                                    <span className="material-symbols-outlined text-sm">
                                                        {config.icon}
                                                    </span>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-gray-900 dark:text-white text-sm font-bold break-words">
                                                        {item.title}
                                                    </p>

                                                    <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                                                        {formatDate(item.createdAt)}
                                                    </time>

                                                    {item.description && (
                                                        <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed break-words">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>


                            </div>
                            <div className="bg-primary rounded-2xl p-5 sm:p-6 lg:p-7 text-white shadow-lg shadow-primary/20 w-full">
                                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4">
                                    Resumen Financiero
                                </h4>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                                        <span className="text-xs sm:text-sm text-white/70">
                                            Días de crédito
                                        </span>
                                        <span className="font-bold text-sm sm:text-base">
                                            {info?.customer?.terms?.replaceAll("�", "í") || "N/A"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                                        <span className="text-xs sm:text-sm text-white/70">

                                        </span>
                                        <span className="font-bold text-sm sm:text-base">

                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                        <span className="text-xs sm:text-sm text-white/70">

                                        </span>
                                    </div>
                                    <button className="w-full bg-white text-primary font-bold py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm sm:text-base active:scale-[0.98]">
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
