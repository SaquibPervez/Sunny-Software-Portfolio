"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ClipboardList, Network, Layers, Code2, ShieldCheck, CloudUpload,
  Shield, BarChart2, Users, Clock,
} from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: ClipboardList,
    accent: "blue",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/25",
    iconColor: "text-blue-400",
    circleBorder: "border-blue-500/40",
    numColor: "text-blue-400",
    titleColor: "text-blue-400",
    title: "Requirement\nAnalysis",
    bullets: [
      "Understand your business workflows",
      "Identify key features & requirements",
      "Define goals, timelines & deliverables",
    ],
    img: "/process/req.png",
  },
  {
    num: "02",
    Icon: Network,
    accent: "teal",
    iconBg: "bg-teal-500/10",
    iconBorder: "border-teal-500/25",
    iconColor: "text-teal-400",
    circleBorder: "border-teal-500/40",
    numColor: "text-teal-400",
    titleColor: "text-teal-400",
    title: "System Architecture\nDesign",
    bullets: [
      "Plan scalable and secure architecture",
      "Design database structure & system flow",
      "Choose the right technology stack",
    ],
    img: "/process/architecture.png",
  },
  {
    num: "03",
    Icon: Layers,
    accent: "green",
    iconBg: "bg-green-500/10",
    iconBorder: "border-green-500/25",
    iconColor: "text-green-400",
    circleBorder: "border-green-500/40",
    numColor: "text-green-400",
    titleColor: "text-green-400",
    title: "UI/UX\nDesign",
    bullets: [
      "Create intuitive and user-friendly interfaces",
      "Role-based design for doctors, patients & admins",
      "Prototype and user experience validation",
    ],
    img: "/process/uiux.png",
  },
  {
    num: "04",
    Icon: Code2,
    accent: "indigo",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-500/25",
    iconColor: "text-indigo-400",
    circleBorder: "border-indigo-500/40",
    numColor: "text-indigo-400",
    titleColor: "text-indigo-400",
    title: "Development\nPhase",
    bullets: [
      "Frontend & backend development",
      "API development & integrations",
      "Agile development with regular updates",
    ],
    img: "/process/development.png",
  },
  {
    num: "05",
    Icon: ShieldCheck,
    accent: "purple",
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/25",
    iconColor: "text-purple-400",
    circleBorder: "border-purple-500/40",
    numColor: "text-purple-400",
    titleColor: "text-purple-400",
    title: "Testing &\nCompliance Check",
    bullets: [
      "Functional, performance & security testing",
      "Data validation & quality assurance",
      "Ensure compliance with healthcare standards",
    ],
    img: "/process/testing.png",
  },
  {
    num: "06",
    Icon: CloudUpload,
    accent: "cyan",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/25",
    iconColor: "text-cyan-400",
    circleBorder: "border-cyan-500/40",
    numColor: "text-cyan-400",
    titleColor: "text-cyan-400",
    title: "Deployment &\nSupport",
    bullets: [
      "Smooth deployment & system launch",
      "Training & documentation for your team",
      "Ongoing maintenance & technical support",
    ],
    img: "/process/deployment.png",
  },
];

const bottomItems = [
  { Icon: Shield,   title: "Secure by Design",      desc: "Security is integrated in every development stage."              },
  { Icon: BarChart2, title: "Scalable Solutions",   desc: "Built to grow with your healthcare business."                    },
  { Icon: Users,    title: "User-Centric Approach", desc: "Designed for better usability and patient experience."           },
  { Icon: Clock,    title: "Timely Delivery",       desc: "Agile methodology ensures on-time project delivery."             },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function DevelopmentProcess() {
  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-14">

        <motion.div
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Our Process
          </p>
          <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Our Development Process
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            A structured and transparent approach to build secure, scalable, and reliable{" "}
            healthcare software solutions.
          </p>
        </motion.div>

        <div className="relative">

          <div className="hidden lg:block absolute top-[52px] left-[calc(100%/12)] right-[calc(100%/12)] h-px border-t border-dashed border-white/10 z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4"
          >
            {steps.map((step, i) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="flex flex-col gap-4 relative"
                >
                  {i < steps.length - 1 && (
                    <div className="absolute left-[22px] top-[44px] bottom-[-24px] w-px border-l border-dashed border-white/8 lg:hidden z-0" />
                  )}

                  <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2 relative z-10">
                    <div className={`w-11 h-11 rounded-full ${step.iconBg} border-2 ${step.circleBorder} flex items-center justify-center shrink-0`}>
                      <Icon size={20} className={step.iconColor} />
                    </div>
                    <span className={`text-xs font-black ${step.numColor} lg:hidden`}>{step.num}</span>
                    <span className={`text-[10px] font-black ${step.numColor} hidden lg:block tracking-widest`}>{step.num}</span>
                  </div>

                  <div className="bg-white/[0.03] hover:bg-white/[0.055] border border-white/5 hover:border-white/10 rounded-2xl p-4 flex flex-col gap-3 transition-colors duration-300 flex-1 ml-6 lg:ml-0">
                    <h3 className={`text-xs font-semibold ${step.titleColor} leading-snug whitespace-pre-line`}>
                      {step.title}
                    </h3>

                    <ul className="flex flex-col gap-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-1.5 text-[10px] text-slate-400 leading-snug">
                          <span className={`mt-1.5 w-1 h-1 rounded-full ${step.iconBg.replace("/10", "/60")} shrink-0 border ${step.iconBorder}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className={`w-full h-[90px] rounded-xl ${step.iconBg} border ${step.iconBorder} overflow-hidden flex items-center justify-center mt-auto relative`}>
                      <Image
                        src={step.img}
                        alt={step.title.replace("\n", " ")}
                        fill
                        className="object-contain p-2"
                        onError={() => {}}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
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
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
