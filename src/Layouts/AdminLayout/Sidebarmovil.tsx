import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function Sidebarmovil({ isOpen = true, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const goTo = (label: string, path: string) => {
    setActiveItem(label);
    navigate(path);
    onClose?.(); // cierra el menú en mobile
  };

  return (
    <aside
      className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col
        border-r border-[#e7ebf3] dark:border-gray-800
        bg-white dark:bg-[#161b2a]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Header mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-semibold">Menú</span>
        <button onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-symbols-outlined text-white text-2xl">
            account_balance
          </span>
        </div>
        <div>
          <h1 className="text-lg font-bold">FinanzaPro</h1>
          <p className="text-xs text-[#4c669a] uppercase">Sistema Cobranza</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
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
      </nav>

      <UserProfile />
    </aside>
  );
}
