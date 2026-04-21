import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Manifesto() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-brand-dark to-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex gap-8 md:gap-16">
          {/* Visual Accent: Thin vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 'auto' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-brand-accent via-brand-accent to-transparent hidden md:block"
          />

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-accent text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Sobre la Firma</span>
              
              <div 
                className="cursor-pointer group"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight flex items-start justify-between gap-4">
                  <span>
                    La Filosofía de la <br />
                    <span className="text-gradient">Invisibilidad Inquebrantable.</span>
                  </span>
                  <div className="mt-4 p-2 rounded-full border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                    {isExpanded ? <ChevronUp className="text-brand-accent" size={24} /> : <ChevronDown className="text-brand-accent" size={24} />}
                  </div>
                </h2>

                <p className="text-xl md:text-2xl text-white font-light italic mb-12 leading-relaxed border-l-2 border-brand-accent/30 pl-6 md:border-none md:pl-0">
                  "Un sitio web que solo 'se ve bien' es un activo vulnerable. En Astra Code, no construimos páginas; blindamos infraestructuras."
                </p>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-12 max-w-3xl pt-8">
                      <p className="text-brand-text-dim text-lg font-light leading-relaxed">
                        En la economía digital de alta velocidad, la belleza sin robustez es negligencia. Un segundo de retraso es una pérdida de confianza; una brecha de seguridad es una crisis de reputación.
                      </p>

                      <p className="text-brand-text-dim text-lg font-light leading-relaxed">
                        No somos una agencia de diseño convencional. Somos un estudio de ingeniería y auditoría que entiende que el verdadero lujo tecnológico reside en lo que el usuario no ve, pero el negocio siente:
                      </p>

                      <div className="grid gap-8 pt-4">
                        <div className="group">
                          <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3 group-hover:text-brand-accent transition-colors">
                            <span className="text-xs text-brand-accent font-mono">01</span> Código Limpio, Mentes Tranquilas
                          </h4>
                          <p className="text-brand-text-dim text-sm font-light leading-relaxed pl-8">
                            Auditamos cada línea para eliminar la deuda técnica antes de que se convierta en un costo.
                          </p>
                        </div>

                        <div className="group">
                          <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3 group-hover:text-brand-accent transition-colors">
                            <span className="text-xs text-brand-accent font-mono">02</span> Seguridad por Diseño
                          </h4>
                          <p className="text-brand-text-dim text-sm font-light leading-relaxed pl-8">
                            No añadimos seguridad al final; la seguridad es el cimiento sobre el que levantamos cada bit de información.
                          </p>
                        </div>

                        <div className="group">
                          <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-3 group-hover:text-brand-accent transition-colors">
                            <span className="text-xs text-brand-accent font-mono">03</span> Rendimiento de Élite
                          </h4>
                          <p className="text-brand-text-dim text-sm font-light leading-relaxed pl-8">
                            Optimizamos para que la velocidad sea tu mayor ventaja competitiva.
                          </p>
                        </div>
                      </div>

                      <div className="pt-12">
                        <p className="text-2xl font-bold text-white tracking-tight">
                          No entregamos proyectos. <span className="text-brand-accent">Entregamos certezas.</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
