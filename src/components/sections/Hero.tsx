"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-soft/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-soft/30 text-accent-soft text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-soft opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-bright"></span>
            </span>
            Engineering Capstone Project
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Blind People <br /> 
          <span className="bg-gradient-to-r from-white via-accent-soft to-accent-dark text-transparent bg-clip-text">
            Navigation System
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          AI-powered smart glasses that give visually impaired people the ability 
          to perceive and navigate the world independently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#how-it-works" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-950 hover:bg-gray-100 rounded-full font-medium transition-all duration-300">
            Explore Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#demo" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:glass-hover text-white rounded-full font-medium transition-all duration-300">
            <Eye className="w-4 h-4 text-accent-soft group-hover:text-accent-bright transition-colors" />
            Watch Demo
          </a>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-white/5 opacity-50 backdrop-blur-3xl hidden md:block"
      />
      
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border border-accent-soft/10 opacity-50 backdrop-blur-3xl hidden md:block"
      />
    </section>
  );
}
