import { useState } from "react";
import { registerUser } from "../../api/authApis/authApi";
import { toast } from "react-toastify";

interface RecoverPasswordProps {
  onBackToLogin: () => void;
}

export default function Register({ onBackToLogin }: RecoverPasswordProps) {
  const [cliente, setCliente] = useState({
    fullName: "",
    customerNumber: "",
    rfc: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !cliente.fullName ||
      !cliente.customerNumber ||
      !cliente.email ||
      cliente.password.length < 8
    ) {
      toast.error("Completa todos los campos obligatorios");
      return;
    }

    try {
      setLoading(true);

      const promise = registerUser({
        fullName: cliente.fullName,
        customerNumber: cliente.customerNumber,
        rfc: cliente.rfc,
        phone: cliente.phone,
        email: cliente.email,
        password: cliente.password,
        profileImage,
      });

      toast.promise(promise, {
        success: "Usuario registrado correctamente 🎉",
        error: "Error al registrar usuario",
      });

      await promise;

      // ✅ Limpiar el formulario
      setCliente({
        fullName: "",
        customerNumber: "",
        rfc: "",
        phone: "",
        email: "",
        password: "",
      });
      setProfileImage(null);
      setPreview(null);

      // ✅ Redirigir al login
      onBackToLogin();
    } catch (error: any) {
      toast.error(error.message || "Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Solo se permiten imágenes");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("La imagen no debe superar 2MB");
      return;
    }

    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 border border-[#e7ebf3] dark:border-primary/10 overflow-hidden">
          <div className="p-8 pb-4 text-center">
            <h1 className="text-[#0d121b] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Crea tu cuenta de cliente
            </h1>

            <p className="mt-3 text-[#4c669a] dark:text-slate-400 text-base leading-relaxed">
              Ingresa tus datos para gestionar tus facturas y pagos de forma
              segura.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 pt-2 flex flex-col gap-5"
          >
            <div className="flex flex-col items-center gap-3 mt-6">
              <div className="relative">
                <div className="size-24 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-slate-400">
                      person
                    </span>
                  )}
                </div>

                <label className="absolute bottom-0 right-0 size-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    edit
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Opcional · JPG o PNG · Máx 2MB
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                Nombre Completo
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  person
                </span>
                <input
                  value={cliente.fullName}
                  onChange={(e) =>
                    setCliente({ ...cliente, fullName: e.target.value })
                  }
                  className="w-full pl-11 pr-4 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  placeholder="Ej. Juan Pérez García"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                Número de Cliente NetSuite
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  tag
                </span>
                <input
                  value={cliente.customerNumber}
                  onChange={(e) =>
                    setCliente({ ...cliente, customerNumber: e.target.value })
                  }
                  inputMode="numeric"
                  className="w-full pl-11 pr-4 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  placeholder="Ej. 100234"
                  type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                  RFC
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                    badge
                  </span>
                  <input
                    value={cliente.rfc}
                    onChange={(e) =>
                      setCliente({
                        ...cliente,
                        rfc: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full pl-11 pr-4 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="ABCD123456H01"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                  Teléfono
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                    call
                  </span>
                  <input
                    value={cliente.phone}
                    onChange={(e) =>
                      setCliente({ ...cliente, phone: e.target.value })
                    }
                    inputMode="tel"
                    className="w-full pl-11 pr-4 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="55 1234 5678"
                    type="tel"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                Correo Electrónico
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  mail
                </span>
                <input
                  value={cliente.email}
                  onChange={(e) =>
                    setCliente({ ...cliente, email: e.target.value })
                  }
                  className="w-full pl-11 pr-4 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  placeholder="usuario@ejemplo.com"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0d121b] dark:text-slate-200">
                Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  lock
                </span>
                <input
                  value={cliente.password}
                  onChange={(e) =>
                    setCliente({ ...cliente, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-11 pr-12 h-13 rounded-lg border border-[#cfd7e7] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d121b] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  placeholder="Min. 8 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
                >
                  <span className="material-symbols-outlined text-lg">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <button
              disabled={
                loading ||
                !cliente.fullName ||
                !cliente.customerNumber ||
                !cliente.email ||
                cliente.password.length < 8
              }
              className={`mt-4 flex w-full items-center justify-center rounded-lg h-14 px-4 text-base font-bold transition-all shadow-lg
              ${
                loading ||
                !cliente.fullName ||
                !cliente.customerNumber ||
                !cliente.email ||
                cliente.password.length < 8
                  ? "bg-slate-400 cursor-not-allowed shadow-none text-white"
                  : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
              }`}
              type="submit"
            >
              {loading ? "Creando cuenta..." : "Registrarse"}
            </button>
          </form>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span>¿Ya tienes una cuenta?</span>
              <button
                type="button"
                onClick={onBackToLogin}
                className="inline-flex items-center gap-1 font-bold text-primary hover:underline transition"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Volver al inicio de sesión
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
