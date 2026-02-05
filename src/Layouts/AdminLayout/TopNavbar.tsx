import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const navigate = useNavigate();


  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-color dark:border-gray-800 px-8 py-4">
      <div className="flex items-center gap-4 flex-1">
        <label className="relative w-full max-w-lg">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </span>
          <input
            className="w-full bg-slate-100 dark:bg-gray-800 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-500"
            placeholder="Buscar cliente por nombre, ID fiscal o correo..."
            type="text"
          />
        </label>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={() => navigate("/admin/notificaciones")} className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
        <div className="h-6 w-[1px] bg-slate-200 dark:bg-gray-700"></div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-400">
            help_outline
          </span>
          <span className="material-symbols-outlined text-slate-400">settings</span>
        </div>
      </div>
    </header>
  );
}
