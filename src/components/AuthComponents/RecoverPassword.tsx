import { useState } from "react";

interface RecoverPasswordProps {
  onBackToLogin: () => void;
}

export default function RecoverPassword({
  onBackToLogin,
}: RecoverPasswordProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Ingresa tu correo electrónico");
      return;
    }

    setLoading(true);

    try {
      // 🔗 aquí conectas tu backend
      // await fetch("/api/auth/recover-password", { ... })

      await new Promise((res) => setTimeout(res, 1500)); // demo

      setSuccess(true);
    } catch (err) {
      setError("Ocurrió un error, intenta más tarde");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display transition-colors duration-300">
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[440px] flex flex-col gap-6">
          <div className="text-center">
            <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
              Recuperación de Acceso
            </h4>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-[#e7ebf3] dark:border-gray-800 p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">
                lock_reset
              </span>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-[#0d121b] dark:text-white text-2xl font-bold leading-tight mb-3">
                ¿Olvidaste tu contraseña?
              </h2>
              <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal leading-relaxed">
                Introduce tu correo electrónico y te enviaremos instrucciones
                para restablecerla
              </p>
            </div>

            <form className="w-full space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-300 text-sm font-medium">
                  Correo electrónico
                </label>

                <div className="relative">
                  <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-[#4c669a] dark:text-gray-500 pointer-events-none">
                    mail
                  </span>

                  <input
                    className="form-input w-full h-14 rounded-lg text-[#0d121b] dark:text-white border border-[#cfd7e7] dark:border-gray-700 bg-[#f8f9fc] dark:bg-gray-800 px-4 pl-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#4c669a] dark:placeholder:text-gray-500"
                    placeholder="ejemplo@empresa.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  className="group flex w-full cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-lg shadow-primary/20"
                  type="button"
                >
                  <span className="truncate">Enviar instrucciones</span>
                  <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[#e7ebf3] dark:border-gray-800 w-full text-center">
              <button
                type="button"
                onClick={onBackToLogin}
                className="inline-flex items-center text-primary font-semibold text-sm hover:underline transition-all"
              >
                <span className="material-symbols-outlined mr-2 text-lg">
                  arrow_back
                </span>
                Volver al inicio de sesión
              </button>
            </div>
          </div>

          <p className="text-center text-[#4c669a] dark:text-gray-500 text-xs">
            ¿Necesitas ayuda adicional?{" "}
            <a className="text-primary hover:underline" href="#">
              Contacta a soporte
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
