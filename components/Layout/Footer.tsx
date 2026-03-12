"use client";
import { Github, Linkedin, Heart } from "lucide-react";
import { useLang } from "@/hooks/useLang";
export const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          {t.footer.madeWith}{" "}
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />{" "}
          {t.footer.by}{" "}
          <span className="font-display font-semibold text-foreground">
            ExeDev
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Exequiel Maydana. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/exed3v?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hernan-exequiel-maydana-6181743b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
