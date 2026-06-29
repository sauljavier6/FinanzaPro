import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import { getdataSearch } from "../../api/customerApis/layoutApi";
import { getNotificacionesCount } from "../../api/customerApis/NotificacionesApi";

type TopNavbarProps = {
  onMenuClick?: () => void;
};

export default function TopNavbar({ onMenuClick }: TopNavbarProps) {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const { data } = useQuery({
    queryKey: ["layoutbuscarcustomer", search],
    queryFn: () => getdataSearch(search),
    enabled: search.length >= 3,
    refetchOnWindowFocus: false,
  });

  const { data: countnotificaciones } = useQuery({
    queryKey: ["notificacionescustomercount"],
    queryFn: () => getNotificacionesCount(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-color dark:border-gray-800">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">

        {/* LEFT */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* 🔍 SEARCH */}
          <div ref={wrapperRef} className="hidden md:block w-full max-w-md lg:max-w-lg relative">
            <div className="hidden md:block w-full max-w-md lg:max-w-lg">
              <label className="relative w-full">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">
                    search
                  </span>
                </span>
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setOpen(true);
                  }}
                  className="w-full bg-slate-100 dark:bg-gray-800 rounded-xl pl-10 pr-4 py-2.5 text-sm"
                  placeholder="Buscar..."
                />
              </label>
            </div>


            {data?.data?.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50">
                {open && data.data.map((item: any) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    onClick={() => {
                      if (item.type === "invoice") {
                        navigate(`/clientes/facturas/${item.id}`);
                      }
                      if (item.type === "payment") {
                        navigate(`/clientes/pagos/${item.id}`);
                      }
                      if (item.type === "customer") {
                        navigate(`/clientes/clientes/${item.id}`);
                      }

                      setSearch("");
                      setOpen(false);
                    }}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="font-bold mr-2">
                      {item.type === "invoice" && "F"}
                      {item.type === "payment" && "P"}
                      {item.type === "customer" && "C"}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Buscar móvil */}
          <button
            onClick={() => setMobileSearch(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined">search</span>
          </button>

          {/* Notificaciones */}
          <button
            onClick={() => navigate("/clientes/notificaciones")}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined text-slate-500">
              notifications
            </span>

            {countnotificaciones?.total > 0 && (
              <span className="absolute top-1.5 right-1.5 min-w-5 h-5 px-1 flex items-center justify-center text-[10px] font-bold text-white bg-red-500 rounded-full">
                {countnotificaciones.total}
              </span>
            )}
          </button>

          {/* Ayuda */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined text-slate-500">
              help_outline
            </span>
          </button>

          {/* Configuración */}
          <button
            onClick={() => navigate("/clientes/configuracion")}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800"
          >
            <span className="material-symbols-outlined text-slate-500">
              settings
            </span>
          </button>
        </div>
      </div>

      {/* Search overlay mobile */}
      {mobileSearch && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-background-dark p-4 md:hidden">

          {/* WRAPPER RELATIVE */}
          <div className="relative">
            <div className="flex items-center gap-6">
              <button onClick={() => setMobileSearch(false)}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>

              <label className="relative w-full">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">
                    search
                  </span>
                </span>

                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setOpen(true);
                  }}
                  className="w-full bg-slate-100 dark:bg-gray-800 rounded-xl pl-10 pr-4 py-3"
                  placeholder="Buscar..."
                />
              </label>
            </div>

            {/* DROPDOWN */}
            {data?.data?.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 max-h-[60vh] overflow-auto">

                {open && data.data.map((item: any) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    onClick={() => {
                      if (item.type === "invoice") {
                        navigate(`/admin/facturas/${item.id}`);
                      }
                      if (item.type === "payment") {
                        navigate(`/admin/pagos/${item.id}`);
                      }
                      if (item.type === "customer") {
                        navigate(`/admin/clientes/${item.id}`);
                      }

                      setSearch("");
                      setOpen(false);
                      setMobileSearch(false);
                    }}
                    className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="font-bold mr-2">
                      {item.type === "invoice" && "F"}
                      {item.type === "payment" && "P"}
                      {item.type === "customer" && "C"}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}
    </header>
  );
}
