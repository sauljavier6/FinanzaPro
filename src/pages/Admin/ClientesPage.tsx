import { useState } from "react";
import ClienteDetail from "../../components/AdminComponents/Clientes/ClienteDetails";
import Clientes from "../../components/AdminComponents/Clientes/Clientes";

export default function ClientesPage() {
  const [clienteId, setClienteId] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleSelectCliente = (id: number) => {
    setClienteId(id);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setClienteId(null);
  };

  return (
    <>
      {!showDetail && clienteId === null && (
        <Clientes onSelectCliente={handleSelectCliente} />
      )}

      {showDetail && clienteId !== null && (
        <ClienteDetail
          clienteId={clienteId}
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
}