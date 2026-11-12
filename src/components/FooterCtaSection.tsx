import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";

export function FooterCtaSection() {
  return (
    <footer className="bg-[#26211F] text-[#F7F3ED]">
      {/* Final Conversion Block */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 border-b border-white/10">
        <div className="reveal-section max-w-3xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9E6B4B] font-semibold">
            Próximo Passo
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-white text-balance">
            Sua pele merece um olhar único, atento e{" "}
            <em className="italic font-normal text-[#D9B89F]">
              verdadeiramente integrativo
            </em>
            .
          </h2>
          <p className="mt-4 text-base text-white/75 leading-relaxed text-pretty max-w-xl">
            Agende sua avaliação personalizada em Santa Cruz do Sul e descubra o
            protocolo exato para revelar sua beleza natural com segurança.
          </p>

          <div className="mt-8">
            <a
              href={SITE_CONFIG.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#8C5A3C] hover:bg-[#9E6B4B] text-white px-8 py-4 text-sm font-semibold tracking-wide transition-colors min-h-[48px]"
            >
              <span>Agendar Avaliação via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Institutional Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-white/65">
        <div>
          <p className="font-display text-sm tracking-[0.14em] uppercase text-white font-semibold">
            {SITE_CONFIG.brandUpper}
          </p>
          <p className="mt-1">
            {SITE_CONFIG.address.street} — {SITE_CONFIG.address.neighborhood},{" "}
            {SITE_CONFIG.address.city} - {SITE_CONFIG.address.state}
          </p>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="tabular-nums">
          © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

