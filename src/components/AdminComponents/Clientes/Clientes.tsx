export default function Clientes() {

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
            
          {/* Header */}
          <div className="flex flex-col-1 md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Gestión de Clientes
              </h2>
              <p className="text-sm text-[#64748b] mt-1">
                Administra la cartera activa y gestiona recordatorios de cobro.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all">
              <span className="material-symbols-outlined text-[18px]">
                campaign
              </span>
              Enviar recordatorio masivo
            </button>
          </div>

            {/* Stats Cards */}
          <div className="flex gap-6 mb-8 overflow-x-auto flex-nowrap pb-3">
            <div className="w-full bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
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
              <p className="text-3xl font-extrabold">1,284</p>
            </div>

            <div className="w-full bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    warning
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Clientes con Deuda
              </p>
              <p className="text-3xl font-extrabold text-orange-600">342</p>
            </div>

            <div className="w-full bg-white dark:bg-[#161b2a] p-6 rounded-2xl border border-border-color dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl">
                  <span className="material-symbols-outlined block">
                    trending_up
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#64748b] mb-1">
                Tasa de Mora (%)
              </p>
              <p className="text-3xl font-extrabold text-red-600">12.4%</p>
            </div>
          </div>

            {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] p-5 rounded-xl border border-border-color dark:border-gray-800 shadow-sm mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Estado:
                </span>
                <div className="flex bg-slate-100 dark:bg-gray-800 p-1 rounded-xl">
                  <button className="px-4 py-1.5 text-xs font-bold bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    Todos
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                    Vigente
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                    Vencido
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                    Crítico
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Rango de Deuda:
                </span>
                <select className="bg-slate-100 dark:bg-gray-800 border-none rounded-xl text-xs font-bold py-2 px-4 focus:ring-0">
                  <option>Cualquier monto</option>
                  <option>$1 - $10,000</option>
                  <option>$10,001 - $50,000</option>
                  <option>+ $50,000</option>
                </select>
              </div>
              <button className="flex items-center gap-2 text-primary text-sm font-bold hover:underline ml-auto">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
                Más filtros
              </button>
            </div>
          </div>

            {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] rounded-2xl border border-border-color dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800">
                      ID Fiscal
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800">
                      Saldo Pendiente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800">
                      Estado de Riesgo
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800">
                      Última Gestión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-border-color dark:border-gray-800 text-right">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color dark:divide-gray-800">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                          <img
                            alt="Tech Cloud"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0jCiXy1zhK_3vcSRGQNwmkHqgGWrp8-Ssizim5DrBt9qibXBbu9VdMwGgrMahE7fXWyp5lsU9b1vgMOzfZIJo5PH1dHJiNeB0UUbNt6DRTnld0zdN-gIAnoDHImQjJoS3Dlj3i3Ul84Y1eubbPbuurg1j77zNiTGJNbgYrWXVvNfmybPR0XUB14FlNCqcg9fm17WkzvX5bnARNdYSSbjyRh5D7EiG6ljbii3kG4FS-6D0e-4vF5DkzkqhRk5NBrlJsKnAcLlnIo"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold">
                            Tech Cloud Solutions
                          </p>
                          <p className="text-xs text-[#64748b]">
                            cloud@techsolutions.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      TCS-8822934-A
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold">$15,400.00</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">
                        2 facturas vencidas
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="status-dot bg-green-500"></span>
                        <span className="text-xs font-bold text-green-700 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full">
                          Bajo
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748b]">
                      <div className="flex flex-col">
                        <span>Correo recordatorio</span>
                        <span className="text-[10px] font-medium italic">
                          Hace 2 días
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
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
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                          <img
                            alt="Bio Medics"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzizCoFHmxH22xE-yMY9AKPePrgc47w95Ws1K65gAq8AcSvAFn5kV6hLg-eSj761CJ9raPHoiOWhjhLeI0Tt_AHLeODaHrho5bXOBTPBPj6AIpVkdsSPIcRCzBPRIWkS2LyRIm_EnI9mbeqWLuCa-7O9PLkEkeHGK3jEkDk_1B6K9-AxbJoPwnvWuXVlOKIeBD0cHFyuVLMlY16wMMsFNvvNu92KZZEHM7Y0NajP08obZ-S49jIniJh30kfVWJg08FEeafOCJoDTfw"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold">BioMedics Lab</p>
                          <p className="text-xs text-[#64748b]">
                            billing@biomedics.mx
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      BML-2938421-B
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold">$42,250.00</p>
                      <p className="text-[10px] text-orange-400 font-bold uppercase">
                        45 días de retraso
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="status-dot bg-orange-500"></span>
                        <span className="text-xs font-bold text-orange-700 bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1 rounded-full">
                          Medio
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748b]">
                      <div className="flex flex-col">
                        <span>Llamada telefónica</span>
                        <span className="text-[10px] font-medium italic">
                          Ayer
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
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
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center overflow-hidden">
                          <img
                            alt="Global Log"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDheHNvomfn8SnioOE1-LbwffGHJaza6RArJkX1HNC9mYQ_ZWfp6xXwiQuJY6N6_ceSYQqjmHr9ExLdqyP6JpS6fNFfVgL4n7IcIIwwV2GR01cSGpEE-4H8s83nyaOwUpCXYrTHVLs9jubWYKl-DsMwUkSUyaB4q3L_fQkQtMLGLij-n3-9V0VYP9-sXIaDzgksEa9LJFzbJ7m4B1l2GKCtVid9xCQbhY_ZZ3Bk9JxbQdQGmSeRxQPmq3Ka_rODGgdjUTuaN747OhW2"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold">
                            Global Logística S.A.
                          </p>
                          <p className="text-xs text-[#64748b]">
                            admin@globallog.com
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                      GLS-0019234-K
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-red-600">
                        $128,900.00
                      </p>
                      <p className="text-[10px] text-red-500 font-bold uppercase">
                        Pre-jurídico
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="status-dot bg-red-600"></span>
                        <span className="text-xs font-bold text-red-700 bg-red-50 dark:bg-red-900/20 px-2.5 py-1 rounded-full">
                          Crítico
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#64748b]">
                      <div className="flex flex-col">
                        <span>Visita domiciliaria</span>
                        <span className="text-[10px] font-medium italic">
                          Hace 1 semana
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">
                            description
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
            <div className="px-6 py-4 border-t border-border-color dark:border-gray-800 flex items-center justify-between">
              <p className="text-sm text-slate-500 font-medium">
                Mostrando{" "}
                <span className="text-slate-900 dark:text-white font-bold">
                  1-10
                </span>{" "}
                de{" "}
                <span className="text-slate-900 dark:text-white font-bold">
                  1,284
                </span>{" "}
                clientes
              </p>
              <div className="flex items-center gap-2">
                <button className="p-1.5 border border-border-color dark:border-gray-700 rounded-lg text-slate-400 hover:bg-slate-50 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_left
                  </span>
                </button>
                <button className="p-1.5 border border-border-color dark:border-gray-700 rounded-lg text-slate-400 hover:bg-slate-50 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
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
