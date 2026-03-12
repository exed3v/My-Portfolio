"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Lang = "es" | "en";

interface Translations {
  nav: { inicio: string; about: string; projects: string; contact: string };
  hero: {
    tag: string;
    greeting: string;
    name: string;
    role: string;
    description: string;
    cta: string;
    cv: string;
  };
  about: { tag: string; title: string; description: string; stack: string };
  projects: {
    tag: string;
    title: string;
    items: { title: string; description: string }[];
  };
  whyHire: {
    tag: string;
    title: string;
    items: { title: string; description: string }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    toast: string;
  };
  footer: { madeWith: string; by: string; rights: string };
}

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const translations: Record<Lang, Translations> = {
  es: {
    nav: {
      inicio: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      tag: "Portfolio",
      greeting: "Hola, mi nombre es",
      name: "Exequiel Maydana",
      role: "Desarrollador Web Full-Stack con especialización en Front-End.",
      description:
        "Desarrollo soluciones web modernas con un enfoque en la calidad, la simplicidad y la experiencia del usuario. Me motiva transformar ideas en productos funcionales, escribir código limpio y construir aplicaciones que sean claras, mantenibles y útiles en el mundo real.\n\nValoro el aprendizaje constante, los desafíos técnicos y las oportunidades de crecimiento que surgen al trabajar en proyectos que buscan generar un impacto real.",
      cta: "Contáctame",
      cv: "Descargar CV",
    },
    about: {
      tag: "Sobre mí",
      title: "Conoce un poco más sobre mí",
      description:
        "Desde que comencé a interactuar con código en 2021, he desarrollado mi formación mediante bootcamps y de manera autodidacta, adaptándome rápidamente a nuevas tecnologías y enfoques. Me interesa crear soluciones digitales que sean innovadoras, escalables y de impacto tangible para los usuarios.\n\nTrabajo de manera colaborativa, priorizando la comunicación clara y la organización de los proyectos para alcanzar resultados eficientes incluso bajo presión. Soy meticuloso en los detalles y comprometido con entregar productos de alta calidad, siempre con el objetivo de mejorar continuamente.",
      stack: "Mi stack tecnológico",
    },
    projects: {
      tag: "Proyectos",
      title: "Proyectos destacados",
      items: [
        {
          title: "E-Commerce Platform",
          description:
            "Plataforma de comercio electrónico moderna con carrito de compras, filtros avanzados, pasarela de pagos y panel de administración.",
        },
        {
          title: "Task Manager Pro",
          description:
            "Aplicación de gestión de tareas con tablero Kanban, colaboración en tiempo real y notificaciones push.",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Dashboard de analíticas con visualización de datos interactiva, reportes automatizados y exportación de datos.",
        },
      ],
    },
    whyHire: {
      tag: "Mis valores",
      title: "¿Por qué debería contratarme?",
      items: [
        {
          title: "Código limpio",
          description:
            "Escribo código legible, mantenible y bien documentado siguiendo las mejores prácticas y patrones de diseño.",
        },
        {
          title: "Escalabilidad",
          description:
            "Diseño arquitecturas escalables que crecen con el producto, pensando en el rendimiento desde el primer commit.",
        },
        {
          title: "UX excepcional",
          description:
            "Priorizo la experiencia del usuario con interfaces intuitivas, accesibles y visualmente atractivas.",
        },
        {
          title: "Buenas prácticas",
          description:
            "Testing, CI/CD, revisión de código y documentación son parte esencial de mi flujo de trabajo.",
        },
      ],
    },
    contact: {
      tag: "Contacto",
      title: "¿Tienes un proyecto en mente?",
      subtitle:
        "Me encantaría escuchar sobre tu próximo proyecto. No dudes en contactarme.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      toast: "¡Mensaje enviado! Te responderé pronto.",
    },
    footer: {
      madeWith: "Hecho con",
      by: "por",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      tag: "Portfolio",
      greeting: "Hi, my name is",
      name: "Exequiel Maydana",
      role: "Full-Stack Web Developer specializing in Front-End.",
      description:
        "I develop modern web solutions with a focus on quality, simplicity, and user experience. I am motivated by transforming ideas into functional products, writing clean code, and building applications that are clear, maintainable, and useful in the real world.\n\nI value constant learning, technical challenges, and growth opportunities that arise when working on projects that seek to make a real impact.",
      cta: "Contact me",
      cv: "Download CV",
    },
    about: {
      tag: "About me",
      title: "Get to know me a little better",
      description:
        "Since I began interacting with code in 2021, I have developed my skills through bootcamps and self-study, quickly adapting to new technologies and approaches. I am interested in creating digital solutions that are innovative, scalable, and have a tangible impact on users.\n\nI work collaboratively, prioritizing clear communication and project organization to achieve efficient results even under pressure. I am meticulous in my attention to detail and committed to delivering high-quality products, always with the goal of continuous improvement.",
      stack: "My tech stack",
    },
    projects: {
      tag: "Projects",
      title: "Featured projects",
      items: [
        {
          title: "E-Commerce Platform",
          description:
            "Modern e-commerce platform with shopping cart, advanced filters, payment gateway, and admin panel.",
        },
        {
          title: "Task Manager Pro",
          description:
            "Task management app with Kanban board, real-time collaboration, and push notifications.",
        },
        {
          title: "Analytics Dashboard",
          description:
            "Analytics dashboard with interactive data visualization, automated reports, and data export.",
        },
      ],
    },
    whyHire: {
      tag: "My values",
      title: "Why should you hire me?",
      items: [
        {
          title: "Clean code",
          description:
            "I write readable, maintainable, and well-documented code following best practices and design patterns.",
        },
        {
          title: "Scalability",
          description:
            "I design scalable architectures that grow with the product, thinking about performance from the first commit.",
        },
        {
          title: "Exceptional UX",
          description:
            "I prioritize user experience with intuitive, accessible, and visually appealing interfaces.",
        },
        {
          title: "Best practices",
          description:
            "Testing, CI/CD, code review, and documentation are an essential part of my workflow.",
        },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Have a project in mind?",
      subtitle:
        "I'd love to hear about your next project. Don't hesitate to reach out.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      toast: "Message sent! I'll get back to you soon.",
    },
    footer: {
      madeWith: "Made with",
      by: "by",
      rights: "All rights reserved.",
    },
  },
};

const LangContext = createContext<LangContextType | null>(null);

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};
