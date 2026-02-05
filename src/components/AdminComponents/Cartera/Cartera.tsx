interface CarteraProps {
  onSuccess: (facturaId: string) => void;
}

export default function Cartera({ onSuccess }: CarteraProps) {

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">

          {/* Page Title and Actions */}
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Gestión de Cartera
              </h2> 
              <p className="text-[#4c669a] text-sm">
                Monitoreo y seguimiento de saldos pendientes por cliente
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#0d121b] dark:text-white text-sm font-bold shadow-sm hover:bg-[#f8f9fc] transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                <span>Exportar</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  campaign
                </span>
                <span>Enviar recordatorio masivo</span>
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="flex gap-6 mb-8 overflow-x-auto flex-nowrap pb-3">
            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Cartera Total
                </p>
                <span className="material-symbols-outlined text-primary">
                  account_balance
                </span>
              </div>
              <p className="text-[#0d121b] dark:text-white text-3xl font-bold tracking-tight">
                $450,230.00
              </p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#07883b] text-sm">
                  trending_up
                </span>
                <p className="text-[#07883b] text-sm font-bold">
                  +2.5% vs mes anterior
                </p>
              </div>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Monto Vencido
                </p>
                <span className="material-symbols-outlined text-orange-500">
                  warning
                </span>
              </div>
              <p className="text-[#0d121b] dark:text-white text-3xl font-bold tracking-tight">
                $82,150.00
              </p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-orange-500 text-sm">
                  trending_up
                </span>
                <p className="text-orange-500 text-sm font-bold">
                  +1.2% de incremento
                </p>
              </div>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex justify-between items-start">
                <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Casos Críticos
                </p>
                <span className="material-symbols-outlined text-red-600">
                  error
                </span>
              </div>
              <p className="text-[#0d121b] dark:text-white text-3xl font-bold tracking-tight">
                24
              </p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#07883b] text-sm">
                  trending_down
                </span>
                <p className="text-[#07883b] text-sm font-bold">
                  -5.0% reducción
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-[#161b2a] border border-[#cfd7e7] dark:border-gray-800 rounded-xl p-2 mb-6 flex flex-col md:flex-row gap-4 items-center shadow-sm">
            <div className="flex-1 w-full relative">
              <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-xl pointer-events-none">
                search
              </span>
              <input
                className="w-full h-11 pl-12 pr-4 bg-[#f0f2f7] dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-[#4c669a] dark:text-white"
                placeholder="Buscar por nombre de cliente o ID..."
                type="text"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <button className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 px-4 text-xs font-bold text-[#0d121b] dark:text-white border border-transparent hover:border-primary/30 transition-all">
                <span>Todos</span>
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#e7f5ed] px-4 text-xs font-bold text-[#07883b] border border-[#07883b]/20">
                <span>Vigente</span>
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#fff9eb] px-4 text-xs font-bold text-orange-600 border border-orange-200">
                <span>Vencido</span>
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>
              <button className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-red-50 px-4 text-xs font-bold text-red-600 border border-red-100">
                <span>Crítico</span>
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white dark:bg-[#161b2a] border border-[#cfd7e7] dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#cfd7e7] dark:border-gray-800 bg-[#f8f9fc] dark:bg-gray-800/50">
                    <th className="p-4 text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="p-4 text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider">
                      Monto Total
                    </th>
                    <th className="p-4 text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider text-center">
                      Días de Atraso
                    </th>
                    <th className="p-4 text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="p-4 text-xs font-bold text-[#4c669a] dark:text-gray-400 uppercase tracking-wider text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          AM
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-[#0d121b] dark:text-white">
                            Alicia Martínez
                          </span>
                          <span className="text-xs text-[#4c669a]">
                            ID: 2490-A
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-bold">$12,450.00</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium text-red-600">
                        45 días
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                        Crítico
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          title="Enviar Recordatorio"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            send
                          </span>
                        </button>
                        <button
                        onClick={() => onSuccess('ID: 2490-A')}
                          className="p-2 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                          title="Ver Detalle"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                          JR
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-[#0d121b] dark:text-white">
                            Jorge Rodríguez
                          </span>
                          <span className="text-xs text-[#4c669a]">
                            ID: 1102-C
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-bold">$3,120.50</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium text-orange-600">
                        12 días
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#fff9eb] text-orange-600 border border-orange-200">
                        Vencido
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          title="Enviar Recordatorio"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            send
                          </span>
                        </button>
                        <button
                          className="p-2 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                          title="Ver Detalle"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                          CP
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-[#0d121b] dark:text-white">
                            Corporación Prisma
                          </span>
                          <span className="text-xs text-[#4c669a]">
                            ID: 8831-P
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-bold">$45,000.00</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium text-[#4c669a]">
                        0 días
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#e7f5ed] text-[#07883b] border border-[#07883b]/20">
                        Vigente
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          title="Enviar Recordatorio"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            send
                          </span>
                        </button>
                        <button
                          className="p-2 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                          title="Ver Detalle"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            visibility
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">
                          LM
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-[#0d121b] dark:text-white">
                            Lucía Morales
                          </span>
                          <span className="text-xs text-[#4c669a]">
                            ID: 5542-M
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-bold">$840.00</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-medium text-red-600">
                        62 días
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                        Crítico
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          title="Enviar Recordatorio"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            send
                          </span>
                        </button>
                        <button
                          className="p-2 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-[#cfd7e7] transition-all"
                          title="Ver Detalle"
                        >
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
            <div className="p-4 border-t border-[#cfd7e7] dark:border-gray-800 bg-[#f8f9fc] dark:bg-gray-800/30 flex items-center justify-between">
              <p className="text-xs text-[#4c669a]">
                Mostrando{" "}
                <span className="font-bold text-[#0d121b] dark:text-white">
                  4
                </span>{" "}
                de{" "}
                <span className="font-bold text-[#0d121b] dark:text-white">
                  128
                </span>{" "}
                clientes
              </p>
              <div className="flex gap-2">
                <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#4c669a] cursor-not-allowed opacity-50">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_left
                  </span>
                </button>
                <button className="size-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs">
                  1
                </button>
                <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#4c669a] hover:bg-[#e7ebf3] transition-colors font-bold text-xs">
                  2
                </button>
                <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#4c669a] hover:bg-[#e7ebf3] transition-colors font-bold text-xs">
                  3
                </button>
                <button className="size-8 flex items-center justify-center rounded bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 text-[#4c669a] hover:bg-[#e7ebf3] transition-colors">
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
