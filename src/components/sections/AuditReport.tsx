import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Target, 
  FileText, 
  ChevronRight, 
  Lock, 
  BarChart, 
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import ReportRequestModal from '../ui/ReportRequestModal';

const reportSections = [
  {
    title: "Executive Summary",
    icon: <FileText size={18} />,
    items: ["Astra Score (0-100)", "Resumen de Hallazgos", "Impacto de Negocio"]
  },
  {
    title: "Superficie de Ataque",
    icon: <Shield size={18} />,
    items: ["Vulnerabilidades Externas", "Análisis de Terceros", "Hardening de Infraestructura"]
  },
  {
    title: "Diagnóstico de Performance",
    icon: <Zap size={18} />,
    items: ["Core Web Vitals", "Eficiencia de Código", "Estrategia de Caché"]
  },
  {
    title: "Roadmap de Mitigación",
    icon: <Target size={18} />,
    items: ["Prioridad Crítica (<24h)", "Optimización Técnica", "Mejora Continua"]
  }
];

export default function AuditReport() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="audit" className="py-24 px-6 bg-black/40 relative overflow-hidden gpu-accelerate">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent text-[10px] tracking-[0.3em] uppercase font-medium mb-4 block">Astra Security Insights</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              El Reporte que define tu <span className="text-gradient italic">resiliencia.</span>
            </h2>
            <p className="text-brand-text-dim text-lg font-light leading-relaxed mb-10 max-w-xl">
              Nuestras auditorías no son simples listas de errores. Son documentos estratégicos diseñados para el C-Level, traduciendo riesgos técnicos en impacto financiero real.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {reportSections.map((section, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-sm group hover:border-brand-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-3 text-brand-accent mb-3">
                    {section.icon}
                    <h4 className="font-bold text-xs uppercase tracking-widest">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-[11px] text-brand-text-dim flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-accent/40 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-white/5 pt-10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-white mb-1">+450</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-accent font-medium">Vulnerabilidades Mitigadas</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-sm tracking-widest uppercase text-[10px] hover:bg-white/10 transition-all flex items-center gap-3"
              >
                Solicitar Muestra de Reporte <ChevronRight size={14} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Visual "Peek" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            {/* Stylized Report Mockup */}
            <div className="relative bg-[#0D1117] border border-white/10 rounded-lg shadow-2xl overflow-hidden aspect-[3/4] max-w-[450px] mx-auto">
              {/* Header of Report */}
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-accent rounded-sm flex items-center justify-center">
                    <Lock size={12} className="text-brand-dark" />
                  </div>
                  <span className="text-[10px] font-bold tracking-tighter text-white">ASTRA SECURITY INSIGHTS</span>
                </div>
                <span className="text-[8px] text-brand-text-dim uppercase tracking-widest">CONFIDENTIAL</span>
              </div>

              {/* Body of Report */}
              <div className="p-8 space-y-8">
                {/* Astra Score Gauge */}
                <div className="flex items-center justify-between gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-text-dim mb-1">Astra Score</div>
                    <div className="text-4xl font-bold text-brand-accent">84<span className="text-sm text-brand-text-dim font-light">/100</span></div>
                  </div>
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="text-white/5 stroke-current"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-brand-accent stroke-current"
                        strokeWidth="3"
                        strokeDasharray="84, 100"
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                </div>

                {/* Blurred Content Sections */}
                <div className="space-y-4">
                  <div className="h-4 w-1/3 bg-white/10 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded-full blur-[2px]"></div>
                    <div className="h-2 w-full bg-white/5 rounded-full blur-[2px]"></div>
                    <div className="h-2 w-2/3 bg-white/5 rounded-full blur-[2px]"></div>
                  </div>
                </div>

                {/* Risk Chart Mockup */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                    <BarChart size={14} className="text-brand-accent" /> Risk Distribution
                  </div>
                  <div className="flex items-end gap-3 h-32 pt-4">
                    <div className="flex-1 bg-red-500/40 border-t-2 border-red-500 h-[80%] rounded-t-sm relative group">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">CRITICAL</div>
                    </div>
                    <div className="flex-1 bg-yellow-500/40 border-t-2 border-yellow-500 h-[40%] rounded-t-sm"></div>
                    <div className="flex-1 bg-blue-500/40 border-t-2 border-blue-500 h-[60%] rounded-t-sm"></div>
                    <div className="flex-1 bg-green-500/40 border-t-2 border-green-500 h-[20%] rounded-t-sm"></div>
                  </div>
                </div>

                {/* Mitigation Roadmap Preview */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-brand-accent" /> Mitigation Roadmap
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-white/[0.03] rounded-sm">
                      <AlertTriangle size={10} className="text-red-500" />
                      <div className="h-1.5 w-1/2 bg-white/10 rounded-full blur-[1px]"></div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white/[0.03] rounded-sm">
                      <CheckCircle2 size={10} className="text-brand-accent" />
                      <div className="h-1.5 w-2/3 bg-white/10 rounded-full blur-[1px]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer of Report */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-brand-dark to-transparent flex justify-center">
                <div className="px-4 py-1.5 border border-brand-accent/40 rounded-sm text-[8px] font-bold text-brand-accent uppercase tracking-widest bg-brand-dark/80 backdrop-blur-sm">
                  Certified by Astra Code
                </div>
              </div>

              {/* Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-brand-dark border border-white/10 rounded-lg shadow-xl backdrop-blur-md z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle size={16} className="text-red-500" />
                </div>
                <div>
                  <div className="text-[8px] text-brand-text-dim uppercase tracking-widest">Security Alert</div>
                  <div className="text-[10px] font-bold text-white">XSS Vulnerability Detected</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <ReportRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
