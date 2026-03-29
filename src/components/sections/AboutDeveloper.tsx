"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { User, Code2, GraduationCap, GitBranch, Globe, Mail } from "lucide-react";

export function AboutDeveloper() {
  return (
    <section id="developer" className="py-24 bg-navy-950 border-t border-navy-800 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute -left-48 bottom-0 w-96 h-96 bg-accent-soft/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              The Creator
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About the Developer
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="max-w-3xl mx-auto">
          <div className="glass hover:glass-hover p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-10 items-center justify-between transition-all duration-300 group">
            
            {/* Developer Text Info */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h4 className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-soft transition-all duration-500">
                  Rohan
                </h4>
                <p className="text-accent-bright font-medium tracking-wide">
                  Java Full Stack Developer & CS Graduate
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg">
                Passionate about leveraging technology to solve real-world problems. 
                This Blind People Navigation System was developed as a final-year engineering 
                capstone project, combining edge computing with modern AI/ML logic to create 
                a truly impactful human-centric product.
              </p>

              <div className="flex gap-4 pt-4">
                <a href="#github" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy-950 hover:border-white transition-all duration-300">
                  <GitBranch className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#linkedin" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy-950 hover:border-white transition-all duration-300">
                  <Globe className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#mail" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-navy-950 hover:border-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            {/* Developer Icon / Aesthetic Illustration */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-soft/20 to-transparent rounded-full animate-pulse" />
              <div className="absolute inset-4 glass rounded-full flex items-center justify-center border-accent-soft/30 overflow-hidden shadow-[inset_0_4px_20px_rgba(56,189,248,0.2)]">
                <User className="w-24 h-24 text-accent-soft/50 group-hover:text-accent-soft group-hover:scale-110 transition-all duration-500" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 right-0 glass px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg animate-bounce border-white/10">
                <Code2 className="w-3 h-3 inline mr-1" /> Code
              </div>
              <div className="absolute bottom-8 left-0 glass px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg animate-bounce border-white/10" style={{ animationDelay: "1s" }}>
                <GraduationCap className="w-3 h-3 inline mr-1" /> Graduate
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
