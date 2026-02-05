export default function Dashboar() {

  const monthlyData = [
    { label: "Ene", a: 110, b: 180 },
    { label: "Feb", a: 100, b: 140 },
    { label: "Mar", a: 160, b: 220 },
    { label: "Abr", a: 140, b: 200 },
    { label: "May", a: 180, b: 260 },
    { label: "Jun", a: 90, b: 110 },
  ]


  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
          
          {/* Header */}
          <div className="flex gap-6 mb-8 overflow-x-auto flex-nowrap pb-3">
            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl material-symbols-outlined text-2xl">
                  account_balance_wallet
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full dark:bg-green-900/20">
                  +12%
                </span>
              </div>
              <p className="text-base font-medium text-[#4c669a] mb-2">
                Total por cobrar
              </p>
              <p className="text-3xl font-extrabold">$1,250,000</p>
            </div>

            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl material-symbols-outlined text-2xl">
                  event_busy
                </span>
                <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-full dark:bg-red-900/20">
                  -5%
                </span>
              </div>
              <p className="text-base font-medium text-[#4c669a] mb-2">
                Cartera Vencida
              </p>
              <p className="text-3xl font-extrabold text-red-600">$320,000</p>
            </div>

            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl material-symbols-outlined text-2xl">
                  check_circle
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full dark:bg-green-900/20">
                  +18%
                </span>
              </div>
              <p className="text-base font-medium text-[#4c669a] mb-2">
                Recuperado (Mes)
              </p>
              <p className="text-3xl font-extrabold">$845,000</p>
            </div>

            <div className="w-full bg-white dark:bg-[#161b2a] p-8 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl material-symbols-outlined text-2xl">
                  schedule
                </span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full dark:bg-green-900/20">
                  -2 d
                </span>
              </div>
              <p className="text-base font-medium text-[#4c669a] mb-2">
                Promedio de pago
              </p>
              <p className="text-3xl font-extrabold">24 días</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Cobranza Mensual */}
            <div className="col-span-2 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-6">
              <div className="lg:col-span-2 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-bold">Cobranza Mensual</h3>
                    <p className="text-sm text-[#4c669a]">
                      Desempeño de recuperación fiscal 2024
                    </p>
                  </div>
                  <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                    <button className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">
                      6 Meses
                    </button>
                    <button className="px-3 py-1.5 text-xs font-bold text-[#4c669a]">
                      12 Meses
                    </button>
                  </div>
                </div>
                <div className="relative h-[300px] flex items-end justify-around gap-2 pb-4 overflow-hidden border-b border-dashed border-gray-200 dark:border-gray-700">
                {monthlyData.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center w-full max-w-[50px]"
                    >
                      {/* CONTENEDOR DE BARRAS */}
                      <div className="flex flex-col justify-end gap-1 h-[230px] w-full">
                        <div
                          className="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary/40 cursor-pointer"
                          style={{ height: `${m.a}px` }}
                        />
                        <div
                          className="w-full bg-primary rounded-t-lg transition-all hover:opacity-90"
                          style={{ height: `${m.b}px` }}
                        />
                      </div>

                      {/* LABEL */}
                      <span className="mt-2 text-xs font-bold text-[#4c669a]">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-primary"></span>
                    <span className="text-xs font-medium text-[#4c669a]">
                      Meta Cobrada
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-primary/30"></span>
                    <span className="text-xs font-medium text-[#4c669a]">
                      Proyección
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alertas */}
            <div className="col-span-1 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-6 flex flex-col">
              <div className="lg:col-span-1 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Alertas Críticas</h3>
                  <span className="bg-red-100 text-red-600 dark:bg-red-900/30 text-xs font-bold px-2 py-1 rounded-lg">
                    4 Pendientes
                  </span>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="p-4 rounded-xl border border-[#e7ebf3] dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold">
                          Corporativo Global S.A.
                        </p>
                        <p className="text-xs text-[#4c669a]">
                          Factura #F-98234
                        </p>
                      </div>
                      <span className="text-red-600 font-bold text-sm">
                        $45,200
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-red-500 text-[16px]">
                          priority_high
                        </span>
                        <span className="text-xs font-bold text-red-500">
                          60 días vencido
                        </span>
                      </div>
                      <button className="text-xs font-bold text-primary hover:underline">
                        Gestionar
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#e7ebf3] dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold">
                          Llogística Express MX
                        </p>
                        <p className="text-xs text-[#4c669a]">
                          Factura #F-98211
                        </p>
                      </div>
                      <span className="text-red-600 font-bold text-sm">
                        $12,800
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-red-500 text-[16px]">
                          priority_high
                        </span>
                        <span className="text-xs font-bold text-red-500">
                          45 días vencido
                        </span>
                      </div>
                      <button className="text-xs font-bold text-primary hover:underline">
                        Gestionar
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#e7ebf3] dark:border-gray-800 hover:border-orange-200 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold">Distribuidora Norte</p>
                        <p className="text-xs text-[#4c669a]">
                          Factura #F-98305
                        </p>
                      </div>
                      <span className="text-[#0d121b] dark:text-white font-bold text-sm">
                        $8,900
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-orange-500 text-[16px]">
                          warning
                        </span>
                        <span className="text-xs font-bold text-orange-500">
                          Pago rechazado
                        </span>
                      </div>
                      <button className="text-xs font-bold text-primary hover:underline">
                        Gestionar
                      </button>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 border-t border-[#e7ebf3] dark:border-gray-800 pt-4 text-sm font-bold text-[#4c669a] hover:text-primary transition-colors flex items-center justify-center gap-2">
                  Ver todas las alertas
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-[#e7ebf3] dark:border-gray-800 flex items-center justify-between">
              <h3 className="text-lg font-bold">Pagos Recientes</h3>
              <button className="text-sm font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all">
                Exportar a PDF
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Factura
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider text-right">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7ebf3] dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                          TC
                        </div>
                        <p className="text-sm font-bold">
                          Tech Cloud Solutions
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">#F-98552</td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      12 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$15,400.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Completado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                          BM
                        </div>
                        <p className="text-sm font-bold">BioMedics Lab</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">#F-98549</td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      11 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$4,250.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                        Procesando
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                          AA
                        </div>
                        <p className="text-sm font-bold">Alpha Agency</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">#F-98533</td>
                    <td className="px-6 py-4 text-sm text-[#4c669a]">
                      10 Oct, 2023
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">$22,100.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Completado
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
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
