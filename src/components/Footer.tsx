import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import logo from "/images/logo/littleorchids.webp"; // <-- adjust path if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Little Orchids Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              Nurturing young minds with love, care, and quality education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  34/2, Pooram Prakasam Road, Balaji Nagar, Royapettah, Chennai, Tamil Nadu 600014
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 90031 24400</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@littleorchids.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Little Orchids Play School. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed by{" "}
            <a
              href="https://howdway.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
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
