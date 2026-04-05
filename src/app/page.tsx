import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-0"> 
      {/* padding top needed to offset fixed navbar, but Hero covers it gracefully enough. We put pt-16 just in case */}
      <Hero />
      <LiveStats />
      <Services />
      <About />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
