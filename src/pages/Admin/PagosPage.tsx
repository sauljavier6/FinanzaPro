import { useState } from "react";
import Pagos from "../../components/AdminComponents/Pagos/Pagos";
import PagoDetails from "../../components/AdminComponents/Pagos/PagoDetails";

export default function PagosPage() {
  const [paymentId, setPaymentId] = useState<number | null>(null);

  const handleBackToPagos = () => {
    setPaymentId(null);
  };

  return (
    <>
      {!paymentId ? (
        <Pagos onSuccess={(id) => setPaymentId(id)} />
      ) : (
        <PagoDetails paymentId={paymentId} onBack={handleBackToPagos} />
      )}
    </>
  )
}
