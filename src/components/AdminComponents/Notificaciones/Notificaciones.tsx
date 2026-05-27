import { useQuery } from "@tanstack/react-query";
import { getNotificaciones, ReadAllNotificaciones, ReadNotificacionById } from "../../../api/AdminApis/NotificacionesApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "../../../utils/dayjs";


interface NotificationStyles {
  icon: string;
  color: string;
  bg: string;
  tag: string;
}

interface Notification {
  id: number;
  tipotransaccion: number,
  transaction: number,
  type: "success" | "warning" | "danger" | "info";
  title: string;
  message: string;
  company: string;
  time: string;
  styles: NotificationStyles;
}

export default function Notificaciones() {
  const navigate = useNavigate();
  const [estado, setEstado] = useState<"" | "success" | "warning" | "danger" | "info">("");
  const [page] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isFetching } = useQuery({
    queryKey: ["notificacionesadmin", page, pageSize, estado],
    queryFn: () => getNotificaciones(page, pageSize, estado),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  const counts = (data?.countsByType || []).reduce(
    (acc: any, item: any) => {
      acc[item.type] = Number(item.total);
      return acc;
    },
    {
      success: 0,
      warning: 0,
      danger: 0
    }
  );

  const handleReadNotificationsById = async (id: number) => {
    await ReadNotificacionById(id)
  }

  const handleReadAllNotifications = async () => {
    await ReadAllNotificaciones()
  }

  const formatRelativeTime = (date: string) => {
    return dayjs.utc(date).local().fromNow();
  };


  return (
    <div className="flex overflow-hidden">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="min-w-0">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Centro de Notificaciones
              </h2>
              <p className="text-sm text-[#64748b] mt-1 break-words">
                Gestiona la actividad reciente de la cartera de clientes
              </p>
            </div>

            <button
              onClick={handleReadAllNotifications}
              className="w-full md:w-auto flex items-center justify-center gap-2 rounded-lg h-11 px-5 
                bg-background-light dark:bg-gray-800 
                text-[#0d121b] dark:text-white text-sm font-bold 
                hover:bg-blue-100 dark:hover:bg-blue-900/30 
                hover:text-blue-700 dark:hover:text-blue-400
                transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                done_all
              </span>
              <span className="truncate">Marcar todo como leído</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mb-8">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Éxito
              </p>

              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-green-600 dark:text-green-400">
                  {counts.success}
                </h4>

                <span className="text-xs text-green-600 font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded">
                  OK
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Alertas
              </p>

              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
                  {counts.warning}
                </h4>

                <span className="text-xs text-amber-600 font-bold bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">
                  Pendientes
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-[#e7ebf3] dark:border-gray-800 shadow-sm">
              <p className="text-[#4c669a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Errores
              </p>

              <div className="flex items-end justify-between">
                <h4 className="text-3xl sm:text-2xl font-black text-red-600 dark:text-red-400">
                  {counts.danger}
                </h4>

                <button className="text-xs text-red-600 dark:text-red-400 font-bold hover:underline">
                  Ir a tareas
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-2 sm:flex border-b border-[#e7ebf3] dark:border-gray-800 md:px-4 gap-4 md:gap-8">
              <button
                onClick={() => setEstado("")}
                className={`flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 transition
                    ${estado === ""
                    ? "border-primary text-primary"
                    : "border-transparent text-[#4c669a] dark:text-gray-400"}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  list_alt
                </span>
                Todos
                <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full">
                  {data?.data?.length}
                </span>
              </button>

              {/* SUCCESS */}
              <button
                onClick={() => setEstado("success")}
                className={`flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 transition
                    ${estado === "success"
                    ? "border-green-500 text-green-600 dark:text-green-400"
                    : "border-transparent text-[#4c669a] dark:text-gray-400"}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Éxito
              </button>

              {/* WARNING */}
              <button
                onClick={() => setEstado("warning")}
                className={`flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 transition
                    ${estado === "warning"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-[#4c669a] dark:text-gray-400"}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  event_busy
                </span>
                Alertas
              </button>

              {/* DANGER */}
              <button
                onClick={() => setEstado("danger")}
                className={`flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 transition
                    ${estado === "danger"
                    ? "border-red-500 text-red-600 dark:text-red-400"
                    : "border-transparent text-[#4c669a] dark:text-gray-400"}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                Errores
              </button>

            </div>

            {/* */}
            <div className="flex flex-col divide-y divide-[#e7ebf3] dark:divide-gray-800">
              {data?.data?.map((n: Notification) => (
                <div
                  key={n.id}
                  className="group flex flex-col md:flex-row gap-4 bg-white dark:bg-background-dark px-6 py-5 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors"
                >

                  {/* ICON */}
                  <div className={`flex items-center justify-center rounded-xl ${n.styles.bg} shrink-0 size-12 border`}>
                    <span className={`material-symbols-outlined text-2xl ${n.styles.color}`}>
                      {n.styles.icon}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-1 min-w-0">

                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[#0d121b] dark:text-white text-base font-bold break-words">
                        {n.title}{" "}
                        <span className="text-primary">
                          {n.company}
                        </span>
                      </p>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${n.styles.tag}`}>
                        {n.type}
                      </span>
                    </div>

                    <p className="text-[#4c669a] dark:text-gray-400 text-xs font-medium flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">
                        schedule
                      </span>
                      {formatRelativeTime(n.time)}
                    </p>

                    <p className="text-[#4c669a] dark:text-gray-300 text-sm mt-2 leading-relaxed break-words">
                      {n.message}
                    </p>

                  </div>

                  {/* BUTTON */}
                  <div className="flex items-center w-full md:w-auto">
                    <button
                      disabled={!(n.tipotransaccion === 1 || n.tipotransaccion === 2)}
                      onClick={() => {
                        if (n.tipotransaccion === 2) {
                          navigate(`/admin/facturas/${n.transaction}`);
                        }
                        if (n.tipotransaccion === 1) {
                          navigate(`/admin/pagos/${n.transaction}`);
                        }
                        handleReadNotificationsById(n.id)
                      }}
                      className="w-full md:w-auto h-9 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
                      Ver detalle
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/**/}
            <div className="p-6 bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 text-center">
              <button
                disabled={isFetching || !data || data.page >= data.totalPages}
                onClick={() => setPageSize(pageSize + 10)}
                className="text-primary text-sm font-bold hover:underline disabled:opacity-50"
              >
                {isFetching
                  ? "Cargando..."
                  : data?.page >= data?.totalPages
                    ? "No hay más notificaciones"
                    : "Cargar más notificaciones"}
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
