import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";

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
import SearchPage from "../pages/Admin/SearchPage";
import CampañaPage from "../pages/Admin/CampañaPage";


import HomePageC from "../pages/Customer/HomePage";
import CustomerLayout from "../Layouts/CustomerLayout/CustomerLayout";
import CuentasPage from "../pages/Customer/CuentasPage";
import FacturasPageC from "../pages/Customer/FacturasPage";
import NotificacionesPageC from "../pages/Customer/NotificacionesPage";
import PagarPage from "../pages/Customer/PagarPage";
import PagosPageC from "../pages/Customer/PagosPage";
import ConfiguracionPageC from "../pages/Customer/ConfiguracionPage";
import ResetPassword from "../components/AuthComponents/ResetPassword";
import SearchPageC from "../pages/Customer/SearchPage";
import ConfiguracionPage from "../pages/Admin/ConfiguracionPage";


const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      <Route element={
        <ProtectedRoute allowedRoles={["SuperAdministrador", "Administrador", "Supervisor"]} />
      }>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cartera" element={<CarteraPage />} />
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="facturas" element={<FacturasPage />} />
          <Route path="pagos" element={<PagosPage />} />
          <Route path="notificaciones" element={<NotificacionesPage />} />
          <Route path="reportes" element={<ReportesPage />} />
          <Route path="Campana" element={<CampañaPage />} />
          <Route path="reportes/:type" element={<ReportesPage />} />   
          <Route path="configuracion" element={<ConfiguracionPage />} />
          <Route path=":type/:id" element={<SearchPage />} />
        </Route>
      </Route>

      <Route element={
        <ProtectedRoute allowedRoles={["Cliente", "Invitado"]} />
      }>
        <Route path="/clientes" element={<CustomerLayout />}>
          <Route index element={<HomePageC />} />
          <Route path="cuentas" element={<CuentasPage />} />
          <Route path="facturas" element={<FacturasPageC />} />
          <Route path="notificaciones" element={<NotificacionesPageC />} />
          <Route path="pagos" element={<PagosPageC />} />
          <Route path="configuracion" element={<ConfiguracionPageC />} />
          <Route path="pagar/:id" element={<PagarPage />} />
          <Route path=":type/:id" element={<SearchPageC />} />
        </Route>
      </Route>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
};

export default AppRoutes;
