import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import HomePage from "../pages/Admin/HomePage";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import CarteraPage from "../pages/Admin/CarteraPage";
import ClientesPage from "../pages/Admin/ClientesPage";
import FacturasPage from "../pages/Admin/FacturasPage";
import PagosPage from "../pages/Admin/PagosPage";
import NotificacionesPage from "../pages/Admin/NotificacionesPage";
import ReportesPage from "../pages/Admin/ReportesPage";

import HomePageC from "../pages/Customer/HomePage";
import CustomerLayout from "../Layouts/CustomerLayout/CustomerLayout";
import CuentasPage from "../pages/Customer/CuentasPage";
import FacturaPage from "../pages/Customer/FacturaPage";
import NotificacionesPageC from "../pages/Customer/NotificacionesPage";
import PagarPage from "../pages/Customer/PagarPage";
import PagosPageC from "../pages/Customer/PagosPage";
import ConfiguracionPage from "../pages/Customer/ConfiguracionPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cartera" element={<CarteraPage />} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="facturas" element={<FacturasPage />} />
        <Route path="pagos" element={<PagosPage />} />
        <Route path="notificaciones" element={<NotificacionesPage />} />
        <Route path="reportes" element={<ReportesPage />} />
      </Route>

      <Route path="/clientes" element={<CustomerLayout />}>
        <Route index element={<HomePageC />} />
        <Route path="cuentas" element={<CuentasPage />} />
        <Route path="factura" element={<FacturaPage />} />
        <Route path="notificaciones" element={<NotificacionesPageC />} /> 
        <Route path="pagos" element={<PagosPageC />} /> 
        <Route path="configuracion" element={<ConfiguracionPage />} /> 
        <Route path="pagar/:id" element={<PagarPage />} />
      </Route>

      {/* Redirección */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
