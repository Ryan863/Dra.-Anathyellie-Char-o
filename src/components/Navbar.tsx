"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#F7F3ED]/90 border-b border-stone-900/[0.08] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5A3C] rounded-sm"
            aria-label="Dra. Anathyellie Charão — Início"
          >
            <span className="font-display text-base sm:text-lg font-semibold tracking-[0.14em] text-[#26211F] leading-none">
              {SITE_CONFIG.brandUpper}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#68605C] font-medium leading-none">
              {SITE_CONFIG.brandSubtitle}
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-medium text-[#26211F]/85 hover:text-[#8C5A3C] transition-colors after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#8C5A3C] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#8C5A3C] hover:bg-[#70462D] text-white px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>Agendar Avaliação</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-stone-900/10 bg-[#FAF7F2]/80 backdrop-blur-sm text-[#26211F] hover:bg-white transition-colors"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#26211F]/35 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`relative ml-auto flex h-full w-full max-w-sm flex-col justify-between bg-[#F7F3ED] p-6 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-900/[0.08]">
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold tracking-[0.14em] text-[#26211F]">
                  {SITE_CONFIG.brandUpper}
                </span>
                <span className="mt-1 text-[9px] tracking-[0.2em] uppercase text-[#68605C]">
                  {SITE_CONFIG.brandSubtitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-stone-900/10 text-[#26211F] hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Links do menu mobile"
              className="mt-6 flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between min-h-[48px] px-3 rounded-xl font-display text-2xl font-medium text-[#26211F] hover:bg-[#EFE9E0]/70 hover:text-[#8C5A3C] transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#8C5A3C]/70"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-stone-900/[0.08] space-y-4">
            <div className="text-xs text-[#68605C] leading-relaxed">
              <p className="font-semibold text-[#26211F]">
                Santa Cruz do Sul — RS
              </p>
              <p>{SITE_CONFIG.address.street} • Bairro Universitário</p>
              <p className="tabular-nums mt-0.5">Seg a Sex: 08:30 às 17:30</p>
            </div>
            <a
              href={SITE_CONFIG.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[48px] rounded-full bg-[#8C5A3C] hover:bg-[#70462D] text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors"
            >
              <span>Agendar Avaliação no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

