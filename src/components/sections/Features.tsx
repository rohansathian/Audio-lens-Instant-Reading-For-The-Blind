"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ScanEye, TextSelect, Volume2, WifiOff, Cpu } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Real-time Obstacle Detection",
      description: "Identifies physical barriers and hazards instantly using OpenCV computer vision algorithms.",
      icon: <ScanEye className="w-10 h-10 text-accent-soft" />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Text Recognition",
      description: "Reads signs, labels, and boards using Tesseract OCR, enabling awareness of textual surroundings.",
      icon: <TextSelect className="w-10 h-10 text-accent-soft" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Audio Narration",
      description: "Converts detected text and objects into spoken feedback using pyttsx3 text-to-speech.",
      icon: <Volume2 className="w-10 h-10 text-accent-soft" />,
      colSpan: "md:col-span-1"
    },
    {
      title: "Fully Offline & Wearable",
      description: "Runs entirely on the edge using a Raspberry Pi Zero 2 W, requiring no internet connection for privacy and reliability.",
      icon: <WifiOff className="w-10 h-10 text-accent-soft" />,
      colSpan: "md:col-span-2"
    },
    {
      title: "Lightweight Pipeline",
      description: "Optimized image processing architecture specifically designed to maintain high frame rates on low-power devices.",
      icon: <Cpu className="w-10 h-10 text-accent-soft" />,
      colSpan: "md:col-span-3"
    }
  ];

  return (
    <section id="features" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Key Features
            </h3>
            <p className="text-gray-400 text-lg">
              Designed from the ground up for performance, accessibility, and robust
              environmental perception.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FadeIn 
              key={idx} 
              delay={0.1 * idx} 
              className={`group ${feature.colSpan}`}
              fullWidth
            >
              <div className="glass hover:glass-hover p-8 rounded-2xl h-full transition-all duration-300 relative overflow-hidden flex flex-col items-start">
                
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-soft/10 rounded-full blur-3xl group-hover:bg-accent-soft/20 transition-colors" />

                <div className="mb-6 bg-navy-900 border border-white/5 p-4 rounded-xl shadow-lg relative z-10">
                  {feature.icon}
                </div>
                
                <h4 className="text-2xl font-display font-bold text-white mb-3 relative z-10">
                  {feature.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
