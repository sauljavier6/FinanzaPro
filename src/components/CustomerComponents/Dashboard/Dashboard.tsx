export default function DashboardCliente() {
  const monthlyData = [
    { label: "Ene", pagado: 110, facturado: 180 },
    { label: "Feb", pagado: 100, facturado: 140 },
    { label: "Mar", pagado: 160, facturado: 220 },
    { label: "Abr", pagado: 140, facturado: 200 },
    { label: "May", pagado: 180, facturado: 260 },
    { label: "Jun", pagado: 90, facturado: 110 },
  ];

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* ================= BIENVENIDA ================= */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2">
              Bienvenido 👋
            </h1>
            <p className="text-[#4c669a] text-xs sm:text-sm leading-relaxed">
              Aquí puedes consultar tu estado de cuenta, facturas y pagos.
            </p>
          </div>

          {/* ================= RESUMEN ================= */}
          <div className="grid grid-cols-1 gap-3 mb-10 sm:grid-cols-3 sm:gap-6">
            {/* Saldo actual */}
            <div className="bg-white dark:bg-[#161b2a] p-7 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl material-symbols-outlined text-2xl">
                  account_balance_wallet
                </span>
              </div>
              <p className="text-sm font-medium text-[#4c669a] mb-1">
                Saldo actual
              </p>
              <p className="text-3xl font-extrabold">$320,000</p>
            </div>

            {/* Próximo vencimiento */}
            <div className="bg-white dark:bg-[#161b2a] p-7 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl material-symbols-outlined text-2xl">
                  schedule
                </span>
              </div>
              <p className="text-sm font-medium text-[#4c669a] mb-1">
                Próximo vencimiento
              </p>
              <p className="text-xl font-extrabold">25 Oct, 2023</p>
            </div>

            {/* Pagado este mes */}
            <div className="bg-white dark:bg-[#161b2a] p-7 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl material-symbols-outlined text-2xl">
                  check_circle
                </span>
              </div>
              <p className="text-sm font-medium text-[#4c669a] mb-1">
                Pagado este mes
              </p>
              <p className="text-3xl font-extrabold">$84,500</p>
            </div>
          </div>

          {/* ================= HISTORIAL ================= */}
          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-4 sm:p-6 mb-8 sm:mb-10">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Historial de facturación
            </h3>

            {/* Gráfica */}
            <div className="relative h-[200px] sm:h-[260px] flex items-end justify-between gap-1 sm:gap-2 pb-3 sm:pb-4 border-b border-dashed border-gray-200 dark:border-gray-700">
              {monthlyData.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center w-full max-w-[36px] sm:max-w-[50px]"
                >
                  <div className="flex flex-col justify-end gap-1 h-[150px] sm:h-[200px] w-full">
                    <div
                      className="w-full bg-primary/30 rounded-t-md"
                      style={{ height: `${m.facturado}px` }}
                    />
                    <div
                      className="w-full bg-primary rounded-t-md"
                      style={{ height: `${m.pagado}px` }}
                    />
                  </div>
                  <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-bold text-[#4c669a]">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Leyenda */}
            <div className="mt-4 sm:mt-5 flex justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary"></span>
                <span className="text-[11px] sm:text-xs text-[#4c669a]">
                  Pagado
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-primary/30"></span>
                <span className="text-[11px] sm:text-xs text-[#4c669a]">
                  Facturado
                </span>
              </div>
            </div>
          </div>

          {/* ================= FACTURAS ================= */}
          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#e7ebf3] dark:border-gray-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold">Tus facturas</h3>
              <button className="text-xs sm:text-sm font-bold text-primary hover:bg-primary/5 rounded-lg self-start sm:self-auto">
                Descargar estado de cuenta
              </button>
            </div>

            {/* ===================== */}
            {/* MÓVIL – CARDS */}
            {/* ===================== */}
            <div className="sm:hidden divide-y">
              {/* Card 1 */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Factura</span>
                  <span className="font-bold">#F-98552</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Fecha</span>
                  <span>12 Oct, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Monto</span>
                  <span className="font-bold">$15,400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                    Pagada
                  </span>
                  <button className="text-primary text-sm font-bold">
                    Ver
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Factura</span>
                  <span className="font-bold">#F-98561</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Fecha</span>
                  <span>18 Oct, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#4c669a]">Monto</span>
                  <span className="font-bold">$22,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">
                    Pendiente
                  </span>
                  <button className="text-primary text-sm font-bold">
                    Pagar
                  </button>
                </div>
              </div>
            </div>

            {/* ===================== */}
            {/* DESKTOP – TABLA */}
            {/* ===================== */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold">Factura</th>
                    <th className="px-6 py-4 text-xs font-bold">Fecha</th>
                    <th className="px-6 py-4 text-xs font-bold">Monto</th>
                    <th className="px-6 py-4 text-xs font-bold">Estado</th>
                    <th className="px-6 py-4 text-xs font-bold text-right">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">#F-98552</td>
                    <td className="px-6 py-4">12 Oct, 2023</td>
                    <td className="px-6 py-4 font-bold">$15,400</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                        Pagada
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary text-sm font-bold">
                        Ver
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="px-6 py-4 font-bold">#F-98561</td>
                    <td className="px-6 py-4">18 Oct, 2023</td>
                    <td className="px-6 py-4 font-bold">$22,800</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full">
                        Pendiente
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary text-sm font-bold">
                        Pagar
                      </button>
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
