import { useAuth } from "../../context/AuthContext";

export default function UserProfile() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro que deseas cerrar sesión?",
    );
    if (confirmLogout) logout();
  };

  return (
    <div className="p-4 border-t border-[#e7ebf3] dark:border-gray-800">
      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              user?.imagen
                ? `${import.meta.env.VITE_API_URL_IMAGES}/profiles/${user.imagen}`
                : "https://lh3.googleusercontent.com/aida-public/AB6AXuAu7fnWsI12j3WfSuURwXMSLf9bk7aQjoWQUsClgvTY2NGcmdUh__KkaLtrS7gAmWCkXNwuLZBhhSh58LBzcViF5HS99JxMDKW0Dnq3ayd-marc5ojFz8cLB0B7UYA1R2qMjlSCNtAknX48CDfDeV5EqinyU0DxhkrL-T68gjB_bV_sTfYi-Sv43I9ZL035jUMu6Ho7U7J0azYQ_WQ6EyMpO6FHJIuszDJRR-LxzrpfK4zcgcFRaichd0k7SRfxfujVbkraxmGj_txd"
            })`,
          }}
        />
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-bold truncate">{user?.name}</p>
          <p className="text-xs text-[#4c669a] truncate">
            {user?.roleName || "Usuario"}
          </p>
        </div>
        <span
          className="material-symbols-outlined text-gray-400 cursor-pointer"
          onClick={handleLogout}
        >
          logout
        </span>
      </div>
    </div>
  );
}
