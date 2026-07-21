"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrivatePolicy() {
  return (
    <section className="bg-[#0B0F19] min-h-screen pt-34 pb-24 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10">
          Terms & Conditions
        </motion.h1>

        <div className="border-t border-white/10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x lg:divide-white/10 gap-10 lg:gap-0 py-12 items-start">
          <div className="lg:col-span-4 lg:pr-10">
            <Link
              href="/private-policy"
              className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300">
              Privacy Policy
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>

          <div className="lg:col-span-8 lg:pl-10">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
              Welcome to Sunny Software Inc.
            </p>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              These Terms & Conditions define the rules and responsibilities governing the use of the Sunny Software Inc. website and our software development services. By accessing our website or working with our team, you acknowledge and agree to these terms, which are designed to ensure a transparent, secure, and professional working relationship.          </p>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-white/10 gap-10 md:gap-0  text-slate-400 leading-relaxed">
          <p className="md:pr-10 py-12">
            Clients agree to provide accurate information, project requirements, and timely approvals throughout the development process. Delays in communication, content delivery, or required feedback may impact project schedules. All services are delivered according to the scope and milestones outlined in the agreed project proposal.          </p>
          <p className="md:pl-10 py-12">
            Unless otherwise specified in a written agreement, all website designs, source code, and digital assets remain the property of [Company Name] until payment obligations have been fulfilled. We reserve the right to modify these Terms & Conditions as our services evolve, and continued use of our website signifies acceptance of any updates.          </p>
        </div>
        <div className="border-b border-white/10" />



      </div>
    </section>
  );
}
