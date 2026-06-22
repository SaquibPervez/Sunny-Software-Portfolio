"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  MonitorSmartphone,
  Pill,
  Smartphone,
  LayoutDashboard,
  FlaskConical,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    iconBg: "bg-white/5",
    iconColor: "text-slate-300",
    accentColor: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40",
    title: "Hospital CRM Systems",
    description: "Centralized system for managing hospital operations, departments, and staff coordination.",
  },
  {
    icon: ClipboardList,
    iconBg: "bg-white/5",
    iconColor: "text-amber-400",
    accentColor: "group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500/40",
    title: "Patient Management System",
    description: "Patient records, history tracking, appointment scheduling, and visit management.",
  },
  {
    icon: MonitorSmartphone,
    iconBg: "bg-white/5",
    iconColor: "text-slate-300",
    accentColor: "group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500/40",
    title: "Online OPD Platforms",
    description: "Virtual consultation systems with booking, video support, and digital prescriptions.",
  },
  {
    icon: Pill,
    iconBg: "bg-white/5",
    iconColor: "text-orange-400",
    accentColor: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500/40",
    title: "Pharma Management Systems",
    description: "Inventory tracking, batch management, compliance tracking, and distribution systems.",
  },
  {
    icon: Smartphone,
    iconBg: "bg-white/5",
    iconColor: "text-slate-300",
    accentColor: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40",
    title: "Healthcare Mobile Apps",
    description: "Android/iOS apps for patients, doctors, and administrative staff.",
  },
  {
    icon: LayoutDashboard,
    iconBg: "bg-white/5",
    iconColor: "text-blue-400",
    accentColor: "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500/40",
    title: "Doctor & Staff Portals",
    description: "Role-based dashboards for medical professionals and hospital staff.",
  },
  {
    icon: FlaskConical,
    iconBg: "bg-white/5",
    iconColor: "text-emerald-400",
    accentColor: "group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500/40",
    title: "Laboratory Systems",
    description: "Test tracking, reports generation, and lab workflow automation.",
  },
  {
    icon: CreditCard,
    iconBg: "bg-white/5",
    iconColor: "text-orange-400",
    accentColor: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500/40",
    title: "Billing & Insurance Systems",
    description: "Automated billing, claims processing, and payment tracking systems.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};
export default function CoreHealthcareSolutions() {

  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12">
          <p className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">What We Build</p>
          <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight">
            Core Healthcare Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-sm  max-w-xl mx-auto leading-relaxed">
            We design and develop scalable healthcare systems that improve hospital operations, patient experience, and digital workflows.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-colors duration-300">
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${item.accentColor}`}>
                  <Icon size={18} className={item.iconColor} />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-blue-500 text-[9px] font-semibold group-hover:gap-2 transition-all duration-200">
                  Learn More
                  <ArrowRight size={13} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
