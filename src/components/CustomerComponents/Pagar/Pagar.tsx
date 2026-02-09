import { useState } from "react";

export default function Pagar() {
  const [metodo, setMetodo] = useState<"tarjeta" | "transferencia" | "pse">(
    "tarjeta",
  );

  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          <nav
            className="flex flex-wrap gap-2 mb-6 w-full text-sm font-medium"
            aria-label="Breadcrumb"
          >
            <a
              className="text-primary dark:text-primary/80 hover:underline"
              href="/clientes/cuentas"
            >
              Portal de Clientes
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-gray-300 font-semibold">
              Pasarela de Pago
            </span>
          </nav>

          {/* Header */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0d121b] dark:text-white">
              Finalizar Pago
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Complete los detalles para procesar su transacción de forma
              segura.
            </p>
          </div>

          <div className="grid grid-cols lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                {/* TABS */}
                <div className="flex flex-nowrap border-b border-gray-200 dark:border-gray-800 sm:px-6 gap-4 sm:gap-6 overflow-x-auto">
                  {[
                    { key: "tarjeta", label: "Tarjeta", icon: "credit_card" },
                    {
                      key: "transferencia",
                      label: "Transferencia SPEI",
                      icon: "account_balance",
                    },
                    { key: "pse", label: "OXXO / Efectivo", icon: "language" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setMetodo(tab.key as typeof metodo)}
                      className={`
                      flex flex-col items-center justify-center border-b-4 gap-1 pb-3 pt-4 min-w-[80px] sm:min-w-[100px] transition-all
                      ${
                        metodo === tab.key
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-primary dark:hover:text-primary"
                      }
                    `}
                    >
                      <span className="material-symbols-outlined text-lg sm:text-xl">
                        {tab.icon}
                      </span>
                      <p className="text-xs sm:text-sm font-bold tracking-tight text-center">
                        {tab.label}
                      </p>
                    </button>
                  ))}
                </div>

                {/* TARJETA*/}
                {metodo === "tarjeta" && (
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex flex-col gap-2 w-full">
                        <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                          Nombre en la tarjeta
                        </p>
                        <input
                          className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Juan Pérez"
                        />
                      </label>

                      <label className="flex flex-col gap-2 w-full">
                        <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                          Número de tarjeta
                        </p>
                        <div className="relative">
                          <input
                            className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="0000 0000 0000 0000"
                          />
                          <span className="absolute right-3 top-3 material-symbols-outlined text-gray-400">
                            lock
                          </span>
                        </div>
                      </label>

                      <label className="flex flex-col gap-2 w-full">
                        <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                          Fecha de expiración
                        </p>
                        <input
                          className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="MM/YY"
                        />
                      </label>

                      <label className="flex flex-col gap-2 w-full">
                        <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                          CVC / CVV
                        </p>
                        <input
                          className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-12 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="123"
                        />
                      </label>
                    </div>

                    <div className="pt-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                      <span className="material-symbols-outlined text-sm">
                        security
                      </span>
                      <span>
                        Sus datos están protegidos con encriptación SSL de 256
                        bits.
                      </span>
                    </div>
                  </div>
                )}

                {/* TRANSFERENCIA */}
                {metodo === "transferencia" && (
                  <div className="p-6 border-t border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                    <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">
                        info
                      </span>
                      Datos para Transferencia SPEI
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-gray-400">
                            Banco
                          </p>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            BANCO NACIONAL DE MÉXICO
                          </p>
                        </div>
                        <button className="text-primary hover:text-primary/70 flex items-center gap-1 text-xs font-bold">
                          <span className="material-symbols-outlined text-sm">
                            content_copy
                          </span>
                          COPIAR
                        </button>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-gray-400">
                            CLABE Interbancaria
                          </p>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            0121 8000 1234 5678 90
                          </p>
                        </div>
                        <button className="text-primary hover:text-primary/70 flex items-center gap-1 text-xs font-bold">
                          <span className="material-symbols-outlined text-sm">
                            content_copy
                          </span>
                          COPIAR
                        </button>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-gray-400">
                            Beneficiario
                          </p>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            COBRANZA INTEGRAL S.A. DE C.V.
                          </p>
                        </div>
                        <button className="text-primary hover:text-primary/70 flex items-center gap-1 text-xs font-bold">
                          <span className="material-symbols-outlined text-sm">
                            content_copy
                          </span>
                          COPIAR
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">
                        Subir comprobante de pago
                      </h3>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 transition-all hover:border-primary/50 hover:bg-primary/5 group cursor-pointer">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">
                              cloud_upload
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            Haga clic o arrastre su archivo aquí
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Formatos soportados: PDF, JPG, PNG (Máx. 5MB)
                          </p>
                          <button className="mt-4 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold text-primary hover:bg-gray-50 transition-colors">
                            Seleccionar Archivo
                          </button>
                        </div>
                      </div>
                      <div className="max-w-md">
                        <label className="flex flex-col gap-2">
                          <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                            Referencia de la operación / Número de folio{" "}
                            <span className="text-gray-400 font-normal">
                              (Opcional)
                            </span>
                          </p>
                          <input
                            className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-11 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Ej: 9823410928"
                            type="text"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* PSE */}
                {metodo === "pse" && (
                  <div className="p-6 border-t border-gray-50 dark:border-gray-800">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="flex gap-4 items-center">
                        <div className="h-10 w-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center border border-gray-200 dark:border-gray-700">
                          <span className="text-[10px] font-black italic text-red-600">
                            OXXO
                          </span>
                        </div>
                        <div className="h-10 w-20 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center border border-gray-200 dark:border-gray-700">
                          <span className="text-[10px] font-black italic text-green-700">
                            7-ELEVEN
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Mencione este número de referencia en caja:
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 w-full max-w-sm">
                        <div className="bg-white dark:bg-white p-2 mb-4">
                          <div className="flex items-center justify-center gap-0.5 h-16">
                            <div className="w-1 h-full bg-black"></div>
                            <div className="w-0.5 h-full bg-black"></div>
                            <div className="w-2 h-full bg-black"></div>
                            <div className="w-1 h-full bg-black"></div>
                            <div className="w-0.5 h-full bg-black"></div>
                            <div className="w-3 h-full bg-black"></div>
                            <div className="w-1 h-full bg-black"></div>
                            <div className="w-0.5 h-full bg-black"></div>
                            <div className="w-2 h-full bg-black"></div>
                            <div className="w-1 h-full bg-black"></div>
                            <div className="w-0.5 h-full bg-black"></div>
                            <div className="w-3 h-full bg-black"></div>
                          </div>
                        </div>
                        <p className="text-2xl font-black tracking-widest text-[#0d121b] dark:text-white">
                          9823 4510 0928 3341
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 italic">
                        El pago se refleja instantáneamente una vez realizado en
                        caja.
                      </p>
                    </div>
                    <div className="space-y-4 mt-8">
                      <h3 className="text-base font-bold text-gray-800 dark:text-gray-100">
                        Subir comprobante de pago
                      </h3>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 transition-all hover:border-primary/50 hover:bg-primary/5 group cursor-pointer">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">
                              cloud_upload
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            Haga clic o arrastre su archivo aquí
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Formatos soportados: PDF, JPG, PNG (Máx. 5MB)
                          </p>
                          <button className="mt-4 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold text-primary hover:bg-gray-50 transition-colors">
                            Seleccionar Archivo
                          </button>
                        </div>
                      </div>
                      <div className="max-w-md">
                        <label className="flex flex-col gap-2">
                          <p className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">
                            Referencia de la operación / Número de folio{" "}
                            <span className="text-gray-400 font-normal">
                              (Opcional)
                            </span>
                          </p>
                          <input
                            className="w-full rounded-lg text-[#0d121b] dark:text-white dark:bg-gray-800 border-[#cfd7e7] dark:border-gray-700 h-11 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="Ej: 9823410928"
                            type="text"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* NOTI */}
              <div className="mt-12 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-xl p-8 text-center flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-5xl">
                    check_circle
                  </span>
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300">
                  ¡Pago Realizado con Éxito!
                </h3>
                <p className="text-green-700 dark:text-green-400/80 mb-6">
                  Su transacción ha sido procesada correctamente. ID de
                  transacción: #TRX-982341
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-white dark:bg-gray-800 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg border border-green-200 dark:border-green-800 font-bold text-sm shadow-sm hover:bg-green-50 transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      download
                    </span>
                    Descargar Comprobante
                  </button>
                </div>
              </div>
            </div>

            {/* */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-50 dark:border-gray-800 pb-2">
                  Resumen de Pago
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Factura #2023-045</span>
                    <span className="font-medium">$ 1.250.000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Mora e Intereses</span>
                    <span className="font-medium">$ 25.000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">IVA (19%)</span>
                    <span className="font-medium">$ 237.500</span>
                  </div>
                </div>
                <div className="border-t border-dashed border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold">Total a Pagar</span>
                    <span className="text-2xl font-black text-primary">
                      $ 1.512.500
                    </span>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">payments</span>
                  Confirmar y Pagar
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed">
                  Al hacer clic en "Confirmar y Pagar", aceptas nuestros
                  términos y condiciones y autorizas el débito de los fondos.
                </p>
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 flex gap-4">
                <div className="text-primary">
                  <span className="material-symbols-outlined">info</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    ¿Necesitas ayuda?
                  </p>
                  <p className="text-xs text-[#0d121b] dark:text-gray-300">
                    Si presentas problemas con tu pago, contáctanos al{" "}
                    <span className="font-bold">01 8000 123 456</span> o vía
                    chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
