"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutGrid, List, ArrowRight, Tag, Cpu,
  X, ChevronLeft, ChevronRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    category: "hospital",
    img: "/showcase/view-1.png",
    modalImages: [
      "/showcase/view-1.png",
      "/showcase/view-2.png",
      "/showcase/view.png",
    ],
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    title: "CityView Hospital CRM",
    type: "Hospital CRM System",
    description: "A comprehensive CRM platform built for a multi-specialty 500-bed hospital network. Streamlined patient workflows, automated billing cycles, and provided real-time analytics across departments for improved decision-making.",
    techStack: ["React", "Node.js", "GraphQL", "HL7", "Docker"],
  },
  {
    id: 2,
    category: "hospital",
    img: "/showcase/medquick.png",
    modalImages: [
      "/showcase/medquick.png",
      "/showcase/medquick-2.png",
      "/showcase/medquick-3.png",
    ],
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    title: "MedQuick Patient OPD Portal",
    type: "Mobile OPD Booking App",
    description: "A mobile-first OPD booking application that reduced average patient check-in times by 40%. Features include live queue tracking, doctor availability slots, digital prescriptions, and post-visit follow-up reminders.",
    techStack: ["Flutter", "Firebase", "Python", "GCP"],
  },
  {
    id: 3,
    category: "pharma",
    img: "/showcase/pharitrack.png",
    modalImages: [
      "/showcase/pharitrack.png",
      "/showcase/pharitrack-2.png",
      "/showcase/pharitrack-1.png",
    ],
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/20",
    title: "PhariTrack Pharma Inventory",
    type: "Pharma Inventory System",
    description: "An end-to-end pharmaceutical trace-and-track platform with real-time inventory monitoring, automated compliance reporting, and supplier integration. Reduced stock discrepancies by 85% across 12 distribution centers.",
    techStack: ["Angular", "Java", "Spring Boot", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    category: "portal",
    img: "/showcase/doctorportal.png",
    modalImages: [
      "/showcase/doctorportal.png",
      "/showcase/doctorportal-2.png",
      "/showcase/doctorportal-3.png",
    ],
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/20",
    title: "Doctor Portal",
    type: "Doctor Management Portal",
    description: "A feature-rich doctor portal enabling real-time patient scheduling, EHR access, teleconsultation, and billing management. Designed for multi-specialty clinics with role-based access for doctors, nurses, and admin staff.",
    techStack: ["React", "Node.js", "GraphQL", "Docker"],
  },
];

const filters = [
  { id: "all",      label: "All Projects"             },
  { id: "hospital", label: "Hospital Systems"          },
  { id: "pharma",   label: "Pharma & Inventory"        },
  { id: "portal",   label: "Patient & Doctor Portals"  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

function Modal({ project, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = project.modalImages;
  const total = images.length;


  const prev = () => setImgIdx((i) => (i - 1 + total) % total);
  const next = () => setImgIdx((i) => (i + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center pt-8 pl-4 pb-2 pr-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#0d1121] border border-white/8 rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer">
          <X size={14} />
        </button>

        <div className={`relative w-full h-56 sm:h-72 ${project.accentBg} overflow-hidden`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0">
              <Image
                src={images[imgIdx]}
                alt={`${project.title} screenshot ${imgIdx + 1}`}
                fill
                className="object-cover"
                onError={() => {}}
              />
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-all cursor-pointer">
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-all cursor-pointer" >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {total > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === imgIdx ? "bg-white w-4" : "bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Tag size={11} className="text-slate-500 shrink-0" />
              <span className="text-[8px] text-slate-500 font-medium uppercase tracking-wider">{project.type}</span>
            </div>
            <h3 className="text-lg sm:text-lg font-black text-white leading-snug">{project.title}</h3>
          </div>

          <p className="text-[12px] text-slate-400 leading-relaxed">{project.description}</p>

          <div>
            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
              <Cpu size={10} /> Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <span key={t} className="text-[10px] bg-white/5 border border-white/8 text-slate-300 px-2.5 py-1 rounded-lg font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GridCard({ p, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300">
      <div className={`relative w-full h-40 ${p.accentBg} border-b ${p.accentBorder} overflow-hidden`}>
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {}}
        />
      </div>
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div>
          <h3 className="text-[15px] font-semibold text-white leading-snug group-hover:text-blue-400 transition-colors">
            {p.title}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Tag size={10} className="text-slate-500 shrink-0" />
            <span className="text-[8px] text-slate-500 font-medium">{p.type}</span>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>

        <div className="flex flex-wrap gap-1 mt-auto">
          <span className="text-[8px] text-slate-500 font-semibold mr-0.5 flex items-center gap-0.5">
            <Cpu size={9} /> Tech:
          </span>
          {p.techStack.slice(0, 3).map((t) => (
            <span key={t} className="text-[9px] bg-white/5 border border-white/8 text-slate-400 px-1.5 py-0.5 rounded-md font-medium">
              {t}
            </span>
          ))}
          {p.techStack.length > 3 && (
            <span className="text-[8px] text-slate-500">+{p.techStack.length - 3}</span>
          )}
        </div>

        <button
          onClick={() => onOpen(p)}
          className="mt-2 w-full flex items-center justify-center gap-1.5 bg-blue-400 hover:bg-[#54a8d8] text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 hover:gap-2.5 cursor-pointer"
        >
          View Case Study <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

function ListCard({ p, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden flex flex-col sm:flex-row transition-colors duration-300"
    >
      <div className={`relative w-full sm:w-48 h-36 sm:h-auto shrink-0 ${p.accentBg} border-b sm:border-b-0 sm:border-r ${p.accentBorder} overflow-hidden`}>
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {}}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 flex-1">
        <div className="flex-1 flex flex-col gap-2">
          <div>
            <h3 className="text-[15px] font-semibold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
            <span className="text-[8px] text-slate-500 font-medium">{p.type}</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>
          <div className="flex flex-wrap gap-1">
            {p.techStack.map((t) => (
              <span key={t} className="text-[9px] bg-white/5 border border-white/8 text-slate-400 px-1.5 py-0.5 rounded-md font-medium">{t}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onOpen(p)}
          className="shrink-0 flex items-center gap-1.5 bg-blue-400 hover:bg-[#54a8d8] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:gap-2.5 cursor-pointer whitespace-nowrap"
        >
          View Case Study <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode]         = useState("grid");
  const [selected, setSelected]         = useState(null);

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio-showcase" className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80  text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Portfolio / Work Showcase
          </p>
          <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Portfolio / Work Showcase
          </h2>
          <p className="mt-4 text-slate-400 text-sm  max-w-xl mx-auto leading-relaxed">
            Proven Healthcare Software Success Stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-blue-400 border-blue-500 text-white shadow-lg shadow-blue-600/20": "bg-white/[0.03] border-white/5 text-slate-400 hover:bg-white/[0.07] hover:text-white hover:border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg  transition-all duration-200 cursor-pointer ${viewMode === "grid" ? "bg-blue-400 text-white" : "text-slate-500 hover:text-white"}`}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${viewMode === "list" ? "bg-blue-400 text-white" : "text-slate-500 hover:text-white"}`}
            >
              <List size={14} />
            </button>
          </div>
        </motion.div>

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
                ? <GridCard key={p.id} p={p} onOpen={setSelected} />
                : <ListCard key={p.id} p={p} onOpen={setSelected} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
