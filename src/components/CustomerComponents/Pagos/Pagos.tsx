export default function Pagos() {
  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">

          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Historial de Pagos
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Consulta y descarga los comprobantes de tus transacciones
                realizadas.
              </p>
            </div>
            <div>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  calendar_today
                </span>
                Descargar Reporte Anual
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Total Pagado este Año
              </p>
              <p className="text-3xl font-black text-primary">$45,800.00</p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>Ejecutado a tiempo</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Último Pago
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-black text-[#0d121b] dark:text-white">
                  $3,200.00
                </p>
                <p className="text-sm text-gray-500 font-medium">12 Oct 2023</p>
              </div>
              <div className="mt-4 flex items-center gap-1 text-blue-500 text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span>Hace 5 días</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Método de Pago más usado
              </p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-black text-[#0d121b] dark:text-white">
                  Tarjeta
                </p>
                <span className="material-symbols-outlined text-gray-400">
                  credit_card
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-sm">
                  history
                </span>
                <span>85% de tus transacciones</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-[300px]">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-xl pointer-events-none">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 border-none rounded-lg text-sm w-full focus:ring-2 focus:ring-primary"
                    placeholder="Buscar por factura..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2 border border-[#cfd7e7] dark:border-gray-700 rounded-lg px-3 py-2 bg-background-light dark:bg-gray-800">
                  <span className="material-symbols-outlined text-gray-400 text-sm">
                    date_range
                  </span>
                  <input
                    className="bg-transparent border-none p-0 text-sm focus:ring-0 w-32 outline-none"
                    placeholder="Rango de fechas"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    filter_list
                  </span>
                  Filtros
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-gray-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Fecha de Pago
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Factura Relacionada
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Método
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
                      Comprobante
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">
                      12 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-1102
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-gray-400">
                          credit_card
                        </span>
                        Tarjeta (**** 4231)
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$3,200.00</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        title="Descargar Comprobante"
                      >
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">
                      05 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-1089
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-gray-400">
                          account_balance
                        </span>
                        SPEI
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$5,400.00</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        title="Descargar Comprobante"
                      >
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">
                      14 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-1205
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-gray-400">
                          storefront
                        </span>
                        OXXO
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-700">
                        En Proceso
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$1,850.00</td>
                    <td className="px-6 py-4 text-center text-gray-400">
                      <span className="material-symbols-outlined">
                        hourglass_top
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">
                      25 Sep 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-0941
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg text-gray-400">
                          credit_card
                        </span>
                        Tarjeta (**** 4231)
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$4,250.00</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        title="Descargar Comprobante"
                      >
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Mostrando 4 de 24 registros
              </p>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">
                  1
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-500 text-xs font-bold">
                  2
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-500 text-xs font-bold">
                  3
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 px-20 py-10 rounded-xl border border-dashed border-primary/40 flex flex-col-2 md:flex-row items-center justify-between gap-6 bg-blue-50 dark:bg-blue-950">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">info</span>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-900 dark:text-blue-100">
                  ¿Falta algún pago en tu historial?
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Los pagos por transferencia SPEI u OXXO pueden tardar hasta 48
                  horas en verse reflejados.
                </p>
              </div>
            </div>
            <button className="text-blue-700 dark:text-blue-300 px-6 py-2 rounded-lg font-bold text-sm border border-blue-400 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              Reportar un Pago
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}
