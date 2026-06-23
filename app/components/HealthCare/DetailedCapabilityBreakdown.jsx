"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users, Shield, Lock, Calendar, Cloud, CheckCircle2, Layers,
} from "lucide-react";

const capabilities = [
  {
    num: "01",
    img: "/breakdown/crm_3.png",
    Icon: Users,
    accent: "blue",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/25",
    iconColor: "text-blue-400",
    numColor: "text-blue-400",
    glowColor: "bg-blue-600/5",
    imageLeft: true,
    title: "Custom CRM Architecture\nFor Healthcare",
    desc: "Build powerful, integrated customer relationship management platforms tailored to manage the complex interactions between patients, providers, and administration.",
    bullets: [
      "Seamless patient interaction tracking",
      "Automated communication workflows",
      "Cross-platform data synchronization",
    ],
  },
  {
    num: "02",
    img: "/breakdown/4.png",
    Icon: Shield,
    accent: "amber",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/25",
    iconColor: "text-amber-400",
    numColor: "text-amber-400",
    glowColor: "bg-amber-600/5",
    imageLeft: false,
    title: "Secure Patient Data\nManagement Systems",
    desc: "Develop robust, compliant systems for storing and managing sensitive patient health information with end-to-end encryption.",
    bullets: [
      "Multi-layered data protection",
      "Built-in HIPAA & GDPR compliance",
      "Real-time security audit trails",
    ],
  },
  {
    num: "03",
    img: "/breakdown/2.png",
    Icon: Lock,
    accent: "teal",
    iconBg: "bg-teal-500/10",
    iconBorder: "border-teal-500/25",
    iconColor: "text-teal-400",
    numColor: "text-teal-400",
    glowColor: "bg-teal-600/5",
    imageLeft: true,
    title: "Role-Based Access\nControl Systems",
    desc: "Assign detailed permissions to users based on their specific roles within your facility, ensuring data security and integrity.",
    bullets: [
      "Granular permission management",
      "Simplified user onboarding",
      "Role-based reporting",
    ],
  },
  {
    num: "04",
    img: "/breakdown/3.png",
    Icon: Calendar,
    accent: "indigo",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-500/25",
    iconColor: "text-indigo-400",
    numColor: "text-indigo-400",
    glowColor: "bg-indigo-600/5",
    imageLeft: false,
    title: "Real-Time Appointment &\nOPD Scheduling",
    desc: "Optimize patient flow and reduce wait times with an elegant, multi-calendar scheduling engine and patient self-service portal.",
    bullets: [
      "Dynamic calendar updates",
      "Integrated patient booking portal",
      "Automated appointment reminders",
    ],
  },
  {
    num: "05",
    img: "/breakdown/ehr_1.png",
    Icon: Cloud,
    accent: "cyan",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/25",
    iconColor: "text-cyan-400",
    numColor: "text-cyan-400",
    glowColor: "bg-cyan-600/5",
    imageLeft: true,
    title: "Cloud-Based Medical Record\nSystems (EMR/EHR)",
    desc: "Design intuitive, accessible, and connected electronic medical and health record systems for better clinical decision-making.",
    bullets: [
      "Comprehensive patient health history",
      "Interoperability with existing care systems",
      "Secure, accessible cloud-based storage",
    ],
  },
];

export default function DetailedCapabilityBreakdown() {

  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center">
          <p className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80  text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Detailed Capabilities
          </p>
          <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Detailed Capability Breakdown
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-sm max-w-xl mx-auto leading-relaxed">
            Deep-dive into the core systems we build engineered for security, scale, and clinical excellence.
          </p>
        </motion.div>
        <div className="flex flex-col gap-12 lg:gap-20">
          {capabilities.map((cap, i) => {
            const Icon = cap.Icon;
            const isLeft = cap.imageLeft;

            return (
              <div
                key={cap.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative ${!isLeft ? "lg:order-2" : ""}`}>
                  <div className={`absolute inset-0 ${cap.glowColor} rounded-3xl blur-3xl scale-90 pointer-events-none`} />

                  <div className={`relative rounded-2xl border ${cap.iconBorder} overflow-hidden bg-white/[0.02] shadow-2xl shadow-black/40`}>
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={cap.img}
                        alt={cap.title.replace("\n", " ")}
                        fill
                        className="object-cover"
                        onError={() => {}}
                      />
                      <div className={`absolute inset-0 ${cap.iconBg} flex items-center justify-center`}>
                      </div>
                    </div>

                    <div className={`absolute top-3 left-3 ${cap.iconBg} border ${cap.iconBorder} backdrop-blur-sm px-2.5 py-1 rounded-lg`}>
                      <span className={`text-xs font-black ${cap.numColor} tracking-widest`}>{cap.num}</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity:0, x: isLeft ?50 : -50 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, margin: "-80px" }}
                  transition={{ duration:0.75, delay:0.1, ease:[0.16, 1, 0.3, 1] }}
                  className={`flex flex-col gap-5 ${!isLeft ?"lg:order-1" : ""}`}>
                  <div className="flex flex-col gap-4">
                    <div className={`w-11 h-11 rounded-xl ${cap.iconBg} border ${cap.iconBorder} flex items-center justify-center`}>
                      <Icon size={20} className={cap.iconColor} />
                    </div>
                    <h3 className="font-secondary text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-wide whitespace-pre-line">
                      {cap.title}
                    </h3>
                    <div className={`w-10 h-[3px] ${cap.iconBg.replace("/10", "")} rounded-full border ${cap.iconBorder}`} />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {cap.desc}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={15} className={`${cap.iconColor} mt-0.5 shrink-0`} />
                        <span>{b}<span className={`${cap.iconColor} font-bold`}>*</span></span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
