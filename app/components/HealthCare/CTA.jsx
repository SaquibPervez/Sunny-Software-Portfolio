"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Calendar, Phone, Plus } from "lucide-react";

const stats = [
  { value: "100+", label: "Healthcare Clients" },
  { value: "99.9%", label: "System Uptime"      },
  { value: "8+",    label: "Years Experience"   },
  { value: "24/7",  label: "Support Available"  },
];

const vp = { once: true, margin: "-80px" };

export default function CTA() {
  return (
    <section className="w-full bg-[#0B0F19] py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d1535] via-[#0f1a3a] to-[#0a1128] border border-blue-500/15 shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="absolute top-[-40%] left-[-10%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-40%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-6 right-16 text-blue-500/10 pointer-events-none select-none">
            <Plus size={64} strokeWidth={1} />
          </div>
          <div className="absolute bottom-6 left-10 text-blue-500/8 pointer-events-none select-none">
            <Plus size={48} strokeWidth={1} />
          </div>
          <div className="absolute top-1/2 right-6 -translate-y-1/2 text-indigo-500/6 pointer-events-none select-none">
            <Plus size={32} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 lg:px-20 py-16 sm:py-20 gap-7">

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80  text-[10px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
            >
              <Shield size={12} />
              Smart Software. Better Care.
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="font-secondary text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] max-w-3xl"
            >
              Ready to Transform Your{" "}
              <span className="text-blue-400">Healthcare</span>{" "}
              Operations?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400 text-sm  leading-relaxed max-w-xl"
            >
              Custom CRM, Patient Management Systems, OPD Platforms, and Enterprise Healthcare Portals designed to streamline operations and improve patient outcomes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="flex  items-center gap-3 w-full sm:w-auto"
            >
              
              <Link
                href="/contact"
className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] text-sm cursor-pointer">              
                 <Calendar size={16} />
                Book a Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="flex items-center gap-2 text-slate-500 text-xs font-medium"
            >
              <Shield size={12} className="text-blue-500/70" />
              Trusted by Hospitals, Clinics &amp; Healthcare Organizations
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full border-t border-white/5 pt-7 grid grid-cols-2 sm:grid-cols-4 gap-5"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-black text-white tracking-tight">{s.value}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
