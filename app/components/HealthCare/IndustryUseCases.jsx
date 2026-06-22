"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Building2, Stethoscope, Pill, FlaskConical, Rocket,
  FileText, Calendar, BarChart2, Shield, Users,
  ClipboardList, Database, Package, Zap, Code2,
  CreditCard, GitMerge, TrendingUp, AlertCircle,
  ArrowRight, CheckCircle2, Microscope, TestTube2, Cpu,
} from "lucide-react";

const tabs = [
  {
    id: "hospitals",
    label: "Hospitals",
    Icon: Building2,
    challengeImg: "/industry/hos.png",
    solutionImg: "/industry/hospital-solution.png",
    challenges: [
      "Overwhelmed medical staffs",
      "Disconnected Data Silos",
      "Complex Resource Allocation",
      "Constant Compliance Pressures",
    ],
    solutionTitle: "Comprehensive software systems to integrate operations and automate processes.",
    solutionPoints: [
      "Integrated Patient Data Flows",
      "Automated Clinical Workflows",
      "Intelligent Resource Forecasting",
      "Built-in Compliance and Auditing tools",
    ],
    features: [
      { Icon: FileText,  label: "EHR Core",                      iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
      { Icon: Calendar,  label: "Operating Theatre Scheduling",   iconBg: "bg-indigo-500/10",  iconColor: "text-indigo-400"  },
      { Icon: BarChart2, label: "Data Analytics Dashboard",       iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
      { Icon: Shield,    label: "Compliance Engine",              iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
    ],
  },
  {
    id: "clinics",
    label: "Clinics",
    Icon: Stethoscope,
    challengeImg: "/industry/hos.png",
    solutionImg: "/industry/hospital-solution.png",
    challenges: [
      "Patient Queue Bottlenecks",
      "Manual Appointment Tracking",
      "Paper-based Records",
      "Limited Staff Coordination",
    ],
    solutionTitle: "Smart clinic management systems for streamlined day-to-day operations.",
    solutionPoints: [
      "Digital Appointment Booking",
      "Patient History Management",
      "Automated Reminders & Follow-ups",
      "Staff Scheduling Tools",
    ],
    features: [
      { Icon: Users,         label: "Clinic CRM",          iconBg: "bg-teal-500/10",    iconColor: "text-teal-400"    },
      { Icon: Calendar,      label: "Appointment Portal",  iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
      { Icon: ClipboardList, label: "Patient Records",     iconBg: "bg-indigo-500/10",  iconColor: "text-indigo-400"  },
      { Icon: CreditCard,    label: "Billing System",      iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
    ],
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    Icon: Pill,
    challengeImg: "/industry/hos.png",
    solutionImg: "/industry/hospital-solution.png",
    challenges: [
      "Inventory Stockouts",
      "Prescription Errors",
      "Regulatory Compliance",
      "Supply Chain Gaps",
    ],
    solutionTitle: "Integrated pharmacy management for accurate dispensing and inventory control.",
    solutionPoints: [
      "Real-time Inventory Tracking",
      "Prescription Validation",
      "Supplier Integration",
      "Compliance Reporting",
    ],
    features: [
      { Icon: Package,      label: "Inventory Manager",    iconBg: "bg-orange-500/10",  iconColor: "text-orange-400"  },
      { Icon: FileText,     label: "Prescription System",  iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
      { Icon: Database,     label: "Supplier Portal",      iconBg: "bg-indigo-500/10",  iconColor: "text-indigo-400"  },
      { Icon: BarChart2,    label: "Audit Dashboard",      iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
    ],
  },
  {
    id: "labs",
    label: "Diagnostic Labs",
    Icon: FlaskConical,
    challengeImg: "/industry/hos.png",
    solutionImg: "/industry/hospital-solution.png",
    challenges: [
      "Manual Report Processing",
      "Long Turnaround Times",
      "Data Fragmentation",
      "Quality Control Issues",
    ],
    solutionTitle: "Automated lab systems for faster, error-free diagnostic workflows.",
    solutionPoints: [
      "Digital Test Order Management",
      "Automated Report Generation",
      "Patient Result Portals",
      "Quality Control Management",
    ],
    features: [
      { Icon: ClipboardList, label: "Lab Information System", iconBg: "bg-teal-500/10",    iconColor: "text-teal-400"    },
      { Icon: FileText,      label: "Report Generator",       iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
      { Icon: Users,         label: "Patient Portal",         iconBg: "bg-indigo-500/10",  iconColor: "text-indigo-400"  },
      { Icon: Shield,        label: "QC Dashboard",           iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
    ],
  },
  {
    id: "startups",
    label: "Healthcare Startups",
    Icon: Rocket,
    challengeImg: "/industry/hos.png",
    solutionImg: "/industry/hospital-solution.png",
    challenges: [
      "Scalability Limitations",
      "Regulatory Uncertainty",
      "Integration Complexity",
      "Rapid Feature Demands",
    ],
    solutionTitle: "Flexible, startup-friendly healthcare platforms built to scale and adapt.",
    solutionPoints: [
      "Modular Architecture",
      "Compliance-first Design",
      "API-first Integration",
      "Rapid Prototyping Support",
    ],
    features: [
      { Icon: Zap,      label: "MVP Development",    iconBg: "bg-yellow-500/10",  iconColor: "text-yellow-400"  },
      { Icon: Shield,   label: "Compliance Module",  iconBg: "bg-blue-500/10",    iconColor: "text-blue-400"    },
      { Icon: GitMerge, label: "Integration Hub",    iconBg: "bg-indigo-500/10",  iconColor: "text-indigo-400"  },
      { Icon: BarChart2, label: "Analytics Suite",   iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};


export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState("hospitals");

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Industry Use Cases
          </p>
          <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Industry Use Cases
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Identify your specific healthcare segment and explore tailored solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-wrap gap-2 justify-center"
        >
          {tabs.map((tab) => {
            const Icon = tab.Icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-250 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white/[0.03] border-white/5 text-slate-400 hover:bg-white/[0.06] hover:text-white hover:border-white/10"
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 sm:p-7 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/5 bg-white/[0.02]">
                <Image
                  src={current.challengeImg}
                  alt={`${current.label} challenges`}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-blue-400 mb-3">
                  Key Challenges in {current.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {current.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                      <AlertCircle size={13} className="text-red-400/70 mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/5 bg-white/[0.02]">
                <Image
                  src={current.solutionImg}
                  alt={`${current.label} solution`}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
              </div>
              <div>
                <p className="text-[16px] font-semibold text-white mb-2">How Our System Solves Them</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {current.solutionTitle}
                </p>
                <ul className="flex flex-col gap-2">
                  {current.solutionPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {current.features.map((f) => {
                const Icon = f.Icon;
                return (
                  <motion.div
                    key={f.label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                    className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/10 rounded-xl px-4 py-3 cursor-pointer transition-colors duration-200"
                  >
                    <div className={`w-9 h-9 rounded-xl ${f.iconBg} border border-white/5 flex items-center justify-center shrink-0`}>
                      <Icon size={16} className={f.iconColor} />
                    </div>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors leading-snug">
                      {f.label}
                    </span>
                    <ArrowRight size={13} className="text-slate-600 group-hover:text-slate-400 ml-auto transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
