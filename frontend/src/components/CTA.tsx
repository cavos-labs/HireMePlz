import Link from "next/link";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function CTA() {
  return (
    <section id="cta" className="py-24 px-6 bg-[#F5F5DC]">
      <FadeInOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#A0522D] mb-4 tracking-tight">
            De idea a entrevista en segundos
          </h2>
          <p className="font-display text-xl sm:text-2xl text-[#A0522D] font-bold mb-10 max-w-2xl mx-auto">
            Tu resume. Listo en segundos. Te ayudamos a conseguir el job.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 bg-[#E35336] text-white font-display font-extrabold rounded-full hover:bg-[#d14a30] transition-all duration-500 text-xl hover:scale-105 hover:shadow-xl hover:shadow-[#E35336]/30 animate-soft-glow"
          >
            Crear mi CV gratis
          </Link>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
