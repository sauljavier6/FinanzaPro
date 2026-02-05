import { useState } from "react";
import Cartera from "../../components/AdminComponents/Cartera/Cartera";
import Factura from "../../components/AdminComponents/Cartera/Factura";

export default function CarteraPage() {
  const [facturaId, setFacturaId] = useState<string | null>(null);

  const handleBackToCartera = () => {
    setFacturaId(null); // 🔥 BORRA el estado
  };

  return (
    <>
      {!facturaId ? (
        <Cartera onSuccess={(id) => setFacturaId(id)} />
      ) : (
        <Factura facturaId={facturaId} onBack={handleBackToCartera}/>
      )}
    </>
  );
}
