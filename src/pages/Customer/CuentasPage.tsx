import { useState } from "react";
import Cuentas from "../../components/CustomerComponents/Cuentas/Cuentas";
import Factura from "../../components/CustomerComponents/Factura/Factura";

type Vista = "cuentas" | "factura";

export default function CuentasPage() {
  const [vista, setVista] = useState<Vista>("cuentas");
  const [facturaId, setFacturaId] = useState<string | null>(null);

  const abrirFactura = (id: string) => {
    console.log(id)
    setFacturaId(id);
    setVista("factura");
  };

  const volverACuentas = () => {
    setFacturaId(null);
    setVista("cuentas");
  };

  return (
    <>
      {vista === "cuentas" && (
        <Cuentas onAbrirFactura={abrirFactura} />
      )}

      {vista === "factura" && facturaId && (
        <Factura id={facturaId} onVolver={volverACuentas} />
      )}
    </>
  );
}
