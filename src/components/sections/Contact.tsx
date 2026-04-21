import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  projectTitle: string;
  message: string;
  handlesSensitiveData: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectTitle?: string;
  message?: string;
  handlesSensitiveData?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ 
    name: '', 
    email: '', 
    projectTitle: '', 
    message: '',
    handlesSensitiveData: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!form.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    if (!form.projectTitle.trim()) newErrors.projectTitle = 'El título del proyecto es requerido';
    if (!form.message.trim()) newErrors.message = 'El mensaje no puede estar vacío';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSuccess(true);
      setForm({ name: '', email: '', projectTitle: '', message: '', handlesSensitiveData: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Contact error:', err);
      setErrors(prev => ({ ...prev, message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Hablemos de tu próximo hito.</h2>
          <p className="text-brand-text-dim max-w-xl mx-auto font-light leading-relaxed">
            Estamos listos para transformar tu visión en una infraestructura digital impecable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} py-3 outline-none transition-colors font-light`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.name}</span>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} py-3 outline-none transition-colors font-light`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.email}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectTitle" className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium">Título del Proyecto</label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  value={form.projectTitle}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.projectTitle ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} py-3 outline-none transition-colors font-light`}
                  placeholder="Ej: Plataforma E-commerce Next-Gen"
                />
                {errors.projectTitle && <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.projectTitle}</span>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-brand-accent'} py-3 outline-none transition-colors font-light resize-none`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && <span className="text-[10px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.message}</span>}
              </div>

              <div className="space-y-4 p-6 bg-white/[0.03] border border-white/5 rounded-sm">
                <label className="text-[10px] tracking-[0.2em] uppercase text-brand-text-dim font-medium block mb-2">
                  ¿Manejas datos sensibles de usuarios o procesas pagos directamente en tu plataforma?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="handlesSensitiveData"
                      value="si"
                      checked={form.handlesSensitiveData === 'si'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border ${form.handlesSensitiveData === 'si' ? 'border-brand-accent bg-brand-accent' : 'border-white/20'} transition-all flex items-center justify-center`}>
                      {form.handlesSensitiveData === 'si' && <div className="w-1.5 h-1.5 bg-brand-dark rounded-full" />}
                    </div>
                    <span className={`text-xs ${form.handlesSensitiveData === 'si' ? 'text-white' : 'text-brand-text-dim'} group-hover:text-white transition-colors`}>Sí</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="handlesSensitiveData"
                      value="no"
                      checked={form.handlesSensitiveData === 'no'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border ${form.handlesSensitiveData === 'no' ? 'border-brand-accent bg-brand-accent' : 'border-white/20'} transition-all flex items-center justify-center`}>
                      {form.handlesSensitiveData === 'no' && <div className="w-1.5 h-1.5 bg-brand-dark rounded-full" />}
                    </div>
                    <span className={`text-xs ${form.handlesSensitiveData === 'no' ? 'text-white' : 'text-brand-text-dim'} group-hover:text-white transition-colors`}>No</span>
                  </label>
                </div>
                {form.handlesSensitiveData === 'si' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pt-2"
                  >
                    <p className="text-[10px] text-brand-accent font-medium flex items-center gap-2">
                      <ShieldCheck size={12} /> Priorizaremos la Auditoría de Seguridad en nuestra propuesta.
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "#70ffdf",
                    boxShadow: "0 0 40px rgba(100, 255, 218, 0.6)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`group relative w-full sm:w-auto px-12 py-4 bg-brand-accent text-brand-dark font-bold rounded-sm tracking-widest uppercase text-xs transition-all duration-300 shadow-glow flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></div>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2 text-brand-dark"><CheckCircle2 size={16} /> Enviado</span>
                  ) : (
                    <span className="flex items-center gap-2">Enviar Mensaje <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
