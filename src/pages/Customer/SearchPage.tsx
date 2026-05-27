import { useEffect, useState } from "react";
import ClienteDetail from "../../components/AdminComponents/Clientes/ClienteDetails";
import { useParams } from "react-router-dom";
import PagoDetails from "../../components/CustomerComponents/Pagos/PagoDetails";
import Factura from "../../components/CustomerComponents/Facturas/Factura";

export default function SearchPage() {
    const { id, type } = useParams();

    const [facturaId, setFacturaId] = useState<number | null>(null);
    const [clienteId, setClienteId] = useState<number | null>(null);
    const [pagoId, setPagoId] = useState<number | null>(null);

    useEffect(() => {
        console.log('data',id, type)
        const parsedId = id ? Number(id) : null;

        if (!parsedId) {
            setFacturaId(null);
            setClienteId(null);
            setPagoId(null)
            return;
        }

        if (type === "clientes") {
            setClienteId(parsedId);
            setFacturaId(null);
            setPagoId(null)
        } else if (type === "pagos") {
            setPagoId(parsedId);
            setFacturaId(null);
            setClienteId(null);
        }
        else if (type === "facturas") {
            setFacturaId(parsedId);
            setClienteId(null);
            setPagoId(null)
        }
    }, [id, type]);

    const handleBack = () => {
        window.history.back();
    };

    const renderContent = () => {
        if (clienteId) {
            return (
                <ClienteDetail
                    clienteId={clienteId}
                    onClose={handleBack}
                />
            );
        }

        if (facturaId) {
            return (
                <Factura
                    facturaId={facturaId}
                    onBack={handleBack}
                />
            );
        }

        if (pagoId) {
            return (
                <PagoDetails paymentId={pagoId} onBack={handleBack} />
            );
        }

        

    };

    return <>{renderContent()}</>;
}