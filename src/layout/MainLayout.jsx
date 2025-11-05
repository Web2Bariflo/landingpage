import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900">
      {/* ===== HEADER (fixed) ===== */}
      <Header />

      {/* ===== MAIN CONTENT ===== */}
      <main className="">
        {children}
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
};

export default MainLayout;
