import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="text-[#F5F5DC] py-16 px-6"
      style={{
        background: "linear-gradient(180deg, #A0522D 0%, #8B4513 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <span className="font-display text-xl font-bold tracking-tight">
                HireMePlz
              </span>
            </Link>
            <p className="text-[#F5F5DC]/90 max-w-sm leading-relaxed">
              Tu CV listo en segundos. Te ayudamos a conseguir el job.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#F4A460]">
              Redes
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5DC] transition-colors"
                >
                  X / Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5DC] transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F5DC] transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F5F5DC]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#F5F5DC]/80">Integrado con</span>
            <Link
              href="https://cavos.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/cavos-logo.png"
                alt="Cavos"
                width={80}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-90"
              />
            </Link>
          </div>
          <p className="text-xs text-[#F5F5DC]/60 uppercase tracking-wider">
            © 2026 HireMePlz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
