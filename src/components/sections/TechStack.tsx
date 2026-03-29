"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { HardDrive, Server, FileCode2, Volume2, Search, Webhook } from "lucide-react";

export function TechStack() {
  const stack = [
    {
      name: "Raspberry Pi Zero 2 W",
      category: "Hardware / Compute",
      icon: <Server className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    },
    {
      name: "Camera Module",
      category: "Hardware / Input",
      icon: <HardDrive className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    },
    {
      name: "OpenCV",
      category: "Computer Vision",
      icon: <Webhook className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    },
    {
      name: "Tesseract OCR",
      category: "Text Recognition",
      icon: <Search className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    },
    {
      name: "pyttsx3",
      category: "Text-to-Speech",
      icon: <Volume2 className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    },
    {
      name: "Python",
      category: "Core Language",
      icon: <FileCode2 className="w-8 h-8 text-accent-soft group-hover:text-white transition-colors" />
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              The Engine
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Tech Stack
            </h3>
            <p className="text-gray-400 text-lg">
              A precise combination of robust edge hardware and lightweight python 
              libraries.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stack.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="glass group hover:bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full transition-all duration-300 hover:border-accent-soft/30 hover:-translate-y-1">
                <div className="bg-navy-950 p-4 rounded-full mb-4 shadow-inner border border-white/5">
                  {item.icon}
                </div>
                <div className="text-lg font-bold text-white mb-1 group-hover:text-accent-soft transition-colors">
                  {item.name}
                </div>
                <div className="text-sm text-gray-400">
                  {item.category}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
