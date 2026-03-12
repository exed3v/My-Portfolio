"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import project1 from "@/public/project-1.jpg";
import project2 from "@/public/project-2.jpg";
import project3 from "@/public/project-3.jpg";
import Image from "next/image";

const projectsMeta = [
  {
    image: project1,
    techs: ["React", "Next.js", "TypeScript", "MongoDB"],
    liveUrl: "#",
    repoUrl: "https://github.com/exed3v?tab=repositories",
  },
  {
    image: project2,
    techs: ["Angular", "NestJS", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    repoUrl: "https://github.com/exed3v?tab=repositories",
  },
  {
    image: project3,
    techs: ["React", "TypeScript", "Node.js", "D3.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/exed3v?tab=repositories",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="proyectos" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-3">
            {t.projects.tag}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl">
            {t.projects.title}
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => {
            const meta = projectsMeta[i];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={meta.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={meta.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
                      aria-label="Live"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={meta.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity"
                      aria-label="Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {meta.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
