import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import TaskFlow from "./components/TaskFlow";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages that share the header & footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/TaskFlow" element={<TaskFlow />} />
          <Route path="/pricing" element={<Pricing/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
