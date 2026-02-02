"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Cpu, Globe, ArrowUpRight, ShieldCheck, Database, Layout, TrendingUp, Cloud } from "lucide-react";
import Image from "next/image";

// Data with Images and specific gradients
const services = [
  {
    id: 1,
    title: "Web App Development",
    desc: "High-performance, scalable web applications built with modern frameworks like Next.js.",
    icon: Globe,
    colSpan: "col-span-12 lg:col-span-8",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradientColor: "from-blue-600/40",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Native-feel iOS & Android applications engineered for performance and usability.",
    icon: Smartphone,
    colSpan: "col-span-12 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    gradientColor: "from-indigo-600/40",
  },
  {
    id: 3,
    title: "Custom Software Development",
    desc: "Tailored software solutions designed to match your exact business workflows.",
    icon: Cpu,
    colSpan: "col-span-12 lg:col-span-4",
  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradientColor: "from-purple-600/40",
  },
  {
    id: 4,
    title: "Data Science & AI Solutions",
    desc: "Advanced data analysis and intelligent systems that automate and optimize decisions.",
    icon: Database,
    colSpan: "col-span-12 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    gradientColor: "from-cyan-600/40",
  },
  {
    id: 5,
    title: "UI / UX & Web Design",
    desc: "Human-centered design focused on conversion, clarity, and delightful experiences.",
    icon: Layout,
    colSpan: "col-span-12 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2070&auto=format&fit=crop",
    gradientColor: "from-pink-600/40",
  },
  {
    id: 6,
    title: "SEO & Growth Optimization",
    desc: "Search-first strategies to increase visibility, traffic, and qualified leads.",
    icon: TrendingUp,
    colSpan: "col-span-12 lg:col-span-4",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
    gradientColor: "from-amber-600/40",
  },
  {
    id: 7,
    title: "Cloud & SaaS Architecture",
    desc: "Scalable, secure cloud infrastructure built for modern SaaS products.",
    icon: Cloud,
    colSpan: "col-span-12 lg:col-span-8",
    image: "https://images.unsplash.com/photo-1642132652866-6fa262d3161f?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradientColor: "from-emerald-600/40",
  },
];


export default function Services() {
  return (
    <section className="lg:py-24 py-10 bg-[#0B0F19] relative overflow-hidden" id="services">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10"> 
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
        <div className="inline-flex items-center gap-2 mb-6 justify-center">
      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 tracking-wider uppercase">
        Our Expertise
      </span>
    </div>


          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We craft digital solutions for complex challenges.
          </h2>
          <p className="text-slate-400 text-lg">
            Merging creative design with engineering excellence to build software that defines categories.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        {/* min-h-[240px] ensures boxes have height even without content overlap */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(240px,auto)] md:auto-rows-[minmax(300px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#121826] p-8 hover:border-white/20 transition-all duration-500 ${service.colSpan}`}
            >
              
              {/* ----- 1. Background Image Layer ----- */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image}
                  alt={service.title} 
                  width={800}
                  height={600}
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                {/* Strong Dark Overlay so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent opacity-90" />
                
                {/* Colored Tint on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />
              </div>

              {/* ----- 2. Content Layer (z-10 to be on top) ----- */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon size={26} />
                </div>

                {/* Text */}
                <div className="mt-auto pt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg max-w-md leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}