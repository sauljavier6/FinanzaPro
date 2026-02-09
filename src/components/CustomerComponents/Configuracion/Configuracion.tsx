interface ConfiguracionProps {
  onAbrirContacto: (id: string) => void;
}

export default function Configuracion({ onAbrirContacto }: ConfiguracionProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden min-h-screen">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          {/* Encabezado */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2">
              Configuración de Perfil
            </h1>
            <p className="text-[#4c669a] text-xs sm:text-sm leading-relaxed">
              Administra tu información personal, contactos de referencia y seguridad de la cuenta.
            </p>
          </div>

          {/* Perfil de Usuario */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">person</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Perfil de Usuario</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800">
                    <div
                      className="w-full h-full bg-center bg-cover"
                      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtIjU9RrKPoEXcvGwrRGvkRfe8nrZXvAccg9KsLlT14mbb1aw-ygpvO44vvwTyLqy31qaiKJ4BgHAY1Xc7g95CJ87a8642-L3VWC-9BbQ8XxlWAm2sOXjQrXBTnYIgr7WBPLlWIOqAdXLD3GGOtCDCaOdLQ4LdBl3fRRngx2aMe3uyUgIaqHqceE20ibym094qppUrfkwZP8OoJmcC_EkRl708_NOkVLvzjbCyhZIgrggAhk_jdqCYP3TmB4-Xj9DpAwwtmXc35YDw")` }}
                    ></div>
                  </div>
                  <button className="absolute bottom-1 right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-sm">photo_camera</span>
                  </button>
                </div>
                <div className="text-center">
                  <button className="text-primary text-xs font-bold hover:underline">Cambiar foto</button>
                  <p className="text-[10px] text-slate-400 mt-1">JPG, PNG o GIF. Máx 5MB.</p>
                </div>
              </div>

              {/* Campos */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Nombre Completo</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" type="text" value="Juan Pérez" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Correo Electrónico</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" type="email" value="juan.perez@ejemplo.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Teléfono Principal</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" type="tel" value="+54 9 11 1234 5678" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Dirección (Opcional)</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" placeholder="Calle, Número, Ciudad" type="text" />
                </div>
              </div>
            </div>
          </section>

          {/* Contactos */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">group</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contactos de Referencia</h3>
              </div>
              <button className="text-primary text-sm font-bold flex items-center gap-1 hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                <span>Agregar</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Contacto individual */}
              {["María García", "María García", "María García", "Roberto Gómez"].map((nombre, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{nombre}</h4>
                      <p className="text-xs text-slate-500">+54 9 11 8765 4321</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => onAbrirContacto("Prueba")} className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">edit</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seguridad */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">security</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Seguridad</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Contraseña Actual</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" placeholder="••••••••" type="password" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Nueva Contraseña</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" placeholder="Mínimo 8 caracteres" type="password" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Confirmar Nueva Contraseña</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white" placeholder="Repite la contraseña" type="password" />
              </div>
            </div>
          </section>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors">
              Cancelar
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
              Guardar Cambios
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
