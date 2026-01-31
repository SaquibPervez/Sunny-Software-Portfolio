"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers,
  Smartphone,
  Monitor,
  Palette,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function HeroModern() {
  const containerRef = useRef(null);

  /* Mouse spotlight */
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  /* Scroll parallax */
  const { scrollY } = useScroll();
  const yPrimary = useTransform(scrollY, [0, 500], [0, 200]);
  const yAccent = useTransform(scrollY, [0, 500], [0, -150]);

  const floatingIcons = [
    { Icon: Code2, className: "top-1/4 left-[10%]", color: "var(--accent)", anim: { y: [0, -20, 0], d: 4 } },
    { Icon: Layers, className: "bottom-1/4 right-[6%]", color: "var(--primary)", anim: { y: [0, 20, 0], d: 5 } },
    { Icon: Smartphone, className: "top-[18%] right-[14%]", color: "var(--primary)", anim: { y: [0, -14, 0], rotate: [0, 3, 0], d: 5 } },
    { Icon: Monitor, className: "bottom-[18%] left-[14%]", color: "var(--accent)", anim: { y: [0, 16, 0], rotate: [-2, 2, -2], d: 6 } },
    { Icon: Palette, className: "top-[60%] right-[20%]", color: "var(--accent)", anim: { y: [0, -12, 0], d: 4.5 } },
    { Icon: Wrench, className: "bottom-[32%] left-[24%]", color: "var(--primary)", anim: { y: [0, 10, 0], rotate: [0, -4, 0], d: 5.5 } },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1200,
        "--primary": "#6CBDEB",
        "--accent": "#9B6CF3",
        "--spotlight": "rgba(108,189,235,0.18)",
        "--primary-glow": "rgba(108,189,235,0.18)",
        "--accent-glow": "rgba(155,108,243,0.14)",
      }}
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0B0F19] via-[#0A1220] to-[#080E16] overflow-hidden group"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--spotlight), transparent 40%)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Glows */}
      <motion.div
        style={{ y: yPrimary, x: -100, backgroundColor: "var(--primary-glow)" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen animate-pulse"
      />
      <motion.div
        style={{ y: yAccent, x: 100, backgroundColor: "var(--accent-glow)" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className, color, anim }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotateY: -90, scale: 0.9 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.1 + i * 0.1 }}
          className={`absolute ${className} hidden lg:flex p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl z-10 transform-gpu`}
        >
          <motion.div
            animate={anim}
            transition={{ duration: anim.d, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          We Build <br className="hidden md:block" /> Digital Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Sunny Software Inc. transforms complex problems into elegant, scalable
          solutions using cutting-edge AI and Web Technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/contact">
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white/10 px-8 font-medium text-white transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,189,235,0.35)]">
            <span className="mr-2">Start Your Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
    </section>
  );
}
