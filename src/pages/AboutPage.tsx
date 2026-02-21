import React from 'react';
import { siteConfig } from '../siteConfig';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Section 1: Artist Intro */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={siteConfig.artistInfo.photo}
            alt={siteConfig.artistName}
            className="w-full aspect-[4/5] object-cover grayscale"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 mb-4">The Artist</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            {siteConfig.artistName}
          </h1>
          <p className="text-lg text-black/70 leading-relaxed font-light mb-8">
            {siteConfig.artistInfo.bio}
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest mb-4 border-b border-black/10 pb-2">Techniques</h3>
              <ul className="space-y-2">
                {siteConfig.techniques.map((tech, idx) => (
                  <li key={idx} className="text-sm text-black/60">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: The Process */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 mb-2">The Process</h2>
          <p className="text-sm font-serif italic text-black/60">From concept to final composition</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
          <div className="space-y-24">
            {siteConfig.theProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Title Side */}
                <div className={`flex-1 w-full text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-3xl md:text-4xl font-serif">{item.title}</h3>
                </div>

                {/* Center Dot */}
                <div className="relative flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-mono font-bold">{item.step}</span>
                  </div>
                </div>

                {/* Description Side */}
                <div className={`flex-1 w-full text-center ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="text-lg font-light text-black/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="overflow-hidden bg-ash">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Progress of Drawing */}
      <section>
        <h2 className="text-xs uppercase tracking-[0.4em] text-black/40 mb-8">About Progress of Drawing</h2>
        <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x">
          {siteConfig.collageImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[300px] md:min-w-[450px] aspect-[4/3] snap-center"
            >
              <img
                src={img}
                alt={`Progress ${idx + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
