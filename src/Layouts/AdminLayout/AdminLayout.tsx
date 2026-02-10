import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Sidebarmovil from "./Sidebarmovil";

function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

export default function AdminLayout() {
  const LG_BREAKPOINT = 1024;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const screenWidth = useScreenWidth();

  const isDesktop = screenWidth >= LG_BREAKPOINT;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar controlado por JS */}
      {isDesktop ? (
        <Sidebar />
      ) : (
        <Sidebarmovil
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto">
         <Outlet />
        </div>

        <Footer />
      </main>
    </div>
  );
}
