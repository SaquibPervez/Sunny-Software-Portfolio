"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Activity, ShoppingBag, Headset, Cog } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    id: "01",
    name: "Enterprise Software",
    tagline: "Scalable systems built for growth.",
    desc: "We design and develop robust enterprise-grade applications that streamline operations, improve visibility, and scale with your business.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", // Code on screen
  },
  {
    id: "02",
    name: "Web & Mobile Solutions",
    tagline: "Modern experiences across every device.",
    desc: "From high-performance web platforms to intuitive mobile apps, we build digital products focused on speed, usability, and impact.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2070&auto=format&fit=crop", // App/UI design
  },
  {
    id: "03",
    name: "AI & Data Platforms",
    tagline: "Turning data into intelligent decisions.",
    desc: "We leverage AI, machine learning, and analytics to create smart systems that automate decisions, predict outcomes, and unlock insights.",
    icon: Headset,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop", // AI / data visualization
  },
  {
    id: "04",
    name: "Cloud & Automation",
    tagline: "Efficient, secure, and future-ready.",
    desc: "Our cloud-native architectures and automation solutions reduce overhead, increase reliability, and accelerate deployment cycles.",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2070&auto=format&fit=crop", // Cloud / DevOps
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#0B0F19] py-12 md:py-24 font-sans relative overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-6 md:px-20">
        
        {/* --------------------------------------------------
            1. SECTION HEADER
        -------------------------------------------------- */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              Where We Make Impact
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Transforming vertically <br />
            <span className="text-slate-500">integrated industries.</span>
          </motion.h2>
        </div>

        {/* --------------------------------------------------
            2. SPLIT LAYOUT (List + Visual)
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COL: Interactive List */}
          <div className="lg:col-span-5 flex flex-col">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`group relative py-8 border-b border-white/10 cursor-pointer transition-all duration-300 ${activeTab === index ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {industry.name}
                    </h3>
                  </div>
                  <ArrowUpRight className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${activeTab === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                </div>

                <p className="text-sm md:text-base text-slate-400 font-medium pl-8 md:pl-10">
                  {industry.tagline}
                </p>

                {/* Mobile Only Expansion (Since Image is hidden on mobile) */}
                <div className={`mt-4 pl-8 md:pl-10 text-sm text-slate-500 leading-relaxed lg:hidden ${activeTab === index ? "block" : "hidden"}`}>
                    {industry.desc}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT COL: Image Preview Window (Sticky) */}
          <div className="lg:col-span-7 h-[500px] hidden lg:block relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F131F]">
            
            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <Image 
                  src={industries[activeTab].image} 
                  alt={industries[activeTab].name}
                  width={700}
                  height={700}
                  priority
                  className="w-full h-full object-cover opacity-60"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Info Card on Image */}
            <motion.div 
                key={`text-${activeTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-10 left-10 right-10 z-20"
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                        {(() => {
                            const Icon = industries[activeTab].icon;
                            return <Icon className="w-5 h-5 text-indigo-400" />;
                        })()}
                        <span className="text-white font-bold uppercase tracking-widest text-xs">
                            Case Focus
                        </span>
                    </div>
                    <p className="text-slate-200 text-lg leading-relaxed">
                        {industries[activeTab].desc}
                    </p>
                </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}