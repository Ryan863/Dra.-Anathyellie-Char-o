import { BadgeCheck, Star } from "lucide-react";
import { REVIEWS, SITE_CONFIG } from "@/config/site-data";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-14 sm:py-20 lg:py-28 bg-[#F7F3ED]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
              Prova Social Verificada
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
              O que dizem as pacientes que vivenciaram o{" "}
              <em className="italic font-normal text-[#8C5A3C]">acolhimento</em>
              .
            </h2>
          </div>

          <div className="inline-flex items-center gap-4 self-start md:self-auto rounded-2xl border border-stone-900/[0.08] bg-white/85 backdrop-blur-sm px-5 py-3.5 shadow-sm">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl font-semibold text-[#26211F] tabular-nums">
                  {SITE_CONFIG.rating.score}
                </span>
                <div
                  className="flex items-center gap-0.5 text-[#8C5A3C]"
                  aria-label="5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#8C5A3C] text-[#8C5A3C]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#68605C] tabular-nums">
                {SITE_CONFIG.rating.count} avaliações reais no Google
              </p>
            </div>
          </div>
        </div>

        <div className="reveal-grid mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {REVIEWS.map((review, idx) => (
            <article
              key={review.author}
              className={`reveal-card flex flex-col justify-between rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm p-6 sm:p-7 ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-[#8C5A3C]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#8C5A3C] text-[#8C5A3C]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#4E6151] inline-flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    Google Review
                  </span>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#8C5A3C]">
                  {review.highlight}
                </p>

                <blockquote className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#26211F]/90 text-pretty">
                  “{review.quote}”
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-900/[0.06] flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-[#EFE9E0] border border-stone-900/[0.08] flex items-center justify-center font-display text-sm font-semibold text-[#8C5A3C] shrink-0"
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#26211F] truncate">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#68605C]">
                    {review.badge ? review.badge : "Paciente verificada"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

