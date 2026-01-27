"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Layers, Zap, Smartphone, Monitor, Globe, Palette, PenTool, Wrench } from "lucide-react";

export default function HeroModern() {
  const containerRef = useRef(null);
  
  // Mouse Spotlight Effect Logic
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  // Parallax Scroll Effect for Background
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1200,
        // theme vars
        '--primary': '#6CBDEB',
        '--accent': '#9B6CF3',
        '--spotlight': 'rgba(108,189,235,0.18)',
        '--primary-glow': 'rgba(108,189,235,0.18)',
        '--accent-glow': 'rgba(155,108,243,0.14)',
      }}
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0B0F19] via-[#0A1220] to-[#080E16] overflow-hidden group"
    >
      {/* --------------------------------------------------
          1. BACKGROUND EFFECTS (The Atmosphere)
      -------------------------------------------------- */}
      
      {/* Dynamic Spotlight Gradient (Follows Mouse) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight), transparent 40%)`
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* Animated Aurora Blobs (Glows) */}
      <motion.div 
        style={{ y: y1, x: -100, backgroundColor: 'var(--primary-glow)' }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-transparent rounded-full blur-[120px] mix-blend-screen animate-pulse" 
      />
      <motion.div 
        style={{ y: y2, x: 100, backgroundColor: 'var(--accent-glow)' }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-transparent rounded-full blur-[120px] mix-blend-screen" 
      />

      {/* --------------------------------------------------
          2. FLOATING ELEMENTS (The "3D" Feel)
      -------------------------------------------------- */}
      
      {/* Floating Icon: Code */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.1 }}
        className="absolute top-1/4 left-[10%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="text-[var(--accent)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Floating Icon: Design */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.2 }}
        className="absolute bottom-1/4 right-[6%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Layers className="text-[var(--primary)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Mobile App Development */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.3 }}
        aria-label="Mobile App Development"
        className="absolute top-[18%] right-[14%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <Smartphone className="text-[var(--primary)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Web App Development */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.4 }}
        aria-label="Web App Development"
        className="absolute bottom-[18%] left-[14%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, 16, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <Monitor className="text-[var(--accent)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* UI/UX Design */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.5 }}
        aria-label="UI/UX Design"
        className="absolute top-[60%] right-[20%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <Palette className="text-[var(--accent)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Custom Software Development */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.6 }}
        aria-label="Custom Software Development"
        className="absolute bottom-[32%] left-[24%] hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu"
      >
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Wrench className="text-[var(--primary)] w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* --------------------------------------------------
          3. MAIN CONTENT (Typography)
      -------------------------------------------------- */}
      <div className="relative z-20 container mx-auto px-4 text-center">
    

        {/* Hero Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          We Build <br className="hidden md:block" />Digital Excellence.
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed z-10"
        >
          Sunny Software Inc. transforms complex problems into elegant, scalable solutions using cutting-edge AI and Web Technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Primary Button with Glow */}
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full  bg-white/10 px-8 font-medium text-white transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,189,235,0.35)]">
            <span className="mr-2">Start Your Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:animate-shine" />
          </button>

        </motion.div>

      </div>

      {/* Bottom Fade (Seamless transition to next section) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}