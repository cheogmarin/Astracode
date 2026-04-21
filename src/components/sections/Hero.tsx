import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden gpu-accelerate">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format"
          alt="Engineering Matrix Code"
          className="w-full h-full object-cover opacity-30 brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark"></div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        style={{ opacity }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 mb-6 border border-brand-accent/30 rounded-full text-[10px] tracking-[0.2em] uppercase text-brand-accent font-medium bg-brand-accent/5">
            Software Boutique de Élite
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gradient">
            Infraestructura digital para quienes demandan <span className="italic font-light">perfección.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-dim max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Fusionamos ingeniería de precisión con diseño de vanguardia para crear soluciones que definen el estándar de la industria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow-hover)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-sm tracking-widest uppercase text-xs overflow-hidden transition-all duration-300 shadow-glow flex items-center gap-2"
            >
              Iniciar Proyecto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="px-8 py-4 border border-white/10 text-white font-medium rounded-sm tracking-widest uppercase text-xs transition-all duration-300"
            >
              Ver Portafolio
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
