"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function HeroManifesto() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for background elements
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full bg-[#0B0F19] overflow-hidden flex flex-col justify-center px-6 md:px-12 font-sans"
    >
      
      {/* --------------------------------------------------
          1. BACKGROUND AMBIENCE (Subtle & Dark)
      -------------------------------------------------- */}
      
      {/* Noise Texture (The "Expensive" feel) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-20" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>
      
      {/* Glowing Orb (Follows scroll slightly) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      {/* --------------------------------------------------
          2. THE MANIFESTO (Content)
      -------------------------------------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Top Label: Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <span className="w-12 h-[1px] bg-indigo-500/50"></span>
          <span className="text-indigo-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Engineering Market Dominance
          </span>
        </motion.div>

        {/* MAIN HEADLINE: The "Unfair Advantage" */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="flex flex-col"
        >
          {/* Line 1: The Setup */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-3xl md:text-6xl lg:text-7xl font-medium text-slate-500 tracking-tight mb-2 md:mb-4 leading-tight"
            >
              We don't just build software.
            </motion.h1>
          </div>

          {/* Line 2: The Punchline (Massive) */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl md:text-8xl lg:text-[7.5rem] font-bold text-white tracking-tighter leading-[0.9]"
            >
              WE BUILD <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                UNFAIR ADVANTAGES.
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* SUPPORTING LINE: Impact over Features */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-l border-white/10 pl-6 md:pl-8"
        >
            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Stop competing on features. We engineer digital products that 
              <span className="text-white font-semibold"> redefine categories </span> 
              and turn users into fanatics.
            </p>

            {/* Scroll Indicator / CTA */}
            <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest rotate-0 origin-right whitespace-nowrap">
                    Scroll to Explore
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center animate-bounce text-white">
                    <ArrowDownRight size={18} />
                </div>
            </div>
        </motion.div>

      </div>

    </section>
  );
}