"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cuboid, Network, Microscope, ArrowUpRight } from "lucide-react";

const researchAreas = [
  {
    id: "01",
    title: "Generative AI & LLMs",
    desc: "Deploying autonomous agents and fine-tuned models to automate complex cognitive workflows.",
    icon: BrainCircuit,
  },
  {
    id: "02",
    title: "Spatial Computing",
    desc: "Bridging physical and digital worlds with WebGL, Three.js, and precise motion capture integration.",
    icon: Cuboid,
  },
  {
    id: "03",
    title: "Predictive Analytics",
    desc: "Leveraging high-dimensional data modeling to forecast market trends and user behaviors.",
    icon: Network,
  },
  {
    id: "04",
    title: "Emerging Tech",
    desc: "Continuous exploration of blockchain, edge computing, and IoT to future-proof client infrastructure.",
    icon: Microscope,
  },
];

export default function Innovation() {
  return (
    <section className="bg-[#0B0F19] py-12 md:py-24 font-sans relative overflow-hidden border-t border-white/5">
      
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none">
         <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-6 md:px-20 relative z-10">
        
        {/* --------------------------------------------------
            1. SECTION HEADER
        -------------------------------------------------- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"  
            >
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
                Internal R&D
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Innovation is our <br />
              <span className="text-slate-500">Operating System.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              We don't wait for the future; we build it. We dedicate 20% of our engineering cycles to exploring emerging technologies, ensuring our clients always stay ahead of the curve.
            </motion.p>
          </div>

          {/* CTA Link */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a href="#labs" className="group flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase hover:text-indigo-400 transition-colors">
              Explore Our Labs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* --------------------------------------------------
            2. R&D CARDS (Blueprint Style)
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10 bg-[#0B0F19]">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-r border-b border-white/10 p-10 hover:bg-[#0F131F] transition-colors duration-500"
            >
              
              {/* Hover Top Highlight Line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-500 group-hover:w-full" />

              <div className="mb-8 flex justify-between items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-slate-300 group-hover:text-white group-hover:border-indigo-500/50 transition-colors duration-300">
                  <area.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs text-slate-600">/{area.id}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-100 transition-colors">
                {area.title}
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {area.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}