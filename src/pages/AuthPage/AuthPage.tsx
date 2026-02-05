import { useState } from "react";
import Login from "../../components/AuthComponents/Login";
import RecoverPassword from "../../components/AuthComponents/RecoverPassword";

const AuthPage = () => {
  const [view, setView] = useState("login"); 
  // views: login | register | recover

  return (
    <div>
      {view === "login" && (
        <Login
          onRegister={() => setView("register")}
          onRecoverPassword={() => setView("recover")}
        />
      )}

      {view === "register" && (
        <div className="p-6 text-center">
          Por el momento no hay registro desarrollado
        </div>
      )}

      {view === "recover" && (
        <RecoverPassword onBackToLogin={() => setView("login")} />
      )}
    </div>
  );
};

export default AuthPage;
