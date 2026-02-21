import React from 'react';
import { siteConfig } from '../siteConfig';
import { Instagram, Mail, MessageCircle, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  const socialLinks = [
    { icon: <MessageCircle size={20} />, url: siteConfig.socialLinks.whatsapp, label: 'WhatsApp', text: 'Chat on WhatsApp' },
    { icon: <Instagram size={20} />, url: siteConfig.socialLinks.instagram, label: 'Instagram', text: '@dotstudio' },
    { icon: <Mail size={20} />, url: siteConfig.socialLinks.email, label: 'Email', text: siteConfig.contactEmail },
    { icon: <Globe size={20} />, url: siteConfig.socialLinks.fiverr, label: 'Fiverr', text: 'Order on Fiverr' },
    { icon: <ExternalLink size={20} />, url: siteConfig.socialLinks.behance, label: 'Behance', text: 'View on Behance' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Image Background */}
      <div className="hidden md:block md:w-1/2 h-screen sticky top-0">
        <img
          src="/src/assets/contactpngwbst.png"
          alt="Contact background"
          className="w-full h-full object-cover""
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 pt-32 pb-20 px-8 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 mb-4">Get in touch</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-12">Contact</h1>

          <div className="grid gap-12 mb-20">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                  {link.icon}
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">{link.label}</span>
                  <span className="text-lg font-light group-hover:translate-x-2 transition-transform inline-block">{link.text}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-black/10 pt-12">
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full border border-black/10 p-3 focus:border-black outline-none transition-colors text-sm resize-none" />
              </div>
              <button className="bg-black text-white px-12 py-4 uppercase tracking-[0.3em] text-xs hover:bg-black/80 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
