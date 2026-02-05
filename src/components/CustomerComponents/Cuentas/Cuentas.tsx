type CuentasProps = {
  onAbrirFactura: (id: string) => void;
};

export default function Cuentas({ onAbrirFactura }: CuentasProps) {
  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
                Estado de Cuenta
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Resumen financiero y gestión de facturas pendientes.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#cfd7e7] dark:border-gray-800 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Descargar PDF
              </button>
              <button className="bg-primary text-white px-8 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  credit_card
                </span>
                Pagar Ahora
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl">
                  account_balance
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                Saldo Total Pendiente
              </p>
              <p className="text-3xl font-black text-primary">$12,450.00</p>
              <div className="mt-4 flex items-center gap-1 text-red-500 text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>5.2% vs mes anterior</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Próximo Vencimiento
              </p>
              <p className="text-3xl font-black text-[#0d121b] dark:text-white">
                15 Oct 2023
              </p>
              <div className="mt-4 flex items-center gap-1 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-sm">
                  calendar_today
                </span>
                <span>En 12 días</span>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Último Pago Realizado
              </p>
              <p className="text-3xl font-black text-[#0d121b] dark:text-white">
                $3,200.00
              </p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-bold">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                <span>Completado el 02 Sep</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#cfd7e7] dark:border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold">Facturas Pendientes</h3>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                    search
                  </span>
                  <input
                    className="pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary"
                    placeholder="Buscar factura..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-gray-800/50">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Nº Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Fecha Emisión
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Vencimiento
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#cfd7e7] dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-0891
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      01 Sep 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-red-500 font-medium">
                      15 Sep 2023 (Vencida)
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-red-100 text-red-700">
                        Atrasado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$4,250.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-sm hover:underline">
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-0942
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      15 Sep 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      30 Sep 2023
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-100 text-amber-700">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$5,200.00</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary font-bold text-sm hover:underline">
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold">
                      FACT-2023-1005
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      01 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      15 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-100 text-blue-700">
                        Por Vencer
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black">$3,000.00</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => onAbrirFactura("ID: 2490-A")}
                        className="text-primary font-bold text-sm hover:underline"
                      >
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/30 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Mostrando 3 de 12 facturas pendientes
              </p>
              <div className="flex gap-2">
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

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-[#0f4bd8] via-[#135bec] to-[#0f4bd8] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  headset_mic
                </span>
              </div>
              <div>
                <p className="text-lg font-bold">
                  ¿Tienes dudas sobre tu estado de cuenta?
                </p>
                <p className="text-white/80 text-sm">
                  Nuestro equipo de soporte financiero está disponible 24/7.
                </p>
              </div>
            </div>
            <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
              Contactar Soporte
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
