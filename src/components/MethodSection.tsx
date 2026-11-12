import { ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { METHOD_PILLARS, SITE_CONFIG } from "@/config/site-data";

export function MethodSection() {
  return (
    <section id="metodo" className="py-14 sm:py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Editorial Column */}
          <div className="reveal-section lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
              Filosofia Clínica
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
              Acolhimento técnico,{" "}
              <em className="italic font-normal text-[#8C5A3C]">
                transparência
              </em>{" "}
              e zero pressa.
            </h2>
            <p className="mt-4 text-base text-[#68605C] leading-relaxed text-pretty">
              Muitas pacientes chegam cansadas de atendimentos apressados ou
              protocolos padronizados que visam apenas vender procedimentos.
              Aqui, cada consulta começa ouvindo você por inteiro.
            </p>

            {/* Visual Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-4">
                <div className="flex items-center gap-1 text-[#8C5A3C] font-display text-2xl sm:text-3xl font-semibold tabular-nums">
                  <span>5.0</span>
                  <Star
                    className="w-4 h-4 fill-[#8C5A3C] text-[#8C5A3C]"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#68605C] leading-snug">
                  Nota no Google
                </p>
              </div>

              <div className="rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-4">
                <div className="font-display text-2xl sm:text-3xl font-semibold text-[#26211F] tabular-nums">
                  100%
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#68605C] leading-snug">
                  Sob medida
                </p>
              </div>

              <div className="rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-4">
                <div className="font-display text-xl sm:text-2xl font-semibold text-[#4E6151] leading-tight">
                  Univ.
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-[#68605C] leading-snug">
                  Bairro Universitário
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={SITE_CONFIG.whatsappPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#26211F] hover:bg-[#8C5A3C] text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors min-h-[48px]"
              >
                <span>Agendar Minha Avaliação</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Pillars Column */}
          <div className="reveal-grid lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {METHOD_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.label}
                className="reveal-card rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#4E6151]">
                      {pillar.label}
                    </span>
                    {idx % 2 === 0 ? (
                      <Sparkles
                        className="w-4 h-4 text-[#8C5A3C]/70"
                        aria-hidden="true"
                      />
                    ) : (
                      <ShieldCheck
                        className="w-4 h-4 text-[#4E6151]/70"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium text-[#26211F] leading-snug text-balance">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#68605C] text-pretty">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

