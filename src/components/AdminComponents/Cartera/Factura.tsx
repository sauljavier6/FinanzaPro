interface FacturaProps {
  facturaId: string;
  onBack: () => void;
}

export default function Factura({ facturaId, onBack }: FacturaProps) {
  console.log(facturaId);

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 pb-2 text-sm">
            <button
              onClick={onBack}
              className="text-primary font-medium hover:underline truncate"
              type="button"
            >
              Facturas
            </button>
            <span className="text-gray-400 font-medium">/</span>
            <span className="text-gray-900 dark:text-white font-bold truncate">
              Factura #{facturaId}
            </span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 min-w-0">
                <h1 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.02em] truncate">
                  Factura #FACT-2023-0852
                </h1>

                <span className="w-fit px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800 whitespace-nowrap">
                  PENDIENTE DE PAGO
                </span>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-snug break-words sm:truncate">
                Emitida el 12 de Noviembre, 2023 • Vencimiento: 1218 días
              </p>
            </div>

            <div className="w-full lg:w-fit">
              <button className="w-full md:w-auto shrink-0 flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 text-sm font-bold px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  account_balance_wallet
                </span>
                <span className="whitespace-nowrap">Gestionar Cobro</span>
              </button>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3 border-y border-gray-200 dark:border-gray-800 my-4">
            {/* Botones izquierda */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto">
              <button
                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                title="Imprimir"
              >
                <span className="material-symbols-outlined">print</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  Imprimir
                </span>
              </button>

              <button
                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                title="Enviar por correo"
              >
                <span className="material-symbols-outlined">mail</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  Enviar
                </span>
              </button>

              <button
                className="flex-1 md:flex-none min-w-[110px] p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2"
                title="Compartir enlace"
              >
                <span className="material-symbols-outlined">share</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  Compartir
                </span>
              </button>
            </div>

            {/* Botón derecha */}
            <button className="w-full md:w-auto shrink-0 flex items-center justify-center rounded-lg h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              <span className="whitespace-nowrap">Descargar PDF</span>
            </button>
          </div>

          {/*  */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
            <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                Total Facturado
              </p>
              <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                $2,450.00
              </p>
              <div className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded w-fit">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                <span>12% vs mes anterior</span>
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                Monto Pagado
              </p>
              <p className="text-gray-900 dark:text-white tracking-tight text-3xl font-black">
                $1,100.00
              </p>
              <p className="text-primary text-sm font-bold leading-normal">
                45% Cubierto
              </p>
            </div>
            <div className="flex w-full flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                Saldo Pendiente
              </p>
              <p className="text-primary tracking-tight text-3xl font-black">
                $1,350.00
              </p>
              <div className="flex items-center gap-1 text-red-500 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded w-fit">
                <span className="material-symbols-outlined text-sm">
                  event_busy
                </span>
                <span>Vence en 5 días</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 min-w-0">
                <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    person
                  </span>
                  Información del Cliente
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 min-w-0">
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Cliente
                    </p>
                    <p className="text-gray-900 dark:text-white font-bold break-words">
                      TechSolutions S.A. de C.V.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                      RFC: TSOL-920101-ABC
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Contacto
                    </p>
                    <p className="text-gray-900 dark:text-white font-bold break-words">
                      Roberto Mendoza
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                      r.mendoza@techsolutions.com
                    </p>
                  </div>
                  <div className="sm:col-span-2 min-w-0">
                    <p className="text-[11px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Dirección Fiscal
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed break-words">
                      Av. Insurgentes Sur 1450, Col. Del Valle, Ciudad de
                      México, 03100.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                    Conceptos de Factura
                  </h3>
                </div>
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left min-w-[700px]">
                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Descripción
                        </th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                          Cant.
                        </th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                          Unitario
                        </th>
                        <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                          Importe
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4">
                          <p className="text-gray-900 dark:text-white font-medium">
                            Suscripción Anual Cloud ERP
                          </p>
                          <p className="text-gray-500 text-xs italic">
                            Periodo: Ene 2024 - Dic 2024
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">1</td>
                        <td className="px-6 py-4 text-right">$1,800.00</td>
                        <td className="px-6 py-4 text-right font-bold">
                          $1,800.00
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4">
                          <p className="text-gray-900 dark:text-white font-medium">
                            Soporte Técnico Premium
                          </p>
                          <p className="text-gray-500 text-xs italic">
                            Bolsa de 10 horas mensuales
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">1</td>
                        <td className="px-6 py-4 text-right">$650.00</td>
                        <td className="px-6 py-4 text-right font-bold">
                          $650.00
                        </td>
                      </tr>
                    </tbody>

                    <tfoot className="bg-gray-50 dark:bg-gray-800/20">
                      <tr>
                        <td
                          colSpan={3}
                          className="px-6 py-3 text-right text-gray-500 font-medium"
                        >
                          Subtotal
                        </td>
                        <td className="px-6 py-3 text-right font-bold">
                          $2,450.00
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={3}
                          className="px-6 py-3 text-right text-gray-500 font-medium text-lg"
                        >
                          Total a Pagar
                        </td>
                        <td className="px-6 py-3 text-right text-primary text-2xl font-black">
                          $2,450.00
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="md:hidden divide-y divide-gray-100 dark:divide-gray-800">
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Suscripción Anual Cloud ERP
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        Periodo: Ene 2024 - Dic 2024
                      </p>
                    </div>

                    <div className="grid grid-cols-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Cant.</p>
                        <p className="font-medium">1</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">Unitario</p>
                        <p className="font-medium">$1,800.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">Importe</p>
                        <p className="font-bold">$1,800.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        Soporte Técnico Premium
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        Bolsa de 10 horas mensuales
                      </p>
                    </div>

                    <div className="grid grid-cols-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs">Cant.</p>
                        <p className="font-medium">1</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">Unitario</p>
                        <p className="font-medium">$650.00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs">Importe</p>
                        <p className="font-bold">$650.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/20 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-bold">$2,450.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-medium">Total</span>
                      <span className="text-primary text-xl font-black">
                        $2,450.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden 2xl:mb-8">
                <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold">
                    Historial de Pagos
                  </h3>

                  <span className="self-start sm:self-auto text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                    2 abonos registrados
                  </span>
                </div>
                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                  <li className="px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 shrink-0">
                          <span className="material-symbols-outlined text-xl">
                            account_balance_wallet
                          </span>
                        </div>

                        <div>
                          <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">
                            Transferencia Bancaria
                          </p>
                          <p className="text-gray-500 text-xs">
                            15 de Noviembre, 2023 • Ref: BNX-00129
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-900 dark:text-white font-black text-base sm:text-lg sm:text-right">
                        $600.00
                      </p>
                    </div>
                  </li>
                  <li className="px-4 sm:px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600 shrink-0">
                          <span className="material-symbols-outlined text-xl">
                            payments
                          </span>
                        </div>

                        <div>
                          <p className="text-gray-900 dark:text-white font-bold text-sm sm:text-base">
                            Pago en Efectivo (Caja)
                          </p>
                          <p className="text-gray-500 text-xs">
                            20 de Noviembre, 2023 • Ref: CJ-8821
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-900 dark:text-white font-black text-base sm:text-lg sm:text-right">
                        $500.00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-6 flex-1 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                  <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      history_edu
                    </span>
                    Seguimiento Interno
                  </h3>
                </div>
                <div className="relative space-y-8 before:absolute before:top-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-gray-200 before:to-transparent">
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white dark:ring-gray-900 shrink-0">
                      <span className="material-symbols-outlined text-sm">
                        mail
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Recordatorio enviado
                      </p>
                      <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                        Hoy, 09:45 AM
                      </time>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Correo electrónico automático de "Próximo Vencimiento"
                        enviado al cliente.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary shadow-sm ring-4 ring-white dark:ring-gray-900 shrink-0">
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Llamada de Seguimiento
                      </p>
                      <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                        Ayer, 03:20 PM
                      </time>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Conversación con Roberto. Comenta que la tesorería
                        liberará el pago el próximo viernes sin falta.
                      </p>
                      <div className="mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500 italic inline-block">
                        "Promesa de pago para el 15/Dic"
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 ring-4 ring-white dark:ring-gray-900 shrink-0">
                      <span className="material-symbols-outlined text-sm">
                        receipt_long
                      </span>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Factura Emitida
                      </p>

                      <time className="block text-gray-400 text-[11px] uppercase tracking-wider">
                        12 Nov, 2023
                      </time>

                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                        Generación inicial del documento CFDI 4.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-5 sm:p-6 lg:p-7 text-white shadow-lg shadow-primary/20 w-full">
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4">
                  Resumen Financiero
                </h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-xs sm:text-sm text-white/70">
                      Días de crédito
                    </span>
                    <span className="font-bold text-sm sm:text-base">
                      30 Días
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-xs sm:text-sm text-white/70">
                      Días transcurridos
                    </span>
                    <span className="font-bold text-sm sm:text-base">
                      25 Días
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-xs sm:text-sm text-white/70">
                      Estado Cobranza
                    </span>
                    <span className="px-3 py-1 bg-white text-primary text-[10px] sm:text-xs font-black rounded-full uppercase text-center w-fit">
                      Activa
                    </span>
                  </div>
                  <button className="w-full bg-white text-primary font-bold py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 mt-4 text-sm sm:text-base active:scale-[0.98]">
                    <span className="material-symbols-outlined text-lg">
                      send
                    </span>
                    Enviar Estado de Cuenta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
