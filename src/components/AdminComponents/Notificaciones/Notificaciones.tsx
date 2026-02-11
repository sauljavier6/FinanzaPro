export default function Notificaciones() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* TEXTO */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Centro de Notificaciones
              </h2>
              <p className="text-[#4c669a] text-sm">
                Gestiona la actividad reciente de la cartera de clientes
              </p>
            </div>

            {/* BOTÓN */}
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-lg h-11 px-5 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">
                  done_all
                </span>
                <span className="truncate">Marcar todo como leído</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mb-8">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Efectividad hoy
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-green-600 dark:text-green-400">
                  92%
                </h4>
                <span className="text-xs text-green-600 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                  +4% vs ayer
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Facturas Vencidas
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
                  14
                </h4>
                <span className="text-xs text-amber-600 font-bold bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">
                  2 críticas
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Acciones Pendientes
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-primary">
                  08
                </h4>
                <button className="text-xs text-primary font-bold hover:underline">
                  Ir a tareas
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 overflow-hidden">
            <div className=" grid grid-cols-2 sm:flex border-b border-[#e7ebf3] dark:border-gray-800 md:px-4 gap-4 md:gap-8">
              <a className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 border-primary text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  list_alt
                </span>
                Todos
                <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full">
                  24
                </span>
              </a>

              <a className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 border-transparent text-[#4c669a] dark:text-gray-400">
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Pagos
              </a>

              <a className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 border-transparent text-[#4c669a] dark:text-gray-400">
                <span className="material-symbols-outlined text-[18px]">
                  event_busy
                </span>
                Vencimientos
              </a>

              <a className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 border-transparent text-[#4c669a] dark:text-gray-400">
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                Errores
              </a>
            </div>

            {/* */}
            <div className="flex flex-col divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {/* HOY */}
              <div className="bg-background-light/50 dark:bg-gray-800/30 px-6 py-3">
                <h3 className="text-[#0d121b] dark:text-white text-sm font-extrabold uppercase tracking-widest flex items-center gap-2">
                  <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                  Hoy
                </h3>
              </div>

              {/* ITEM */}
              <div className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/30 shrink-0 size-12 border border-green-100 dark:border-green-800">
                    <span className="material-symbols-outlined text-2xl">
                      check_circle
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold break-words">
                        Pago recibido de{" "}
                        <span className="text-primary">
                          Distribuidora Galaxia S.A.
                        </span>
                      </p>
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Éxito
                      </span>
                    </div>

                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      hace 5 min
                    </p>

                    <p className="text-[#4c669a] dark:text-gray-300 text-sm mt-2 leading-relaxed break-words">
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

                <div className="flex items-center w-full md:w-auto">
                  <button className="w-full md:w-auto h-9 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    Ver detalle
                  </button>
                </div>
              </div>

              {/* Puedes duplicar este bloque para los demás items */}
            </div>

            {/**/}
            <div className="p-6 bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 text-center">
              <button className="text-primary text-sm font-bold hover:underline">
                Cargar notificaciones anteriores
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
