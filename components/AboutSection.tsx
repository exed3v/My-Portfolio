"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/hooks/useLang";

const technologies = [
  { name: "JavaScript", color: "hsl(50 95% 55%)" },
  { name: "TypeScript", color: "hsl(211 60% 48%)" },
  { name: "React", color: "hsl(193 95% 68%)" },
  { name: "Next.js", color: "hsl(0 0% 80%)" },
  { name: "Angular", color: "hsl(4 90% 58%)" },
  { name: "Node.js", color: "hsl(120 45% 45%)" },
  { name: "NestJS", color: "hsl(350 75% 55%)" },
  { name: "MongoDB", color: "hsl(120 40% 40%)" },
  { name: "PostgreSQL", color: "hsl(210 55% 50%)" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
  return (
    <section id="sobre-mi" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-3">
            {t.about.tag}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            {t.about.title}
          </h2>
          <p className="whitespace-pre-line text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-display font-semibold text-lg text-center mb-8 text-muted-foreground">
            {t.about.stack}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="group relative px-5 py-3 rounded-xl border border-border bg-card hover-lift cursor-default"
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
