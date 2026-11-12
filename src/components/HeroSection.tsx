import Image from "next/image";
import { ArrowDown, ArrowUpRight, Leaf, Sparkles, Star } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[88dvh] sm:min-h-[95dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-[#F7F3ED]"
    >
      {/* Desktop Macro Photography (16:9) */}
      <Image
        src="/hero-desktop.jpg"
        alt="Frascos âmbar e vidro fosco com ramo de eucalipto e gota dourada sobre pedra travertino iluminada"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover object-right select-none"
      />

      {/* Mobile Macro Photography (9:16) */}
      <Image
        src="/hero-mobile.jpg"
        alt="Composição editorial de frascos terapêuticos, eucalipto e pedra travertino com bancada clara"
        fill
        priority
        sizes="100vw"
        className="block md:hidden object-cover object-top select-none"
      />

      {/* Readability Protection Gradients (strictly under text zones) */}
      <div
        aria-hidden="true"
        className="md:hidden absolute inset-x-0 bottom-0 h-[66%] bg-gradient-to-t from-[#F7F3ED] via-[#F7F3ED]/90 to-transparent pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#F7F3ED] via-[#F7F3ED]/80 to-transparent pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-28">
        <div className="max-w-2xl">
          <p className="hero-stagger text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
            Harmonização Facial &amp; Saúde Integrativa • Santa Cruz do Sul - RS
          </p>

          <h1 className="hero-stagger mt-3 sm:mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
            Um olhar clínico que vai{" "}
            <em className="italic font-normal text-[#8C5A3C]">além</em> da
            superfície da pele.
          </h1>

          <p className="hero-stagger mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-[#68605C] text-pretty max-w-xl">
            Protocolos personalizados de harmonização facial, toxina botulínica
            e tratamento integrativo para melasma conduzidos pela Dra.
            Anathyellie Charão. Sem padrões prontos — apenas o cuidado exato que
            a sua pele precisa.
          </p>

          <div className="hero-stagger mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={SITE_CONFIG.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8C5A3C] hover:bg-[#70462D] text-white px-7 py-4 text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md min-h-[48px]"
            >
              <span>Agendar Avaliação Personalizada</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/15 bg-white/70 hover:bg-white backdrop-blur-sm text-[#26211F] px-6 py-4 text-sm font-medium transition-colors min-h-[48px]"
            >
              <span>Explorar Tratamentos</span>
              <ArrowDown
                className="w-4 h-4 text-[#8C5A3C]"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Credibility Bar */}
          <div className="hero-stagger mt-7 sm:mt-10 pt-5 border-t border-stone-900/[0.08] flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-[13px] text-[#26211F]/85">
            <div className="inline-flex items-center gap-1.5 font-medium tabular-nums">
              <Star
                className="w-3.5 h-3.5 fill-[#8C5A3C] text-[#8C5A3C]"
                aria-hidden="true"
              />
              <span>5.0 no Google (30 Avaliações Reais)</span>
            </div>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-stone-900/20"
            >
              •
            </span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Leaf className="w-3.5 h-3.5 text-[#4E6151]" aria-hidden="true" />
              <span>Abordagem em Saúde Integrativa</span>
            </div>
            <span
              aria-hidden="true"
              className="hidden sm:inline text-stone-900/20"
            >
              •
            </span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Sparkles
                className="w-3.5 h-3.5 text-[#8C5A3C]"
                aria-hidden="true"
              />
              <span>Protocolos 100% Individualizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

