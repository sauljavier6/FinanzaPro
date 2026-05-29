import { useState } from "react";
import Cuentas from "../../components/CustomerComponents/Cuentas/Cuentas";
import Factura from "../../components/CustomerComponents/Facturas/Factura";
import PagoDetails from "../../components/CustomerComponents/Pagos/PagoDetails";

type Vista = "cuentas" | "factura" | "pago";

export default function CuentasPage() {
  const [vista, setVista] = useState<Vista>("cuentas");
  const [facturaId, setFacturaId] = useState<number | null>(null);
  const [pagoId, setPagoId] = useState<number | null>(null);

  const abrirFactura = (id: number) => {
    setFacturaId(id);
    setPagoId(null);
    setVista("factura");
  };

  const abrirPago = (id: number) => {
    setPagoId(id);
    setFacturaId(null);
    setVista("pago");
  };

  const volverACuentas = () => {
    setFacturaId(null);
    setPagoId(null);
    setVista("cuentas");
  };

  return (
    <>
      {vista === "cuentas" && (
        <Cuentas
          onAbrirFactura={abrirFactura}
          onAbrirPago={abrirPago}
        />
      )}

      {vista === "factura" && facturaId && (
        <Factura facturaId={facturaId} onBack={volverACuentas} />
      )}

      {vista === "pago" && pagoId && (
        <PagoDetails paymentId={pagoId} onBack={volverACuentas} />
      )}
    </>
  );
}