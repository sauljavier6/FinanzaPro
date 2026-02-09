export default function Notificaciones() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0d121b] dark:text-white">
                Centro de Notificaciones
              </h2>
              <p className="text-[#4c669a] dark:text-gray-400 text-xs sm:text-sm max-w-xl">
                Gestiona tus avisos de cobranza y mantente al día con tus
                compromisos.
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 h-10 sm:h-11 px-4 sm:px-5 rounded-lg bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 ">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  done_all
                </span>
                <span className="truncate">Marcar todo como leído</span>
              </button>
            </div>
          </div> 

          {/* FACTURAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 ">
            <div className="bg-white dark:bg-background-dark p-5 sm:p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Facturas pagadas
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl sm:text-3xl font-black text-green-600 dark:text-green-400">
                  92%
                </h4>
                <span className="text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                  +4% vs ayer
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-5 sm:p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Facturas vencidas
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">
                  14
                </h4>
                <span className="text-[10px] sm:text-xs text-amber-600 font-bold bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">
                  2 críticas
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-5 sm:p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                Acciones pendientes
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl sm:text-3xl font-black text-primary">
                  08
                </h4>
                <button className="text-[10px] sm:text-xs text-primary font-bold hover:underline">
                  Ir a tareas
                </button>
              </div>
            </div>
          </div>

          {/* Alertas */}
          <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:mb-8 sm:p-6 lg:p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <span className="material-symbols-outlined text-xl">
                  settings_suggest
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                Preferencias de Alertas
              </h3>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Personaliza dónde y cómo prefieres recibir nuestras
                comunicaciones de cobro.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-colors hover:border-primary/30 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">
                      mail
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Email
                    </span>
                  </div>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input checked type="checkbox" className="peer sr-only" />
                    <div className="relative h-6 w-11 rounded-full bg-slate-200 transition-all peer-checked:bg-primary dark:bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-colors hover:border-primary/30 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">
                      sms
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      SMS / Móvil
                    </span>
                  </div>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input checked type="checkbox" className="peer sr-only" />
                    <div className="relative h-6 w-11 rounded-full bg-slate-200 transition-all peer-checked:bg-primary dark:bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-colors hover:border-primary/30 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-400">
                      app_shortcut
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Push App
                    </span>
                  </div>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="relative h-6 w-11 rounded-full bg-slate-200 transition-all peer-checked:bg-primary dark:bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-center pt-4 sm:justify-end">
                <button className="w-full rounded-lg bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110 sm:w-auto">
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="mb-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 border-b border-[#e7ebf3] dark:border-gray-800 px-2 md:px-4 py-2">
              <a
                href="#"
                className="flex items-center gap-2 border-b-4 border-b-primary text-primary pb-2 pt-1 justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">
                  list_alt
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">Todos</p>
                <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded-full">
                  24
                </span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 border-b-4 border-b-transparent text-[#4c669a] dark:text-gray-400 pb-2 pt-1 justify-center hover:text-[#0d121b] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">Pagos</p>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 border-b-4 border-b-transparent text-[#4c669a] dark:text-gray-400 pb-2 pt-1 justify-center hover:text-[#0d121b] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  event_busy
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">
                  Vencimientos
                </p>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 border-b-4 border-b-transparent text-[#4c669a] dark:text-gray-400 pb-2 pt-1 justify-center hover:text-[#0d121b] dark:hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  error
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">Errores</p>
              </a>
            </div>

            <div className="flex flex-col divide-y divide-[#e7ebf3] dark:divide-gray-800">
              <div className="bg-background-light/50 dark:bg-gray-800/30 px-6 py-3">
                <h3 className="text-[#0d121b] dark:text-white text-sm font-extrabold uppercase tracking-widest flex items-center gap-2">
                  <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                  Hoy
                </h3>
              </div>

              <div className="group flex flex-col md:flex-row gap-4 px-6 py-5 bg-white dark:bg-background-dark hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined text-2xl">
                      check_circle
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                        Pago recibido de{" "}
                        <span className="text-primary">
                          Distribuidora Galaxia S.A.
                        </span>
                      </p>
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Éxito
                      </span>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 5 min
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm leading-relaxed mt-1">
                      El abono por{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        $1,500.00 USD
                      </span>{" "}
                      correspondiente a la factura{" "}
                      <span className="underline">#F-2023-90</span> ha sido
                      procesado exitosamente vía transferencia bancaria.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0 mt-3 md:mt-0">
                  <button className="flex justify-center items-center rounded-lg px-4 py-2 bg-primary text-white text-sm font-bold hover:bg-blue-700 w-full md:w-fit transition-colors">
                    Ver detalle
                  </button>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row gap-4 px-6 py-5 bg-white dark:bg-background-dark hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex items-center justify-center shrink-0 size-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800 text-amber-600 dark:text-amber-400">
                    <span className="material-symbols-outlined text-2xl">
                      warning
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                        Factura vencida de{" "}
                        <span className="text-primary">
                          Logística Express Norte
                        </span>
                      </p>
                      <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Alerta
                      </span>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 2 horas
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm leading-relaxed mt-1">
                      La factura{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        #F-2023-85
                      </span>{" "}
                      por un monto de $4,200.00 ha superado la fecha límite por
                      3 días. Se recomienda gestión inmediata.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0 mt-3 md:mt-0">
                  <button className="flex justify-center items-center rounded-lg px-4 py-2 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 w-full md:w-fit transition-colors">
                    Gestionar
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 text-center">
                <button className="text-primary text-sm font-bold hover:underline">
                  Cargar notificaciones anteriores
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
