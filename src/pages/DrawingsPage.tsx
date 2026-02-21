import React from 'react';
import { siteConfig } from '../siteConfig';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Drawings = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="text-center mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 mb-4">Gallery</h2>
        <h1 className="text-5xl font-serif">Original Works</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {siteConfig.drawings.map((drawing, idx) => (
          <motion.div
            key={drawing.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link to={`/drawings/${drawing.id}`} className="group block">
              <div className="overflow-hidden mb-4 bg-ash">
                <img
                  src={drawing.thumbnail}
                  alt={drawing.title}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-serif mb-1">{drawing.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-black/40">{drawing.year} • {drawing.size}</p>
                </div>
                <span className="text-sm font-light">{drawing.price}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Drawings;
