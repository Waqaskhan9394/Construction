import { useState, useEffect } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom"; // Router components

import NavbarLogo from "../../assets/image/logo.webp";
import LoaderLogo from "../../assets/image/loder-logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Current path track karne ke liye

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Jab route change ho toh mobile menu band ho jaye
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { 
      name: "Blog", 
      path: "/blog",
      dropdown: [
        { name: "Blog", path: "/blog" }, 
        { name: "Blog Details", path: "/blog-details" }
      ] 
    },
    { 
      name: "Pages", 
      path: "#",
      dropdown: [
        { name: "Element", path: "/element" }, 
        { name: "Project Details", path: "/project-details" }, 
        { name: "Services Details", path: "/services-details" }
      ] 
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-[#0f0f23] shadow-lg" : "bg-[#0f0f23]/40 backdrop-blur-md"
      }`}
    >
      {/* --- Top Bar --- */}
      <div
        className={`text-white text-sm border-b border-gray-600/30 transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0 overflow-hidden" : "hidden md:flex justify-between items-center px-16 py-3"
        }`}
      >
        <div className="flex gap-8 italic font-light">
          <p>+(123) 1234-567-8901</p>
          <p>info@domain.com</p>
          <p>Mon - Sat 8:00 - 17:30</p>
        </div>

        <div className="flex gap-6">
          {[FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <Icon key={i} className="cursor-pointer transition-all duration-300 hover:text-orange-500 hover:scale-x-[-1]" />
          ))}
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 text-white">
        {/* Logo wrapped in Link */}
        <Link to="/" className="cursor-pointer hover:opacity-80 transition-opacity">
          <img src={NavbarLogo} alt="Logo" className="hidden md:block h-10" />
          <img src={LoaderLogo} alt="Mobile Logo" className="block md:hidden h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-bold items-center">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center gap-1 uppercase text-[13px] tracking-widest transition-all duration-300 ${
                    isActive && link.path !== "#" ? "text-orange-500" : "hover:text-orange-500"
                  }`
                }
              >
                {link.name}
                {link.dropdown && <span className="text-[10px]">▾</span>}
                {/* Advanced Underline Animation */}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
              </NavLink>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <ul className="absolute left-0 top-10 bg-[#191a33] shadow-2xl rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px] py-4 border-t-2 border-orange-500 z-[110]">
                  {link.dropdown.map((subItem, i) => (
                    <li key={i}>
                      <Link
                        to={subItem.path}
                        className="block px-6 py-2.5 text-[12px] uppercase tracking-wider text-white hover:text-orange-500 hover:pl-8 transition-all duration-300 border-b border-white/5 last:border-0"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button wrapped in Link */}
        <Link to="/contact" className="hidden md:block relative overflow-hidden px-7 py-3.5 bg-orange-500 uppercase rounded-sm text-[12px] font-black tracking-widest text-white group">
          <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">Contact Now</span>
        </Link>

        {/* Hamburger */}
        <div className="md:hidden text-3xl text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#0f0f23] ${isOpen ? "max-h-[100vh] border-t border-white/10" : "max-h-0"}`}>
        <div className="flex flex-col gap-2 py-8 font-bold px-8 text-white">
          {navLinks.map((link, index) => {
            const isDropdownOpen = openDropdown === index;
            return (
              <div key={index} className="border-b border-white/5 last:border-0 pb-2">
                <div
                  className="flex justify-between items-center py-3 cursor-pointer uppercase text-sm tracking-widest"
                  onClick={() => {
                    if (link.dropdown) setOpenDropdown(isDropdownOpen ? null : index);
                  }}
                >
                  {link.dropdown ? (
                    <span>{link.name}</span>
                  ) : (
                    <Link to={link.path} onClick={() => setIsOpen(false)} className={location.pathname === link.path ? "text-orange-500" : ""}>
                      {link.name}
                    </Link>
                  )}
                  {link.dropdown && (
                    <span className={`text-xl transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}>▾</span>
                  )}
                </div>

                {link.dropdown && (
                  <div className={`overflow-hidden transition-all duration-500 bg-black/20 rounded-lg ${isDropdownOpen ? "max-h-60 opacity-100 my-2" : "max-h-0 opacity-0"}`}>
                    <div className="pl-6 py-2 flex flex-col gap-3">
                      {link.dropdown.map((subItem, i) => (
                        <Link
                          key={i}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-[12px] uppercase text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-6 text-center py-4 bg-orange-500 text-white uppercase text-xs font-black tracking-widest rounded-sm active:scale-95 transition-transform">
            Contact Now
          </Link>
        </div>
      </div>
    </header>
  );
}