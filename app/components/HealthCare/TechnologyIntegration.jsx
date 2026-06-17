"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Plug2,
  ShieldCheck,
  Gauge,
  Cloud,
  GitMerge,
  CreditCard,
  MessageSquare,
  FileHeart,
  Building2,
} from "lucide-react";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    iconBg: "bg-blue-500",
    accentBar: "bg-blue-500",
    labelColor: "text-blue-400",
    Icon: Code2,
    items: [
      { name: "React",   img: "/tec/react.png" },
      { name: "Next.js", img: "/tec/nextjs.png" },
      { name: "Vue.js",  img: "/tec/vue.png" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    iconBg: "bg-green-500",
    accentBar: "bg-green-500",
    labelColor: "text-green-400",
    Icon: Server,
    items: [
      { name: "Node.js", img: "/tec/nodejs.png" },
      { name: "Laravel", img: "/tec/laravel.png" },
      { name: "Django",  img: "/tec/django.png" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    iconBg: "bg-purple-500",
    accentBar: "bg-purple-500",
    labelColor: "text-purple-400",
    Icon: Smartphone,
    items: [
      { name: "Flutter",       img: "/tec/flutter.png" },
      { name: "React Native",  img: "/tec/reactnative.png" },
    ],
  },
  {
    id: "database",
    label: "Database",
    iconBg: "bg-orange-500",
    accentBar: "bg-orange-500",
    labelColor: "text-orange-400",
    Icon: Database,
    items: [
      { name: "PostgreSQL", img: "/tec/postgresql.png" },
      { name: "MongoDB",    img: "/tec/mongodb.png" },
      { name: "MySQL",      img: "/tec/mysql.png" },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    iconBg: "bg-teal-500",
    accentBar: "bg-teal-500",
    labelColor: "text-teal-400",
    Icon: Plug2,
    items: [
      { name: "Payment Gateways",         LucideIcon: CreditCard,    iconBg: "bg-indigo-500/10", iconColor: "text-indigo-400" },
      { name: "SMS / Email APIs",          LucideIcon: MessageSquare, iconBg: "bg-green-500/10",  iconColor: "text-green-400"  },
      { name: "EHR / EMR Systems",         LucideIcon: FileHeart,     iconBg: "bg-rose-500/10",   iconColor: "text-rose-400"   },
      { name: "Third-party Hospital Tools",LucideIcon: Building2,     iconBg: "bg-blue-500/10",   iconColor: "text-blue-400"   },
    ],
  },
];

const bottomItems = [
  { Icon: ShieldCheck, title: "Secure & Compliant",      desc: "HIPAA-ready, GDPR-aware solutions"                     },
  { Icon: Gauge,       title: "Scalable Architecture",    desc: "Built for performance and growth"                      },
  { Icon: Cloud,       title: "Cloud-Ready",              desc: "AWS, Firebase & Azure compatibility"                   },
  { Icon: GitMerge,    title: "Seamless Integrations",    desc: "Connect with leading healthcare systems and tools"     },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function TechnologyIntegration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-12">

        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-400 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Code2 size={11} />
            Technology &amp; Integration Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Technology &amp; Integration Stack
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Modern, Scalable, and Secure Technologies Powering Healthcare Innovation
          </p>
        </motion.div>

        {/* ── Category Columns ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat) => {
            const CatIcon = cat.Icon;
            return (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl p-5 flex flex-col gap-5 transition-colors duration-300"
              >
                {/* Category Header */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className={`w-12 h-12 rounded-full ${cat.iconBg} flex items-center justify-center text-white shadow-lg`}>
                    <CatIcon size={22} />
                  </div>
                  <p className={`text-sm font-bold ${cat.labelColor}`}>{cat.label}</p>
                  <div className={`w-8 h-[2.5px] ${cat.accentBar} rounded-full`} />
                </div>

                {/* Tech Items */}
                <div className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-xl px-3 py-2.5 transition-colors duration-200 group cursor-default"
                    >
                      {/* Image logo OR lucide icon */}
                      {item.img ? (
                        <div className="w-7 h-7 shrink-0 flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={28}
                            height={28}
                            className="object-contain w-7 h-7"
                          />
                        </div>
                      ) : (
                        <div className={`w-7 h-7 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                          <item.LucideIcon size={14} className={item.iconColor} />
                        </div>
                      )}
                      <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors leading-snug">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {bottomItems.map((b) => {
            const Icon = b.Icon;
            return (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-4"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-400">{b.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
