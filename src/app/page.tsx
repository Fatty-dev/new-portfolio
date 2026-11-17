import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="shell">
        <Hero />
        <Work />
        <Approach />
        <Services />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
