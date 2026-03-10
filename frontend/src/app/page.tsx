import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JourneyPath } from "@/components/JourneyPath";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JourneyPath />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
