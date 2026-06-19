"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {Shield,Users,Award,Headphones,Globe,CheckCircle2,Heart,Handshake,Building2,} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "100+",
    label: "Healthcare Organizations",
    sub: "Trust us globally",
  },
  {
    icon: Users,
    value: "1M+",
    label: "Patients Impacted",
    sub: "Through digital transformations",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "System Uptime",
    sub: "Reliable. Secure. Always Available.",
  },
  {
    icon: Award,
    value: "8+",
    label: "Years of Excellence",
    sub: "Proven experience in healthcare technology",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
    sub: "Always here when you need us",
  },
];

const logos = [
  { name:"Apollo Hospitals", file: "hosapollo.png" },
  { name:"MAX Healthcare", file:"mxcare.png" },
  { name: "Manipal Hospitals", file:"manipalhos.png" },
  { name:"Fortis",file:"for.png" },
  { name:"Medanta", file: "med.png" },
  { name:"CARE Hospitals", file:"hoscare.png" },
  { name:"Global Hospitals",file:"hos.png" },
];

const certifications = [
  {
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    title: "HIPAA Compliant",
    desc: "Your data is secure and protected",
  },
  {
    icon: Globe,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    title: "GDPR Compliant",
    desc: "We follow global data privacy standards",
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    title: "ISO 27001 Certified",
    desc: "Information security management",
  },
  {
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    title: "Healthcare Focused",
    desc: "Solutions built specifically for healthcare",
  },
  {
    icon: Handshake,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    title: "Long-Term Partnerships",
    desc: "We grow when you grow",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const vp = { once:true, margin:"-80px" };

export default function TrustCredibility() {
  return (
    <section className="w-full bg-[#0B0F19] py-20 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp}
          className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            Trusted by Healthcare Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Trusted by Hospitals, Clinics &<br className="hidden sm:block" /> Healthcare Organizations
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Delivering secure, scalable and next-generation healthcare software solutions that organizations rely on.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl p-5 flex flex-col gap-3 transition-colors duration-300">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-2xl font-black text-white tracking-tight">{s.value}</p>
                  <p className="text-xs font-bold text-white/80 mt-0.5">{s.label}</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{s.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp}
          className="bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-white/10" />
            Powering Digital Transformation For
            <span className="w-6 h-px bg-white/10" />
          </p>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 w-max">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-10 w-[120px] shrink-0 transition-all duration-300">
                  <Image
                    src={`/logo/${logo.file}`}
                    alt={logo.name}
                    width={110}
                    height={40}
                    className="object-contain max-h-10 w-auto"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="flex items-start gap-3 group">
                <div className={`w-9 h-9 rounded-xl ${c.bg} border border-white/5 flex items-center justify-center shrink-0`}>
                  <Icon size={16} className={c.color} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-snug">{c.title}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={fadeUp}
          className="flex items-center justify-center gap-3 border-t border-white/5 pt-8">
          <span className="w-8 h-px bg-blue-500/40" />
          <p className="text-sm text-slate-400 text-center">
            <Shield size={12} className="inline text-blue-400 mr-1.5 mb-0.5" />
            We don&apos;t just build software —{" "}
            <span className="text-blue-400 font-semibold">we build trust that drives better healthcare.</span>
          </p>
          <span className="w-8 h-px bg-blue-500/40" />
        </motion.div>
      </div>
    </section>
  );
}
