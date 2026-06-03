import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataProfile, updateImageProfile, updateProfile } from "../../../api/AdminApis/ProfileApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function Configuracion() {
  const { updateUserImage, updateUserData } = useAuth();
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();
  const [disable, setDisable] = useState(true);
  const [preview, setPreview] = useState<string | null>(null);
  const [user, setUser] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    rfc: "",
    imagen: "",
  });

  const { data } = useQuery({
    queryKey: ["profiledata"],
    queryFn: () => getDataProfile(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  console.log('data', data)

  const datacustomer = data?.data?.customer;
  const datauser = data?.data?.user;

  useEffect(() => {
    if (!datauser) return;

    setUser({
      nombre: datauser.name ?? "",
      correo: datauser.email?.Description ?? "",
      telefono: datauser.phone?.Description ?? "",
      imagen: datauser.imagen ?? "",
      rfc: datauser.rfc ?? "",
    });
  }, [datauser, datacustomer]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisable(false);

    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      setSaving(true);

      const response = await updateProfile(user);

      if (response) {

        updateUserData({
          name: user.nombre
        });

        await queryClient.invalidateQueries({
          queryKey: ["profiledata"],
        });

        setDisable(true);
      }

    } catch (error) {

      console.error("Error actualizando perfil:", error);

    } finally {

      setSaving(false);

    }
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    try {
      const response = await updateImageProfile(file);

      if (response?.image) {
        updateUserImage(response.image);
      }

      await queryClient.invalidateQueries({
        queryKey: ["profiledata"],
      });

    } catch (error) {
      console.error("Error actualizando imagen:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden min-h-screen">
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="p-3 sm:p-8">

          {/* Encabezado */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2">
              Configuración de Perfil
            </h1>
            <p className="text-[#4c669a] text-xs sm:text-sm leading-relaxed">
              Administra tu información personal, contactos de referencia y seguridad de la cuenta.
            </p>
          </div>

          {/* Perfil de Usuario */}
          <section className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary">person</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Perfil de Usuario</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                <div className="relative group">
                  <div className="
                    w-32 h-32 rounded-full overflow-hidden
                    border-4 border-slate-100 dark:border-slate-800
                    border-dashed transition-all
                    group-hover:border-primary
                  ">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : user?.imagen ? (
                      <img
                        src={`${import.meta.env.VITE_API_URL_IMAGES}/profiles/${user.imagen}`}
                        alt="Perfil"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                        <span className="material-symbols-outlined text-5xl text-slate-400">
                          person
                        </span>
                      </div>
                    )}
                  </div>
                  <label className="
                    absolute bottom-1 right-1
                    w-9 h-9 rounded-full
                    bg-primary text-white
                    flex items-center justify-center
                    border-2 border-white dark:border-slate-900
                    shadow-sm cursor-pointer
                    hover:scale-110 transition-transform
                  ">
                    <span className="material-symbols-outlined text-sm">
                      photo_camera
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="text-center">
                  <p className="text-[10px] text-slate-400 mt-1">
                    JPG, PNG o GIF · Máx 5MB
                  </p>
                </div>
              </div>

              {/* Campos */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Nombre Completo</label>
                  <input
                    name="nombre"
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white"
                    type="text"
                    value={user.nombre}
                    onChange={handleUserChange}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Correo Electrónico</label>
                  <input
                    name="correo"
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white"
                    type="email"
                    value={user.correo}
                    onChange={handleUserChange}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">Teléfono Principal</label>
                  <input
                    name="telefono"
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white"
                    type="tel"
                    value={user.telefono}
                    onChange={handleUserChange}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 ml-1">RFC</label>
                  <input
                    name="rfc"
                    className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:border-primary focus:ring-primary dark:text-white"
                    placeholder="XXXXXXXXXXXXX"
                    type="text"
                    value={user.rfc}
                    onChange={handleUserChange}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-4">
            <button
              disabled={disable || saving}
              onClick={handleUpdateProfile}
              className={`
                w-full sm:w-auto px-8 py-3 rounded-lg text-sm font-bold 
                transition-all duration-200
                flex items-center justify-center gap-2

                ${disable || saving
                  ? "bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed shadow-none opacity-70"
                  : "bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                }
              `}
            >

              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Guardando...
                </>
              ) : (
                "Guardar Cambios"
              )}

            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
