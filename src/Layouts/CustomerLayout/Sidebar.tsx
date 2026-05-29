import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState<string>(() => {
    return localStorage.getItem("activeSidebarItem") || "Home";
  });

  const goTo = (label: string, path: string) => {
    setActiveItem(label);
    localStorage.setItem("activeSidebarItem", label);
    navigate(path);
  };

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/clientes/":
        setActiveItem("Home");
        break;
      case "/clientes/cuentas":
        setActiveItem("Cuentas");
        break;
      case "/clientes/facturas":
        setActiveItem("Facturas");
        break;
      case "/clientes/pagos":
        setActiveItem("Pagos");
        break;
      case "/clientes/notificaciones":
        setActiveItem("Notificaciones");
        break;
      case "/clientes/configuracion":
        setActiveItem("configuracion");
        break;
      default:
        setActiveItem("Home");
    }
  }, []);

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-[#161b2a]">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-symbols-outlined text-white text-2xl">
            account_balance
          </span>
        </div>
        <div>
          <h1 className="text-lg font-bold">CobranzaPro</h1>
          <p className="text-xs text-[#4c669a] uppercase">Sistema Cobranza</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        <SidebarItem
          icon="dashboard"
          label="Home"
          active={activeItem === "Home"}
          onClick={() => goTo("Home", "/clientes/")}
        />
        <SidebarItem
          icon="request_quote"
          label="Estado de Cuentas"
          active={activeItem === "Cuentas"}
          onClick={() => goTo("Cuentas", "/clientes/cuentas")}
        />
        <SidebarItem
          icon="receipt_long"
          label="Facturas"
          active={activeItem === "Facturas"}
          onClick={() => goTo("Facturas", "/clientes/facturas")}
        />
        <SidebarItem
          icon="payments"
          label="Pagos"
          active={activeItem === "Pagos"}
          onClick={() => goTo("Pagos", "/clientes/pagos")}
        />
        <SidebarItem
          icon="handshake"
          label="Promesas"
          active={activeItem === "Promesas"}
        // onClick={() => goTo("Promesas", "/clientes/Promesas")}
        />

        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />

        <SidebarItem
          icon="notifications"
          label="Notificaciones"
          active={activeItem === "Notificaciones"}
          onClick={() => goTo("Notificaciones", "/clientes/notificaciones")}
        />
        <SidebarItem
          icon="settings"
          label="configuracion"
          active={activeItem === "configuracion"}
          onClick={() => goTo("configuracion", "/clientes/configuracion")}
        />
      </nav>

      <UserProfile />
    </aside>
  );
}
