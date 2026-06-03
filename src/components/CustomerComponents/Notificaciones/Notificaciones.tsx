import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "../../../utils/dayjs";
import { getNotificaciones, ReadAllNotificaciones, ReadNotificacionById } from "../../../api/customerApis/NotificacionesApi";


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
  const [page] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isFetching } = useQuery({
    queryKey: ["notificacionesadmin", page, pageSize],
    queryFn: () => getNotificaciones(page, pageSize),
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">

            {/* Éxito */}
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">

              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-5xl sm:text-6xl text-green-500">
                  task_alt
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Éxito
              </p>

              <p className="text-2xl sm:text-3xl font-black text-green-600 dark:text-green-400 break-words">
                {counts.success}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs sm:text-sm font-bold text-green-600">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>

                <span className="px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/30">
                  OK
                </span>
              </div>
            </div>

            {/* Alertas */}
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">

              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-5xl sm:text-6xl text-amber-500">
                  warning
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Alertas
              </p>

              <p className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 break-words">
                {counts.warning}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-600">
                <span className="material-symbols-outlined text-sm">
                  pending
                </span>

                <span className="px-2 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30">
                  Pendientes
                </span>
              </div>
            </div>

            {/* Errores */}
            <div className="bg-white dark:bg-background-dark p-4 sm:p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-800 shadow-sm relative overflow-hidden">

              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-5xl sm:text-6xl text-red-500">
                  error
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                Errores
              </p>

              <p className="text-2xl sm:text-3xl font-black text-red-600 dark:text-red-400 break-words">
                {counts.danger}
              </p>

              <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs sm:text-sm font-bold text-red-600">
                <span className="material-symbols-outlined text-sm">
                  report
                </span>

                <button className="hover:underline">
                  Ir a tareas
                </button>
              </div>
            </div>

          </div>

          <div className="mb-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-2 sm:flex border-b border-[#e7ebf3] dark:border-gray-800 md:px-4 gap-4 md:gap-8">
              <button
                className="flex items-center justify-center gap-1.5 py-3 text-xs font-bold border-b-2 transition border-primary text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  list_alt
                </span>
                Todos
                <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full">
                  {data?.data?.length}
                </span>
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
