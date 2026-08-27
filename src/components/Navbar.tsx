import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, BookOpen, ClipboardList, Handshake } from "lucide-react";
import React from "react";

// Page-Specific Theme Colors
const navLinks = [
  { path: "/", label: "Home", color: "#00B4D8" },           // Cyan
  { path: "/about", label: "About Us", color: "#84CC16" },  // Green
  { path: "/programs", label: "Our Programs", color: "#EF4444" }, // Red
  { path: "/admissions", label: "Admissions", color: "#00B4D8" }, // Cyan
  { path: "/gallery", label: "Gallery", color: "#EC4899" }, // Pink
  { path: "/news-events", label: "News & Events", color: "#8B5CF6" }, // Violet
  { path: "/franchise", label: "Franchise", color: "#F59E0B" }, // Orange
  { path: "/contact", label: "Contact", color: "#3B82F6" }, // Blue
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ─── DESKTOP NAVBAR ─── */}
      <nav
        className="hidden md:block bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.04)", boxShadow: "0 4px 30px rgba(0,0,0,0.03)" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[90px] px-8 lg:px-12">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <img
              src="/images/logo/littleorchids.webp"
              alt="Little Orchids"
              className="h-[65px] w-auto object-contain"
            />
          </Link>

          {/* Nav links — centered */}
          <div className="flex-1 flex items-center justify-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const isHovered = hoveredPath === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative whitespace-nowrap px-3 py-2 text-[15px] font-bold transition-all duration-300"
                  style={{ color: active || isHovered ? link.color : "#64748B" }}
                >
                  {link.label}
                  
                  {/* Colorful dot indicator for active state */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      active ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{ backgroundColor: link.color }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="shrink-0 flex items-center gap-4">
            <Link
              to="/admissions"
              className="whitespace-nowrap border-2 bg-transparent px-6 py-2.5 rounded-full text-[14px] font-extrabold transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "#00B4D8", color: "#00B4D8" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#00B4D8";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#00B4D8";
              }}
            >
              Admissions 2026–27
            </Link>
            
            <Link
              to="/franchise"
              className="whitespace-nowrap px-6 py-3 rounded-full text-[14px] font-extrabold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)" }} // Butterfly Wings Gradient
            >
              Open a Franchise
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE TOP BAR ─── */}
      <nav
        className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}
      >
        <div className="flex items-center justify-between px-6 h-[76px]">
          <Link to="/">
            <img src="/images/logo/littleorchids.webp" alt="Little Orchids" className="h-12 w-auto" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-2xl text-slate-600 hover:bg-slate-50 transition-colors"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[76px] left-0 right-0 bg-white border-b border-gray-100 px-6 py-6 shadow-xl space-y-2 animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3.5 rounded-2xl text-[16px] font-extrabold transition-all"
                  style={{
                    backgroundColor: active ? `${link.color}15` : "transparent",
                    color: active ? link.color : "#64748B",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <div className="pt-6 pb-2 space-y-4">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="flex justify-center border-2 px-4 py-3.5 rounded-full text-[15px] font-extrabold transition-colors"
                style={{ borderColor: "#00B4D8", color: "#00B4D8" }}
              >
                Admissions Open 2026–27
              </Link>
              <Link
                to="/franchise"
                onClick={() => setIsOpen(false)}
                className="flex justify-center text-white px-4 py-3.5 rounded-full text-[15px] font-extrabold shadow-md"
                style={{ background: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)" }}
              >
                Open a Franchise
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ─── MOBILE FLOATING BOTTOM BAR ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-50 pb-safe">
        <div className="flex justify-around items-center py-2 px-2">
          {[
            { to: "/admissions", Icon: ClipboardList, label: "Admit", color: "#00B4D8" }, // Cyan
            { to: "/programs", Icon: BookOpen, label: "Programs", color: "#EF4444" },     // Red
            { to: "/franchise", Icon: Handshake, label: "Franchise", color: "#F59E0B" },  // Orange
            { to: "/contact", Icon: Phone, label: "Contact", color: "#84CC16" },          // Green
          ].map(({ to, Icon, label, color }) => {
            const active = isActive(to);
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center p-2 min-w-[72px] transition-all duration-300"
                style={{ color: active ? color : "#94A3B8" }}
              >
                <div 
                  className={`p-1.5 rounded-full transition-all duration-300 ${active ? "scale-110 mb-0.5" : "scale-100"}`}
                  style={{ backgroundColor: active ? `${color}15` : "transparent" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
                </div>
                <span className="text-[10px] font-extrabold tracking-wide mt-1">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;