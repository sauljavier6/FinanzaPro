import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebarmovil from "./Sidebarmovil";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

const CustomerLayout = () => {
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
};

export default CustomerLayout;
