
export default function TopNavbar() {

  return (
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
  );
}
