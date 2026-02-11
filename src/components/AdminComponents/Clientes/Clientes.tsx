export default function Clientes() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Gestión de Clientes
              </h2>
              <p className="text-sm text-[#64748b] mt-1 break-words">
                Administra la cartera activa y gestiona recordatorios de cobro.
              </p>
            </div>

            <button className="flex w-full md:w-auto items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all">
              <span className="material-symbols-outlined text-[18px]">
                campaign
              </span>
              <span className="truncate">Enviar recordatorio masivo</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-xl">
                  <span className="material-symbols-outlined block">group</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full dark:bg-green-900/20">
                  +4 este mes
                </span>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Total Clientes
              </p>
              <p className="text-md lg:2xl font-extrabold">1,284</p>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    warning
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Clientes con Deuda
              </p>
              <p className="text-lg lg:2xl font-extrabold text-orange-600">342</p>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    trending_up
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Tasa de Mora (%)
              </p>
              <p className="text-lg lg:2xl font-extrabold text-red-600">12.4%</p>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-border-color dark:border-gray-800 shadow-sm mb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  Estado:
                </span>

                <div className="flex flex-wrap bg-slate-100 dark:bg-gray-800 p-1 rounded-xl">
                  <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-gray-700 rounded-lg shadow-sm whitespace-nowrap">
                    Todos
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors whitespace-nowrap">
                    Vigente
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors whitespace-nowrap">
                    Vencido
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors whitespace-nowrap">
                    Crítico
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  Rango de Deuda:
                </span>

                <select className="bg-slate-100 dark:bg-gray-800 border-none rounded-xl text-xs font-bold py-2 px-4 focus:ring-0 w-full sm:w-auto">
                  <option>Cualquier monto</option>
                  <option>$1 - $10,000</option>
                  <option>$10,001 - $50,000</option>
                  <option>+ $50,000</option>
                </select>
              </div>

              <div className="flex justify-start lg:justify-end">
                <button className="flex items-center gap-2 text-primary text-sm font-bold hover:underline">
                  <span className="material-symbols-outlined text-[18px]">
                    filter_list
                  </span>
                  Más filtros
                </button>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] rounded-2xl border border-border-color dark:border-gray-800 shadow-sm overflow-hidden">
            {/* 📱 MOBILE - CARDS */}
            <div className="md:hidden divide-y divide-border-color dark:divide-gray-800">
              {/* Card 1 */}
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0jCiXy1zhK_3vcSRGQNwmkHqgGWrp8-Ssizim5DrBt9qibXBbu9VdMwGgrMahE7fXWyp5lsU9b1vgMOzfZIJo5PH1dHJiNeB0UUbNt6DRTnld0zdN-gIAnoDHImQjJoS3Dlj3i3Ul84Y1eubbPbuurg1j77zNiTGJNbgYrWXVvNfmybPR0XUB14FlNCqcg9fm17WkzvX5bnARNdYSSbjyRh5D7EiG6ljbii3kG4FS-6D0e-4vF5DkzkqhRk5NBrlJsKnAcLlnIo"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Tech Cloud Solutions</p>
                    <p className="text-xs text-slate-500">TCS-8822934-A</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold">
                      Saldo
                    </p>
                    <p className="font-bold">$15,400.00</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                      2 facturas vencidas
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold">
                      Riesgo
                    </p>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      Bajo
                    </span>
                  </div>

                  <div className="col-span-2">
                    <p className="text-slate-400 text-xs uppercase font-bold">
                      Última Gestión
                    </p>
                    <p className="text-sm">Correo recordatorio</p>
                    <p className="text-[10px] italic text-slate-400">
                      Hace 2 días
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button className="p-2 text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      mail
                    </span>
                  </button>
                  <button className="p-2 text-slate-400 hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              {/* Puedes repetir cards aquí dinámicamente */}
            </div>

            {/* 💻 DESKTOP - TABLA */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full table-fixed text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="w-[28%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="hidden lg:table-cell w-[14%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      ID Fiscal
                    </th>
                    <th className="w-[16%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Saldo Pendiente
                    </th>
                    <th className="w-[14%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Estado de Riesgo
                    </th>
                    <th className="w-[18%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Última Gestión
                    </th>
                    <th className="w-[10%] px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border-color dark:divide-gray-800">
                  {/* ROW 1 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            alt="Tech Cloud"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0jCiXy1zhK_3vcSRGQNwmkHqgGWrp8-Ssizim5DrBt9qibXBbu9VdMwGgrMahE7fXWyp5lsU9b1vgMOzfZIJo5PH1dHJiNeB0UUbNt6DRTnld0zdN-gIAnoDHImQjJoS3Dlj3i3Ul84Y1eubbPbuurg1j77zNiTGJNbgYrWXVvNfmybPR0XUB14FlNCqcg9fm17WkzvX5bnARNdYSSbjyRh5D7EiG6ljbii3kG4FS-6D0e-4vF5DkzkqhRk5NBrlJsKnAcLlnIo"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate">
                            Tech Cloud Solutions
                          </p>
                          <p className="text-xs text-[#64748b] truncate">
                            cloud@techsolutions.com
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="hidden lg:table-cell px-4 lg:px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 truncate">
                      TCS-8822934-A
                    </td>

                    <td className="px-4 lg:px-6 py-4">
                      <p className="text-sm font-bold truncate">$15,400.00</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase truncate">
                        2 facturas vencidas
                      </p>
                    </td>

                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 shrink-0"></span>
                        <span className="text-xs font-bold text-green-700 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full whitespace-nowrap">
                          Bajo
                        </span>
                      </div>
                    </td>

                    <td className="px-4 lg:px-6 py-4 text-sm text-[#64748b]">
                      <div className="flex flex-col min-w-0">
                        <span className="truncate">Correo recordatorio</span>
                        <span className="text-[10px] font-medium italic truncate">
                          Hace 2 días
                        </span>
                      </div>
                    </td>

                    <td className="px-4 lg:px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            mail
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* ROW 2 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            alt="Bio Medics"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzizCoFHmxH22xE-yMY9AKPePrgc47w95Ws1K65gAq8AcSvAFn5kV6hLg-eSj761CJ9raPHoiOWhjhLeI0Tt_AHLeODaHrho5bXOBTPBPj6AIpVkdsSPIcRCzBPRIWkS2LyRIm_EnI9mbeqWLuCa-7O9PLkEkeHGK3jEkDk_1B6K9-AxbJoPwnvWuXVlOKIeBD0cHFyuVLMlY16wMMsFNvvNu92KZZEHM7Y0NajP08obZ-S49jIniJh30kfVWJg08FEeafOCJoDTfw"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold truncate">
                            BioMedics Lab
                          </p>
                          <p className="text-xs text-[#64748b] truncate">
                            billing@biomedics.mx
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="hidden lg:table-cell px-4 lg:px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 truncate">
                      BML-2938421-B
                    </td>

                    <td className="px-4 lg:px-6 py-4">
                      <p className="text-sm font-bold truncate">$42,250.00</p>
                      <p className="text-[10px] text-orange-400 font-bold uppercase truncate">
                        45 días de retraso
                      </p>
                    </td>

                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span className="text-xs font-bold text-orange-700 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-full whitespace-nowrap">
                          Medio
                        </span>
                      </div>
                    </td>

                    <td className="px-4 lg:px-6 py-4 text-sm text-[#64748b]">
                      <div className="flex flex-col min-w-0">
                        <span className="truncate">Llamada telefónica</span>
                        <span className="text-[10px] font-medium italic truncate">
                          Ayer
                        </span>
                      </div>
                    </td>

                    <td className="px-4 lg:px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            phone
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
