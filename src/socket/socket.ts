import { io } from "socket.io-client";

console.log("Socket URL:", import.meta.env.VITE_BACKEND_URL);

export const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});