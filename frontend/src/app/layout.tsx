import type { Metadata } from "next";
import { romagothicbold, geist } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "HireMePlz | Tu CV listo en segundos",
  description:
    "Crea tu CV profesional en minutos. Responde preguntas simples, pega el link del job en LinkedIn y obtén un PDF optimizado para conseguir el puesto.",
  keywords: [
    "CV",
    "resume",
    "LinkedIn",
    "job",
    "crear CV",
    "curriculum vitae",
    "resume",
  ],
  authors: [{ name: "HireMePlz" }],
  openGraph: {
    title: "HireMePlz | Tu CV listo en segundos",
    description:
      "Crea tu CV profesional en minutos. Optimizado para cada job.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${romagothicbold.variable} ${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
