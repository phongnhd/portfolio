import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { PixelPreloader } from '@/components/pixel-preloader';  
export default function Home() {
  return (
    <>
      <PixelPreloader gridSize={10} />

      <Navbar />

      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>

      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phongnhd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}