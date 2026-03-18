import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface LoginProps {
  onRegister?: (register: boolean) => void;
  onRecoverPassword?: (recover: boolean) => void;
}

export default function Login({ onRegister, onRecoverPassword }: LoginProps) {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    if (!user?.roleName) return;

    if (
      ["SuperAdministrador", "Administrador", "Supervisor"].includes(
        user.roleName
      )
    ) {
      navigate("/admin");
    } else {
      navigate("/clientes");
    }
  }, [user, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(formData);
      toast.success("Login exitoso");
    } catch (error) {
      toast.error("Credenciales incorrectas");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[480px] flex flex-col gap-4 sm:gap-6">
          <div className="bg-white dark:bg-[#1a2133] shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="w-full h-24 sm:h-32 bg-[#0a3a9c] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)]" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <span className="material-symbols-outlined text-white text-4xl sm:text-5xl opacity-80">
                lock
              </span>
            </div>

            <div className="px-4 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10">
              <div className="mb-6 sm:mb-10 text-center">
                <h1 className="text-[#0d121b] dark:text-white text-2xl sm:text-3xl font-bold leading-tight mb-1 sm:mb-2">
                  Bienvenido de nuevo
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-normal leading-normal">
                  Ingresa a tu cuenta de gestión financiera
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="text-sm sm:text-sm font-bold text-[#0d121b] dark:text-gray-200"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-base sm:text-xl pointer-events-none">
                      mail
                    </span>
                    <input
                      id="email"
                      type="email"
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm sm:text-base transition-colors dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <label
                    className="text-sm sm:text-sm font-bold text-[#0d121b] dark:text-gray-200"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-base sm:text-xl pointer-events-none">
                      key
                    </span>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-10 sm:pl-11 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm sm:text-base transition-colors dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-2 sm:right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <span className="material-symbols-outlined text-base sm:text-xl">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 gap-2 sm:gap-0">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rememberMe: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />

                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                      Recordarme
                    </span>
                  </label>
                  <button
                    type="button"
                    onClick={() => onRecoverPassword && onRecoverPassword(true)}
                    className="text-sm font-bold text-primary hover:underline underline-offset-4"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 sm:py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-2 sm:mt-4 text-sm sm:text-base"
                >
                  <span>Iniciar Sesión</span>
                  <span className="material-symbols-outlined text-base sm:text-xl">
                    login
                  </span>
                </button>

                <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    ¿No tienes cuenta?
                  </span>{" "}
                  <button
                    type="button"
                    onClick={() => onRegister && onRegister(true)}
                    className="text-primary font-bold hover:underline ml-1"
                  >
                    Regístrate
                  </button>
                </div>

                <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4 sm:mt-6">
                  El sistema detectará automáticamente tu perfil tras el acceso.
                </p>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
