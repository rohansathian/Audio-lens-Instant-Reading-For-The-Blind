"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Camera, BrainCircuit, Type, FileAudio, Ear } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Live Frame Capture",
      desc: "Camera module captures environment continuously.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Obstacle Detection",
      desc: "OpenCV processes frame to detect physical obstacles.",
      color: "from-cyan-400 to-teal-400"
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: "Text Recognition",
      desc: "Tesseract OCR reads signs, labels, and text.",
      color: "from-teal-400 to-indigo-400"
    },
    {
      icon: <FileAudio className="w-6 h-6" />,
      title: "Text-to-Speech",
      desc: "pyttsx3 converts text data into audio streams.",
      color: "from-indigo-400 to-purple-400"
    },
    {
      icon: <Ear className="w-6 h-6" />,
      title: "Audio Feedback",
      desc: "User receives real-time ambient cues via earphone.",
      color: "from-purple-400 to-blue-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-accent-soft text-sm uppercase tracking-wider font-semibold mb-3">
              The Architecture
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              How It Works
            </h3>
            <p className="text-gray-400 text-lg">
              A streamlined hardware-to-software pipeline running entirely on the edge, 
              ensuring fast, offline operation.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connector Line (visible only on desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-navy-800 via-accent-soft/30 to-navy-800 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="up" className="relative group">
                <div className="flex flex-col items-center text-center">
                  
                  {/* Step Number */}
                  <div className="text-xl font-display font-bold text-navy-800 mb-4 transition-colors group-hover:text-accent-soft/40">
                    0{idx + 1}
                  </div>

                  {/* Icon Node */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-accent-soft/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white relative z-10 border border-white/5 group-hover:border-accent-soft/50 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-white font-display font-bold text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400 flex-1 px-4 lg:px-0">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
