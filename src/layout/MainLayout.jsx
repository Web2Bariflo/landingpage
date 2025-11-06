import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900">
      <Header />
      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-grow bg-blue-50">
        {/* Render either direct children or router content */}
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
