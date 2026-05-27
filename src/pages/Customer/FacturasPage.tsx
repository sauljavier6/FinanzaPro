import { useState } from "react";
import Facturas from "../../components/CustomerComponents/Facturas/Facturas";
import Factura from "../../components/CustomerComponents/Facturas/Factura";

export default function FacturasPage() {
  const [facturaId, setFacturaId] = useState<number | null>(null);

  const handleBackToCartera = () => {
    setFacturaId(null);
  };


  return (
    <>
      {!facturaId ? (
        <Facturas onAbrirFactura={(id) => setFacturaId(id)} />
      ) : (
        <Factura facturaId={facturaId} onBack={handleBackToCartera} />
      )}
    </>
  )
}
