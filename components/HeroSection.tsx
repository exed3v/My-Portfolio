"use client";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import heroIllustration from "@/public/hero-illustration.png";
import { useLang } from "@/hooks/useLang";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { t } = useLang();
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center section-padding pt-32"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4"
            >
              {t.hero.tag}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            >
              {t.hero.greeting}{" "}
              <span className="text-gradient">{t.hero.name}</span>.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-xl md:text-2xl text-muted-foreground font-medium mb-6"
            >
              {t.hero.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="whitespace-pre-line text-muted-foreground leading-relaxed max-w-lg mb-8"
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contacto")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 glow"
              >
                {t.hero.cta} <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:bg-secondary/50 transition-all duration-300"
              >
                {t.hero.cv} <Download className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <Image
                src={heroIllustration}
                alt="Desarrollo web"
                className="w-80 md:w-96 animate-float"
              />
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
