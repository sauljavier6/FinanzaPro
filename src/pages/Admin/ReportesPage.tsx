import { useParams } from "react-router-dom";
import Reporte from "../../components/AdminComponents/Reportes/Reporte";
import Reportes from "../../components/AdminComponents/Reportes/Reportes";
import CarteraVencida from "../../components/AdminComponents/Reportes/CarteraVencida";
import EstadoCuentas from "../../components/AdminComponents/Reportes/EstadoCuentas";
import Ventas from "../../components/AdminComponents/Reportes/Ventas";

export default function ReportesPage() {
  const { type } = useParams();

  if (!type) {
    return <Reportes />;
  }

  if (type === "graficas") {
    return <Reporte />;
  }

  if (type === "carteravencida") {
    return <CarteraVencida />;
  }

  if (type === "estadocuentas") {
    return <EstadoCuentas />;
  }

  if (type === "ventas") {
    return <Ventas />;
  }


  return <Reportes />;
}