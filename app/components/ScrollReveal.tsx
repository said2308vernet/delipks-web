"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));

    // Mark elements already in viewport BEFORE enabling the CSS,
    // so they never flash hidden on page load.
    els.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight * 0.95 && bottom > 0) {
        el.classList.add("is-visible");
      }
    });

    // Now enable scroll-reveal CSS — already-visible elements are safe.
    document.documentElement.classList.add("js-reveal");

    // Observe the rest for scroll-triggered reveal.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
