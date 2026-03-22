import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

const images = [
  "https://picsum.photos/seed/gourmet-local-dish/1920/1080",
  "https://picsum.photos/seed/artisanal-plating/1920/1080",
  "https://picsum.photos/seed/fresh-ingredients-prep/1920/1080"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[751px] flex items-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${images[currentImage]})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f5] via-[#fff8f5]/80 to-transparent z-10"></div>
      </div>
      <div className="relative z-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-[#e9e2d3] text-[#1e1b13] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Lightbulb size={14} className="text-[#823b18]" />
            </motion.div>
            Enhancing Visibility #LightsOn
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-[#1e1b19] leading-[1.1] mb-6 -tracking-wider">
            Home of <br/><span className="text-[#823b18] italic">Quality Local Meals</span>.
          </h2>
          <p className="text-lg md:text-xl text-[#54433c] leading-relaxed mb-10 max-w-lg">
            From gourmet 3-course experiences to the "hottest" physical baking classes in Ongata Rongai—we bring flavor to every occasion.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#classes" className="bg-[#823b18] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#a0522d] transition-colors shadow-lg">
              View Packages
            </a>
            <a href="https://wa.me/254743599431" target="_blank" rel="noopener noreferrer" className="border-b-2 border-[#823b18] text-[#823b18] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#823b18]/5 transition-all">
              Book a Class
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
