"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Telescope } from "lucide-react";

export default function Vision() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section ref={containerRef} className="bg-[#0B0F19] py-10 md:py-24 font-sans relative overflow-hidden border-t border-white/5 flex items-center justify-center">
      
      {/* --------------------------------------------------
          BACKGROUND ATMOSPHERE (The Horizon)
      -------------------------------------------------- */}

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div style={{ y: yText }}>
            
            {/* Header Tag */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-3 mb-8"
            >
                <Telescope className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
                    Looking Ahead
                </span>
            </motion.div>

            {/* Main Statement */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="block"
                >
                    The future is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300">intelligent,</span>
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block"
                >
                    automated, and data-driven.
                </motion.span>
            </h2>

            {/* Subtext */}
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
                We’re building the software infrastructure that helps ambitious businesses <span className="text-white font-medium">lead it.</span>
            </motion.p>

        </motion.div>

      </div>
    </section>
  );
}