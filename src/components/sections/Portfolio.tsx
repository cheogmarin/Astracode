import { motion } from 'motion/react';
import { ExternalLink, Zap, ShieldCheck, Cpu } from 'lucide-react';

const projects = [
  {
    title: "EcoNext Infrastructure",
    type: "Arquitectura Headless E-Commerce",
    metric: "-65% de Carga Técnica",
    insight: "Migración de una base tradicional a una infraestructura desacoplada, optimizando el LCP para conversión masiva.",
    stack: ["Next.js", "Shopify", "Vercel"],
    image: "https://picsum.photos/seed/econext/800/1000",
    icon: <Zap size={16} />,
    link: "#"
  },
  {
    title: "Sentinel Shield",
    type: "Audit & Security Hardening",
    metric: "100/100 Safety Score",
    insight: "Fortalecimiento de vulnerabilidades críticas en la capa de red y saneamiento de dependencias de terceros.",
    stack: ["Cloudflare", "WAF", "Node.js"],
    image: "https://picsum.photos/seed/sentinel/800/1000",
    icon: <ShieldCheck size={16} />,
    link: "#"
  },
  {
    title: "Astra Core SaaS",
    type: "Cloud Scalability OS",
    metric: "+40% Eficiencia Operativa",
    insight: "Reingeniería de procesos back-end para eliminar cuellos de botella y preparar la escalabilidad para 100k usuarios concurrentes.",
    stack: ["React", "PostgreSQL", "AWS"],
    image: "https://picsum.photos/seed/astra-saas/800/1000",
    icon: <Cpu size={16} />,
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Portfolio() {
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden hover:border-brand-accent/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-brand-accent/10 backdrop-blur-md border border-brand-accent/20 rounded-full">
                  <span className="text-brand-accent">{project.icon}</span>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-tighter">{project.metric}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-[10px] tracking-widest uppercase text-brand-accent font-medium mb-2 block">{project.type}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-brand-text-dim text-sm font-light leading-relaxed mb-8">
                  {project.insight}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[9px] uppercase tracking-widest text-brand-text-dim bg-white/5 px-2 py-1 rounded-sm border border-white/10">
                      {tech}
                    </span>
                  ))}
                  <a 
                    href={project.link} 
                    className="ml-auto p-2 text-brand-text-dim hover:text-brand-accent transition-colors"
                    aria-label={`Ver caso de éxito ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
