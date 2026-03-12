import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ContactForm } from "@/components/contact-form";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-background">

        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-24">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-24">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-24">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-24">
          <ContactForm />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Phongnhd — Built with Next.js, Tailwind CSS 
          </p>
        </div>
      </footer>

      {/* Global Toast Notifications */}
      <Toaster />
    </>
  );
}