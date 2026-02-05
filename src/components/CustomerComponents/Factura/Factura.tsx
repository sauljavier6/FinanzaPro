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
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={onVolver}
              className="text-primary text-sm font-medium leading-normal hover:underline"
              type="button"
            >
              Mis Facturas
            </button>
            <span className="text-gray-400 text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-gray-900 dark:text-white text-sm font-bold leading-normal">
              Factura #{id}
            </span>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 py-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-gray-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                  Detalle de Factura
                </h1>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800">
                  PENDIENTE DE PAGO
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                Factura #{id} • Vence el 12 de Diciembre, 2023
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white gap-2 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                <span className="truncate">Descargar PDF</span>
              </button>
              <button onClick={handlePagar} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-black hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                <span className="truncate">PAGAR AHORA</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 py-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Emisor
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        business
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-bold text-lg leading-none">
                        CobranzaPro S.A.
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        RFC: CPRO-101010-XYZ
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Av. Reforma 222, Piso 15
                    <br />
                    Ciudad de México, CP 06600
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Receptor (Usted)
                  </h3>
                  <p className="text-gray-900 dark:text-white font-bold text-lg mb-1">
                    TechSolutions S.A. de C.V.
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    RFC: TSOL-920101-ABC
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    Av. Insurgentes Sur 1450, Col. Del Valle
                    <br />
                    Ciudad de México, 03100
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                <h3 className="text-gray-900 dark:text-white font-bold">
                  Desglose de Conceptos
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                        Cant.
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                        Precio Unit.
                      </th>
                      <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4">
                        <p className="text-gray-900 dark:text-white font-medium">
                          Suscripción Anual Cloud ERP
                        </p>
                        <p className="text-gray-400 text-xs">
                          Periodo: Ene 2024 - Dic 2024
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                        $1,800.00
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900 dark:text-white font-bold">
                        $1,800.00
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <p className="text-gray-900 dark:text-white font-medium">
                          Soporte Técnico Premium
                        </p>
                        <p className="text-gray-400 text-xs">
                          Bolsa de 10 horas mensuales
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                        $650.00
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900 dark:text-white font-bold">
                        $650.00
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gray-50 dark:bg-gray-800/20">
                    <tr>
                      <td
                        className="px-6 pt-6 pb-2 text-right text-gray-500 font-medium"
                        colSpan={3}
                      >
                        Subtotal
                      </td>
                      <td className="px-6 pt-6 pb-2 text-right text-gray-900 dark:text-white font-bold">
                        $2,450.00
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="px-6 py-2 text-right text-gray-500 font-medium"
                        colSpan={3}
                      >
                        IVA (16%)
                      </td>
                      <td className="px-6 py-2 text-right text-gray-900 dark:text-white font-bold">
                        $392.00
                      </td>
                    </tr>

                    <tr>
                      <td
                        className="px-6 pt-4 pb-6 text-right text-gray-900 dark:text-white font-bold text-lg"
                        colSpan={3}
                      >
                        Monto Total
                      </td>
                      <td className="px-6 pt-4 pb-6 text-right text-primary text-2xl font-black">
                        $2,842.00
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-gray-900 dark:text-white font-bold">
                  Historial de Pagos
                </h3>
                <span className="text-xs font-bold text-green-600 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded">
                  Confirmado
                </span>
              </div>
              <div className="p-0">
                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                  <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600">
                        <span className="material-symbols-outlined text-xl">
                          account_balance_wallet
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-bold">
                          Transferencia Bancaria
                        </p>
                        <p className="text-gray-500 text-xs">
                          15 de Noviembre, 2023 • Ref: BNX-00129
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-900 dark:text-white font-black text-lg">
                      $600.00
                    </p>
                  </li>
                  <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600">
                        <span className="material-symbols-outlined text-xl">
                          payments
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-bold">
                          Pago en Efectivo (Caja)
                        </p>
                        <p className="text-gray-500 text-xs">
                          20 de Noviembre, 2023 • Ref: CJ-8821
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-900 dark:text-white font-black text-lg">
                      $500.00
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
