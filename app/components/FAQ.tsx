"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-9 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Preguntas frecuentes
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
          Lo que más nos preguntan
        </h2>
      </div>

      <div className="mx-auto max-w-2xl">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-ink">{faq.question}</span>
                <span className={`shrink-0 text-lg ${isOpen ? "text-primary" : "text-muted"}`}>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="max-w-xl pb-5 text-[13.5px] leading-relaxed text-muted">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
