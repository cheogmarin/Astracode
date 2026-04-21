import { motion } from 'motion/react';
import { 
  ShoppingCart, 
  Layers, 
  Cpu, 
  Search, 
  Compass, 
  ShieldCheck, 
  Zap, 
  ExternalLink,
  Activity,
  Globe,
  UserCheck,
  BarChart3,
  ListChecks,
  Award
} from 'lucide-react';

const serviceCategories = [
  {
    id: "core",
    title: "Servicios Core",
    subtitle: "Pilares de Alto Rendimiento",
    description: "Proyectos cerrados diseñados para transformar infraestructuras digitales.",
    services: [
      {
        title: "E-commerce de Alto Rendimiento",
        hook: "Tiendas que cargan en menos de 1 segundo y escalan sin servidores caídos en Black Friday.",
        icon: <ShoppingCart className="text-brand-accent" size={24} />,
        details: "Infraestructuras optimizadas para la conversión masiva."
      },
      {
        title: "SaaS y Aplicaciones Web (PWA)",
        hook: "Software diseñado para ser intuitivo, rápido y fácil de mantener.",
        icon: <Layers className="text-brand-accent" size={24} />,
        details: "Construcción desde cero con Next.js y bases de datos vectoriales."
      },
      {
        title: "Arquitectura y Escalabilidad",
        hook: "Eliminamos tu deuda técnica y preparamos tu plataforma para el siguiente nivel.",
        icon: <Cpu className="text-brand-accent" size={24} />,
        details: "Soluciones para sistemas lentos o con fallos constantes."
      }
    ]
  },
  {
    id: "consultancy",
    title: "Consultoría Estratégica",
    subtitle: "Ingresos por Conocimiento",
    description: "Posicionamiento de autoridad y filtrado estratégico para grandes desarrollos.",
    services: [
      {
        title: "Auditoría de Performance y SEO",
        hook: "Análisis profundo de Core Web Vitals, seguridad y eficiencia de código.",
        icon: <Search className="text-brand-accent" size={24} />,
        details: "Entregable: Reporte técnico detallado con hoja de ruta."
      },
      {
        title: "Transformación Digital",
        hook: "Ayudamos a empresas tradicionales a elegir el stack tecnológico adecuado.",
        icon: <Compass className="text-brand-accent" size={24} />,
        details: "Entregable: Documento de arquitectura técnica y selección de proveedores."
      }
    ]
  },
  {
    id: "recurring",
    title: "Soporte de Élite",
    subtitle: "Servicios Productizados",
    description: "Mantenimiento proactivo para evitar ciclos de inestabilidad financiera.",
    services: [
      {
        title: "Astra Care",
        hook: "Monitoreo 24/7, optimización continua, backups y parches de seguridad.",
        icon: <ShieldCheck className="text-brand-accent" size={24} />,
        details: "Mantenimiento proactivo más allá de simples actualizaciones."
      },
      {
        title: "Optimización T-CRO",
        hook: "Mejorar la velocidad y la UX técnica para subir las ventas mes a mes.",
        icon: <Zap className="text-brand-accent" size={24} />,
        details: "Conversión técnica especializada para resultados medibles."
      }
    ]
  },
  {
    id: "security",
    title: "Boutique de Inteligencia",
    subtitle: "Seguridad y Gobernanza",
    description: "Evaluamos y protegemos la integridad de tu infraestructura digital.",
    services: [
      {
        title: "Auditoría de Salud Técnica",
        hook: "No puedes gestionar lo que no mides. Evaluamos tu integridad antes de que afecten al negocio.",
        icon: <Activity className="text-brand-accent" size={24} />,
        details: "Análisis exhaustivo de código, dependencias y servidores. Entregable: Mapa de Riesgos."
      },
      {
        title: "Cumplimiento y Gobernanza",
        hook: "Diseñamos el marco legal y técnico para que tu plataforma sea globalmente competitiva.",
        icon: <Globe className="text-brand-accent" size={24} />,
        details: "Estructuración de datos para GDPR e ISO 27001. Evita multas y genera confianza."
      },
      {
        title: "Security Advisor (vCISO)",
        hook: "Un estratega de seguridad integrado en tu equipo para validar cada paso de tu hoja de ruta.",
        icon: <UserCheck className="text-brand-accent" size={24} />,
        details: "Acompañamiento mensual (Retainer) para revisión de nuevas funcionalidades."
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-4 block">Nuestra Experiencia</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Servicios de Ingeniería de Élite.</h2>
          <p className="text-brand-text-dim max-w-2xl font-light leading-relaxed">
            Diseñados para atraer clientes que valoran la calidad técnica absoluta y el retorno de inversión tangible.
          </p>
        </motion.div>

        <div className="space-y-24">
          {serviceCategories.map((category) => (
            <div key={category.id} className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-brand-accent text-[10px] tracking-[0.2em] uppercase font-medium">{category.subtitle}</p>
                </div>
                <p className="text-brand-text-dim max-w-md text-sm font-light italic">
                  "{category.description}"
                </p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.services.map((service, sIndex) => (
                  <motion.div
                    key={sIndex}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group bg-white/[0.02] border border-white/5 p-8 rounded-sm hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="mb-6 p-3 bg-brand-accent/5 w-fit rounded-sm group-hover:bg-brand-accent/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h4>
                    <p className="text-brand-accent text-xs font-medium mb-4 leading-relaxed italic">
                      "{service.hook}"
                    </p>
                    <p className="text-brand-text-dim text-sm font-light leading-relaxed mt-auto">
                      {service.details}
                    </p>
                  </motion.div>
                ))}

                {/* Special Edge Case for the last category */}
                {category.id === "recurring" && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20 p-8 rounded-sm hover:border-brand-accent/50 transition-all duration-500 flex flex-col h-full lg:col-span-1"
                  >
                    <div className="mb-6 p-3 bg-brand-accent/20 w-fit rounded-sm">
                      <ExternalLink className="text-brand-accent" size={24} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="text-xl font-bold text-white">Migración Headless</h4>
                      <span className="text-[8px] bg-brand-accent text-brand-dark px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Edge Case</span>
                    </div>
                    <p className="text-brand-accent text-xs font-medium mb-4 leading-relaxed italic">
                      "Libertad de un frontend moderno (Astro) manteniendo tu panel actual (WordPress/Shopify)."
                    </p>
                    <p className="text-brand-text-dim text-sm font-light leading-relaxed mt-auto">
                      Para empresas atrapadas en arquitecturas tradicionales que buscan el siguiente nivel de UX.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Premium Deliverables Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 p-8 md:p-16 bg-gradient-to-br from-brand-accent/5 to-transparent border border-white/5 rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Award size={120} className="text-brand-accent" />
          </div>
          
          <div className="relative z-10">
            <div className="mb-12">
              <span className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-4 block text-center md:text-left">El Estándar Astra</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">Entregables de Clase Mundial.</h3>
              <p className="text-brand-text-dim max-w-2xl font-light leading-relaxed text-center md:text-left">
                Nuestras auditorías no son simples reportes; son herramientas estratégicas de ejecución inmediata.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-accent mb-4">
                  <BarChart3 size={20} />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Dashboard de Riesgos</h4>
                </div>
                <p className="text-brand-text-dim text-sm font-light leading-relaxed">
                  Visualización clara mediante un semáforo de riesgos (Crítico, Medio, Bajo) para priorizar la toma de decisiones.
                </p>
                <div className="flex gap-2 pt-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-accent mb-4">
                  <ListChecks size={20} />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Roadmap de Mitigación</h4>
                </div>
                <p className="text-brand-text-dim text-sm font-light leading-relaxed">
                  Lista de pasos accionables ordenados por prioridad de negocio, eliminando la incertidumbre técnica.
                </p>
                <div className="space-y-1 pt-2">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-brand-accent"></div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-brand-accent/50"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-accent mb-4">
                  <Award size={20} />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Certificado Astra</h4>
                </div>
                <p className="text-brand-text-dim text-sm font-light leading-relaxed">
                  Sello digital exclusivo que garantiza que tu infraestructura ha sido auditada bajo los estándares más estrictos.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 border border-brand-accent/30 rounded-sm text-[8px] font-bold text-brand-accent uppercase tracking-tighter">
                    Audited by Astra Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
