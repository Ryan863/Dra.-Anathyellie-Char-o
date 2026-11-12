"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroThreshold = window.innerHeight * 0.72;
      setVisible(window.scrollY > heroThreshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE_CONFIG.whatsappPrimary}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#8C5A3C] hover:bg-[#70462D] text-white px-4 py-3.5 sm:px-5 shadow-lg transition-all duration-300 min-h-[48px] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide uppercase">
        Agendar Avaliação
      </span>
    </a>
  );
}

