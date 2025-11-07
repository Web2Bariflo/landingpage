import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import mainlogo from "../assets/images/newlogoo.jpg"; // ✅ Blue clipboard logo from Google CDN

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Features", path: "/#" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/#" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full 
      bg-gradient-to-t from-blue-700 via-blue-600 to-blue-400 
      backdrop-blur-md text-white shadow-lg z-50"
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* --- Logo + Title --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={mainlogo} // ✅ Blue clipboard logo from Google CDN
              alt="TaskFlow Logo"
              className="w-30 h-10 drop-shadow-m text-white"
            />
            {/* <h1 className="text-2xl font-bold tracking-wide">TaskFlow</h1> */}
          </Link>
        </motion.div>

        {/* --- Desktop Menu --- */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className="hover:text-blue-200 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Dropdown --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-600"
          >
            <div className="flex flex-col items-center space-y-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
