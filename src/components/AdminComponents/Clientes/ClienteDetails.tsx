import { useQuery } from "@tanstack/react-query";
import { getdataCustomersInfoById, getinvoicesInfoById } from "../../../api/AdminApis/clientesApi";
import { useState } from "react";
import { formatoMoneda } from "../../../utils/formatMoneda";
import { useNavigate } from "react-router-dom";

interface CustomerInvoice {
    id: string;
    tranid: string;
    entity: string;
    trandate: string;
    duedate: string;
    amount: number;
    balance: number;
    amountpaid: number;
    status: string;
    currency: string;
    subtotal: number;
    tax: number;
    location: string;
    tipocompra: string;
    estatuspresupuesto: string;
    lastmodifieddate: string;
    isinactive: boolean;
}

interface CustomerInvoicePayment {
    id: string;
    tranid: string;
    transactionnumber: string;
    trandate: string;
    createddate: string;
    amount?: number;
    status?: string;
}

interface CustomerPaymentApplication {
    payment_id: string;
    invoice_id: string;
    amount: number;
    nexttype: string;
    previoustype: string;
    payment_trandate: string;
    invoice_trandate: string;
    status: string;
    lastmodifieddate: string;

    payment?: CustomerInvoicePayment;
}

interface ClientDetailsProps {
    clienteId: number
    onClose: () => void
}


export default function ClienteDetail({ clienteId, onClose }: ClientDetailsProps) {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const { data } = useQuery({
        queryKey: ["InfoById", clienteId],
        queryFn: () => getdataCustomersInfoById(clienteId),
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev,
    });

    const { data: tablas } = useQuery({
        queryKey: ["InvoiocesById", clienteId, page, pageSize],
        queryFn: () => getinvoicesInfoById(clienteId, page, pageSize),
        refetchOnWindowFocus: false,
        placeholderData: (prev) => prev,
    });

    console.log('dataaaaaaaaaaaaa', data)

    const info = data?.info
    const customer = data?.customer

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString('es-MX', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });

    const currentPage = tablas?.page || 1;
    const totalPages = tablas?.totalPages || 0;

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

    const totals = tablas?.invoices?.reduce(
        (acc: any, row: any) => {
            acc.amount += row.amount || 0;
            acc.paid += row.amountpaid || 0;
            acc.balance += row.balance || 0;
            return acc;
        },
        { amount: 0, paid: 0, balance: 0 }
    );

    return (
        <div className="flex overflow-hidden">
            <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
                <div className="p-3 sm:p-8">

                    <div className="flex flex-wrap items-center gap-2 pb-2 text-sm">
                        <button
                            onClick={onClose}
                            className="text-primary font-medium hover:underline truncate"
                            type="button"
                        >
                            Clientes
                        </button>
                        <span className="text-gray-400 font-medium">/</span>
                        <span className="text-gray-900 dark:text-white font-bold truncate">
                            Cliente# {customer?.entityid}
                        </span>
                    </div>

                    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 min-w-0">
                        <div className="flex flex-col gap-2 w-full min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 min-w-0">
                                <h1
                                    className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.02em] break-words overflow-hidden max-w-full "
                                    title={customer?.companyname}
                                >
                                    {customer?.companyname}
                                </h1>
                            </div>
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

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Total Facturado
                            </p>
                            <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                                {formatoMoneda.format(info?.facturado || 0)}
                            </p>
                        </div>
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Monto Pagado
                            </p>
                            <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                                {formatoMoneda.format(info?.pagado || 0)}
                            </p>
                        </div>
                        <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                                Saldo Pendiente
                            </p>
                            <p className="text-red-600 font-bold tracking-tight text-3xl">
                                {formatoMoneda.format(info?.pendiente || 0)}
                            </p>
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

                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                {/* HEADER */}
                                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
                                    <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                                        Factura
                                    </h3>
                                </div>

                                {/* TABLA */}
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-left min-w-[700px]">
                                        <thead className="bg-gray-50 dark:bg-gray-800/50">
                                            <tr>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Tranid</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-center">Fecha compra</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-center">Fecha vencimiento</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Monto</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Pagado</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Balance</th>
                                                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Acciones</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                            {tablas?.invoices?.map((row: CustomerInvoice) => (
                                                <tr key={row.id}>
                                                    <td className="px-6 py-4 font-medium">{row.tranid}</td>
                                                    <td className="px-6 py-4 text-center">{formatDate(row.trandate)}</td>
                                                    <td className="px-6 py-4 text-center">{formatDate(row.duedate)}</td>
                                                    <td className="px-6 py-4 text-right">{formatoMoneda.format(row.amount || 0)}</td>
                                                    <td className="px-6 py-4 text-right">{formatoMoneda.format(row.amountpaid || 0)}</td>
                                                    <td className="px-6 py-4 text-right font-bold">{formatoMoneda.format(row.balance || 0)}</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button onClick={() => navigate(`/admin/facturas/${row.id}`)} className="text-gray-400 hover:text-primary transition-colors">
                                                            <span className="material-symbols-outlined">
                                                                visibility
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot className="bg-gray-50 dark:bg-gray-800 font-bold">
                                            <tr>
                                                <td className="px-6 py-4">Totales</td>
                                                <td></td>
                                                <td></td>

                                                <td className="px-6 py-4 text-right">
                                                    {formatoMoneda.format(totals?.amount || 0)}
                                                </td>

                                                <td className="px-6 py-4 text-right">
                                                    {formatoMoneda.format(totals?.paid || 0)}
                                                </td>

                                                <td className="px-6 py-4 text-right">
                                                    {formatoMoneda.format(totals?.balance || 0)}
                                                </td>

                                                <td></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-800">
                                    {tablas?.invoices?.map((row: CustomerInvoice) => (
                                        <div key={row.id} className="p-4 space-y-3">

                                            {/* HEADER */}
                                            <div>
                                                <p className="text-gray-900 dark:text-white font-medium">
                                                    {row.tranid}
                                                </p>
                                                <p className="text-gray-500 text-xs italic">
                                                    {formatDate(row.trandate)}
                                                </p>
                                            </div>

                                            {/* INFO */}
                                            <div className="grid grid-cols-2 gap-3 text-sm">

                                                <div>
                                                    <p className="text-gray-500 text-xs">Vencimiento</p>
                                                    <p className="font-medium">{formatDate(row.duedate)}</p>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-gray-500 text-xs">Monto</p>
                                                    <p className="font-medium">
                                                        {formatoMoneda.format(row.amount || 0)}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-gray-500 text-xs">Pagado</p>
                                                    <p className="font-medium">{formatoMoneda.format(row.amountpaid || 0)}</p>
                                                </div>

                                                <div className="text-right">
                                                    <p className="text-gray-500 text-xs">Balance</p>
                                                    <p className="font-bold text-lg">
                                                        {formatoMoneda.format(row.balance || 0)}
                                                    </p>
                                                </div>

                                                <div className="col-span-2 text-right">
                                                    <button onClick={() => navigate(`/admin/facturas/${row.id}`)} className="text-gray-400 hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined">
                                                            visibility
                                                        </span>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30 flex flex-col sm:flex-row items-center justify-between gap-2">
                                    <p className="text-xs text-gray-500">
                                        Página{" "}
                                        <span className="font-bold text-gray-900 dark:text-white">
                                            {currentPage}
                                        </span>{" "}
                                        de{" "}
                                        <span className="font-bold text-gray-900 dark:text-white">
                                            {totalPages}
                                        </span>
                                    </p>
                                    <div className="flex gap-2 items-center overflow-x-auto">

                                        {/* Anterior */}
                                        <button
                                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                            disabled={currentPage === 1}
                                            className={`size-8 flex items-center justify-center rounded border ${currentPage === 1
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-gray-200 dark:hover:bg-gray-700"
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
                                                    className={`size-8 flex items-center justify-center rounded text-xs font-bold ${p === currentPage
                                                        ? "bg-primary text-white"
                                                        : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                        }`}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Mobile */}
                                        <div className="flex sm:hidden">
                                            <span className="size-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
                                                {currentPage}
                                            </span>
                                        </div>

                                        {/* Siguiente */}
                                        <button
                                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className={`size-8 flex items-center justify-center rounded border ${currentPage === totalPages
                                                ? "opacity-50 cursor-not-allowed"
                                                : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-[18px]">
                                                chevron_right
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden 2xl:mb-8">
                                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                    <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                                        Historial de Pagos
                                    </h3>

                                    <span className="self-start sm:self-auto text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                                        abonos registrados
                                    </span>
                                </div>
                                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {tablas?.payments?.map((pago: CustomerPaymentApplication) => (
                                        <li
                                            key={pago.invoice_id + pago.payment_id}
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
                                                            {pago.payment?.status}
                                                        </p>
                                                        <p className="text-gray-500 text-xs">
                                                            {formatDate(pago?.payment?.trandate || "")} • Ref: {pago.payment?.tranid}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-gray-900 dark:text-white font-black text-base sm:text-lg sm:text-right">
                                                    {formatoMoneda.format(pago.amount || 0)}
                                                </p>
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
                                            Días
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                                        <span className="text-xs sm:text-sm text-white/70">
                                            Días transcurridos
                                        </span>
                                        <span className="font-bold text-sm sm:text-base">
                                            Días
                                        </span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                        <span className="text-xs sm:text-sm text-white/70">
                                            Estado Cobranza
                                        </span>
                                        <span className="px-3 py-1 bg-white text-primary text-[10px] sm:text-xs font-black rounded-full uppercase text-center w-fit">

                                        </span>
                                    </div>
                                    <button className="w-full bg-white text-primary font-bold py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm sm:text-base active:scale-[0.98]">
                                        <span className="material-symbols-outlined text-lg">
                                            send
                                        </span>
                                        Enviar Estado de Cuenta
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
