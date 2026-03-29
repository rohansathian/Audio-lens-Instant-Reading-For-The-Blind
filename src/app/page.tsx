import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { TechStack } from "@/components/sections/TechStack";
import { Demo } from "@/components/sections/Demo";
import { AboutDeveloper } from "@/components/sections/AboutDeveloper";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-navy-950">
      {/* Navigation Bar / Smooth Scroll Anchor Support */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-navy-800/50 backdrop-blur-md bg-navy-950/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg hidden sm:block">
            Vision<span className="text-accent-soft">AI</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-300 overflow-x-auto no-scrollbar whitespace-nowrap px-4 sm:px-0">
            <a href="#problem-statement" className="hover:text-white transition-colors py-2">The Challenge</a>
            <a href="#how-it-works" className="hover:text-white transition-colors py-2">Architecture</a>
            <a href="#features" className="hover:text-white transition-colors py-2">Features</a>
            <a href="#tech-stack" className="hover:text-white transition-colors py-2">Tech Stack</a>
          </div>
        </div>
      </nav>

      {/* Pages Assembled */}
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <TechStack />
      <Demo />
      <AboutDeveloper />
      <Footer />
      
    </main>
  );
}
