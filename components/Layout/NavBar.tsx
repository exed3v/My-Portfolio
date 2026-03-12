"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/yo.jpeg";
import { useLang } from "@/hooks/useLang";

const NavBar = () => {
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { label: t.nav.inicio, href: "#inicio" },
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
            <Image
              src={avatar}
              alt="ExeDev avatar"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-display font-semibold text-lg text-foreground">
            Exe<span className="text-gradient">Dev</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-secondary/50"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="ml-1 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200 flex items-center gap-1.5"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-1 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
