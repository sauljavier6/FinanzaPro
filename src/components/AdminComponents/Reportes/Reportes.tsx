import { Link } from "react-router-dom";

export default function Reportes() {

  return (

    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Centro de Reportes y Biblioteca de Datos
              </h2>
              <p className="text-sm text-[#64748b] mt-1 break-words">
                Selecciona un análisis detallado para comenzar.
              </p>
            </div>
          </div>

          <div className="">
            <div className="lg:col-span-8 bg-white p-8 rounded-xl shadow-sm border-none flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
                  </div>
                  <h3 className="text-xl font-bold">Reportes Financieros</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link
                    to="/admin/reportes/carteravencida"
                    className="group p-5 rounded-xl border border-primary/20 bg-primary-container/30 hover:bg-primary-container transition-all flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-bold text-primary">Cartera vencida</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Análisis de saldos vencidos y clientes con deuda para gestión de cobranza.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    to="/admin/reportes/estadocuentas"
                    className="group p-5 rounded-xl border border-primary/20 bg-primary-container/30 hover:bg-primary-container transition-all flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-bold text-primary">Estado de cuentas Clientes</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Visualiza saldos, movimientos y antigüedad de cuentas por cliente.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    to="/admin/reportes/ventas"
                    className="group p-5 rounded-xl border border-primary/20 bg-primary-container/30 hover:bg-primary-container transition-all flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-bold text-primary">Reporte Ventas</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Multi-dimensional fiscal breakdown and trend modeling.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    to="/admin/reportes/graficas"
                    className="group p-5 rounded-xl border border-primary/20 bg-primary-container/30 hover:bg-primary-container transition-all flex justify-between items-start"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-bold text-primary">Graficas de resultados</span>
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Multi-dimensional fiscal breakdown and trend modeling.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center lg:hidden z-[100]">
        <span className="material-symbols-outlined" data-icon="search">search</span>
      </button>
    </div>
  );
}
