import { useState } from 'react';
import { Menu, X, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

// Simple TikTok icon SVG
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h.27V9.67a6.22 6.22 0 0 0-3.16.85 6.22 6.22 0 0 0-2.6 3.16 6.22 6.22 0 0 0-.25 2.6 6.22 6.22 0 0 0 3.16 2.6 6.22 6.22 0 0 0 2.6.25 6.22 6.22 0 0 0 3.16-3.16 6.22 6.22 0 0 0 .25-2.6V6.69h3.45a4.83 4.83 0 0 0 4.25 3.77v-3.45z" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff8f5]/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4 ml-4">
          <img src="/assets/logo .jpeg" alt="Vandee's Logo" className="h-10 w-10 object-contain" />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Home', 'Bookings', 'Classes', 'Contact'].map(item => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : item === 'Bookings' ? '#contact' : `#${item.toLowerCase()}`} 
              className="text-[#823b18] font-bold font-headline text-sm uppercase tracking-widest hover:opacity-80"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Burger */}
        <button className="md:hidden text-[#823b18] hover:opacity-80" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="md:hidden absolute top-16 left-0 w-full bg-[#fff8f5] border-b border-[#823b18]/10 shadow-lg overflow-hidden"
      >
        <div className="p-6 flex flex-col gap-6">
          {['Home', 'Bookings', 'Classes', 'Contact'].map(item => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : item === 'Bookings' ? '#contact' : `#${item.toLowerCase()}`} 
              className="text-[#823b18] font-bold font-headline text-lg uppercase tracking-widest hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
