"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/config/site-data";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="duvidas" className="py-14 sm:py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-section text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8C5A3C] font-semibold">
            Dúvidas Frequentes
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#26211F] text-balance">
            Transparência antes mesmo da sua{" "}
            <em className="italic font-normal text-[#8C5A3C]">
              primeira consulta
            </em>
            .
          </h2>
          <p className="mt-4 text-base text-[#68605C] leading-relaxed text-pretty">
            Respostas diretas para as principais perguntas sobre melasma,
            primeira aplicação e nossos protocolos personalizados.
          </p>
        </div>

        <div className="reveal-section mt-10 sm:mt-12 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-stone-900/[0.08] bg-white/80 backdrop-blur-sm overflow-hidden transition-colors hover:bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  id={`${faq.id}-button`}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8C5A3C]"
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-[#26211F] leading-snug">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-8 h-8 rounded-full border border-stone-900/10 flex items-center justify-center text-[#8C5A3C] transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#8C5A3C]/10" : "rotate-0"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`${faq.id}-panel`}
                  role="region"
                  aria-labelledby={`${faq.id}-button`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-6 pt-1 text-sm sm:text-[15px] leading-relaxed text-[#68605C] text-pretty">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

