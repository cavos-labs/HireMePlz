import Link from "next/link";
import { FadeInOnScroll } from "./FadeInOnScroll";

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < rating ? "#F4A460" : "#A0522D"}
          className={i < rating ? "opacity-100" : "opacity-30"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    quote: "Súper rápido. Mi CV quedó profesional y la integración con LinkedIn va genial. Lo recomiendo.",
    author: "María González",
    role: "Diseñadora de Producto",
    linkedinUrl: "https://www.linkedin.com/in/mariagonzalez",
  },
  {
    quote: "Pegué el link del job y listo. El CV salió perfecto. Muy buena la verdad.",
    author: "Carlos Rodríguez",
    role: "Ingeniero de Software",
    linkedinUrl: "https://www.linkedin.com/in/carlosrodriguez",
  },
  {
    quote: "Super fácil, sin complicaciones. CV listo en un momento. Me encantó.",
    author: "Ana López",
    role: "Gerente de Marketing",
    linkedinUrl: "https://www.linkedin.com/in/analopez",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #F5F5DC 0%, rgba(244,164,96,0.1) 50%, #F5F5DC 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#A0522D] mb-4 tracking-tight">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="font-display text-xl sm:text-2xl text-[#A0522D] font-bold max-w-lg mx-auto">
              Miles de personas ya crearon su CV con HireMePlz
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInOnScroll key={i} delay={i * 80}>
              <div className="h-full min-h-[220px] flex flex-col p-8 rounded-2xl bg-white border-2 border-[#A0522D]/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#F4A460]/50">
                <StarRating />
                <p className="text-[#A0522D] text-lg font-bold leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-display text-xl font-extrabold text-[#A0522D]">
                    {t.author}
                  </p>
                  <p className="text-[#A0522D]/80 text-base font-bold mb-2">{t.role}</p>
                  <Link
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0A66C2] font-bold text-sm hover:underline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Ver perfil
                  </Link>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
