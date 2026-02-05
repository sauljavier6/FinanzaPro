interface CarteraProps {
  onSuccess: (facturaId: string) => void;
}

export default function Pagos() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">

            <div className="flex flex-col-2 md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Módulo de Pagos y Conciliación
                </h2>
                <p className="text-sm text-[#4c669a]">
                  Historial centralizado y gestión de ingresos recibidos.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all w-fit">
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                Exportar Reporte
              </button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-[#161b2a] p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                    Total Recaudado (Mes)
                  </span>
                  <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg material-symbols-outlined">
                    trending_up
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-extrabold">$2,450,000</p>
                  <span className="text-xs font-bold text-green-600">
                    +8.2%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#161b2a] p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                    Pagos por Conciliar
                  </span>
                  <span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg material-symbols-outlined">
                    pending_actions
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-extrabold">124</p>
                  <span className="text-xs font-bold text-orange-600">
                    Requiere revisión
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#161b2a] p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                    Tasa de Éxito
                  </span>
                  <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg material-symbols-outlined">
                    verified
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-extrabold">98.4%</p>
                  <span className="text-xs font-bold text-blue-600">
                    Excelente
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#e7ebf3] dark:border-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                      <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">
                        Todos
                      </button>
                      <button className="px-4 py-1.5 text-xs font-bold text-[#4c669a] hover:text-primary">
                        Tarjeta
                      </button>
                      <button className="px-4 py-1.5 text-xs font-bold text-[#4c669a] hover:text-primary">
                        Transferencia
                      </button>
                      <button className="px-4 py-1.5 text-xs font-bold text-[#4c669a] hover:text-primary">
                        Efectivo
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        className="text-xs font-bold border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-lg px-4 py-2 pr-10 focus:ring-primary/20 focus:border-primary"
                        readOnly
                        type="text"
                        value="01 Oct - 31 Oct, 2023"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2 text-gray-400 text-[18px]">
                        calendar_today
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#4c669a]">
                      Mostrando 1-10 de 1,240
                    </span>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-gray-400">
                        <span className="material-symbols-outlined text-[18px]">
                          chevron_left
                        </span>
                      </button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-gray-400">
                        <span className="material-symbols-outlined text-[18px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Fecha
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Factura
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Método de Pago
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Monto
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold">12 Oct, 2023</p>
                        <p className="text-xs text-[#4c669a]">14:25 PM</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary font-bold text-[10px]">
                            TC
                          </div>
                          <p className="text-sm font-bold">
                            Tech Cloud Solutions
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        #F-98552
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400 text-[18px]">
                            credit_card
                          </span>
                          <span className="text-sm">Tarjeta</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">
                        $15,400.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Completado
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-primary">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold">11 Oct, 2023</p>
                        <p className="text-xs text-[#4c669a]">10:12 AM</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold text-[10px]">
                            BM
                          </div>
                          <p className="text-sm font-bold">BioMedics Lab</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        #F-98549
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400 text-[18px]">
                            account_balance
                          </span>
                          <span className="text-sm">Transferencia</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">$4,250.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                          Pendiente
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-primary">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold">10 Oct, 2023</p>
                        <p className="text-xs text-[#4c669a]">16:45 PM</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 font-bold text-[10px]">
                            AA
                          </div>
                          <p className="text-sm font-bold">Alpha Agency</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        #F-98533
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400 text-[18px]">
                            payments
                          </span>
                          <span className="text-sm">Efectivo</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">
                        $22,100.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Completado
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-primary">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold">09 Oct, 2023</p>
                        <p className="text-xs text-[#4c669a]">09:30 AM</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 font-bold text-[10px]">
                            GX
                          </div>
                          <p className="text-sm font-bold">Global Express</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        #F-98512
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400 text-[18px]">
                            credit_card
                          </span>
                          <span className="text-sm">Tarjeta</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">
                        $12,800.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                          Fallido
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-primary">
                          <span className="material-symbols-outlined">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 border-t border-[#e7ebf3] dark:border-gray-800 flex items-center justify-between">
                <button className="text-sm font-bold text-[#4c669a] hover:text-primary flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    history
                  </span>
                  Ver historial completo
                </button>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-all border border-primary/20">
                    Imprimir recibos
                  </button>
                </div>
              </div>
            </div>
            
        </div>
      </main>
    </div>
  );
}
