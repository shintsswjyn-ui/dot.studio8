import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../siteConfig';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkTitle: string;
}

const OrderModal = ({ isOpen, onClose, artworkTitle }: OrderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Order Inquiry – ${artworkTitle}`);
    const body = encodeURIComponent(
      `Artwork: ${artworkTitle}\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message: ${formData.message}`
    );

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    
    alert('Order prepared. Please confirm via email.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg p-8 md:p-12 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black/30 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-serif mb-2">Order Inquiry</h2>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-8">
              For: {artworkTitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2">Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2">Email *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-black/10 p-3 focus:border-black outline-none transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-xs hover:bg-black/80 transition-colors"
              >
                Send Order
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
