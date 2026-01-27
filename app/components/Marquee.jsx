"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Icons Imports
import { FaAws, FaNodeJs, FaPython, FaJoomla, FaWix, FaHtml5, FaDocker, FaAngular, FaSwift } from "react-icons/fa";
import { FaVuejs, FaPhp, FaLaravel } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

// Tech Stack Data
const techStack = [
  { icon: RiReactjsLine, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaAws, name: "AWS" },
  { icon: SiGooglecloud, name: "GCP" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaPython, name: "Python" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaVuejs, name: "Vue.js" },
  { icon: FaAngular, name: "Angular" },
  { icon: FaLaravel, name: "Laravel" },
  { icon: FaPhp, name: "PHP" },
  { icon: FaSwift, name: "Swift" },
  { icon: FaWix, name: "Wix" },
  { icon: FaJoomla, name: "Joomla" },
];

export default function Marquee() {
  const marqueeRef = useRef(null);

  // Scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

  // Horizontal movement based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-7%"]);

  return (
    <section
      ref={marqueeRef}
      className="py-24 bg-[#0B0F19] overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <div className="inline-flex items-center gap-2 mb-6 justify-center">
      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 tracking-wider uppercase">
        Powering Next-Gen Apps
      </span>
    </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
            Built with the world's most reliable technologies
          </h3>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden py-6">
        {/* Gradient Edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

        {/* Scroll-driven Track */}
        <motion.div
          style={{ x }}
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-3 cursor-pointer relative"
            >
              {/* Bigger Icons */}
              <div className="text-5xl md:text-6xl text-slate-600 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                <tech.icon />
              </div>

              {/* Tooltip */}
              <span className="text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-7">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
