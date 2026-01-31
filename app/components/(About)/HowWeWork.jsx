"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScanSearch, PenTool, Code2, Zap, Globe, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "Understanding your users and business goals.",
    icon: ScanSearch,
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  {
    id: "02",
    title: "Design",
    desc: "Crafting intuitive, scalable experiences.",
    icon: PenTool,
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  {
    id: "03",
    title: "Develop",
    desc: "Building with modern, reliable technology.",
    icon: Code2,
    color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
  },
  {
    id: "04",
    title: "Optimize",
    desc: "Improving performance through data & automation.",
    icon: Zap,
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  {
    id: "05",
    title: "Scale",
    desc: "Supporting long-term growth and evolution.",
    icon: Globe,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
];

export default function HowWeWork() {
  const containerRef = useRef(null);
  
  // Track Scroll Progress for the Beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Beam Height Animation
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-[#0B0F19] pb-14 md:pb-24 font-sans relative overflow-hidden py-10 md:py-24">
      
      <div className="container mx-auto px-6 md:px-20">
        
        {/* --------------------------------------------------
            1. HEADER
        -------------------------------------------------- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              The Flow
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How We Work
          </motion.h2>
        </div>

        {/* --------------------------------------------------
            2. THE PIPELINE (Steps)
        -------------------------------------------------- */}
        <div className="relative">
          
          {/* Vertical Grey Line (Background Track) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />

          {/* Vertical Light Beam (Fills on Scroll) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 -translate-x-1/2 rounded-full z-10 origin-top shadow-[0_0_15px_rgba(99,102,241,0.6)]"
          />

          <div className="space-y-16 md:space-y-24 relative z-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  
                  {/* TEXT CONTENT (Alternating Side) */}
                  <div className={`flex-1 text-left ${isEven ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <h3 className={`text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* CENTER ICON NODE */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className={`relative w-14 h-14 rounded-full bg-[#0B0F19] border border-white/10 flex items-center justify-center z-20 group shadow-2xl ${step.glow}`}>
                      {/* Active Glow Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color.replace("text-", "bg-")} opacity-10 blur-md group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <step.icon size={24} className={`${step.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                  </div>

                  {/* EMPTY SPACER (For Balance) */}
                  <div className="flex-1 hidden md:block" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}