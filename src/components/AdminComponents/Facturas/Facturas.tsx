
export default function Facturas() {
  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">

          <div className="flex flex-col-2 md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Módulo de Facturas
              </h2>
              <p className="text-[#4c669a] text-sm">
                Administre y supervise todas las facturas emitidas por el
                sistema.
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Nueva Factura
            </button>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Total Facturado
              </p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-extrabold">$2,450,000</p>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-lg">
                  Este Mes
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Por Cobrar
              </p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-extrabold text-orange-600">
                  $840,320
                </p>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg">
                  34 Facturas
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Pagadas
              </p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-extrabold text-green-600">
                  $1,520,000
                </p>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                  +12.5%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Anuladas
              </p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-extrabold text-gray-500">$89,680</p>
                <span className="text-xs font-bold text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg">
                  0.4%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-6 mb-8">
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Nombre del Cliente
                </label>
                <input
                  className="w-full bg-[#f0f2f5] dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Ej. Tech Cloud"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Rango de Fechas
                </label>
                <div className="flex items-center bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4">
                  <span className="material-symbols-outlined text-[18px] text-gray-400 mr-2">
                    calendar_today
                  </span>
                  <input
                    className="w-full bg-transparent border-none py-2 text-sm focus:ring-0 transition-all"
                    placeholder="01/10/2023 - 31/10/2023"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Estado de Pago
                </label>
                <select className="w-full bg-[#f0f2f5] dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                  <option>Todos los estados</option>
                  <option>Pagada</option>
                  <option>Pendiente</option>
                  <option>Vencida</option>
                  <option>Anulada</option>
                </select>
              </div>
              <div className="flex items-end gap-2">
                <button className="flex-1 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
                  Filtrar
                </button>
                <button
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Limpiar filtros"
                >
                  <span className="material-symbols-outlined">
                    filter_alt_off
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Nro. Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto Total
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98552
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-primary font-bold text-[10px]">
                          TC
                        </div>
                        <p className="text-sm font-bold">
                          Tech Cloud Solutions
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      12 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      12 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$15,400.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                        Pagada
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98553
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[10px]">
                          BM
                        </div>
                        <p className="text-sm font-bold">BioMedics Lab</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      14 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      14 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$4,250.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98421
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-[10px]">
                          CG
                        </div>
                        <p className="text-sm font-bold">Corporativo Global</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      20 Sep, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      20 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$45,200.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 uppercase">
                        Vencida
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98555
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-[10px]">
                          AA
                        </div>
                        <p className="text-sm font-bold">Alpha Agency</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      15 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      15 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$22,100.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                        Pagada
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98556
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">
                          LE
                        </div>
                        <p className="text-sm font-bold">Logística Express</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      16 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      16 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$12,800.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-[#e7ebf3] dark:border-gray-800 flex items-center justify-between">
              <p className="text-sm text-[#4c669a]">
                Mostrando <span className="font-bold">1-10</span> de{" "}
                <span className="font-bold">142</span> facturas
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30"
                  disabled
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button className="h-8 w-8 rounded bg-primary text-white text-sm font-bold">
                  1
                </button>
                <button className="h-8 w-8 rounded text-[#4c669a] text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-800">
                  2
                </button>
                <button className="h-8 w-8 rounded text-[#4c669a] text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-800">
                  3
                </button>
                <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
