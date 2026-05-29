import { useQuery } from "@tanstack/react-query";
import { getContactById, saveContact, updateContact } from "../../../api/customerApis/ProfileApi";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface FormProps {
  id: string | null;
  onClose: (value: boolean) => void;
}

export default function FormularioContacto({ id, onClose }: FormProps) {
  const queryClient = useQueryClient();
  const [saving, setSaving] = useState(false);
  const [contacto, setContacto] = useState({
    fullnombre: "",
    nombre: "",
    correo: "",
    telefono: "",
  });

  const { data } = useQuery({
    queryKey: ["contactodata", id],
    queryFn: () => getContactById(Number(id)),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('contacto', data)

  const datacontacto = data?.data

  useEffect(() => {
    if (!datacontacto) return;

    setContacto({
      fullnombre: datacontacto.fullname,
      nombre: datacontacto.entityid ?? "",
      correo: datacontacto.email ?? "",
      telefono: datacontacto.mobilephone ?? "",
    });

  }, [datacontacto]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContacto((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      let response;

      if (id) {
        response = await updateContact(Number(id), contacto);
      } else {
        response = await saveContact(contacto);
      }

      if (response) {

        await queryClient.invalidateQueries({
          queryKey: ["profiledata"],
        });

        onClose(false);
      }

    } catch (error) {
      console.error("Error al guardar contacto:", error);

    } finally {
      setSaving(false);
    }
  };


  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen relative p-10">
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => onClose(false)}
        />

        <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Agregar Nuevo Contacto
            </h3>
            <button
              onClick={() => onClose(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Nombre Completo
              </label>
              <input
                name="fullnombre"
                type="text"
                value={contacto.fullnombre}
                onChange={handleChange}
                placeholder="Ej. Juan Gabriel Pérez"
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Nombre
              </label>
              <input
                name="nombre"
                type="text"
                value={contacto.nombre}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Teléfono
              </label>
              <input
                name="telefono"
                type="tel"
                value={contacto.telefono}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1 uppercase tracking-wider">
                Correo Electrónico{" "}
                <span className="text-[10px] font-normal lowercase">
                  (Opcional)
                </span>
              </label>
              <input
                name="correo"
                type="email"
                value={contacto.correo}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm py-2.5 focus:border-primary focus:ring-primary dark:text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
            <button
              disabled={saving}
              onClick={() => onClose(false)}
              className="flex-1 px-6 py-3 rounded-xl text-sm font-bold bg-slate-200 text-slate-700 disabled:opacity-50 dark:bg-slate-700 dark:text-slate-200"
            >
              Cancelar
            </button>
            <button
              disabled={saving}
              onClick={handleSave}
              className="
                flex-1 px-6 py-3 rounded-xl text-sm font-bold
                bg-primary text-white
                hover:brightness-110
                disabled:opacity-70
                disabled:cursor-not-allowed
                transition-all
                flex items-center justify-center gap-2
              "
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Guardando...
                </>
              ) : (
                "Guardar"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
