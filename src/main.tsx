import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext.tsx";
import SocketProvider from "./socket/SocketProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <SocketProvider>
          <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white transition-colors duration-300 min-h-screen font-display">
            <App />
            <ToastContainer position="top-right" />
          </div>
        </SocketProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
