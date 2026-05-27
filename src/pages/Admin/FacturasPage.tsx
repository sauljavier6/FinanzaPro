import { useState } from "react";
import Facturas from "../../components/AdminComponents/Facturas/Facturas";
import Factura from "../../components/AdminComponents/Cartera/Factura";

export default function FacturasPage() {
  const [facturaId, setFacturaId] = useState<number | null>(null);

  const handleBackToCartera = () => {
    setFacturaId(null);
  };


  return (
    <>
      {!facturaId ? (
        <Facturas onSuccess={(id) => setFacturaId(id)} />
      ) : (
        <Factura facturaId={facturaId} onBack={handleBackToCartera} />
      )}
    </>
  )
}
