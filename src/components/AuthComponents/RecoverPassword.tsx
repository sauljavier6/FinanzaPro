interface RecoverPasswordProps {
  onBackToLogin: () => void;
}

export default function RecoverPassword({ onBackToLogin }: RecoverPasswordProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display transition-colors duration-300">
      {/* Header */}
      <header className="w-full flex items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-background-dark px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3 text-primary">
          <div className="size-8 sm:size-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
              account_balance
            </span>
          </div>
          <h2 className="text-[#0d121b] dark:text-white text-base sm:text-lg font-bold leading-tight tracking-tight">
            Sistema de Cobranza
          </h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
            v2.4.0
          </span>
          <span className="material-symbols-outlined text-gray-400 text-lg sm:text-xl">
            help_outline
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-[440px] flex flex-col gap-4 sm:gap-6">
          {/* Title */}
          <div className="text-center">
            <h4 className="text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-1 sm:mb-2">
              Recuperación de Acceso
            </h4>
          </div>

          {/* Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-[#e7ebf3] dark:border-gray-800 p-6 sm:p-8 flex flex-col items-center">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                lock_reset
              </span>
            </div>

            {/* Text */}
            <div className="text-center mb-6 sm:mb-8 px-2 sm:px-0">
              <h2 className="text-[#0d121b] dark:text-white text-xl sm:text-2xl font-bold leading-tight mb-2 sm:mb-3">
                ¿Olvidaste tu contraseña?
              </h2>
              <p className="text-[#4c669a] dark:text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
                Introduce tu correo electrónico y te enviaremos instrucciones
                para restablecerla
              </p>
            </div>

            {/* Form */}
            <form className="w-full space-y-4 sm:space-y-5">
              <div className="flex flex-col gap-1 sm:gap-2">
                <label className="text-[#0d121b] dark:text-gray-300 text-xs sm:text-sm font-medium">
                  Correo electrónico
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute inset-y-0 left-3 flex items-center text-[#4c669a] dark:text-gray-500 pointer-events-none text-base sm:text-lg">
                    mail
                  </span>
                  <input
                    className="w-full h-12 sm:h-14 rounded-lg text-[#0d121b] dark:text-white border border-[#cfd7e7] dark:border-gray-700 bg-[#f8f9fc] dark:bg-gray-800 px-3 sm:px-4 pl-10 sm:pl-11 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#4c669a] dark:placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="ejemplo@empresa.com"
                    type="email"
                  />
                </div>
              </div>

              <button
                type="button"
                className="group flex w-full cursor-pointer items-center justify-center rounded-lg h-12 sm:h-14 px-4 sm:px-6 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-bold transition-all shadow-lg shadow-primary/20"
              >
                <span className="truncate">Enviar instrucciones</span>
                <span className="material-symbols-outlined ml-1 sm:ml-2 text-base sm:text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>

            {/* Back button */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#e7ebf3] dark:border-gray-800 w-full text-center">
              <button
                type="button"
                onClick={onBackToLogin}
                className="inline-flex items-center text-primary font-semibold text-xs sm:text-sm hover:underline transition-all"
              >
                <span className="material-symbols-outlined mr-1 sm:mr-2 text-base sm:text-lg">
                  arrow_back
                </span>
                Volver al inicio de sesión
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-[#4c669a] dark:text-gray-500 text-xs sm:text-sm mt-2 sm:mt-4">
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
