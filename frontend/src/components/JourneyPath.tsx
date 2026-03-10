"use client";

import { useEffect, useRef, useState } from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const steps = [
  { step: 1, title: "Preguntas", text: "Responde las preguntas que te vamos a hacer.", icon: "✨" },
  { step: 2, title: "Referencias", text: "Pega el link del job en LinkedIn o la descripción del puesto que quieres aplicar.", icon: "🎯" },
  { step: 3, title: "Descarga", text: "Descarga en formato PDF listo para enviar.", icon: "📄" },
  { step: 4, title: "Prepárate", text: "Prepárate para ser contactado.", icon: "📞" },
];

export function JourneyPath() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateProgress = () => {
      if (prefersReducedMotion()) {
        setFillProgress(1);
        return;
      }
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
      setFillProgress(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, rgba(244,164,96,0.12) 0%, #F5F5DC 30%, #F5F5DC 70%, rgba(244,164,96,0.12) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#A0522D] tracking-tight">
              Cómo funciona
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="relative">
          {/* Track de fondo */}
          <div className="hidden lg:block absolute top-4 left-[8%] right-[8%] h-2.5 bg-[#A0522D]/20 rounded-full" />

          {/* Barra de progreso - efecto domino suave */}
          <div
            className="hidden lg:block absolute top-4 left-[8%] h-2.5 rounded-full bg-[#E35336]"
            style={{
              width: `${fillProgress * 84}%`,
              boxShadow: "0 0 16px rgba(227, 83, 54, 0.35)",
              transition: "width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-12">
            {steps.map((item, i) => {
              const stepThreshold = (i + 1) / 4;
              const isFilled = fillProgress >= stepThreshold;
              return (
                <FadeInOnScroll key={i} delay={i * 60}>
                  <div className="h-full min-h-[280px] flex flex-col items-center justify-center p-8 rounded-2xl bg-white border-2 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-[#A0522D]/15 hover:border-[#F4A460]/50">
                    <div
                      className={`w-16 h-16 rounded-full text-white font-display font-extrabold text-2xl flex items-center justify-center mb-5 transition-all duration-500 ${
                        isFilled
                          ? "bg-[#E35336] scale-100 shadow-lg shadow-[#E35336]/40 text-white"
                          : "bg-[#A0522D]/20 scale-95 text-[#A0522D]"
                      }`}
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    >
                      {item.step}
                    </div>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-display text-2xl font-extrabold text-[#A0522D] mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#A0522D] text-lg font-bold leading-snug">
                      {item.text}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
