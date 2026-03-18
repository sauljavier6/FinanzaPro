import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import TopNavbar from './TopNavbar';

const AuthLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">

            <main className="flex-1 flex flex-col bg-background-light dark:bg-background-dark">
              <TopNavbar />
      
              <div className="flex-1 overflow-y-auto">
               <Outlet />
              </div>
              
              <Footer />
            </main>
    </div>
  );
};

export default AuthLayout;