import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function LocationSection() {
  return (
    <section
      id="contato"
      className="py-14 sm:py-20 lg:py-28 bg-[#F7F3ED] border-t border-stone-900/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section rounded-3xl border border-stone-900/[0.08] bg-white/85 backdrop-blur-sm overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
                  Localização &amp; Atendimento
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight leading-[1.1] text-[#26211F] text-balance">
                  Um espaço reservado no Bairro Universitário, em Santa Cruz do
                  Sul.
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#EFE9E0] flex items-center justify-center text-[#8C5A3C] shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#26211F]">
                        Endereço da Clínica
                      </p>
                      <p className="mt-1 text-sm text-[#68605C] leading-relaxed">
                        {SITE_CONFIG.address.full}
                      </p>
                      <p className="mt-0.5 text-xs text-[#68605C]/80">
                        Plus Code: {SITE_CONFIG.address.plusCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#EFE9E0] flex items-center justify-center text-[#4E6151] shrink-0">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="w-full max-w-sm">
                      <p className="text-sm font-semibold text-[#26211F]">
                        Horário de Atendimento
                      </p>
                      <dl className="mt-2 space-y-1.5 text-sm">
                        {SITE_CONFIG.hours.map((item) => (
                          <div
                            key={item.days}
                            className="flex items-center justify-between gap-4 border-b border-stone-900/[0.06] pb-1.5"
                          >
                            <dt className="text-[#68605C]">{item.days}</dt>
                            <dd
                              className={`font-medium tabular-nums ${
                                item.open ? "text-[#26211F]" : "text-[#68605C]"
                              }`}
                            >
                              {item.time}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-900/[0.08] flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#26211F] hover:bg-[#8C5A3C] text-white px-6 py-3.5 text-sm font-semibold transition-colors min-h-[48px]"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#8C5A3C]/30 bg-[#8C5A3C]/5 hover:bg-[#8C5A3C]/10 text-[#8C5A3C] px-6 py-3.5 text-sm font-semibold transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="tabular-nums">
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Right Channels Panel */}
            <div className="lg:col-span-5 bg-[#EFE9E0] p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-900/[0.08]">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#4E6151] font-semibold">
                  Canais Oficiais
                </p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-[#26211F] leading-snug">
                  Converse diretamente com a nossa equipe.
                </h3>
                <p className="mt-3 text-sm text-[#68605C] leading-relaxed">
                  Tire dúvidas sobre avaliações, horários disponíveis ou
                  preparos antes da consulta diretamente pelo WhatsApp.
                </p>

                <div className="mt-7 space-y-3">
                  <a
                    href={SITE_CONFIG.whatsappPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-stone-900/[0.08] bg-white/90 hover:bg-white p-4 transition-all group min-h-[56px]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#8C5A3C] text-white flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#26211F]">
                          WhatsApp Oficial
                        </p>
                        <p className="text-xs text-[#68605C] tabular-nums">
                          {SITE_CONFIG.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#8C5A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-stone-900/[0.08] bg-white/90 hover:bg-white p-4 transition-all group min-h-[56px]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-stone-900/10 text-[#26211F] flex items-center justify-center">
                        <Instagram className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#26211F]">
                          Instagram
                        </p>
                        <p className="text-xs text-[#68605C]">
                          {SITE_CONFIG.instagramHandle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#8C5A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={SITE_CONFIG.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-stone-900/[0.08] bg-white/90 hover:bg-white p-4 transition-all group min-h-[56px]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-stone-900/10 text-[#26211F] flex items-center justify-center">
                        <Facebook className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#26211F]">
                          Facebook
                        </p>
                        <p className="text-xs text-[#68605C]">
                          Dra. Anathyellie Charão
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#8C5A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <p className="mt-8 text-xs text-[#68605C] leading-relaxed">
                Atendimento exclusivamente com hora marcada para garantir tempo
                integral e privacidade a cada paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

