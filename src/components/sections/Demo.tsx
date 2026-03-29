"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-soft/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-bright/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              In Action
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Project Demo
            </h3>
            <p className="text-gray-400 text-lg">
              Watch how the intelligent pipeline transforms real-time imagery into 
              immediate feedback for the user.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative group mx-auto max-w-4xl rounded-3xl overflow-hidden glass p-2 hover:border-accent-soft/30 transition-all duration-500">
            {/* Native HTML5 Video Element */}
            <div className="relative aspect-video bg-navy-900 rounded-2xl overflow-hidden border border-white/5">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src="/demo.mp4"
              >
                Your browser does not support the video tag. Please upgrade to a modern browser.
              </video>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
