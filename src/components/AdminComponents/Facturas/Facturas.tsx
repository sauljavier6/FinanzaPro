export default function Facturas() {
  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Módulo de Facturas
              </h2>
              <p className="text-[#4c669a] text-sm">
                Administre y supervise todas las facturas emitidas por el
                sistema.
              </p>
            </div>

            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Nueva Factura
            </button>
          </div>

          {/* */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Total Facturado
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold break-words">
                  $2,450,000
                </p>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  Este Mes
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Por Cobrar
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold text-orange-600 break-words">
                  $840,320
                </p>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  34 Facturas
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Pagadas
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold text-green-600 break-words">
                  $1,520,000
                </p>
                <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg whitespace-nowrap">
                  +12.5%
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#161b2a] p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-xs font-bold text-[#4c669a] uppercase tracking-wider mb-2">
                Anuladas
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <p className="text-xl md:text-2xl font-extrabold text-gray-500 break-words">
                  $89,680
                </p>
                <span className="text-xs font-bold text-gray-500 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg whitespace-nowrap">
                  0.4%
                </span>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-white dark:bg-[#161b2a] rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Cliente */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Nombre del Cliente
                </label>

                <div className="bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                  <input
                    className="w-full bg-transparent py-2 text-sm outline-none border-0 focus:ring-0"
                    placeholder="Ej. Tech Cloud"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Rango de Fechas
                </label>
                <div className="flex items-center bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <span className="material-symbols-outlined text-[18px] text-gray-400 mr-2 shrink-0">
                    calendar_today
                  </span>
                  <input
                    className="w-full bg-transparent py-2 text-sm border-0 outline-none focus:ring-0"
                    placeholder="01/10/2023 - 31/10/2023"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#4c669a] uppercase">
                  Estado de Pago
                </label>

                <div className="bg-[#f0f2f5] dark:bg-gray-800 rounded-lg px-4 transition-all focus-within:ring-2 focus-within:ring-primary/20 relative">
                  <select className="w-full bg-transparent py-2 text-sm outline-none border-0 focus:ring-0 appearance-none cursor-pointer">
                    <option>Todos los estados</option>
                    <option>Pagada</option>
                    <option>Pendiente</option>
                    <option>Vencida</option>
                    <option>Anulada</option>
                  </select>

                  {/* Flecha personalizada */}
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-end">
                <button className="w-full bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/20 transition-all">
                  Filtrar
                </button>
                <button
                  className="w-full sm:w-auto p-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Limpiar filtros"
                ></button>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* ================= MOBILE (Cards) ================= */}
            <div className="lg:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {[
                {
                  id: "#F-98552",
                  client: "Tech Cloud Solutions",
                  initials: "TC",
                  color: "bg-blue-100 text-primary",
                  amount: "$15,400.00",
                  status: "Pagada",
                  statusColor:
                    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                  issue: "12 Oct, 2023",
                  due: "12 Nov, 2023",
                },
                {
                  id: "#F-98553",
                  client: "BioMedics Lab",
                  initials: "BM",
                  color: "bg-purple-100 text-purple-600",
                  amount: "$4,250.00",
                  status: "Pendiente",
                  statusColor:
                    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                  issue: "14 Oct, 2023",
                  due: "14 Nov, 2023",
                },
                {
                  id: "#F-98421",
                  client: "Corporativo Global",
                  initials: "CG",
                  color: "bg-red-100 text-red-600",
                  amount: "$45,200.00",
                  status: "Vencida",
                  statusColor:
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                  issue: "20 Sep, 2023",
                  due: "20 Oct, 2023",
                },
              ].map((invoice, index) => (
                <div key={index} className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-bold text-primary">
                        {invoice.id}
                      </p>
                      <p className="text-xs text-[#4c669a]">
                        Emisión: {invoice.issue}
                      </p>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${invoice.statusColor}`}
                    >
                      {invoice.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 rounded flex items-center justify-center font-bold text-[10px] ${invoice.color}`}
                    >
                      {invoice.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{invoice.client}</p>
                      <p className="text-xs text-[#4c669a]">
                        Vence: {invoice.due}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-[#e7ebf3] dark:border-gray-800">
                    <p className="text-sm font-bold">{invoice.amount}</p>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= DESKTOP (Tabla Original) ================= */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Nro. Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto Total
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>

                {/* 👇 Aquí dejas tu tbody EXACTAMENTE como lo tenías */}
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98552
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center text-primary font-bold text-[10px]">
                          TC
                        </div>
                        <p className="text-sm font-bold">
                          Tech Cloud Solutions
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      12 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      12 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$15,400.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                        Pagada
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98553
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-[10px]">
                          BM
                        </div>
                        <p className="text-sm font-bold">BioMedics Lab</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      14 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      14 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$4,250.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98421
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-[10px]">
                          CG
                        </div>
                        <p className="text-sm font-bold">Corporativo Global</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      20 Sep, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      20 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$45,200.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 uppercase">
                        Vencida
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98555
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-[10px]">
                          AA
                        </div>
                        <p className="text-sm font-bold">Alpha Agency</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      15 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      15 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$22,100.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase">
                        Pagada
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <a
                        className="text-sm font-bold text-primary hover:underline"
                        href="#"
                      >
                        #F-98556
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">
                          LE
                        </div>
                        <p className="text-sm font-bold">Logística Express</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      16 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      16 Nov, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$12,800.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 uppercase">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="px-4 md:px-6 py-4 border-t border-[#e7ebf3] dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-[#4c669a] text-center md:text-left">
                Mostrando <span className="font-bold">1-10</span> de{" "}
                <span className="font-bold">142</span> facturas
              </p>

              <div className="flex items-center justify-center gap-2">
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

                <button className="h-8 w-8 rounded text-[#4c669a] text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-800">
                  3
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
