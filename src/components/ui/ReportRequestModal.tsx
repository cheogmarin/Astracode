import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Globe, Mail, User, ShieldCheck } from 'lucide-react';

interface ReportRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportRequestModal({ isOpen, onClose }: ReportRequestModalProps) {
  const [form, setForm] = useState({ name: '', email: '', url: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/report-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setForm({ name: '', email: '', url: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0D1117] border border-white/10 rounded-sm shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text-dim hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {!isSuccess ? (
                <>
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-brand-accent mb-4">
                      <ShieldCheck size={20} />
                      <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Acceso Exclusivo</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Solicita tu Muestra de Reporte.</h3>
                    <p className="text-brand-text-dim text-sm font-light leading-relaxed">
                      Descubre el estándar de ingeniería que protege activos digitales de alto valor. Recibirás una muestra real de nuestro reporte <span className="text-white font-medium italic">Astra Security Insights</span>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium flex items-center gap-2">
                        <User size={12} /> Nombre Completo
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors font-light text-sm"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium flex items-center gap-2">
                        <Mail size={12} /> Email Corporativo
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors font-light text-sm"
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium flex items-center gap-2">
                        <Globe size={12} /> URL de tu Plataforma
                      </label>
                      <input
                        required
                        type="url"
                        value={form.url}
                        onChange={(e) => setForm({ ...form, url: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-3 text-white outline-none focus:border-brand-accent transition-colors font-light text-sm"
                        placeholder="https://tu-sitio.com"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-accent text-brand-dark font-bold rounded-sm tracking-widest uppercase text-xs shadow-glow flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></div>
                      ) : (
                        <>Obtener Muestra <Send size={14} /></>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} className="text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">¡Solicitud Enviada!</h3>
                  <p className="text-brand-text-dim text-sm font-light leading-relaxed mb-8">
                    Tu muestra de reporte está en camino a tu bandeja de entrada. Prepárate para descubrir el siguiente nivel de ingeniería.
                  </p>
                  <div className="text-[10px] uppercase tracking-widest text-brand-accent font-bold">
                    Cerrando ventana...
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
