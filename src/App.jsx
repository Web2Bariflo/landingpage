import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Auto scroll to top on route change */}
      {/* <ScrollToTop /> */}

      {/* Shared layout (Header + Footer) */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
