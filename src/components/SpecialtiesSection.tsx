import { ArrowUpRight, Leaf } from "lucide-react";
import { SERVICES } from "@/config/site-data";

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="py-14 sm:py-20 lg:py-28 bg-[#F7F3ED]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
            Especialidades &amp; Protocolos
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
            Cuidado estético desenhado para a{" "}
            <em className="italic font-normal text-[#8C5A3C]">
              individualidade
            </em>{" "}
            do seu rosto.
          </h2>
          <p className="mt-4 text-base text-[#68605C] leading-relaxed text-pretty">
            Cada procedimento é indicado somente após uma escuta atenta e
            análise clínica completa — respeitando sua anatomia, sua saúde e o
            tempo natural da sua pele.
          </p>
        </div>

        <div className="reveal-grid mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {SERVICES.map((service, index) => {
            const colSpanClass =
              index === 0
                ? "lg:col-span-4"
                : index === 1
                ? "lg:col-span-2"
                : "lg:col-span-2";

            return (
              <article
                key={service.number}
                className={`reveal-card group relative flex flex-col justify-between rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:border-[#8C5A3C]/30 hover:shadow-[0_18px_40px_-24px_rgba(38,33,31,0.22)] ${colSpanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-2xl sm:text-3xl font-medium text-[#8C5A3C] tabular-nums">
                      {service.number}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide ${
                        service.featured || index === 3
                          ? "bg-[#4E6151]/10 text-[#4E6151]"
                          : "bg-[#EFE9E0] text-[#68605C]"
                      }`}
                    >
                      {(service.featured || index === 3) && (
                        <Leaf className="w-3 h-3" aria-hidden="true" />
                      )}
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl sm:text-[26px] font-medium leading-[1.15] text-[#26211F] text-balance">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#68605C] text-pretty">
                    {service.summary}
                  </p>

                  <p className="mt-3 pt-3 border-t border-stone-900/[0.06] text-xs sm:text-sm leading-relaxed text-[#26211F]/80 text-pretty">
                    {service.benefit}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={service.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C5A3C] hover:text-[#70462D] transition-colors min-h-[44px]"
                  >
                    <span>Consultar sobre este protocolo</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

