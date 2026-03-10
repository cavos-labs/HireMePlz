import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F5DC 0%, rgba(244,164,96,0.15) 50%, #F5F5DC 100%)",
      }}
    >
      {/* Soft gradient orbs - subtle depth */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F4A460]/15 blur-3xl animate-subtle-float"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#E35336]/10 blur-3xl animate-subtle-float"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#A0522D 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <div className="space-y-10 flex flex-col items-center">
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#A0522D] leading-[1.05] tracking-tight animate-fade-in-up opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            Tu CV listo en{" "}
            <span className="text-[#E35336]">segundos</span>
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl text-[#A0522D]/85 max-w-2xl leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
          >
            Pega el link del job. Responde unas preguntas. Y listo, tu CV listo
            para enviar. Así de simple.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-5 pt-4 animate-fade-in-up opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "400ms" }}
          >
            <Link
              href="#como-funciona"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#E35336] text-white font-medium rounded-full hover:bg-[#d14a30] transition-all duration-500 text-xl sm:text-2xl hover:scale-105 hover:shadow-xl hover:shadow-[#E35336]/30 animate-subtle-float animate-soft-glow"
            >
              Crear mi CV gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
