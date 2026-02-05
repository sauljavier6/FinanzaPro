import { useState } from "react";

interface LoginProps {
  onRegister?: (register: boolean) => void;
  onRecoverPassword?: (recover: boolean) => void;
}

export default function Login({ onRegister, onRecoverPassword }: LoginProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log(formData);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", formData);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <header className="w-full flex items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-background-dark px-6 py-4 lg:px-20">
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
            <span
              className="material-symbols-outlined text-primary text-2xl"
              data-icon="account_balance"
            >
              account_balance
            </span>
          </div>
          <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-tight">
            Sistema de Cobranza
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
            v2.4.0
          </span>
          <span
            className="material-symbols-outlined text-gray-400"
            data-icon="help_outline"
          >
            help_outline
          </span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a2133] shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="w-full h-32 bg-[#0a3a9c] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)]" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <span
                className="material-symbols-outlined text-white text-5xl opacity-80"
                data-icon="lock"
              >
                lock
              </span>
            </div>
            <div className="px-8 pt-8 pb-10">
              <div className="mb-10 text-center">
                <h1 className="text-[#0d121b] dark:text-white text-3xl font-bold leading-tight mb-2">
                  Bienvenido de nuevo
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                  Ingresa a tu cuenta de gestión financiera
                </p>
              </div>
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-bold text-[#0d121b] dark:text-gray-200"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-xl pointer-events-none">
                      mail
                    </span>

                    <input
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="nombre@empresa.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-bold text-[#0d121b] dark:text-gray-200"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-gray-400 text-xl pointer-events-none">
                      key
                    </span>

                    <input
                      className="w-full pl-11 pr-12 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white"
                      id="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="••••••••"
                      type="password"
                    />

                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      type="checkbox"
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
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
                  type="submit"
                >
                  <span>Iniciar Sesión</span>
                  <span
                    className="material-symbols-outlined text-xl"
                    data-icon="login"
                  >
                    login
                  </span>
                </button>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ¿No tienes cuenta?
                  </span>{" "}
                  <button
                    type="button"
                    onClick={() => onRegister && onRegister(true)}
                    className="text-sm font-bold text-primary hover:underline underline-offset-4 ml-1"
                  >
                    Regístrate
                  </button>
                </div>

                <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-6">
                  El sistema detectará automáticamente tu perfil tras el acceso.
                </p>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Sistema de Cobranza S.A.
            </p>
            <div className="flex gap-6">
              <a
                className="text-xs text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Términos de Servicio
              </a>
              <a
                className="text-xs text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Privacidad
              </a>
              <a
                className="text-xs text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Soporte
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
