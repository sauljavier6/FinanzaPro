import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState<string>(() => {
    return localStorage.getItem("activeSidebarItem") || "Home";
  });

  const goTo = (label: string, path: string) => {
    setActiveItem(label);
    localStorage.setItem("activeSidebarItem", label);
    navigate(path);
  };

  useEffect(() => {
    const path = location.pathname;

    switch (path) {
      case "/admin/":
        setActiveItem("Home");
        localStorage.setItem("activeSidebarItem", "Home");
        break;
      case "/admin/cartera":
        setActiveItem("Cartera");
        localStorage.setItem("activeSidebarItem", "Cartera");
        break;
      case "/admin/clientes":
        setActiveItem("Clientes");
        localStorage.setItem("activeSidebarItem", "Clientes");
        break;
      case "/admin/facturas":
        setActiveItem("Facturas");
        localStorage.setItem("activeSidebarItem", "Facturas");
        break;
      case "/admin/pagos":
        setActiveItem("Pagos");
        localStorage.setItem("activeSidebarItem", "Pagos");
        break;
      case "/admin/reportes":
        setActiveItem("Reportes");
        localStorage.setItem("activeSidebarItem", "Reportes");
        break;
      case "/admin/notificaciones":
        setActiveItem("Notificaciones");
        localStorage.setItem("activeSidebarItem", "Notificaciones");
        break;
      case "/admin/Campana":
        setActiveItem("Campana");
        localStorage.setItem("activeSidebarItem", "Campana");
        break;
      case "/admin/configuracion":
        setActiveItem("configuracion");
        break;
      default:
        setActiveItem("Home");
        localStorage.setItem("activeSidebarItem", "Home");
    }
  }, [location.pathname]);

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
          onClick={() => goTo("Home", "/admin/")}
        />

        <SidebarItem
          icon="work"
          label="Cartera"
          active={activeItem === "Cartera"}
          onClick={() => goTo("Cartera", "/admin/cartera")}
        />

        <SidebarItem
          icon="group"
          label="Clientes"
          active={activeItem === "Clientes"}
          onClick={() => goTo("Clientes", "/admin/clientes")}
        />

        <SidebarItem
          icon="receipt_long"
          label="Facturas"
          active={activeItem === "Facturas"}
          onClick={() => goTo("Facturas", "/admin/facturas")}
        />

        <SidebarItem
          icon="credit_score"
          label="Pagos"
          active={activeItem === "Pagos"}
          onClick={() => goTo("Pagos", "/admin/pagos")}
        />

        <SidebarItem
          icon="bar_chart"
          label="Reportes"
          active={activeItem === "Reportes"}
          onClick={() => goTo("Reportes", "/admin/reportes")}
        />

        {/* Separador */}
        <div className="my-4 border-t border-gray-200 dark:border-gray-800" />

        <SidebarItem
          icon="notifications"
          label="Notificaciones"
          active={activeItem === "Notificaciones"}
          onClick={() => goTo("Notificaciones", "/admin/notificaciones")}
        />

        <SidebarItem
          icon="campaign"
          label="Campañas de cobranza"
          active={activeItem === "Campana"}
          onClick={() => goTo("Campana", "/admin/Campana")}
        />

        <SidebarItem
          icon="settings"
          label="configuracion"
          active={activeItem === "configuracion"}
          onClick={() => goTo("configuracion", "/admin/configuracion")}
        />
      </nav>

      <UserProfile />
    </aside>
  );
}
