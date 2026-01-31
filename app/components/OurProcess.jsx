"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code2, Rocket, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Blueprint",
    desc: "We don't just start coding. We dismantle your idea, analyze market fit, and create a technical architectural blueprint to ensure scalability.",
    icon: Search,
    tags: ["Feasibility Study", "Tech Stack Selection", "SRS Documentation"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    id: "02",
    title: "High-Fidelity Design",
    desc: "Visualizing the product before engineering. We craft interactive prototypes in Figma to finalize UX flows and UI aesthetics.",
    icon: PenTool,
    tags: ["Wireframing", "Figma Prototypes", "User Journey Maps"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    id: "03",
    title: "Agile Development",
    desc: "The engine room. We write clean, modular code using Next.js 15. Development happens in 2-week sprints with transparent updates.",
    icon: Code2,
    tags: ["Frontend & Backend", "API Integration", "Database Design"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    id: "04",
    title: "Testing & Launch",
    desc: "Rigorous QA testing to squash bugs. We deploy your product to cloud infrastructure with CI/CD pipelines for 99.9% uptime.",
    icon: Rocket,
    tags: ["Unit Testing", "Security Audit", "Cloud Deployment"],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

export default function OurProcess() {
  const containerRef = useRef(null);

  return (
    <section className="relative bg-[#0B0F19] py-10 md:py-24 overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 md:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --------------------------------------------------
              LEFT SIDE: STICKY HEADER
          -------------------------------------------------- */}
          <div className="lg:w-1/3 text-center md:text-start">
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
              <div className="inline-flex items-center gap-2">
      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 tracking-wider uppercase">
        Our Methodology
      </span>
    </div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Built to <br />
               Scale Fast
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-8"
              >
                We ditched the traditional waterfall model for a modern, agile workflow that prioritizes speed, transparency, and code quality.
              </motion.p>

              {/* Trust Badges */}
              <div className="flex flex-col gap-3 text-center">
                {[
                    "100% IP Ownership Transfer", 
                    "Strict NDA Protection", 
                    "24/7 Post-Launch Support"
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-center gap-3 text-slate-300 font-medium"
                    >
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        {item}
                    </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------------------------------
              RIGHT SIDE: SCROLLABLE STEPS
          -------------------------------------------------- */}
          <div className="lg:w-2/3 relative">
            
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-0 md:pl-24 group"
                >
                  
                  {/* Step Connector Dot (Desktop) */}
                  <div className="absolute left-[23px] top-0 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-indigo-500 z-10 hidden md:block group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300">
                      <div className="absolute inset-0 bg-indigo-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Huge Background Number (Parallax Feel) */}
                  <span className="absolute -top-10 -left-4 md:left-10 text-[120px] font-bold text-white/60 select-none pointer-events-none leading-none z-0">
                    {step.id}
                  </span>

                  {/* Card Content */}
                  <div className={`relative z-10 p-8 rounded-3xl border border-white/10 bg-black/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2`}>
                    
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-black/20 border backdrop-blur-md border-white/10 text-white`}>
                        <step.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-lg leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                      {step.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 rounded-md bg-[#0B0F19]/50 border border-white/5 text-xs font-medium text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}