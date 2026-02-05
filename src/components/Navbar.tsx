import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, BookOpen, ClipboardList } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Our Programs" },
    { path: "/admissions", label: "Admissions" },
    { path: "/gallery", label: "Gallery" },
    { path: "/news-events", label: "News & Events" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        {/* 🔝 Top Section (Desktop) */}
        <div className="border-b hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo/littleorchids.webp"
                alt="Little Orchids Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Admission Button */}
            <Link
              to="/admissions"
              className="border border-red-500 text-red-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-colors"
            >
              Admissions Open 2026–2027
            </Link>
          </div>
        </div>

        {/* 🔽 Bottom Section - Desktop Nav */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 📱 Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b bg-white">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo/littleorchids.webp"
              alt="Little Orchids Logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Hamburger on right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* 📱 Mobile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden border-t bg-white px-4 py-4 space-y-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* 📱 Floating Bottom Quick Links (Mobile Only) */}
<div className="md:hidden fixed bottom-0 left-0 right-0 bg-red-100 border-t border-red-200 shadow-xl z-50">
  <div className="flex justify-around items-center py-3">
    <Link
      to="/admissions"
      className="flex flex-col items-center text-sm font-semibold text-red-700 hover:text-red-900 transition-colors"
    >
      <ClipboardList className="h-6 w-6 mb-1" />
      Admission
    </Link>

    <Link
      to="/programs"
      className="flex flex-col items-center text-sm font-semibold text-red-700 hover:text-red-900 transition-colors"
    >
      <BookOpen className="h-6 w-6 mb-1" />
      Programs
    </Link>

    <Link
      to="/contact"
      className="flex flex-col items-center text-sm font-semibold text-red-700 hover:text-red-900 transition-colors"
    >
      <Phone className="h-6 w-6 mb-1" />
      Contact
    </Link>
  </div>
</div>

    </>
  );
};

export default Navbar;
