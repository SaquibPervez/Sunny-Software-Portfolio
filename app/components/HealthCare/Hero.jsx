"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Calendar, 
  Play, 
  Shield, 
  Users, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Search,
  Plus,
  ArrowUpRight
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  // Mouse coordinate states for tracking interactive 3D parallax layers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values with physics-based springs
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Map mouse positions to 3D degree rotations for the chassis
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);

  // Map mouse positions to secondary layered drift translations (Parallax)
  const phoneX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 25]);
  const phoneY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 15]);
  
  const badgeX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const badgeY = useTransform(smoothMouseY, [-0.5, 0.5], [20, -10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate normalized cursor vectors (-0.5 to 0.5)
      const width = rect.width;
      const height = rect.height;
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Stagger configurations for the feature row
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full relative min-h-screen bg-[#0B0F19] overflow-hidden flex flex-col justify-between font-sans text-white pt-28 pb-12 select-none perspective-1000"
    >      
      {/* Visual Substructure Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Ambient Lighting Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Main Layout Body Layout */}
      <div className="mx-auto w-full max-w-screen-2xl px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center my-auto">
        
        {/* Left Side: Copywriting & Actions Frame */}
        <div className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start">

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 flex items-center gap-2 bg-blue-600/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
          >
            <Shield size={13} />
            Smart Software. Better Care.
          </motion.div>

          {/* Core Typography Stack */}
          <div className="space-y-5 max-w-2xl lg:max-w-none">
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.2rem,4.8vw,3.5rem)] font-black tracking-normal leading-[1.05]"
              >
                Healthcare Software <br />
                Solutions Built for{" "}
                <span className="block text-blue-500">
                  Modern Care Systems
                </span>
              </motion.h1>
            </div>

            {/* Blue Decorative Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-[3px] bg-blue-500 rounded-full origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed font-normal"
            >
              Custom CRM, Patient Management Systems, OPD Platforms, and Enterprise Healthcare Portals designed to streamline operations and improve patient outcomes.
            </motion.p>
          </div>

          {/* Call To Actions Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-700/25 hover:scale-[1.02] active:scale-[0.98]">
              <Calendar size={18} />
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 hover:border-white/35 bg-transparent hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <Play size={15} fill="currentColor" />
              View Our Work
            </button>
          </motion.div>

          {/* Inline Social Proof Validation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex items-center gap-2 text-slate-400 font-medium text-xs md:text-sm tracking-wide"
          >
            <Shield size={15} className="text-blue-500" />
            Trusted by Hospitals, Clinics & Healthcare Organizations
          </motion.div>

          {/* Features Row — aligned under left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 w-full border-t border-white/5 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500/40 transition-all duration-300 shrink-0">
                <Users size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors">Scalable Solutions</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-normal">Built to grow with your organization.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500/40 transition-all duration-300 shrink-0">
                <Shield size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors">Secure & Compliant</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-normal">HIPAA-ready & data privacy focused.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500/40 transition-all duration-300 shrink-0">
                <Zap size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors">Operational Efficiency</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-normal">Automate workflows & reduce workload.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500/40 transition-all duration-300 shrink-0">
                <Activity size={16} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide group-hover:text-indigo-400 transition-colors">Better Patient Care</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-normal">Deliver seamless digital experiences.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Re-imagined 3D Interactive Parallax Chassis Dashboard */}
        <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[580px] lg:min-h-[640px]">
          {/* Base Layer: Main Application Frame Workspace */}
          <motion.div
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full max-w-[540px] aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden will-change-transform group"
          >
            {/* Glossy Reflection Sheet Mask overlay inside */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-white/[0.02] opacity-100 transition-opacity duration-500" />
            
            {/* Window Context Header Controls */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Plus size={12} className="text-indigo-400" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-bold">MediCare OS v2.1</span>
              </div>
              <div className="flex items-center gap-4">
                <Search size={13} className="text-slate-500" />
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/5" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
            </div>

            {/* Dashboard Analytical Grid Stack */}
            <div className="grid grid-cols-3 gap-3 mb-4 relative z-10">
              {/* Stat Card 1 */}
              <div className="bg-[#0e1324]/50 border border-white/5 p-3.5 rounded-xl hover:border-white/10 transition-colors">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Total Patients</div>
                <div className="text-xl font-bold text-white mt-1.5 font-mono tracking-tight">12,458</div>
                <div className="text-[9px] text-emerald-400 font-medium mt-1 flex items-center gap-0.5">
                  <span>▲</span> +18.5%
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-[#0e1324]/50 border border-white/5 p-3.5 rounded-xl hover:border-white/10 transition-colors">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">OPD Visits</div>
                <div className="text-xl font-bold text-white mt-1.5 font-mono tracking-tight">842</div>
                <div className="text-[9px] text-emerald-400 font-medium mt-1 flex items-center gap-0.5">
                  <span>▲</span> +20.1%
                </div>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-[#0e1324]/50 border border-white/5 p-3.5 rounded-xl hover:border-white/10 transition-colors">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Net Revenue</div>
                <div className="text-xl font-bold text-white mt-1.5 font-mono tracking-tight">₹8.45M</div>
                <div className="text-[9px] text-emerald-400 font-medium mt-1 flex items-center gap-0.5">
                  <span>▲</span> +15.3%
                </div>
              </div>
            </div>

            {/* Chart Area Simulation Placeholder */}
            <div className="bg-[#070913]/40 border border-white/5 rounded-xl p-4 h-36 flex flex-col justify-between relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-300 font-bold">Patient Performance Vector</span>
                <span className="text-[9px] font-bold border border-white/10 bg-white/5 px-2 py-0.5 rounded-md text-slate-400 uppercase tracking-wider">Realtime Analytics</span>
              </div>
              
              {/* Animated Path-Drawing SVG Chart line */}
              <div className="w-full h-16 relative mt-auto">
                <svg className="w-full h-full text-indigo-500 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {/* Area fill path under stroke curve */}
                  <path d="M0,20 L0,14 Q15,4 30,13 T60,5 T90,11 T100,3 L100,20 Z" fill="url(#chartGlow)" />
                  {/* Animated stroke graph path */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
                    d="M0,14 Q15,4 30,13 T60,5 T90,11 T100,3" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                  />
                  {/* Glowing end node pulse tracking point */}
                  <motion.circle 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    cx="100" cy="3" r="2" 
                    fill="#6366f1" 
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Middle Floating Plane Layer: Autonomous Mobile Smartphone UI Overlay */}
          <motion.div
            style={{ 
              x: phoneX, 
              y: phoneY, 
              transformStyle: "preserve-3d",
              z: 40 // Push forward visually in 3D projection space
            }}
            initial={{ opacity: 0, y: 50, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute -bottom-6 left-4 md:left-10 w-[185px] sm:w-[215px] aspect-[9/18] bg-[#070913] border-[3.5px] border-white/10 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-3 overflow-hidden select-none hidden sm:block will-change-transform hover:border-indigo-500/30 transition-colors duration-300"
          >
            {/* Phone Front Camera Camera Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-30 border border-white/5" />
            
            <div className="h-full flex flex-col justify-between pt-5 pb-1 relative z-10">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Care Portal</p>
                    <p className="text-xs text-white font-black tracking-tight mt-0.5">Dr. John Doe</p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                    <Activity size={10} className="text-indigo-400" />
                  </div>
                </div>
                
                {/* Embedded Status Scheduler Alert Box */}
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-3 mt-4 space-y-1 shadow-md shadow-indigo-600/10">
                  <p className="text-[8px] text-indigo-200 uppercase tracking-widest font-bold">Next Appointment</p>
                  <p className="text-[11px] font-bold text-white leading-tight tracking-tight">Dr. Sarah Smith</p>
                  <p className="text-[8px] text-indigo-100/80 font-mono">24 May 2026 • 10:30 AM</p>
                </div>
              </div>

              {/* Action Node Grid Selection */}
              <div className="grid grid-cols-2 gap-1.5 mt-auto">
                {['Bookings', 'Records', 'E-Scripts', 'Lab Vault'].map((item, index) => (
                  <div key={index} className="bg-white/[0.03] border border-white/5 rounded-xl p-2 text-center hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <div className="w-4 h-4 bg-indigo-500/10 rounded-md text-indigo-400 mx-auto mb-1 flex items-center justify-center">
                      <ArrowUpRight size={9} />
                    </div>
                    <p className="text-[8px] text-slate-300 font-semibold tracking-wide">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upper Floating Plane Layer: HIPAA Trust Floating Badge Emblem */}
          <motion.div
            style={{ 
              x: badgeX, 
              y: badgeY,
              z: 80 // High depth elevation plane offset
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-10 -right-2 md:right-4 bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md px-4 py-3.5 rounded-xl flex items-center gap-3.5 max-w-[235px] shadow-xl shadow-black/30 will-change-transform"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
              <Shield size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-wide leading-none">HIPAA Compliant</p>
              <p className="text-[9px] text-slate-400 mt-1 leading-normal font-medium">Enterprise cryptographic data layer privacy.</p>
            </div>
          </motion.div>

        </div>
      </div>


    </section>
  );
}