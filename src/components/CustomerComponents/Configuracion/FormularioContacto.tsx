interface FormProps {
  id: string | null;
  onClose: (value: boolean) => void;
}

export default function FormularioContacto({ id, onClose }: FormProps) {

    console.log(id)

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative p-10">
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => onClose(false)}
        />

        <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Agregar Nuevo Contacto
            </h3>
            <button
              onClick={() => onClose(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Ej. Juan Gabriel Pérez"
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Parentesco o Relación
              </label>
              <select
                defaultValue=""
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="familiar">Familiar</option>
                <option value="trabajo">Trabajo / Colega</option>
                <option value="amigo">Amigo</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="+52 644 000 0000"
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Correo Electrónico{" "}
                <span className="text-[10px] font-normal lowercase">
                  (Opcional)
                </span>
              </label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
            <button
              onClick={() => onClose(false)}
              className="flex-1 px-6 py-3 rounded-xl text-sm font-bold bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Cancelar
            </button>
            <button className="flex-1 px-6 py-3 rounded-xl text-sm font-bold bg-primary text-white hover:brightness-110 transition-all">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
