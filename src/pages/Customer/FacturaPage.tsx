import Factura from "../../components/CustomerComponents/Factura/Factura";


export default function FacturaPage() {
  return (
    <Factura id={""} onVolver={function (): void {
      throw new Error("Function not implemented.");
    } } />
  )
}
  