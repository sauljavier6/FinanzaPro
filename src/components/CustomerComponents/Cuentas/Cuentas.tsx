type CuentasProps = {
  onAbrirFactura: (id: string) => void;
};

export default function Cuentas({ onAbrirFactura }: CuentasProps) {
  const facturas = [
    {
      id: "FACT-2023-0891",
      fecha: "01 Sep 2023",
      vencimiento: "15 Sep 2023",
      estado: "Atrasado",
      estadoColor: "bg-red-100 text-red-700",
      monto: "$4,250.00",
    },
    {
      id: "FACT-2023-0942",
      fecha: "15 Sep 2023",
      vencimiento: "30 Sep 2023",
      estado: "Pendiente",
      estadoColor: "bg-amber-100 text-amber-700",
      monto: "$5,200.00",
    },
    {
      id: "FACT-2023-1005",
      fecha: "01 Oct 2023",
      vencimiento: "15 Oct 2023",
      estado: "Por vencer",
      estadoColor: "bg-blue-100 text-blue-700",
      monto: "$3,000.00",
    },
  ];

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6 sm:mb-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Estado de Cuenta
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Resumen financiero y gestión de facturas pendientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Descargar PDF
              </button>

              <button className="w-full sm:w-auto bg-primary text-white px-6 sm:px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  credit_card
                </span>
                Pagar Ahora
              </button>
            </div>
          </div>

          {/* Saldos Totales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-10 sm:gap-4">
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-5xl sm:text-6xl">
                  account_balance
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Saldo Total Pendiente
              </p>
              <p className="text-2xl sm:text-3xl font-black text-primary">
                $12,450.00
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-red-500 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>5.2% vs mes anterior</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Próximo Vencimiento
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                15 Oct 2023
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span>En 12 días</span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                Último Pago Realizado
              </p>
              <p className="text-2xl sm:text-3xl font-black text-[#0d121b] dark:text-white">
                $3,200.00
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-green-600 text-xs sm:text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                <span>Completado el 02 Sep</span>
              </div>
            </div>
          </div>

          {/*Tabla */}
          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold">
                Facturas Pendientes
              </h3>

              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  search
                </span>
                <input
                  className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 rounded-lg text-sm w-full focus:ring-2 focus:ring-primary"
                  placeholder="Buscar factura..."
                  type="text"
                />
              </div>
            </div>

            <div className="sm:hidden divide-y divide-[#cfd7e7] dark:divide-gray-800">
              {facturas.map((f) => (
                <div key={f.id} className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">{f.id}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${f.estadoColor}`}
                    >
                      {f.estado}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500">
                    Emisión: {f.fecha}
                  </div>
                  <div className="text-xs text-gray-500">
                    Vence: {f.vencimiento}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-black">{f.monto}</span>
                    <button
                      onClick={() => onAbrirFactura?.(f.id)}
                      className="text-primary font-bold text-sm"
                    >
                      Ver detalle
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
                      Nº Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Fecha Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">
                      Acción
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  {facturas.map((f) => (
                    <tr
                      key={f.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-bold">{f.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {f.fecha}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {f.vencimiento}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${f.estadoColor}`}
                        >
                          {f.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black">
                        {f.monto}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => onAbrirFactura?.(f.id)}
                          className="text-primary font-bold text-sm hover:underline"
                        >
                          Ver detalle
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-400">
                Mostrando {facturas.length} de 12 facturas pendientes
              </p>

              <div className="flex gap-2 justify-end">
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">
                  1
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-500 text-xs font-bold">
                  2
                </button>
                <button className="size-8 flex items-center justify-center rounded border border-[#cfd7e7] dark:border-gray-700 text-gray-400">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#0f4bd8] via-[#135bec] to-[#0f4bd8] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="size-10 sm:size-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  headset_mic
                </span>
              </div>

              <div>
                <p className="text-base sm:text-lg font-bold leading-tight">
                  ¿Tienes dudas sobre tu estado de cuenta?
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  Nuestro equipo de soporte financiero está disponible 24/7.
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-white text-primary px-5 sm:px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
              Contactar Soporte
            </button>
          </div>
          
        </div>
      </main>
    </div>
  );
}
