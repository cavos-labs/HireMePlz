import { FadeInOnScroll } from "./FadeInOnScroll";

const steps = [
  { step: 1, title: "Preguntas", text: "Respondes. La IA crea tu CV.", icon: "✨" },
  { step: 2, title: "Pega el job", text: "Link de LinkedIn. CV adaptado.", icon: "🎯" },
  { step: 3, title: "Fácil", text: "Solo lo necesario.", icon: "💬" },
  { step: 4, title: "Rápido", text: "Listo en 1 minuto.", icon: "⚡" },
];

export function Features() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-6 bg-[#F5F5DC]"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#A0522D] mb-4 tracking-tight">
              Cómo funciona
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#A0522D] font-bold max-w-lg mx-auto">
              Tu journey en 4 pasos
            </p>
          </div>
        </FadeInOnScroll>

        {/* Grid simétrico - 4 columnas iguales, tarjetas mismo tamaño */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <FadeInOnScroll key={i} delay={i * 80}>
              <div className="h-full min-h-[280px] flex flex-col items-center justify-center p-8 rounded-2xl bg-white border-2 border-[#A0522D]/15 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#F4A460]/50">
                <div className="w-14 h-14 rounded-full bg-[#E35336] text-white font-display font-extrabold text-2xl flex items-center justify-center mb-5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
