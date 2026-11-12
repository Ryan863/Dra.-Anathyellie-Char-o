import { ArrowUpRight, Droplets, Leaf, ShieldAlert } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/site-data";

export function MelasmaSection() {
  const melasmaHref = buildWhatsAppUrl(
    "Olá, Dra. Anathyellie! Gostaria de agendar uma avaliação integrativa para o meu melasma."
  );

  return (
    <section
      id="melasma"
      className="py-14 sm:py-20 lg:py-28 bg-[#EFE9E0] border-y border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="reveal-section lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4E6151]/10 text-[#4E6151] px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
              <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Gerenciamento Integrativo de Melasma</span>
            </div>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
              Por que tratar apenas a superfície faz o melasma{" "}
              <em className="italic font-normal text-[#8C5A3C]">voltar?</em>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#68605C] leading-relaxed text-pretty">
              Ácidos agressivos e clareamentos isolados podem fragilizar a
              barreira cutânea e gerar inflamação silenciosa — provocando o
              temido efeito rebote. Nossa abordagem investiga a{" "}
              <strong className="font-semibold text-[#26211F]">
                causa-raiz
              </strong>
              : fatores inflamatórios, estresse oxidativo, hábitos diários e
              suporte botânico seguro.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-stone-900/[0.08] bg-[#FAF7F2]/90 p-5">
                <div className="flex items-center gap-2 text-[#8C5A3C] font-semibold text-sm">
                  <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                  <span>Sem agressão cega</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#68605C] leading-relaxed">
                  Respeito integral à barreira de proteção da pele para evitar
                  sensibilização e escurecimento rebote.
                </p>
              </div>

              <div className="rounded-xl border border-stone-900/[0.08] bg-[#FAF7F2]/90 p-5">
                <div className="flex items-center gap-2 text-[#4E6151] font-semibold text-sm">
                  <Droplets className="w-4 h-4" aria-hidden="true" />
                  <span>Sinergia com dōTERRA</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#68605C] leading-relaxed">
                  Associação estratégica de óleos essenciais terapêuticos de
                  alta pureza para modular a resposta inflamatória.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={melasmaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#8C5A3C] hover:bg-[#70462D] text-white px-7 py-4 text-sm font-semibold tracking-wide transition-colors min-h-[48px]"
              >
                <span>Quero Entender a Causa do Meu Melasma</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Editorial Proof Card */}
          <div className="reveal-section lg:col-span-5">
            <div className="rounded-2xl border border-stone-900/[0.08] bg-white/85 backdrop-blur-sm p-6 sm:p-8 shadow-sm space-y-6">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
                Relatos reais de quem tratou a causa
              </p>

              <blockquote className="border-l-2 border-[#8C5A3C] pl-4">
                <p className="font-display text-xl sm:text-2xl italic text-[#26211F] leading-snug">
                  “Pela primeira vez senti que alguém realmente quis entender a
                  causa do meu melasma, e não apenas tratar a superfície da
                  pele.”
                </p>
                <footer className="mt-2.5 text-xs font-semibold text-[#68605C]">
                  — Louannye Charão • Avaliação 5.0 no Google
                </footer>
              </blockquote>

              <div className="h-px bg-stone-900/[0.08]" />

              <blockquote className="border-l-2 border-[#4E6151] pl-4">
                <p className="text-sm sm:text-base text-[#26211F]/90 leading-relaxed">
                  “Super atenciosa e me explicou tudo em detalhes sobre o
                  melasma, coisas que nunca tinha escutado de outros
                  profissionais.”
                </p>
                <footer className="mt-2 text-xs font-semibold text-[#68605C]">
                  — Renata Rce • Avaliação 5.0 no Google
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

