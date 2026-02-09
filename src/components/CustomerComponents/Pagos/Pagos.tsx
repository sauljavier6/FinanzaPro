export default function Pagos() {
  const facturas = [
    {
      fecha: "12 Oct 2023",
      factura: "FACT-2023-1102",
      metodo: "Tarjeta (**** 4231)",
      estado: "Confirmado",
      estadoColor: "bg-green-100 text-green-700",
      monto: "$3,200.00",
    },
    {
      fecha: "05 Oct 2023",
      factura: "FACT-2023-1089",
      metodo: "SPEI",
      estado: "Confirmado",
      estadoColor: "bg-green-100 text-green-700",
      monto: "$5,400.00",
    },
    {
      fecha: "14 Oct 2023",
      factura: "FACT-2023-1205",
      metodo: "OXXO",
      estado: "En Proceso",
      estadoColor: "bg-blue-100 text-blue-700",
      monto: "$1,850.00",
    },
  ];
  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:justify-between sm:items-end">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Historial de Pagos
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Consulta y descarga los comprobantes de tus transacciones
                realizadas.
              </p>
            </div>

            <button className="w-full sm:w-auto bg-primary text-white px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">
                calendar_today
              </span>
              Descargar Reporte Anual
            </button>
          </div>

          {/* Totales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-10">
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Total Pagado este Año
              </p>
              <p className="text-2xl sm:text-3xl font-black text-primary">
                $45,800.00
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-green-600 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>Ejecutado a tiempo</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Último Pago
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                  $3,200.00
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  12 Oct 2023
                </p>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-blue-500 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <span>Hace 5 días</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Método de Pago más usado
              </p>
              <div className="flex items-center gap-3">
                <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                  Tarjeta
                </p>
                <span className="material-symbols-outlined text-gray-400">
                  credit_card
                </span>
              </div>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-sm">
                  history
                </span>
                <span>85% de tus transacciones</span>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:flex-1">
                <div className="relative w-full sm:w-64">
                  <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg pointer-events-none">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Buscar por factura..."
                    className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm w-full focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex items-center gap-2 border border-[#cfd7e7] dark:border-gray-700 rounded-lg px-3 py-2 bg-background-light dark:bg-gray-800 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-gray-400 text-sm">
                    date_range
                  </span>
                  <input
                    type="text"
                    placeholder="Rango de fechas"
                    className="bg-transparent border-none p-0 text-sm focus:ring-0 w-full sm:w-32 outline-none"
                  />
                </div>
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                Filtros
              </button>
            </div>

            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {facturas?.map((p) => (
                <div key={p.factura} className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{p.factura}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${p.estadoColor}`}
                    >
                      {p.estado}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500">Fecha: {p.fecha}</div>
                  <div className="text-xs text-gray-500">
                    Método: {p.metodo}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-black">{p.monto}</span>
                    <button className="text-primary font-bold text-sm">
                      Comprobante
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-gray-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Fecha de Pago
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Método
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-center">
                      Comprobante
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4">12 Oct 2023</td>
                    <td className="px-6 py-4 font-bold">FACT-2023-1102</td>
                    <td className="px-6 py-4">Tarjeta (**** 4231)</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-6 py-4 font-black">$3,200.00</td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4">05 Oct 2023</td>
                    <td className="px-6 py-4 font-bold">FACT-2023-1089</td>
                    <td className="px-6 py-4">SPEI</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700">
                        Confirmado
                      </span>
                    </td>
                    <td className="px-6 py-4 font-black">$5,400.00</td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined">
                          receipt_long
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400">
                Mostrando 4 de 24 registros
              </p>

              <div className="flex gap-2 justify-end">
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">
                  1
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] text-gray-500 text-xs font-bold">
                  2
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-6 sm:mt-10 px-4 py-4 sm:px-8 sm:py-6 lg:px-20 lg:py-10 rounded-xl border border-dashed border-primary/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 bg-blue-50 dark:bg-blue-950">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 size-10 sm:size-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  info
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-100">
                  ¿Falta algún pago en tu historial?
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm leading-snug">
                  Los pagos por transferencia SPEI u OXXO pueden tardar hasta 48
                  horas en verse reflejados.
                </p>
              </div>
            </div>

            <button
              className="w-full md:w-auto text-blue-700 dark:text-blue-300 px-4 sm:px-6 py-2 rounded-lg font-bold text-sm border border-blue-400 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              Reportar un Pago
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}
