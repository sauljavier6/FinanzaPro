import { useState } from "react";
import Configuracion from "../../components/CustomerComponents/Configuracion/Configuracion";
import FormularioContacto from "../../components/CustomerComponents/Configuracion/FormularioContacto";

export default function ConfiguracionPage() {
  const [open, setOpen] = useState(false);
  const [ContactoId, setContactoId] = useState<string | null>(null);

  const handleabrirModal = (id?: string ) => {
    console.log(id);
    if(id){
      setContactoId(id);
    }
    setOpen(true);
  };

  const handleCerrarModal = () => {
    setContactoId(null);
    setOpen(false);
  };

  return (
    <>
      <Configuracion onAbrirContacto={handleabrirModal} />

      {open && <FormularioContacto id={ContactoId} onClose={handleCerrarModal} />}
    </>
  );
}
