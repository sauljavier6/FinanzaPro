import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getFacturaById } from "../../../api/customerApis/FacturaApi";

interface ItemLineaFactura {
  Amount: number;
  FacturaId: number;
  ID_Linea: number;
  ItemId: string;
  ItemName: string;
  Quantity: number;
  Rate: number;
  TaxCode: string;
}

interface PagosFactura {
  FechaPago: string;
  ID_Factura: number;
  ID_Pago: number;
  MontoPago: number;
  NetsuitePaymentId: string;
  PagoKey: string;
  PaymentTranId: string;
  PaymentMethod: string;
}

type FacturaProps = {
  id: number;
  onVolver: () => void;
};

export default function Factura({ id, onVolver }: FacturaProps) {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cuentasCliente", id] as const,
    queryFn: () => getFacturaById(id),

    refetchOnWindowFocus: false,
  });

  console.log("efbvarbe", data);

  const handlePagar = () => {
    navigate(`/clientes/pagar/${id}`);
  };

  const parseFechaMX = (fecha: string | Date): string => {
    const d = new Date(fecha);
    return d.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatCurrency = (value?: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(value ?? 0);

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Ruta */}
          <div className="flex flex-wrap items-center gap-2 pb-2 text-sm">
            <button
              onClick={onVolver}
              className="text-primary font-medium hover:underline truncate"
              type="button"
            >
              Mis Facturas
            </button>
            <span className="text-gray-400 font-medium">/</span>
            <span className="text-gray-900 dark:text-white font-bold truncate">
              Factura #{data?.Tranid}
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 sm:gap-2">
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white truncate min-w-0">
                  Detalle de Factura
                </h2>

                <span
                  className={`p-1 py-1 text-xs font-bold rounded-full border whitespace-nowrap
                  ${
                    data?.SaldoPendiente === 0
                      ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                      : "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
                  }`}
                >
                  {data?.SaldoPendiente === 0 ? "PAGADA" : "PENDIENTE DE PAGO"}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Factura #{data?.Tranid} • Vence el{" "}
                {data?.FechaVencimiento != null
                  ? parseFechaMX(data?.FechaVencimiento)
                  : "S/F"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Descargar PDF
              </button>

              <button
                disabled={data?.SaldoPendiente === 0}
                onClick={handlePagar}
                className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  data?.SaldoPendiente === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                    : "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  credit_card
                </span>
                Pagar Ahora
              </button>
            </div>
          </div>

          {/* Totales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-10 sm:gap-4">
            <div className="flex flex-col gap-1 rounded-xl p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Total de la Factura
              </p>
              <p className="text-gray-900 dark:text-white tracking-tight text-2xl font-black">
                ${data?.Total}
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Pagado
              </p>
              <p className="text-green-600 tracking-tight text-2xl font-black">
                ${data?.Total - data?.SaldoPendiente}
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">
                Monto Pendiente
              </p>
              <p className="text-primary tracking-tight text-2xl font-black">
                ${data?.SaldoPendiente}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col md:flex-row md:gap-8 gap-6">
                <div className="flex-1">
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Emisor
                  </h3>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="size-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">
                        business
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight truncate">
                        CobranzaPro S.A.
                      </p>
                      <p className="text-gray-500 text-xs mt-1 truncate">
                        RFC: CPRO-101010-XYZ
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                    Av. Reforma 222, Piso 15
                    <br />
                    Ciudad de México, CP 06600
                  </p>
                </div>

                <div className="flex-1">
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Receptor (Usted)
                  </h3>
                  <p className="text-gray-900 dark:text-white font-bold text-lg mb-1 truncate">
                    TechSolutions S.A. de C.V.
                  </p>
                  <p className="text-gray-500 text-sm mb-3 truncate">
                    RFC: TSOL-920101-ABC
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-snug">
                    Av. Insurgentes Sur 1450, Col. Del Valle
                    <br />
                    Ciudad de México, 03100
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl">
                  Desglose de Conceptos
                </h3>
              </div>

              {/* Para pantallas grandes usamos tabla */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                        Cant.
                      </th>
                      <th className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                        Precio Unit.
                      </th>
                      <th className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                        Subtotal
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {data?.lineas && data?.lineas.length > 0 ? (
                      data?.lineas.map(
                        (linea: ItemLineaFactura, index: number) => (
                          <tr key={linea.ID_Linea ?? index}>
                            {/* DESCRIPCIÓN */}
                            <td className="px-4 py-2.5">
                              <p className="text-sm text-gray-900 dark:text-white">
                                {linea.ItemName}
                              </p>
                            </td>

                            {/* CANTIDAD */}
                            <td className="px-4 py-2.5 text-center text-xs text-gray-700 dark:text-gray-300">
                              {linea.Quantity}
                            </td>

                            {/* PRECIO UNITARIO */}
                            <td className="px-4 py-2.5 text-right text-xs text-gray-700 dark:text-gray-300">
                              {linea.ItemName?.toUpperCase().includes("IEPS")
                                ? `${linea.Rate}%`
                                : formatCurrency(linea.Rate)}
                            </td>

                            {/* IMPORTE */}
                            <td className="px-4 py-2.5 text-right text-xs text-gray-900 dark:text-white font-semibold">
                              {formatCurrency(linea.Amount)}
                            </td>
                          </tr>
                        ),
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 py-6 text-center text-gray-400"
                        >
                          Sin líneas de factura
                        </td>
                      </tr>
                    )}
                  </tbody>

                  <tfoot className="bg-gray-50 dark:bg-gray-800/20">
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-2 text-right text-gray-500 font-medium"
                      >
                        Subtotal
                      </td>
                      <td className="px-4 py-2 text-right text-gray-900 dark:text-white font-bold">
                        ${data?.SubTotal}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-2 text-right text-gray-500 font-medium"
                      >
                        Impuestos
                      </td>
                      <td className="px-4 py-2 text-right text-gray-900 dark:text-white font-bold">
                        ${data?.Impuestos}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-2 text-right text-gray-900 dark:text-white font-bold text-lg"
                      >
                        Monto Total
                      </td>
                      <td className="px-4 py-2 text-right text-primary text-2xl font-black">
                        ${data?.Total}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Para móviles, cada fila como card */}
              <div className="md:hidden flex flex-col gap-4 p-4">
                {data?.lineas && data?.lineas.length > 0 ? (
                  data?.lineas.map((linea: ItemLineaFactura, index: number) => (
                    <div
                      key={linea.ID_Linea ?? index}
                      className="bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 flex flex-col gap-2"
                    >
                      <p className="text-sm text-gray-900 dark:text-white font-medium">
                        {linea.ItemName}
                      </p>
                      <div className="flex justify-between text-xs text-gray-700 dark:text-gray-300 font-medium mt-1">
                        <span>Cant.: {linea.Quantity}</span>
                        <span>
                          Unit.:{" "}
                          {linea.ItemName?.toUpperCase().includes("IEPS")
                            ? `${linea.Rate}%`
                            : formatCurrency(linea.Rate)}
                        </span>
                        <span className="text-gray-900 dark:text-white font-semibold">
                          {formatCurrency(linea.Amount)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 text-center text-sm text-gray-400">
                    Sin líneas de factura
                  </div>
                )}

                {/* Totales */}
                <div className="flex flex-col gap-1 mt-2 text-right">
                  <p className="text-gray-500 text-sm">
                    Subtotal: {formatCurrency(data?.SubTotal)}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Impuestos: {formatCurrency(data?.Impuestos)}
                  </p>
                  <p className="text-gray-900 dark:text-white font-bold text-base">
                    Monto Total:{" "}
                    <span className="text-primary text-xl font-black">
                      {formatCurrency(data?.Total)}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Tabla */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <h3 className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl truncate w-full sm:w-auto">
                  Historial de Pagos
                </h3>
                <span className="text-xs font-bold text-green-600 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded whitespace-nowrap">
                  Confirmado
                </span>
              </div>

              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                {data?.pagos?.map((item: PagosFactura, idx: number) => (
                  <li
                    key={idx}
                    className="px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto min-w-0">
                      {/* Ícono */}
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">
                          payments
                        </span>
                      </div>

                      {/* Texto */}
                      <div className="flex flex-col min-w-0 w-full sm:w-auto">
                        <p className="text-gray-900 dark:text-white font-bold truncate">
                          {item.PaymentMethod}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm truncate">
                          {item.FechaPago} • Ref: {item.PaymentTranId}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-900 dark:text-white font-black text-lg mt-2 sm:mt-0 whitespace-nowrap">
                      {item.MontoPago}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
