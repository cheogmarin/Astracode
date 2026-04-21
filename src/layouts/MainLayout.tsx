import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#work' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle background grain or grid could go here */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <header className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group relative z-[60]"
          >
            <img 
              src="https://i.ibb.co/GvNtnzqT/efecto-neon.png" 
              alt="Astra Code Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-display font-bold tracking-tighter hidden sm:block group-hover:text-brand-accent transition-colors">
              ASTRA<span className="text-brand-accent group-hover:text-white transition-colors">CODE</span>
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover:text-brand-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[60] p-2 text-white hover:text-brand-accent transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 bg-brand-dark flex flex-col items-center justify-center gap-12"
            >
              <div className="flex flex-col items-center gap-8">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-display font-bold tracking-widest uppercase hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-[10px] tracking-[0.4em] uppercase text-brand-text-dim"
              >
                Engineering Excellence
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-brand-text-dim text-xs tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <img 
              src="https://i.ibb.co/GvNtnzqT/efecto-neon.png" 
              alt="Astra Code Logo" 
              className="h-8 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
            <p>© 2026 Astra Code. Engineering Excellence.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
