export default function Footer() {
  return (
    <footer className="border-t border-[#cfd7e7] dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Mobile */}
        <div className="flex flex-col gap-2 text-center text-xs text-gray-400 sm:hidden">
          <span>© 2026 Cobranza Integral S.A. de C.V.</span>
          <div className="flex justify-center gap-3">
            <a href="#" className="hover:text-gray-600 transition">
              Términos
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition">
              Privacidad
            </a>
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden sm:flex lg:hidden flex-col gap-1 text-center text-xs text-gray-400">
          <span>© 2026 Cobranza Integral S.A. de C.V.</span>
          <span>
            Todos los derechos reservados •{" "}
            <a href="#" className="hover:text-gray-600 transition">
              Términos y Condiciones
            </a>{" "}
            •{" "}
            <a href="#" className="hover:text-gray-600 transition">
              Privacidad
            </a>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-center text-xs text-gray-400">
          <span>
            © 2026 Cobranza Integral S.A. de C.V. • Todos los derechos reservados •{" "}
            <a href="#" className="hover:text-gray-600 transition">
              Términos y Condiciones
            </a>{" "}
            •{" "}
            <a href="#" className="hover:text-gray-600 transition">
              Privacidad
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
