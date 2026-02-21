import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { Instagram, Mail, MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Main', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Drawings', path: '/drawings' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialIcons = [
    { icon: <MessageCircle size={18} />, url: siteConfig.socialLinks.whatsapp, label: 'WhatsApp' },
    { icon: <Instagram size={18} />, url: siteConfig.socialLinks.instagram, label: 'Instagram' },
    { icon: <Mail size={18} />, url: siteConfig.socialLinks.email, label: 'Email' },
    { icon: <Globe size={18} />, url: siteConfig.socialLinks.fiverr, label: 'Fiverr' },
    { icon: <ExternalLink size={18} />, url: siteConfig.socialLinks.behance, label: 'Behance' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
      <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
        {siteConfig.siteName}
      </Link>

      <div className="flex items-center gap-8">
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity ${
                location.pathname === link.path ? 'border-b border-white pb-1' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 items-center border-l border-white/30 pl-8">
          {socialIcons.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 mt-8">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
