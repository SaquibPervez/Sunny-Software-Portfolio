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

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full relative min-h-screen bg-[#0B0F19] overflow-hidden flex items-center font-sans text-center md:text-start"
    >
      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-20"
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* Glowing Orb */}
      <motion.div
        style={{ y: yBg }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none will-change-transform"
      />

      {/* --------------------------------
          Content
      -------------------------------- */}
      <div className="mx-auto w-full max-w-screen-2xl px-6 md:px-20 py-26">
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-12 h-px bg-indigo-500/50" />
          <span className="text-indigo-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Engineering Market Dominance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div style={{ opacity: opacityText }}>
          {/* Line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[clamp(1.75rem,3vw,3.5rem)] font-medium text-slate-500 tracking-tight mb-4 leading-tight"
            >
              We don&apos;t just build software.
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[clamp(2.7rem,6vw,6.5rem)] font-bold text-white tracking-tighter leading-[0.95]"
            >
              WE BUILD{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                UNFAIR ADVANTAGES.
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Supporting Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 flex flex-col md:flex-row items-center md:items-end justify-between gap-10 border-l border-white/10 pl-6"
        >
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Stop competing on features. We engineer digital products that{" "}
            <span className="text-white font-semibold">
              redefine categories
            </span>{" "}
            and turn users into fanatics.
          </p>

          {/* Scroll Indicator */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
              Scroll to Explore
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white animate-bounce">
              <ArrowDownRight size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
