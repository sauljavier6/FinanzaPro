export default function Dashboar() {
  const monthlyData = [
    { label: "Ene", a: 110, b: 180 },
    { label: "Feb", a: 100, b: 140 },
    { label: "Mar", a: 160, b: 220 },
    { label: "Abr", a: 140, b: 200 },
    { label: "May", a: 180, b: 260 },
    { label: "Jun", a: 90, b: 110 },
  ];

  const alertsData = [
    {
      id: 1,
      company: "Corporativo Global S.A.",
      invoice: "Factura #F-98234",
      amount: "$45,200",
      statusIcon: "priority_high",
      statusText: "60 días vencido",
      statusColor: "text-red-500",
    },
    {
      id: 2,
      company: "Logística Express MX",
      invoice: "Factura #F-98211",
      amount: "$12,800",
      statusIcon: "priority_high",
      statusText: "45 días vencido",
      statusColor: "text-red-500",
    },
    {
      id: 3,
      company: "Distribuidora Norte",
      invoice: "Factura #F-98305",
      amount: "$8,900",
      statusIcon: "warning",
      statusText: "Pago rechazado",
      statusColor: "text-orange-500",
    },
  ];

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* ================= BIENVENIDA ================= */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold mb-1">Bienvenido 👋</h1>
            <p className="text-[#4c669a] text-sm">
              Aquí puedes consultar los estado de cuenta, facturas y pagos.
            </p>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {/* Card */}
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  account_balance_wallet
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  +12%
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Total por cobrar
              </p>
              <p className="text-md lg:2xl font-extrabold">
                $1,250,000
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  event_busy
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-red-900/20">
                  -5%
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Cartera Vencida
              </p>
              <p className="text-md lg:2xl font-extrabold text-red-600">
                $320,000
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  check_circle
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  +18%
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Recuperado (Mes)
              </p>
              <p className="text-md lg:2xl font-extrabold">
                $845,000
              </p>
            </div>
            <div className="w-full bg-white dark:bg-[#161b2a] p-3 sm:p-4 lg:p-6 rounded-2xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-xl material-symbols-outlined text-lg sm:text-xl lg:text-2xl">
                  schedule
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full dark:bg-green-900/20">
                  -2 d
                </span>
              </div>
              <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#4c669a] mb-1 sm:mb-1.5">
                Promedio de pago
              </p>
              <p className="text-md lg:2xl font-extrabold">
                24 días
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Cobranza Mensual */}
            <div className="lg:col-span-2 bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-sm sm:text-base font-bold">
                    Cobranza Mensual
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4c669a]">
                    Desempeño de recuperación fiscal 2024
                  </p>
                </div>
                <div className="flex mt-3 sm:mt-0 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <button className="px-2 py-1 text-[10px] sm:text-xs font-bold bg-white dark:bg-gray-700 rounded-md shadow-sm">
                    6 Meses
                  </button>
                  <button className="px-2 py-1 text-[10px] sm:text-xs font-bold text-[#4c669a]">
                    12 Meses
                  </button>
                </div>
              </div>

              <div className="relative h-[220px] sm:h-[250px] md:h-[300px] flex items-end justify-around gap-1 sm:gap-2 pb-3 overflow-hidden border-b border-dashed border-gray-200 dark:border-gray-700">
                {monthlyData.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center w-full max-w-[40px] sm:max-w-[50px]"
                  >
                    <div className="flex flex-col justify-end gap-1 h-[180px] sm:h-[230px] w-full">
                      <div
                        className="w-full bg-primary/20 rounded-t-lg transition-all hover:bg-primary/40 cursor-pointer"
                        style={{ height: `${m.a}px` }}
                      />
                      <div
                        className="w-full bg-primary rounded-t-lg transition-all hover:opacity-90"
                        style={{ height: `${m.b}px` }}
                      />
                    </div>
                    <span className="mt-1 text-[9px] sm:text-xs font-bold text-[#4c669a]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 sm:gap-8 text-[9px] sm:text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span className="font-medium text-[#4c669a]">
                    Meta Cobrada
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary/30"></span>
                  <span className="font-medium text-[#4c669a]">Proyección</span>
                </div>
              </div>
            </div>

            {/* Alertas Críticas */}
            <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm p-4 sm:p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-sm sm:text-base font-bold">
                  Alertas Críticas
                </h3>
                <span className="bg-red-100 text-red-600 dark:bg-red-900/30 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-lg">
                  4 Pendientes
                </span>
              </div>

              <div className="flex-1 space-y-3 sm:space-y-4 overflow-y-auto max-h-[400px]">
                {alertsData.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-3 sm:p-4 rounded-xl border border-[#e7ebf3] dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <div>
                        <p className="text-[10px] sm:text-sm font-bold">
                          {alert.company}
                        </p>
                        <p className="text-[8px] sm:text-xs text-[#4c669a]">
                          {alert.invoice}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-sm text-red-600 font-bold">
                        {alert.amount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <div className="flex items-center gap-1">
                        <span
                          className={`material-symbols-outlined text-[12px] ${alert.statusColor}`}
                        >
                          {alert.statusIcon}
                        </span>
                        <span
                          className={`text-[8px] sm:text-xs font-bold ${alert.statusColor}`}
                        >
                          {alert.statusText}
                        </span>
                      </div>
                      <button className="text-[8px] sm:text-xs font-bold text-primary hover:underline">
                        Gestionar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 sm:mt-6 border-t border-[#e7ebf3] dark:border-gray-800 pt-3 sm:pt-4 text-[10px] sm:text-xs font-bold text-[#4c669a] hover:text-primary transition-colors flex items-center justify-center gap-1 sm:gap-2">
                Ver todas las alertas
                <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161b2a] rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#e7ebf3] dark:border-gray-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <h3 className="text-base sm:text-lg font-bold">
                Pagos Recientes
              </h3>
              <button className="text-xs sm:text-sm font-bold text-primary hover:bg-primary/5 rounded-lg self-start sm:self-auto px-3 py-1.5">
                Exportar a PDF
              </button>
            </div>

            {/* ===================== */}
            {/* MÓVIL – CARDS */}
            {/* ===================== */}
            <div className="sm:hidden divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {[
                {
                  invoice: "#F-98552",
                  date: "12 Oct, 2023",
                  client: "Tech Cloud Solutions",
                  initials: "TC",
                  bg: "bg-blue-100",
                  color: "text-primary",
                  amount: "$15,400.00",
                  status: "Completado",
                  statusBg:
                    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                },
                {
                  invoice: "#F-98549",
                  date: "11 Oct, 2023",
                  client: "BioMedics Lab",
                  initials: "BM",
                  bg: "bg-purple-100",
                  color: "text-purple-600",
                  amount: "$4,250.00",
                  status: "Procesando",
                  statusBg:
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                },
                {
                  invoice: "#F-98533",
                  date: "10 Oct, 2023",
                  client: "Alpha Agency",
                  initials: "AA",
                  bg: "bg-gray-100",
                  color: "text-gray-600",
                  amount: "$22,100.00",
                  status: "Completado",
                  statusBg:
                    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                },
              ].map((p) => (
                <div key={p.invoice} className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-8 w-8 rounded-lg flex items-center justify-center ${p.bg} ${p.color} font-bold text-xs`}
                      >
                        {p.initials}
                      </div>
                      <p className="text-sm font-bold">{p.client}</p>
                    </div>
                    <span className="font-bold">{p.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#4c669a]">Factura</span>
                    <span className="font-bold">{p.invoice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-[#4c669a]">Fecha</span>
                    <span>{p.date}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${p.statusBg}`}
                    >
                      {p.status}
                    </span>
                    <button className="text-primary text-sm font-bold">
                      Gestionar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ===================== */}
            {/* DESKTOP – TABLA */}
            {/* ===================== */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
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
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-primary font-bold text-xs">
                        TC
                      </div>
                      <p className="text-sm font-bold">Tech Cloud Solutions</p>
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
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                        BM
                      </div>
                      <p className="text-sm font-bold">BioMedics Lab</p>
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
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                        AA
                      </div>
                      <p className="text-sm font-bold">Alpha Agency</p>
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
