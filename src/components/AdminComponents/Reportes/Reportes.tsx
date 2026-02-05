export default function Reportes() {


  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">

            <div className="flex flex-col-2 md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Centro de Reportes y Estadísticas
                </h2>
                <p className="text-sm text-[#4c669a]">
                  Monitoreo de indicadores clave y desempeño de cobranza
                  administrativa.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  download
                </span>
                Exportar Reporte General
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">
                  filter_list
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Filtros:
                </span>
              </div>
              <select className="text-sm font-semibold border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
                <option>Q3 - Julio - Septiembre</option>
                <option>Q2 - Abril - Junio</option>
                <option>Q1 - Enero - Marzo</option>
              </select>
              <select className="text-sm font-semibold border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
                <option>Año 2024</option>
                <option>Año 2023</option>
              </select>
              <select className="text-sm font-semibold border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
                <option>Todas las Sucursales</option>
                <option>Sucursal Norte</option>
                <option>Sucursal Centro</option>
                <option>Sucursal Sur</option>
              </select>
              <div className="ml-auto flex gap-2">
                <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Limpiar
                </button>
                <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  Aplicar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Eficiencia de Cobro
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold">94.2%</h3>
                    <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        trending_up
                      </span>{" "}
                      +2.4%
                    </span>
                  </div>
                  <div className="h-12 w-20 flex items-end gap-1">
                    <div className="w-2 bg-primary/20 h-[60%] rounded-full"></div>
                    <div className="w-2 bg-primary/40 h-[80%] rounded-full"></div>
                    <div className="w-2 bg-primary/60 h-[70%] rounded-full"></div>
                    <div className="w-2 bg-primary/80 h-[90%] rounded-full"></div>
                    <div className="w-2 bg-primary h-[100%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Antigüedad Promedio
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold">18 días</h3>
                    <span className="text-xs font-bold text-green-500 flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_downward
                      </span>{" "}
                      -3 d
                    </span>
                  </div>
                  <div className="h-10 w-20">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <path
                        d="M0 30 Q 25 35 50 15 T 100 5"
                        fill="none"
                        stroke="#135bec"
                        stroke-linecap="round"
                        stroke-width="3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Recuperación de Mora
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold">$1.2M</h3>
                    <span className="text-xs font-bold text-slate-400">
                      Meta: $1.5M
                    </span>
                  </div>
                  <div className="h-12 w-12 relative flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        className="text-slate-100 dark:text-slate-800"
                        cx="24"
                        cy="24"
                        fill="transparent"
                        r="20"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <circle
                        className="text-primary"
                        cx="24"
                        cy="24"
                        fill="transparent"
                        r="20"
                        stroke="currentColor"
                        stroke-dasharray="125.6"
                        stroke-dashoffset="30"
                        stroke-width="4"
                      ></circle>
                    </svg>
                    <span className="absolute text-[9px] font-bold">80%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Días Venta Pend. (DSO)
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold">42.5</h3>
                    <span className="text-xs font-bold text-red-500 flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]">
                        trending_up
                      </span>{" "}
                      +1.2
                    </span>
                  </div>
                  <div className="h-12 w-20 flex items-end gap-1">
                    <div className="w-2 bg-slate-200 h-[80%] rounded-full"></div>
                    <div className="w-2 bg-slate-200 h-[60%] rounded-full"></div>
                    <div className="w-2 bg-slate-200 h-[70%] rounded-full"></div>
                    <div className="w-2 bg-slate-200 h-[50%] rounded-full"></div>
                    <div className="w-2 bg-red-400 h-[90%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-bold">
                      Ingresos Reales vs. Proyección de Cobro
                    </h3>
                    <p className="text-sm text-slate-500">
                      Comparativa trimestral detallada
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-xs font-medium text-slate-500">
                        Real
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <span className="text-xs font-medium text-slate-500">
                        Proyección
                      </span>
                    </div>
                  </div>
                </div>
                <div className="h-[350px] relative mb-5">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-slate-400 font-bold">
                    <span>$2.0M</span>
                    <span>$1.5M</span>
                    <span>$1.0M</span>
                    <span>$0.5M</span>
                    <span>$0</span>
                  </div>
                  <div className="ml-10 h-full border-l border-b border-slate-100 dark:border-slate-800 relative">
                    <div className="absolute w-full top-1/4 border-t border-slate-100 dark:border-slate-800 border-dashed"></div>
                    <div className="absolute w-full top-2/4 border-t border-slate-100 dark:border-slate-800 border-dashed"></div>
                    <div className="absolute w-full top-3/4 border-t border-slate-100 dark:border-slate-800 border-dashed"></div>
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                      <path
                        d="M0 250 L 100 220 L 200 240 L 300 200 L 400 180 L 500 150 L 600 160"
                        fill="none"
                        stroke="#cbd5e1"
                        stroke-dasharray="8 4"
                        stroke-linecap="round"
                        stroke-width="3"
                      ></path>
                    </svg>
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                      <path
                        d="M0 280 L 100 240 L 200 210 L 300 190 L 400 150 L 500 110 L 600 80"
                        fill="none"
                        stroke="#135bec"
                        stroke-linecap="round"
                        stroke-width="4"
                      ></path>
                      <circle
                        cx="100"
                        cy="240"
                        fill="white"
                        r="4"
                        stroke="#135bec"
                        stroke-width="2"
                      ></circle>
                      <circle
                        cx="300"
                        cy="190"
                        fill="white"
                        r="4"
                        stroke="#135bec"
                        stroke-width="2"
                      ></circle>
                      <circle
                        cx="500"
                        cy="110"
                        fill="white"
                        r="4"
                        stroke="#135bec"
                        stroke-width="2"
                      ></circle>
                      <circle cx="600" cy="80" fill="#135bec" r="6"></circle>
                    </svg>
                  </div>
                  <div className="ml-10 mt-4 flex justify-between text-[11px] text-slate-400 font-bold">
                    <span>Enero</span>
                    <span>Febrero</span>
                    <span>Marzo</span>
                    <span>Abril</span>
                    <span>Mayo</span>
                    <span>Junio</span>
                    <span>Julio</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm p-8 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-bold">Composición de Cartera</h3>
                  <p className="text-sm text-slate-500">
                    Distribución por antigüedad
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 42 42">
                      <circle
                        cx="21"
                        cy="21"
                        fill="transparent"
                        r="15.915"
                        stroke="#135bec"
                        stroke-dasharray="60 40"
                        stroke-dashoffset="25"
                        stroke-width="5"
                      ></circle>
                      <circle
                        cx="21"
                        cy="21"
                        fill="transparent"
                        r="15.915"
                        stroke="#10b981"
                        stroke-dasharray="20 80"
                        stroke-dashoffset="65"
                        stroke-width="5"
                      ></circle>
                      <circle
                        cx="21"
                        cy="21"
                        fill="transparent"
                        r="15.915"
                        stroke="#f59e0b"
                        stroke-dasharray="15 85"
                        stroke-dashoffset="85"
                        stroke-width="5"
                      ></circle>
                      <circle
                        cx="21"
                        cy="21"
                        fill="transparent"
                        r="15.915"
                        stroke="#ef4444"
                        stroke-dasharray="5 95"
                        stroke-dashoffset="100"
                        stroke-width="5"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-extrabold">$2.4M</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        Total
                      </span>
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Vigente
                        </span>
                      </div>
                      <span className="text-sm font-bold">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          1-30 días
                        </span>
                      </div>
                      <span className="text-sm font-bold">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          31-60 días
                        </span>
                      </div>
                      <span className="text-sm font-bold">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          +90 días
                        </span>
                      </div>
                      <span className="text-sm font-bold">5%</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl border border-card-border dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-card-border dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-lg font-bold">Desempeño por Sucursal</h3>
                <button className="text-sm font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all">
                  Ver todos los detalles
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-800/50">
                    <tr>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Sucursal
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Monto Cobrado
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Eficiencia
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Tickets Críticos
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                        Tendencia
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-8 py-4">
                        <p className="text-sm font-bold">
                          Sucursal Ciudad de México
                        </p>
                        <p className="text-xs text-slate-500">Región Centro</p>
                      </td>
                      <td className="px-8 py-4 text-sm font-bold">$425,000</td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[92%]"></div>
                          </div>
                          <span className="text-xs font-bold">92%</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          12 alertas
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <span className="material-symbols-outlined text-green-500">
                          trending_up
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-8 py-4">
                        <p className="text-sm font-bold">Sucursal Monterrey</p>
                        <p className="text-xs text-slate-500">Región Norte</p>
                      </td>
                      <td className="px-8 py-4 text-sm font-bold">$380,000</td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[88%]"></div>
                          </div>
                          <span className="text-xs font-bold">88%</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                          24 alertas
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <span className="material-symbols-outlined text-red-500">
                          trending_down
                        </span>
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
