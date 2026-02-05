import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
        <TopNavbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
