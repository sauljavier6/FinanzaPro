import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCampanas, updateEstado } from "../../../api/AdminApis/campanaApi";
import { useQueryClient } from "@tanstack/react-query";

export interface Campaign {
  ID_Campaign: number;
  nombre: string;
  asunto: string;
  mensaje: string;
  canal: number;
  diasatraso: number;
  repetircada: number;
  repetirpor: number;
  estado: number;
  createBy: number;
  isinactive: "T" | "F";
}

interface CampaignProps {
  onCreate: (state: boolean) => void
  onUpdate: (campanaId: number) => void;
}

export default function CampañaList({ onCreate, onUpdate }: CampaignProps) {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data: tabla } = useQuery({
    queryKey: ["getCampaigns", page, pageSize],
    queryFn: () => getCampanas(page, pageSize),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('tabla', tabla)

  const periodoMap: Record<number, string> = {
    1: "Hora",
    2: "Día",
    3: "Semana",
    4: "Mes",
    5: "Año",
  };

  const currentPage = tabla?.pagination?.page || 1;
  const totalPages = tabla?.pagination?.totalPages || 0;

  const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex overflow-hiddenq">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">
          {/* Page Title and Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div className="flex flex-col gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Configuración de Campañas
              </h2>
              <p className="text-[#4c669a] text-sm">
                Defina el flujo de comunicación automático para contactar a sus clientes según su estado de deuda.
              </p>
            </div>
            <button onClick={() => onCreate(true)} className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add_circle</span>
              <span>Crear Nueva Regla</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">
                Reglas Activas
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-green-600 dark:text-green-400 text-3xl font-bold">
                  {tabla?.stats?.activas ?? 0}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">
                Reglas Inactivas
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-red-600 dark:text-red-400 text-3xl font-bold">
                  {tabla?.stats?.inactivas ?? 0}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-gray-800 border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">
                Total
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-blue-600 dark:text-blue-400 text-3xl font-bold">
                  {tabla?.stats?.total ?? 0}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7ebf3] dark:border-gray-800 pb-4">
              <h2 className="text-xl font-bold text-[#0d121b] dark:text-white">Flujo de Cobranza</h2>
              <span className="text-xs font-semibold text-[#4c669a] uppercase tracking-widest">Orden Cronológico</span>
            </div>

            {tabla?.data?.map((item: Campaign) => (
              <div key={item.ID_Campaign} className="relative pl-8 before:absolute before:left-3 before:top-4 before:bottom-0 before:w-0.5 before:bg-[#e7ebf3] dark:before:bg-gray-800 last:before:hidden">
                <div className="absolute left-0 top-4 size-6 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                  <div className="size-2 rounded-full bg-primary"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-[#cfd7e7] dark:border-gray-700 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{item.asunto}</span>
                      <h3 className="text-[#0d121b] dark:text-white font-bold text-lg">{item.nombre}</h3>
                    </div>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm">Ejecución: <span className="font-semibold text-[#0d121b] dark:text-gray-200">{item.diasatraso} día(s) {item.estado === 1 ? "Antes" : "Despues"}</span> de la fecha de corte.</p>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm">Cada: <span className="font-semibold text-[#0d121b] dark:text-gray-200">{item.repetircada} {periodoMap[item.repetirpor] ?? ""}</span></p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold border border-green-100 dark:border-green-900/30">
                        <span className="material-symbols-outlined text-sm">chat</span>
                        {item.canal === 1
                          ? "WhatsApp"
                          : item.canal === 2
                            ? "Email"
                            : item.canal === 3
                              ? "Notificación"
                              : ""
                        }
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 border-t md:border-t-0 md:border-l border-[#e7ebf3] dark:border-gray-700 pt-4 md:pt-0 md:pl-6">
                    <div className="flex flex-col items-center gap-1 pr-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.isinactive === "F"}
                          onChange={async () => {
                            await updateEstado(item.ID_Campaign, item.isinactive === "F" ? "T" : "F");

                            queryClient.invalidateQueries({
                              queryKey: ["getCampaigns"],
                            });
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-[10px] font-bold text-[#4c669a] uppercase">Activo</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => onUpdate(item.ID_Campaign)} className="flex items-center justify-center gap-2 h-10 px-4 bg-[#e7ebf3] dark:bg-gray-700 text-[#0d121b] dark:text-white rounded-lg text-sm font-bold hover:bg-[#d1d9e6] transition-colors">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        Previsualizar
                      </button>
                      <button onClick={() => onUpdate(item.ID_Campaign)} className="size-10 flex items-center justify-center bg-[#e7ebf3] dark:bg-gray-700 text-[#0d121b] dark:text-white rounded-lg hover:bg-[#d1d9e6] transition-colors">
                        <span className="material-symbols-outlined text-lg">settings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* FOOTER */}
            <div className="px-4 md:px-6 py-4 border-t border-[#e7ebf3] dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-[#4c669a] text-center md:text-left">
                Mostrando{" "}
                <span className="font-bold">
                  {(tabla?.pagination?.page - 1) * tabla?.pagination?.limit + 1}-
                  {Math.min(
                    tabla?.pagination?.page * tabla?.pagination?.limit,
                    tabla?.pagination?.total
                  )}
                </span>{" "}
                de <span className="font-bold">{tabla?.pagination?.total}</span> Campañas
              </p>

              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30"
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>

                {getPages().map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`h-8 w-8 rounded text-sm font-bold ${p === page
                      ? "bg-primary text-white"
                      : "text-[#4c669a] hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
