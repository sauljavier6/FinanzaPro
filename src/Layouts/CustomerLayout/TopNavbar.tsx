import { useNavigate } from "react-router-dom";
import { useState } from "react";

type TopNavbarProps = {
  onMenuClick?: () => void;
};

export default function TopNavbar({ onMenuClick }: TopNavbarProps) {
  const navigate = useNavigate();
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-color dark:border-gray-800">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">

        {/* LEFT */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {/* Menu mobile + tablet */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Search tablet + desktop */}
          <div className="hidden md:block w-full max-w-md lg:max-w-lg">
            <label className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm"
                placeholder="Buscar cliente..."
              />
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Search mobile */}
          <button
            onClick={() => setMobileSearch(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">search</span>
          </button>

          <button
            onClick={() => navigate("/clientes/notificaciones")}
            className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="hidden sm:flex items-center gap-3">
            <span className="material-symbols-outlined text-slate-400">
              help_outline
            </span>
            <button
              onClick={() => navigate("/clientes/configuracion")}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined text-slate-400">
                settings
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay mobile */}
      {mobileSearch && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-background-dark p-4 md:hidden">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileSearch(false)}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <input
              autoFocus
              className="w-full bg-slate-100 dark:bg-gray-800 rounded-xl px-4 py-3"
              placeholder="Buscar cliente..."
            />
          </div>
        </div>
      )}
    </header>
  );
}
