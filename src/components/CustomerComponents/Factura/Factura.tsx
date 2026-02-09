import { useNavigate } from "react-router-dom";

type FacturaProps = {
  id: string;
  onVolver: () => void;
};

export default function Factura({ id, onVolver }: FacturaProps) {
  const navigate = useNavigate();

  const handlePagar = () => {
    navigate(`/clientes/pagar/${id}`);
  };

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
              Factura #{id}
            </span>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 sm:gap-2">
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white truncate min-w-0">
                  Detalle de Factura
                </h2>
                <span className="p-1 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800 whitespace-nowrap">
                  PENDIENTE DE PAGO
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Factura #{id} • Vence el 12 de Diciembre, 2023
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Descargar PDF
              </button>

              <button onClick={handlePagar} className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
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
                $2,450.00
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider">
                Pagos Realizados
              </p>
              <p className="text-green-600 tracking-tight text-2xl font-black">
                $1,100.00
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-primary text-xs font-bold uppercase tracking-wider">
                Monto Pendiente
              </p>
              <p className="text-primary tracking-tight text-2xl font-black">
                $1,350.00
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
                    <tr>
                      <td className="px-4 py-3">
                        <p className="text-gray-900 dark:text-white font-medium">
                          Suscripción Anual Cloud ERP
                        </p>
                        <p className="text-gray-400 text-xs">
                          Periodo: Ene 2024 - Dic 2024
                        </p>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        $1,800.00
                      </td>
                      <td className="px-4 py-3 text-right text-gray-900 dark:text-white font-bold">
                        $1,800.00
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <p className="text-gray-900 dark:text-white font-medium">
                          Soporte Técnico Premium
                        </p>
                        <p className="text-gray-400 text-xs">
                          Bolsa de 10 horas mensuales
                        </p>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                        $650.00
                      </td>
                      <td className="px-4 py-3 text-right text-gray-900 dark:text-white font-bold">
                        $650.00
                      </td>
                    </tr>
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
                        $2,450.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-2 text-right text-gray-500 font-medium"
                      >
                        IVA (16%)
                      </td>
                      <td className="px-4 py-2 text-right text-gray-900 dark:text-white font-bold">
                        $392.00
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
                        $2,842.00
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Para móviles, cada fila como card */}
              <div className="md:hidden flex flex-col gap-4 p-4">
                {[
                  {
                    descripcion: "Suscripción Anual Cloud ERP",
                    detalle: "Periodo: Ene 2024 - Dic 2024",
                    cantidad: 1,
                    precio: "$1,800.00",
                    subtotal: "$1,800.00",
                  },
                  {
                    descripcion: "Soporte Técnico Premium",
                    detalle: "Bolsa de 10 horas mensuales",
                    cantidad: 1,
                    precio: "$650.00",
                    subtotal: "$650.00",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 dark:bg-gray-800/20 rounded-lg p-4 flex flex-col gap-2"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">
                      {item.descripcion}
                    </p>
                    <p className="text-gray-400 text-xs">{item.detalle}</p>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium mt-2">
                      <span>Cant.: {item.cantidad}</span>
                      <span>Unit.: {item.precio}</span>
                      <span className="text-gray-900 dark:text-white font-bold">
                        {item.subtotal}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Totales */}
                <div className="flex flex-col gap-1 mt-2 text-right">
                  <p className="text-gray-500">Subtotal: $2,450.00</p>
                  <p className="text-gray-500">IVA (16%): $392.00</p>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">
                    Monto Total:{" "}
                    <span className="text-primary text-2xl font-black">
                      $2,842.00
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
                {[
                  {
                    method: "Transferencia Bancaria",
                    date: "15 de Noviembre, 2023",
                    ref: "BNX-00129",
                    amount: "$600.00",
                    icon: "account_balance_wallet",
                  },
                  {
                    method: "Pago en Efectivo (Caja)",
                    date: "20 de Noviembre, 2023",
                    ref: "CJ-8821",
                    amount: "$500.00",
                    icon: "payments",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto min-w-0">
                      {/* Ícono */}
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl">
                          {item.icon}
                        </span>
                      </div>

                      {/* Texto */}
                      <div className="flex flex-col min-w-0 w-full sm:w-auto">
                        <p className="text-gray-900 dark:text-white font-bold truncate">
                          {item.method}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm truncate">
                          {item.date} • Ref: {item.ref}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-900 dark:text-white font-black text-lg mt-2 sm:mt-0 whitespace-nowrap">
                      {item.amount}
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
