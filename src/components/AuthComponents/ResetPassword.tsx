import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { resetPassword } from "../../api/authApis/authApi";

const calculateStrength = (password: string) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

export default function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!token) {
    return <div className="p-10 text-center">Token inválido</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password.trim()) {
      return toast.error("La contraseña es obligatoria");
    }

    if (password.length < 6) {
      return toast.error("Debe tener mínimo 6 caracteres");
    }

    if (password !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    try {
      setLoading(true);

      await resetPassword(token, password);

      toast.success("Contraseña actualizada correctamente");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Enlace inválido o expirado",
      );
    } finally {
      setLoading(false);
    }
  };

  const strength = calculateStrength(password);

  const strengthLabels = [
    "Muy débil",
    "Débil",
    "Media",
    "Fuerte",
    "Muy fuerte",
  ];
  const strengthColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] bg-white dark:bg-[#1a2133] rounded-xl shadow-sm border border-[#e7ebf4] dark:border-[#2d3a54] overflow-hidden">
          <div className="pt-8 px-8 text-center">
            <h1 className="text-[#0d121c] dark:text-white text-3xl font-bold leading-tight mb-2">
              Establecer nueva contraseña
            </h1>
            <p className="text-[#49659c] dark:text-gray-400 text-base font-normal">
              Tu nueva contraseña debe ser diferente a las anteriores para
              garantizar la seguridad de tu cuenta.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-8 space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                  Nueva contraseña
                </label>

                <div className="relative flex w-full items-stretch rounded-lg group">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className="form-input flex w-full min-w-0 flex-1 rounded-l-lg 
                    text-[#0d121c] dark:text-white 
                    border border-[#ced7e8] dark:border-[#2d3a54] 
                    bg-[#f8f9fc] dark:bg-[#101622] 
                    focus:ring-2 focus:ring-primary focus:border-primary 
                    h-14 px-4 text-base transition-all"
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Mostrar u ocultar contraseña"
                    className="flex items-center justify-center px-4 
                    bg-[#f8f9fc] dark:bg-[#101622] 
                    border border-l-0 border-[#ced7e8] dark:border-[#2d3a54] 
                    rounded-r-lg text-[#49659c] 
                    hover:text-primary 
                    transition-all duration-200 
                    select-none"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="bg-primary/5 dark:bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">
                    Seguridad: {strengthLabels[strength]}
                  </p>
                  <p className="text-xs font-bold">{strength * 25}%</p>
                </div>

                <div className="h-2 rounded-full bg-[#ced7e8] dark:bg-[#2d3a54]">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strengthColors[strength]}`}
                    style={{ width: `${strength * 25}%` }}
                  ></div>
                </div>

                <div className="mt-3 text-xs space-y-1">
                  <p
                    className={
                      password.length >= 8 ? "text-green-500" : "text-gray-400"
                    }
                  >
                    ✓ Mínimo 8 caracteres
                  </p>
                  <p
                    className={
                      /[A-Z]/.test(password)
                        ? "text-green-500"
                        : "text-gray-400"
                    }
                  >
                    ✓ Una mayúscula
                  </p>
                  <p
                    className={
                      /[0-9]/.test(password)
                        ? "text-green-500"
                        : "text-gray-400"
                    }
                  >
                    ✓ Un número
                  </p>
                  <p
                    className={
                      /[^A-Za-z0-9]/.test(password)
                        ? "text-green-500"
                        : "text-gray-400"
                    }
                  >
                    ✓ Un símbolo
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#0d121c] dark:text-gray-200 text-sm font-semibold">
                  Confirmar nueva contraseña
                </label>

                <div className="relative flex w-full items-stretch rounded-lg">
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    className={`form-input flex w-full min-w-0 flex-1 rounded-l-lg 
                    text-[#0d121c] dark:text-white 
                    border 
                    ${
                      confirmPassword
                        ? password === confirmPassword
                          ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                          : "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-[#ced7e8] dark:border-[#2d3a54]"
                    }
                    bg-[#f8f9fc] dark:bg-[#101622] 
                    h-14 px-4 text-base transition-all`}
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Mostrar u ocultar contraseña"
                    className="flex items-center justify-center px-4 
                    bg-[#f8f9fc] dark:bg-[#101622] 
                    border border-l-0 border-[#ced7e8] dark:border-[#2d3a54] 
                    rounded-r-lg text-[#49659c] 
                    hover:text-primary 
                    transition-all duration-200 
                    select-none"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>

                {/* Indicador en vivo */}
                {confirmPassword && (
                  <p
                    className={`text-xs mt-1 ${
                      password === confirmPassword
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {password === confirmPassword
                      ? "Las contraseñas coinciden"
                      : "Las contraseñas no coinciden"}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={
                    loading || strength < 2 || password !== confirmPassword
                  }
                  className={`w-full font-bold py-4 rounded-lg 
                    shadow-md transition-all 
                    flex items-center justify-center gap-2
                    ${
                    loading || strength < 2 || password !== confirmPassword
                        ? "bg-gray-400 cursor-not-allowed shadow-none"
                        : "bg-primary hover:bg-primary/90 text-white shadow-primary/20"
                    }`}
                >
                  {loading ? "Actualizando..." : "Actualizar contraseña"}
                  <span className="material-symbols-outlined">lock_reset</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <span className="material-symbols-outlined text-base">
                    arrow_back
                  </span>
                  Volver al inicio de sesión
                </button>
              </div>
            </div>
          </form>

          <div className="bg-[#f8f9fc] dark:bg-[#101622]/50 px-8 py-4 border-t border-[#e7ebf4] dark:border-[#2d3a54]">
            <p className="text-xs text-center text-[#49659c] dark:text-gray-500">
              © 2026 Sistema de Cobranza Integral. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </main>

      <div className="fixed top-0 right-0 -z-10 opacity-10 dark:opacity-5 pointer-events-none">
        <svg
          fill="none"
          height="400"
          viewBox="0 0 400 400"
          width="400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="100" fill="url(#paint0_linear)" r="200"></circle>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear"
              x1="100"
              x2="300"
              y1="100"
              y2="300"
            >
              <stop stopColor="#256af4" />
              <stop offset="1" stopColor="#256af4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
