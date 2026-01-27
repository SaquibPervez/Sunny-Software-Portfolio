"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    id: "01",
    label: "BUILD",
    title: "Web, Mobile & Custom Software",
    desc: "We engineer bespoke digital foundations. From high-performance web apps to native mobile experiences, we build systems that scale effortlessly.",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    id: "02",
    label: "OPTIMIZE",
    title: "Data Science, Analytics & Automation",
    desc: "We turn raw data into leverage. Our algorithms automate the mundane and visualize the invisible, giving you a competitive edge.",
    icon: BarChart3,
    color: "text-emerald-400",
  },
  {
    id: "03",
    label: "SCALE",
    title: "Generative AI, Cloud & IT Consulting",
    desc: "Future-proof your infrastructure. We integrate GenAI models and cloud architectures that prepare your business for the next decade.",
    icon: Cpu,
    color: "text-purple-400",
  },
];

export default function WhatWeDo() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-[#0B0F19] py-24 md:py-32 px-6 font-sans relative z-10">
      
      <div className="max-w-7xl mx-auto">
        
        {/* --------------------------------------------------
            1. SECTION HEADER (Outcome First)
        -------------------------------------------------- */}
        <div className="mb-20 md:mb-28 border-l border-white/10 pl-6 md:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              Outcome First
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
          >
            We don’t sell services. <br />
            <span className="text-slate-500">We build digital foundations.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl"
          >
            Every solution is tailored. Nothing is off-the-shelf.
          </motion.p>
        </div>

        {/* --------------------------------------------------
            2. INTERACTIVE SERVICE LIST
        -------------------------------------------------- */}
        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * Number(service.id) }}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              className="group relative border-t border-white/10 last:border-b py-10 md:py-16 cursor-pointer transition-all duration-500"
            >
              
              {/* Hover Glow Effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 pointer-events-none 
                ${activeId === service.id ? "opacity-100" : ""}`} 
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Column 1: Number & Label */}
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-xs font-mono text-slate-600">/{service.id}</span>
                    <h3 className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${activeId === service.id ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
                      {service.label}
                    </h3>
                  </div>
                </div>

                {/* Column 2: Title & Expandable Description */}
                <div className="md:col-span-6">
                  <h4 className={`text-xl md:text-2xl font-medium mb-4 transition-colors duration-300 ${activeId === service.id ? service.color : "text-slate-400"}`}>
                    {service.title}
                  </h4>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeId === service.id ? "auto" : 0,
                      opacity: activeId === service.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/30 pb-0.5 hover:border-white transition-all">
                      Explore Solutions <ArrowUpRight size={14} />
                    </span>
                  </motion.div>
                </div>

                {/* Column 3: Icon (Visible on Hover) */}
                <div className="md:col-span-2 flex justify-end">
                    <div className={`p-4 rounded-full border border-white/10 bg-white/5 transition-all duration-500 transform ${activeId === service.id ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-0 rotate-45"}`}>
                        <service.icon size={24} className="text-white" />
                    </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}