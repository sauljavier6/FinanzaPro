import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../utils/formatDate";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { getPaymentById } from "../../../api/AdminApis/pagosApi";
import { Link, useNavigate } from "react-router-dom";
import { useRoles } from "../../../hooks/useRoles";

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
    const { hasRole } = useRoles();
    const navigate = useNavigate();

    const { data } = useQuery({
        queryKey: ["dashboarAdminpaymentId", paymentId],
        queryFn: () => getPaymentById(paymentId),
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev,
    });

    const cabecera = data?.data?.cabecera
    const customer = data?.data?.customer
    const info = data?.data
    const pagos = data?.data.payments
    console.log('data', data)

    return (
        <div className="flex overflow-hidden">
            <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="p-3 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2 pb-2 text-sm">
                        <button
                            onClick={onBack}
                            className="text-primary font-medium hover:underline truncate"
                            type="button"
                        >
                            Pagos
                        </button>
                        <span className="text-gray-400 font-medium">/</span>
                        <span className="text-gray-900 dark:text-white font-bold truncate">
                            Pago #{cabecera?.tranid}
                        </span>
                    </div>

                    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 min-w-0">
                                <h1 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.02em] truncate">
                                    Pago #{cabecera?.tranid}
                                </h1>

                                <span className="w-fit px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800 whitespace-nowrap">
                                    {cabecera?.status}
                                </span>
                            </div>

                            <p>
                                Emitido el {formatDate(cabecera?.trandate)}
                                <span className={`font-semibold rounded-full px-2 ${data?.data?.estatusColor}`}>
                                    {data?.data?.estatus}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3 border-y border-gray-200 dark:border-gray-800 my-4">
                        {/* Botones izquierda */}
                        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto">
                            <button
                                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                                title="Imprimir"
                            >
                                <span className="material-symbols-outlined">print</span>
                                <span className="text-sm font-medium whitespace-nowrap">
                                    Imprimir
                                </span>
                            </button>

                            <button
                                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                                title="Enviar por correo"
                            >
                                <span className="material-symbols-outlined">mail</span>
                                <span className="text-sm font-medium whitespace-nowrap">
                                    Enviar
                                </span>
                            </button>

                            <button
                                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                                title="Compartir enlace"
                            >
                                <span className="material-symbols-outlined">share</span>
                                <span className="text-sm font-medium whitespace-nowrap">
                                    Compartir
                                </span>
                            </button>
                        </div>

                        {/* Botón derecha */}
                        <div className="w-full lg:w-fit">
                            <button className="w-full md:w-auto shrink-0 flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">
                                    download
                                </span>
                                <span className="whitespace-nowrap">Descargar</span>
                            </button>
                        </div>
                    </div>

                    {/*  */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Total Facturado
                            </p>
                            <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                                ${cabecera?.total}
                            </p>
                        </div>
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Monto Pagado
                            </p>
                            <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                                ${cabecera?.foreignpaymentamountused}
                            </p>
                        </div>
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Saldo Pendiente
                            </p>
                            <p className="text-primary tracking-tight text-3xl font-black">
                                ${cabecera?.foreignpaymentamountunused > 0.9
                                    ? cabecera?.foreignpaymentamountunused
                                    : 0}
                            </p>
                            <div
                                className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded w-fit ${data?.data?.estatusColor} dark:bg-opacity-20`}
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {data?.data?.estatusIcon}
                                </span>

                                <span>{data?.data?.estatus}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">

                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 min-w-0">
                                <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-[20px]">
                                        person
                                    </span>
                                    Información del Cliente
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                                    {/* Cliente */}
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
                                    {/* Contacto */}
                                    <div className="min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Contacto
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold break-words">
                                            {customer?.email}
                                        </p>
                                    </div>
                                    {/* Teléfono */}
                                    <div className="sm:col-span-2 min-w-0">
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Teléfono
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                                            {customer?.phone}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Saldo
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold">
                                            {formatoMoneda.format(customer?.balance || 0)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Límite de crédito
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold">
                                            {formatoMoneda.format(customer?.creditlimit || 0)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Crédito vencido
                                        </p>
                                        <p className="text-red-600 font-bold">
                                            {formatoMoneda.format(customer?.duebalance || 0)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                                            Términos
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-bold">
                                            {customer?.terms?.replace("�", "í") || "N/A"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden 2xl:mb-8">
                                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                    <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                                        Facturas aplicadas
                                    </h3>

                                    <span className="self-start sm:self-auto text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                                        {pagos?.length} factura(s) registrada(s)
                                    </span>
                                </div>
                                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {pagos?.map((pago: PaymentApplication) => (
                                        <li
                                            key={pago.payment_id}
                                            className="px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                                <div className="flex items-start sm:items-center gap-3">
                                                    <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 shrink-0">
                                                        <span className="material-symbols-outlined text-xl">
                                                            account_balance_wallet
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">
                                                            Transferencia Bancaria
                                                        </p>
                                                        <p className="text-gray-500 text-xs">
                                                            {formatDate(pago.invoice?.trandate)} • Ref:{" "}
                                                            <Link
                                                                to={`/admin/facturas/${pago.invoice?.id}`}
                                                                className="text-primary hover:underline"
                                                            >
                                                                {pago.invoice?.tranid}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0 sm:justify-end sm:gap-3">
                                                    <p className="text-gray-900 dark:text-white font-black text-base sm:text-lg leading-none">
                                                        {formatoMoneda.format(pago.amount || 0)}
                                                    </p>

                                                    <button
                                                        onClick={() => navigate(`/admin/pagos/${pago.payment_id}`)}
                                                        className="text-gray-400 hover:text-primary transition-colors flex items-center"
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

                        <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex-1 shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                                    <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">
                                            history_edu
                                        </span>
                                        Seguimiento Interno
                                    </h3>
                                </div>
                                <div className="relative space-y-8 before:absolute before:top-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-gray-200 before:to-transparent">
                                    <div className="relative flex items-start gap-4">
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white dark:ring-gray-900 shrink-0">
                                            <span className="material-symbols-outlined text-sm">
                                                mail
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 dark:text-white text-sm font-bold">
                                                Recordatorio enviado
                                            </p>
                                            <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                                                Hoy, 09:45 AM
                                            </time>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                Correo electrónico automático de "Próximo Vencimiento"
                                                enviado al cliente.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start gap-4">
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary shadow-sm ring-4 ring-white dark:ring-gray-900 shrink-0">
                                            <span className="material-symbols-outlined text-sm">
                                                call
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 dark:text-white text-sm font-bold">
                                                Llamada de Seguimiento
                                            </p>
                                            <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                                                Ayer, 03:20 PM
                                            </time>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                Conversación con Roberto. Comenta que la tesorería
                                                liberará el pago el próximo viernes sin falta.
                                            </p>
                                            <div className="mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500 italic inline-block">
                                                "Promesa de pago para el 15/Dic"
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start gap-4">
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 ring-4 ring-white dark:ring-gray-900 shrink-0">
                                            <span className="material-symbols-outlined text-sm">
                                                receipt_long
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-gray-900 dark:text-white text-sm font-bold">
                                                Factura Emitida
                                            </p>

                                            <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                                                12 Nov, 2023
                                            </time>

                                            <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                                                Generación inicial del documento CFDI 4.0
                                            </p>
                                        </div>
                                    </div>
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
                                            {info?.diasCredito} Días
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                                        <span className="text-xs sm:text-sm text-white/70">
                                            Días transcurridos
                                        </span>
                                        <span className="font-bold text-sm sm:text-base">
                                            {info?.diasTranscurridos} Días
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                        <span className="text-xs sm:text-sm text-white/70">
                                            Estado Cobranza
                                        </span>
                                        <span className="px-3 py-1 bg-white text-primary text-[10px] sm:text-xs font-black rounded-full uppercase text-center w-fit">
                                            {info?.estatus}
                                        </span>
                                    </div>
                                    {hasRole(1, 2) && (
                                        <button className="w-full bg-white text-primary font-bold py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm sm:text-base active:scale-[0.98]">
                                            <span className="material-symbols-outlined text-lg">
                                                send
                                            </span>
                                            Enviar Comprobante
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
