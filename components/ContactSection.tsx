"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useLang } from "@/hooks/useLang";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.toast);
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contacto" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-3">
            {t.contact.tag}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-5 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                {t.contact.name}
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                {t.contact.email}
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 glow"
            >
              {t.contact.send} <Send className="w-4 h-4" />
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-2 flex flex-col justify-center gap-4"
          >
            <a
              href="mailto:exequi3l999@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">
                  exequi3l999@exedev.com
                </p>
              </div>
            </a>
            <a
              href="https://github.com/exed3v?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">@exed3v</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/hernan-exequiel-maydana-6181743b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-lift group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">
                  Hernan Exequiel Maydana
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
