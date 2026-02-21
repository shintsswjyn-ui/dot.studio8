import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import OrderModal from '../components/OrderModal';

const ArtworkPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const artwork = siteConfig.drawings.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artwork) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Artwork not found</h1>
        <Link to="/drawings" className="text-xs uppercase tracking-widest border-b border-black">Back to gallery</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[10px] uppercase tracking-widest mb-12 hover:opacity-50 transition-opacity"
      >
        <ArrowLeft size={14} /> Back
      </button>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-ash"
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:sticky lg:top-32"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">{artwork.title}</h1>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 border-y border-black/10 py-6">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Year</span>
              <span className="text-lg font-light">{artwork.year}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Price</span>
              <span className="text-lg font-light">{artwork.price}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-1">Size</span>
              <span className="text-lg font-light">{artwork.size}</span>
            </div>
          </div>

          <div className="mb-12">
            <span className="block text-[10px] uppercase tracking-widest text-black/40 mb-4">Description</span>
            <p className="text-lg text-black/70 leading-relaxed font-light">
              {artwork.description}
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-black text-white py-5 uppercase tracking-[0.4em] text-xs hover:bg-black/80 transition-all duration-500"
          >
            🔥 Order Now 🔥
          </button>
        </motion.div>
      </div>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        artworkTitle={artwork.title} 
      />
    </div>
  );
};

export default ArtworkPage;
