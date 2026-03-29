"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Globe, Users, Navigation } from "lucide-react";

export function ProblemStatement() {
  const stats = [
    {
      icon: <Globe className="w-8 h-8 text-accent-soft mb-4" />,
      value: "2.2 Billion",
      label: "People Globally",
      description: "Have a near or distance vision impairment according to the WHO."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-soft mb-4" />,
      value: "39 Million",
      label: "Legally Blind",
      description: "Individuals living with complete blindness worldwide."
    },
    {
      icon: <Navigation className="w-8 h-8 text-accent-soft mb-4" />,
      value: "Independence gap",
      label: "Daily Navigation",
      description: "Current solutions like white canes or guide dogs have limitations in complex urban environments."
    }
  ];

  return (
    <section id="problem-statement" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle lines background placeholder */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              The Challenge
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Built This System?
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">
              Visual impairment dramatically affects global populations, limiting 
              independence and mobility in an increasingly complex world. 
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.2 + (index * 0.1)} className="h-full">
              <div className="glass hover:glass-hover transition-all duration-300 rounded-2xl p-8 h-full flex flex-col group">
                <div className="bg-navy-900 border border-gray-800 w-16 h-16 flex items-center justify-center rounded-xl mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:border-accent-soft/30 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-accent-bright font-medium mb-4">
                  {stat.label}
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
