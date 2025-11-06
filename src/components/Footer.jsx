import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* 🔹 Top section: Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          {/* Left Side */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png" // ✅ Google-hosted blue task logo
                alt="TaskAssign Logo"
                className="w-12 h-12"
              />
              <h3 className="text-xl font-semibold text-white">TaskFlow</h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empower your team with smarter task management.  
              TaskAssign streamlines workflows, boosts productivity,  
              and brings clarity to every project — all in one place.
            </p>
          </div>

          {/* 🔹 Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Workflow</li>
                <li className="hover:text-white cursor-pointer">Dashboard</li>
                <li className="hover:text-white cursor-pointer">Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">FAQs</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 md:ms-4">Follow Us</h4>
              <div className="flex space-x-4 text-blue-200">
                <FaFacebookF className="hover:text-white cursor-pointer transition" />
                <FaTwitter className="hover:text-white cursor-pointer transition" />
                <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
                <FaInstagram className="hover:text-white cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom section */}
        <div className="border-t border-blue-800 pt-6 text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
