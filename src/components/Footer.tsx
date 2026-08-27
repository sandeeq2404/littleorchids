import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Handshake, ChevronRight } from "lucide-react";
import logo from "/images/logo/littleorchids.webp";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 overflow-hidden relative">
      {/* Subtle background decoration - slightly boosted opacity for better separation */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#00B4D8]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#EC4899]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ─── Brand & Tagline (Cols 1-4) ─── */}
          <div className="lg:col-span-4 pr-4">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Little Orchids" className="h-14 w-auto transition-transform hover:scale-105 duration-300" />
            </Link>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
              Nurturing young minds with love, care, and quality education since 2003. We build confident little hearts for a bright future.
            </p>
            <Link
              to="/franchise"
              className="group inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)" }}
            >
              <Handshake className="h-4 w-4" />
              Open a Franchise
            </Link>
          </div>

          {/* ─── Quick Links (Cols 5-7) ─── */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B4D8]" /> Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/programs", label: "Our Programs" },
                { to: "/admissions", label: "Admissions 2026-27" },
                { to: "/gallery", label: "Gallery" },
                { to: "/news-events", label: "News & Events" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center text-slate-500 hover:text-[#00B4D8] font-medium transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Contact Info (Cols 8-10) ─── */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" /> Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-[#84CC16] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-500 font-medium leading-relaxed">
                  34/2, Pooram Prakasam Road,<br />
                  Balaji Nagar, Royapettah,<br />
                  Chennai, Tamil Nadu 600014
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-[#84CC16] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919003124400" className="text-slate-500 font-medium hover:text-[#84CC16] transition-colors">
                  +91 90031 24400
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-[#84CC16] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@littleorchids.in" className="text-slate-500 font-medium hover:text-[#84CC16] transition-colors">
                  info@littleorchids.in
                </a>
              </li>
            </ul>
          </div>

          {/* ─── Social (Cols 11-12) ─── */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#EC4899] hover:border-[#EC4899] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#00B4D8] hover:border-[#00B4D8] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} <span className="text-slate-800 font-bold">Little Orchids Play School</span>. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm font-medium flex items-center gap-1">
            Designed by
            <a
              href="https://howdway.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 font-extrabold hover:text-[#F59E0B] transition-colors ml-1"
            >
              howdway.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;