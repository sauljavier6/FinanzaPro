interface FacturaProps {
  facturaId: string;
  onBack: () => void;
}

export default function Factura({ facturaId, onBack }: FacturaProps) {
  console.log(facturaId);

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-8">
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={onBack}
              className="text-primary text-sm font-medium leading-normal hover:underline"
              type="button"
            >
              Facturas
            </button>
            <span className="text-gray-400 text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-gray-900 dark:text-white text-sm font-bold leading-normal">
              FACT-2023-0852
            </span>
          </div>

          <div className="flex flex-wrap justify-between items-end gap-3 py-4">
            <div className="flex min-w-72 flex-col gap-1">
              <div className="flex items-center gap-3">
                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Factura #FACT-2023-0852
                </h1>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800">
                  PENDIENTE DE PAGO
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                Emitida el 12 de Noviembre, 2023 • Vencimiento: 12 de Diciembre,
                2023
              </p>
            </div>
            <div className="flex gap-3">
              {/*<button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-bold border border-red-100 dark:border-red-900/40 hover:bg-red-100 transition-colors">
                <span className="truncate">Anular Factura</span>
              </button>*/}

              <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-sm gap-2">
                <span className="material-symbols-outlined text-lg">
                  account_balance_wallet
                </span>
                <span className="truncate">Gestionar Cobro</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 py-3 border-y border-gray-200 dark:border-gray-800 my-4">
            <div className="flex gap-2">
              <button
                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center gap-2"
                title="Imprimir"
              >
                <span className="material-symbols-outlined" data-icon="print">
                  print
                </span>
                <span className="text-sm font-medium">Imprimir</span>
              </button>
              <button
                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center gap-2"
                title="Enviar por correo"
              >
                <span className="material-symbols-outlined" data-icon="mail">
                  mail
                </span>
                <span className="text-sm font-medium">Enviar</span>
              </button>
              <button
                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex items-center gap-2"
                title="Compartir enlace"
              >
                <span className="material-symbols-outlined" data-icon="share">
                  share
                </span>
                <span className="text-sm font-medium">Compartir</span>
              </button>
            </div>
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold px-4 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              <span
                className="material-symbols-outlined text-[20px]"
                data-icon="download"
              >
                download
              </span>
              <span className="truncate">Descargar PDF</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 py-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
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
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
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
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm ring-2 ring-primary/20">
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

          <div className="grid grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Seccion de informacion */}
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    person
                  </span>
                  Información del Cliente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Cliente
                    </p>
                    <p className="text-gray-900 dark:text-white font-bold">
                      TechSolutions S.A. de C.V.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      RFC: TSOL-920101-ABC
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Contacto
                    </p>
                    <p className="text-gray-900 dark:text-white font-bold">
                      Roberto Mendoza
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      r.mendoza@techsolutions.com
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                      Dirección Fiscal
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed">
                      Av. Insurgentes Sur 1450, Col. Del Valle, Ciudad de
                      México, 03100.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-gray-900 dark:text-white text-lg font-bold">
                    Conceptos de Factura
                  </h3>
                </div>
                <table className="w-full text-left">
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
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                        $1,800.00
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900 dark:text-white font-bold">
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
                      <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                        1
                      </td>
                      <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                        $650.00
                      </td>
                      <td className="px-6 py-4 text-right text-gray-900 dark:text-white font-bold">
                        $650.00
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-gray-50 dark:bg-gray-800/20">
                    <tr>
                      <td
                        className="px-6 py-3 text-right text-gray-500 font-medium"
                        colSpan={3}
                      >
                        Subtotal
                      </td>
                      <td className="px-6 py-3 text-right text-gray-900 dark:text-white font-bold">
                        $2,450.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="px-6 py-3 text-right text-gray-500 font-medium text-lg"
                        colSpan={3}
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

              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <h3 className="text-gray-900 dark:text-white text-lg font-bold">
                    Historial de Pagos
                  </h3>
                  <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                    2 abonos registrados
                  </span>
                </div>
                <div className="p-0">
                  <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                    <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600">
                          <span className="material-symbols-outlined text-xl">
                            account_balance_wallet
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white font-bold">
                            Transferencia Bancaria
                          </p>
                          <p className="text-gray-500 text-xs">
                            15 de Noviembre, 2023 • Ref: BNX-00129
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-900 dark:text-white font-black">
                        $600.00
                      </p>
                    </li>
                    <li className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-full text-green-600">
                          <span className="material-symbols-outlined text-xl">
                            payments
                          </span>
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white font-bold">
                            Pago en Efectivo (Caja)
                          </p>
                          <p className="text-gray-500 text-xs">
                            20 de Noviembre, 2023 • Ref: CJ-8821
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-900 dark:text-white font-black">
                        $500.00
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seccion de seguimiento */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 flex-1 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-gray-900 dark:text-white text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      history_edu
                    </span>
                    Seguimiento Interno
                  </h3>
                  <button className="text-primary text-xs font-bold hover:underline">
                    + Nota Manual
                  </button>
                </div>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-gray-200 before:to-transparent">
                  <div className="relative flex items-start gap-4 group">
                    <div className="absolute left-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md ring-4 ring-white dark:ring-gray-900">
                      <span className="material-symbols-outlined text-sm">
                        mail
                      </span>
                    </div>
                    <div className="ml-14">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Recordatorio enviado
                      </p>
                      <time className="text-gray-400 text-[11px] uppercase tracking-wider">
                        Hoy, 09:45 AM
                      </time>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Correo electrónico automático de "Próximo Vencimiento"
                        enviado al cliente.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4 group">
                    <div className="absolute left-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary shadow-sm ring-4 ring-white dark:ring-gray-900">
                      <span className="material-symbols-outlined text-sm">
                        call
                      </span>
                    </div>
                    <div className="ml-14">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Llamada de Seguimiento
                      </p>
                      <time className="text-gray-400 text-[11px] uppercase tracking-wider">
                        Ayer, 03:20 PM
                      </time>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Conversación con Roberto. Comenta que la tesorería
                        liberará el pago el próximo viernes sin falta.
                      </p>
                      <div className="mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500 italic">
                        "Promesa de pago para el 15/Dic"
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4 group">
                    <div className="absolute left-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 ring-4 ring-white dark:ring-gray-900">
                      <span className="material-symbols-outlined text-sm">
                        receipt_long
                      </span>
                    </div>
                    <div className="ml-14">
                      <p className="text-gray-900 dark:text-white text-sm font-bold">
                        Factura Emitida
                      </p>
                      <time className="text-gray-400 text-[11px] uppercase tracking-wider">
                        12 Nov, 2023
                      </time>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                        Generación inicial del documento CFDI 4.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20">
                <h4 className="text-lg font-bold mb-2">Resumen Financiero</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-sm text-white/70">
                      Días de crédito
                    </span>
                    <span className="font-bold">30 Días</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-sm text-white/70">
                      Días transcurridos
                    </span>
                    <span className="font-bold">25 Días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">
                      Estado Cobranza
                    </span>
                    <span className="px-2 py-0.5 bg-white text-primary text-[10px] font-black rounded uppercase">
                      Activa
                    </span>
                  </div>
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mt-4">
                    <span className="material-symbols-outlined">send</span>
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
