export default function Pagos() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Módulo de Pagos y Conciliación
              </h2>
              <p className="text-sm text-[#4c669a] max-w-xl">
                Historial centralizado y gestión de ingresos recibidos.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all w-full sm:w-auto">
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              Exportar Reporte
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Total Recaudado (Mes)
                </span>
                <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg material-symbols-outlined">
                  trending_up
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl md:text-2xl font-extrabold">$2,450,000</p>
                <span className="text-xs font-bold text-green-600">+8.2%</span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Pagos por Conciliar
                </span>
                <span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg material-symbols-outlined">
                  pending_actions
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl md:text-2xl font-extrabold">124</p>
                <span className="text-xs font-bold text-orange-600">
                  Requiere revisión
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                  Tasa de Éxito
                </span>
                <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg material-symbols-outlined">
                  verified
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-xl md:text-2xl font-extrabold">98.4%</p>
                <span className="text-xs font-bold text-blue-600">
                  Excelente
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* HEADER */}
            <div className="p-4 sm:p-6 border-b border-[#e7ebf3] dark:border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* FILTROS */}
                <div className="w-full md:w-auto grid grid-cols-2 gap-2 md:flex md:gap-0">
                  <button className="px-3 py-2 text-xs font-bold bg-primary text-white rounded-md shadow-sm w-full whitespace-nowrap">
                    Todos
                  </button>
                  <button className="px-3 py-2 text-xs font-bold text-[#4c669a] hover:text-primary bg-white/0 sm:bg-transparent rounded-md w-full whitespace-nowrap">
                    Tarjeta
                  </button>
                  <button className="px-3 py-2 text-xs font-bold text-[#4c669a] hover:text-primary bg-white/0 sm:bg-transparent rounded-md w-full whitespace-nowrap">
                    Transferencia
                  </button>
                  <button className="px-3 py-2 text-xs font-bold text-[#4c669a] hover:text-primary bg-white/0 sm:bg-transparent rounded-md w-full whitespace-nowrap">
                    Efectivo
                  </button>
                </div>

                {/* DATE PICKER */}
                <div className="relative w-full md:w-[220px] mt-2 md:mt-0">
                  <input
                    className="w-full text-xs font-bold bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 pr-10 focus:outline-none"
                    readOnly
                    type="text"
                    value="01 Oct - 31 Oct, 2023"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-[18px]">
                    calendar_today
                  </span>
                </div>
              </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="block md:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-sm font-bold">12 Oct, 2023</p>
                    <p className="text-xs text-[#4c669a]">14:25 PM</p>
                  </div>
                  <span className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full whitespace-nowrap">
                    Completado
                  </span>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">
                    TC
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">
                      Tech Cloud Solutions
                    </p>
                    <p className="text-xs text-[#4c669a]">#F-98552</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-[#4c669a]">Tarjeta</span>
                  <span className="font-bold">$15,400.00</span>
                </div>
              </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Método
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold">
                      12 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">
                      Tech Cloud Solutions
                    </td>
                    <td className="px-6 py-4 text-sm">#F-98552</td>
                    <td className="px-6 py-4 text-sm">Tarjeta</td>
                    <td className="px-6 py-4 text-sm font-bold">$15,400.00</td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                        Completado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FOOTER */}
            <div className="px-4 md:px-6 py-4 border-t border-[#e7ebf3] dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-[#4c669a] text-center sm:text-left">
                Mostrando <span className="font-bold">1-10</span> de{" "}
                <span className="font-bold">142</span> facturas
              </p>

              <div className="flex items-center justify-center gap-2 flex-wrap">
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
