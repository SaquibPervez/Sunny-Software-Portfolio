"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { LayoutGrid, List, ArrowRight, Tag, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "hospital",
    img: "/showcase/cityview.png",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    btnBg: "bg-blue-600 hover:bg-blue-500",
    title: "CityView Hospital CRM",
    type: "Hospital CRM System",
    description: "Streamlined workflows for a multi-specialty 500-bed network.",
    techStack: ["React", "Node.js", "GraphQL", "HL7", "Docker"],
  },
  {
    id: 2,
    category: "hospital",
    img: "/showcase/medquick.png",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    btnBg: "bg-emerald-600 hover:bg-emerald-500",
    title: "MedQuick Patient OPD Portal",
    type: "Mobile OPD Booking App",
    description: "Reduced average patient check-in times by 40%.",
    techStack: ["Flutter", "Firebase", "Python", "GCP"],
  },
  {
    id: 3,
    category: "pharma",
    img: "/showcase/pharitrack.png",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/20",
    btnBg: "bg-purple-600 hover:bg-purple-500",
    title: "PhariTrack Pharma Inventory & Compliance",
    type: "Pharma Inventory System",
    description: "End-to-end trace-and-track solution for supplies.",
    techStack: ["Angular", "Java", "Spring Boot", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    category: "portal",
    img: "/showcase/doctorportal.png",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/20",
    btnBg: "bg-indigo-600 hover:bg-indigo-500",
    title: "Doctor Portal",
    type: "Hospital CRM System",
    description: "Streamlined workflows for a solution-centered doctor portal.",
    techStack: ["React", "Node.js", "GraphQL", "Docker"],
  },
  {
    id: 5,
    category: "portal",
    img: "/showcase/doctorportal2.png",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    btnBg: "bg-blue-600 hover:bg-blue-500",
    title: "Doctor Portal v2",
    type: "Hospital CRM System",
    description: "Advanced portal with real-time scheduling and patient history.",
    techStack: ["React", "Node.js", "GraphQL", "Docker"],
  },
  {
    id: 6,
    category: "hospital",
    img: "/showcase/labsystem.png",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/20",
    btnBg: "bg-teal-600 hover:bg-teal-500",
    title: "Lab System",
    type: "Mobile OPD Booking App (iOS/Android)",
    description: "Reduced average patient check-in times by 40%.",
    techStack: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    category: "portal",
    img: "/showcase/telehealth.png",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    btnBg: "bg-cyan-600 hover:bg-cyan-500",
    title: "Telehealth Platform",
    type: "Telehealth Platform",
    description: "End-to-end telehealth and adoform platform.",
    techStack: ["Angular", "Java", "Spring Boot", "AWS"],
  },
  {
    id: 8,
    category: "hospital",
    img: "/showcase/datalake.png",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    btnBg: "bg-violet-600 hover:bg-violet-500",
    title: "Multi-hospital Data Lake Project",
    type: "Hospital CRM System",
    description: "Streamlined workflows of a multi-specialty 500-bed network.",
    techStack: ["React", "Node.js", "HL7", "Docker"],
  },
];

const filters = [
  { id: "all",     label: "All Projects"            },
  { id: "hospital", label: "Hospital Systems"       },
  { id: "pharma",  label: "Pharma & Inventory"      },
  { id: "portal",  label: "Patient & Doctor Portals"},
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

function GridCard({ p }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300"
    >
      {/* Image */}
      <div className={`relative w-full h-40 ${p.accentBg} border-b ${p.accentBorder} overflow-hidden`}>
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {}}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div>
          <h3 className="text-sm font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
            {p.title}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Tag size={10} className="text-slate-500 shrink-0" />
            <span className="text-[10px] text-slate-500 font-medium">Type: {p.type}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 leading-relaxed">
          <span className="text-slate-300 font-semibold">Description: </span>
          {p.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 mt-auto">
          <span className="text-[10px] text-slate-500 font-semibold mr-0.5 flex items-center gap-0.5">
            <Cpu size={9} /> Tech Stack:
          </span>
          {p.techStack.map((t) => (
            <span key={t} className="text-[10px] bg-white/5 border border-white/8 text-slate-400 px-1.5 py-0.5 rounded-md font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className={`mt-2 w-full flex items-center justify-center gap-1.5 ${p.btnBg} text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 hover:gap-2.5 cursor-pointer`}>
          View Case Study <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

function ListCard({ p }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-colors duration-300"
    >
      {/* Image */}
      <div className={`relative w-full sm:w-48 h-36 sm:h-auto shrink-0 ${p.accentBg} border-b sm:border-b-0 sm:border-r ${p.accentBorder} overflow-hidden`}>
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {}}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 flex-1">
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
            <span className="text-[10px] text-slate-500 font-medium">Type: {p.type}</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            <span className="text-slate-300 font-semibold">Description: </span>{p.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {p.techStack.map((t) => (
              <span key={t} className="text-[10px] bg-white/5 border border-white/8 text-slate-400 px-1.5 py-0.5 rounded-md font-medium">{t}</span>
            ))}
          </div>
        </div>

        <button className={`shrink-0 flex items-center gap-1.5 ${p.btnBg} text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:gap-2.5 cursor-pointer whitespace-nowrap`}>
          View Case Study <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={ref}
      className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            Portfolio / Work Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Portfolio / Work Showcase
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Proven Healthcare Software Success Stories
          </p>
        </motion.div>

        {/* ── Filters + View Toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3"
        >
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white/[0.03] border-white/5 text-slate-400 hover:bg-white/[0.07] hover:text-white hover:border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-white"}`}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${viewMode === "list" ? "bg-blue-600 text-white" : "text-slate-500 hover:text-white"}`}
            >
              <List size={14} />
            </button>
          </div>
        </motion.div>

        {/* ── Projects ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${viewMode}`}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                : "flex flex-col gap-4"
            }
          >
            {filtered.map((p) =>
              viewMode === "grid"
                ? <GridCard key={p.id} p={p} />
                : <ListCard key={p.id} p={p} />
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
