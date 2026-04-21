import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Zap, ShieldCheck, Cpu, X, Globe, Code2, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: "AutoMundo Platform",
    type: "Arquitectura Headless E-Commerce",
    metric: "Carga en < 1.2s",
    insight: "Desarrollo de un ecosistema digital para una concesionaria, integrando inventario en tiempo real con una experiencia ultra-rápida.",
    stack: ["Next.js", "TurboRepo", "Node.js"],
    image: "https://i.ibb.co/Lh86HZcg/autos.webp",
    icon: <Zap size={16} />,
    link: "https://leo-cardenas.netlify.app/",
    description: "AutoMundo requería una plataforma que no solo mostrara vehículos, sino que gestionara inventarios dinámicos de múltiples sucursales con una latencia mínima. Implementamos una arquitectura headless para separar el core de gestión de la capa de presentación, logrando una velocidad de navegación instantánea que aumentó la retención de usuarios en un 40%."
  },
  {
    title: "Strike Analytics",
    type: "Sports Performance Platform",
    metric: "Latencia < 50ms",
    insight: "Plataforma de análisis de combate en tiempo real, optimizada para procesar datos biométricos y streaming sin fricciones.",
    stack: ["Cloudflare", "WebRTC", "Go"],
    image: "https://i.ibb.co/4wNBs8S8/boxeo.webp",
    icon: <ShieldCheck size={16} />,
    link: "https://gimnasio-alfa.netlify.app/",
    description: "Para Strike Analytics (Gimnasio Alfa), el reto era la sincronización perfecta. Diseñamos un motor de streaming utilizando WebRTC sobre una malla de workers en Cloudflare, permitiendo que entrenadores y atletas reciban feedback biométrico en tiempo casi real, eliminando el lag tradicional de los sistemas de video sobre IP."
  },
  {
    title: "Equine Management OS",
    type: "Luxury Hospitality SaaS",
    metric: "Uptime 99.99%",
    insight: "Sistema de gestión integral para clubes hípicos de élite, diseñado para manejar reservas exclusivas y logística veterinaria con precisión absoluta.",
    stack: ["React", "GraphQL", "Azure"],
    image: "https://i.ibb.co/cX2nCDtm/ecuestre.webp",
    icon: <Cpu size={16} />,
    link: "https://gli-arcacci.netlify.app/",
    description: "Para Gli Arcacci, desarrollamos un OS boutique que automatiza la logística crítica de centros ecuestres de alto rendimiento. Desde el seguimiento de dietas personalizadas hasta el agendamiento de pistas de entrenamiento, la infraestructura garantiza una disponibilidad total, protegiendo datos sensibles en entornos de alta privacidad."
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 px-6 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-4 block">Portafolio Seleccionado</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Casos de Éxito de Ingeniería.</h2>
          <p className="text-brand-text-dim max-w-2xl font-light leading-relaxed">
            No son solo sitios web; son infraestructuras blindadas que han transformado el rendimiento y la seguridad de negocios globales.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid md:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-brand-accent/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-brand-accent/10 backdrop-blur-md border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent">{project.icon}</span>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-tighter">{project.metric}</span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-[10px] tracking-widest uppercase text-brand-accent font-medium mb-2 block">{project.type}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                </div>
                <p className="text-brand-text-dim text-sm font-light leading-relaxed mb-8">
                  {project.insight}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[9px] uppercase tracking-widest text-brand-text-dim bg-white/5 px-2 py-1 rounded-sm border border-white/10">
                      {tech}
                    </span>
                  ))}
                  <div className="ml-auto p-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest mr-2">Explorar</span>
                    <ExternalLink size={14} className="inline" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Immersive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-7xl h-full lg:h-[90vh] bg-brand-dark border border-white/10 rounded-lg shadow-[0_0_50px_-12px_rgba(100,255,218,0.2)] flex flex-col md:flex-row overflow-hidden isolate"
            >
              {/* Close Button - Fixed to be always visible and reachable */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-[110] p-3 bg-brand-dark/80 hover:bg-brand-accent text-white hover:text-brand-dark border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              {/* Left Column: Preview/Image */}
              <div className="w-full md:w-3/5 lg:w-2/3 bg-black/50 relative h-1/2 md:h-full">
                {selectedProject.link !== "#" ? (
                  <div className="w-full h-full relative group">
                    <iframe 
                      src={selectedProject.link} 
                      className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
                      title={selectedProject.title}
                    />
                    {/* Interaction Guard - prevents the iframe from blocking scrolls when not intended */}
                    <div className="absolute inset-x-0 top-0 h-4 pointer-events-none bg-gradient-to-b from-brand-dark/40 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-brand-dark">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-125"
                    />
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="relative max-w-[85%] max-h-[85%] object-contain shadow-2xl rounded-sm border border-white/10"
                    />
                  </div>
                )}
              </div>

              {/* Right Column: Case Details */}
              <div className="w-full md:w-2/5 lg:w-1/3 p-6 md:p-10 flex flex-col h-1/2 md:h-full overflow-y-auto border-t md:border-t-0 md:border-l border-white/10 scrollbar-hide">
                <div className="mt-4 lg:mt-8 mb-10">
                  <span className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block">Ficha Técnica</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">{selectedProject.title}</h2>
                  
                  <div className="flex flex-wrap items-center gap-4 py-4 border-y border-white/5 mb-8">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={16} className="text-brand-accent" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-widest">{selectedProject.metric}</span>
                    </div>
                    <div className="hidden sm:block w-[1px] h-4 bg-white/10"></div>
                    <div className="flex items-center gap-2 text-brand-text-dim text-[11px] font-medium uppercase tracking-widest">
                      {selectedProject.type}
                    </div>
                  </div>
                  
                  <p className="text-brand-text-dim font-light leading-relaxed text-base lg:text-lg mb-8">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-brand-accent/10 border border-brand-accent/20 rounded-md">
                      <Globe size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1.5">Impacto Estratégico</h4>
                      <p className="text-brand-text-dim text-xs font-light leading-relaxed">Escalabilidad extrema probada para entornos corporativos y seguridad nivel bancario.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-brand-accent/10 border border-brand-accent/20 rounded-md">
                      <Code2 size={18} className="text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1.5">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(s => (
                          <span key={s} className="text-[9px] text-white/70 bg-white/5 px-1.5 py-0.5 rounded border border-white/5 tracking-wider uppercase font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 space-y-4">
                  {selectedProject.link !== "#" && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-brand-dark font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-glow hover:shadow-none translate-y-0 active:translate-y-0.5"
                    >
                      Ir al Sitio <ExternalLink size={14} />
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 hover:border-white/20 transition-all rounded-sm active:scale-95"
                  >
                    Volver al Portafolio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
