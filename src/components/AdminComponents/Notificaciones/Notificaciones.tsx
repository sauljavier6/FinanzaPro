export default function Notificaciones() {
  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Centro de Notificaciones
              </h2>
              <p className="text-[#4c669a] text-sm">
                Gestiona la actividad reciente de la cartera de clientes
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-5 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">
                  done_all
                </span>
                <span className="truncate">Marcar todo como leído</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Efectividad hoy
              </p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-black text-green-600 dark:text-green-400">
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
                <h4 className="text-2xl font-black text-amber-600 dark:text-amber-400">
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
                <h4 className="text-2xl font-black text-primary">08</h4>
                <button className="text-xs text-primary font-bold hover:underline">
                  Ir a tareas
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 overflow-hidden">
            <div className="flex border-b border-[#e7ebf3] dark:border-gray-800 px-4 gap-4 md:gap-8 overflow-x-auto no-scrollbar">
              <a
                className="flex items-center gap-2 border-b-[3px] border-b-primary text-primary pb-4 pt-4 whitespace-nowrap"
                href="#"
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
                className="flex items-center gap-2 border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-4 pt-4 hover:text-[#0d121b] dark:hover:text-white whitespace-nowrap transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  check_circle
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">Pagos</p>
              </a>
              <a
                className="flex items-center gap-2 border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-4 pt-4 hover:text-[#0d121b] dark:hover:text-white whitespace-nowrap transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  event_busy
                </span>
                <p className="text-sm font-bold tracking-[0.015em]">
                  Vencimientos
                </p>
              </a>
              <a
                className="flex items-center gap-2 border-b-[3px] border-b-transparent text-[#4c669a] dark:text-gray-400 pb-4 pt-4 hover:text-[#0d121b] dark:hover:text-white whitespace-nowrap transition-colors"
                href="#"
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

              <div className="group relative flex flex-col-2 md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/30 shrink-0 size-12 border border-green-100 dark:border-green-800">
                    <span className="material-symbols-outlined text-2xl">
                      check_circle
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
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
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 5 min
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm font-normal mt-2 leading-relaxed">
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
                <div className="flex items-center shrink-0">
                  <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors w-full md:w-fit">
                    <span className="truncate">Ver detalle</span>
                  </button>
                </div>
              </div>

              <div className="group relative flex flex-col-2 md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-amber-600 dark:text-amber-400 flex items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/30 shrink-0 size-12 border border-amber-100 dark:border-amber-800">
                    <span className="material-symbols-outlined text-2xl">
                      warning
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
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
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 2 horas
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm font-normal mt-2 leading-relaxed">
                      La factura{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        #F-2023-85
                      </span>{" "}
                      por un monto de $4,200.00 ha superado la fecha límite por
                      3 días. Se recomienda gestión inmediata.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full md:w-fit">
                    <span className="truncate">Gestionar</span>
                  </button>
                </div>
              </div>

              <div className="group relative flex flex-col-2 md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-primary flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 shrink-0 size-12 border border-blue-100 dark:border-blue-800">
                    <span className="material-symbols-outlined text-2xl">
                      event_available
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                        Nueva promesa de pago registrada
                      </p>
                      <span className="bg-blue-100 dark:bg-blue-900/50 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Info
                      </span>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 4 horas
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm font-normal mt-2 leading-relaxed">
                      Cliente{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        Alimentos Saludables S.A.
                      </span>{" "}
                      se comprometió a liquidar el total de su deuda para el
                      próximo viernes 27 de Octubre.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full md:w-fit">
                    <span className="truncate">Ver detalle</span>
                  </button>
                </div>
              </div>

              <div className="bg-background-light/50 dark:bg-gray-800/30 px-6 py-3 border-t border-[#e7ebf3] dark:border-gray-800">
                <h3 className="text-[#4c669a] dark:text-gray-400 text-sm font-extrabold uppercase tracking-widest">
                  Ayer
                </h3>
              </div>

              <div className="group relative flex flex-col-2 md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-red-600 dark:text-red-400 flex items-center justify-center rounded-xl bg-red-50 dark:bg-red-900/30 shrink-0 size-12 border border-red-100 dark:border-red-800">
                    <span className="material-symbols-outlined text-2xl">
                      error_outline
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                        Error en envío de recordatorio
                      </p>
                      <span className="bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Error
                      </span>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 1 día
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm font-normal mt-2 leading-relaxed">
                      No se pudo entregar la notificación de cobro al
                      destinatario{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        admin@serviciosindustriales.net
                      </span>
                      . Error de servidor: 550 Mailbox unavailable.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full md:w-fit">
                    <span className="truncate">Reintentar</span>
                  </button>
                </div>
              </div>

              <div className="group relative flex flex-col-2 md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/30 shrink-0 size-12 border border-green-100 dark:border-green-800">
                    <span className="material-symbols-outlined text-2xl">
                      check_circle
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">
                        Pago recibido de{" "}
                        <span className="text-primary">
                          Inmobiliaria del Centro
                        </span>
                      </p>
                      <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Éxito
                      </span>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>{" "}
                      hace 1 día
                    </p>
                    <p className="text-[#4c669a] dark:text-gray-300 text-sm font-normal mt-2 leading-relaxed">
                      El abono por{" "}
                      <span className="font-bold text-[#0d121b] dark:text-white">
                        $850.00 USD
                      </span>{" "}
                      ha sido conciliado automáticamente por el sistema.
                    </p>
                  </div>
                </div>
                <div className="flex items-center shrink-0">
                  <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-background-light dark:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-full md:w-fit">
                    <span className="truncate">Ver detalle</span>
                  </button>
                </div>
              </div>
            </div>

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
