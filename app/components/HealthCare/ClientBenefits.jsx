"use client";
import { motion } from "framer-motion";
import {
  BarChart2,
  Clock,
  FolderOpen,
  Settings2,
  Heart,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: BarChart2,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    accentBar: "bg-blue-500",
    title: "Reduced Administrative Workload",
    desc: "Automate routine tasks, documentation, and workflows to reduce manual work and operational costs.",
  },
  {
    icon: Clock,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    title: "Faster Patient Handling",
    desc: "Streamline patient registration, appointment scheduling, and OPD processes for quicker service.",
  },
  {
    icon: FolderOpen,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    accentBar: "bg-indigo-500",
    title: "Centralized Medical Data Access",
    desc: "Securely store and access patient data from anywhere, enabling better and faster clinical decisions.",
  },
  {
    icon: Settings2,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    accentBar: "bg-teal-500",
    title: "Improved Hospital Efficiency",
    desc: "Integrated modules and real-time insights help optimize resources, staff, and department performance.",
  },
  {
    icon: Heart,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    accentBar: "bg-rose-500",
    title: "Better Patient Experience",
    desc: "Digital-first experiences like online booking, OPD apps, and instant updates improve patient satisfaction.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    accentBar: "bg-blue-500",
    title: "Secure & Scalable Infrastructure",
    desc: "Enterprise-grade security, compliance, and scalable architecture to grow with your healthcare organization.",
  },
];

const bottomItems = [
  {
    icon: Users,
    title: "Built for Healthcare",
    desc: "Tailored solutions for hospitals, clinics & labs.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    desc: "HIPAA-ready and data privacy focused.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Future-Ready",
    desc: "Solutions that grow with your healthcare business.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export default function ClientBenefits() {
  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-14">
        <motion.div
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Client Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Benefits That Drive Better<br className="hidden sm:block" /> Healthcare Outcomes
          </h2>
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed">
            Our digital solutions are built to{" "}
            simplify operations, improve
            patient care, and{" "}
          accelerate growth for
            healthcare organizations.
          </p>
        </motion.div>

        {/* ── Benefits Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${b.iconBg} border border-white/5 flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={b.iconColor} />
                </div>

                {/* Title + accent bar */}
                <div>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                    {b.title}
                  </h3>
                  <div className={`w-8 h-[2.5px] ${b.accentBar} rounded-full mt-2`} />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0"
        >
          {/* Left tagline */}
          <div className="flex items-center gap-3 sm:min-w-[260px] sm:border-r border-white/5 sm:pr-8">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} className="text-blue-400" />
            </div>
            <p className="text-sm font-bold text-white leading-snug">
              Technology that empowers<br />care, efficiency, and growth.
            </p>
          </div>

          {/* Right items */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 sm:pl-8 w-full">
            {bottomItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 sm:flex-1 ${i !== 0 ? "sm:border-l border-white/5 sm:pl-6" : ""}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{item.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
