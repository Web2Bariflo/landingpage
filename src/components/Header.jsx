import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // List of navigation links
  const navLinks = ["Home", "Features", "Workflow", "Login"];

  return (
    // ===== HEADER START =====
    <header className="fixed top-0 left-0 w-full 
      bg-gradient-to-t  from-blue-700 via-blue-600 to-blue-400 
      backdrop-blur-md text-white shadow-lg z-50">

      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* --- Logo --- */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.0, delay: 0.2 }}
          className="text-2xl font-bold cursor-pointer"
        >
          TaskFlow
        </motion.h1>

        {/* --- Desktop Menu --- */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={"#" + link.toLowerCase()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, delay: 0.2 }}
              className="hover:text-accent transition-colors"
            >
              {link}
            </motion.a>
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

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary"
          >
            <div className="flex flex-col items-center space-y-3 py-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={"#" + link.toLowerCase()}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    // ===== HEADER END =====
  );
};

export default Header;
