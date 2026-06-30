import { useEffect } from "react";
import { socket } from "../socket/socket";
import { useQueryClient } from "@tanstack/react-query";

export default function SocketProvider({ children }: any) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    const handleNotification = () => {
      queryClient.invalidateQueries({
        queryKey: ["notificacionesadmin"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notificacionesadmincount"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notificacionescustomer"],
      });

      queryClient.invalidateQueries({
        queryKey: ["notificacionescustomercount"],
      });
    };

    socket.on("notification:new", handleNotification);

    socket.on("connect", () => {
      console.log("🔌 socket conectado:", socket.id);
    });

    return () => {
      socket.off("notification:new", handleNotification);
      socket.off("connect");
    };
  }, [queryClient]);

  return <>{children}</>;
}