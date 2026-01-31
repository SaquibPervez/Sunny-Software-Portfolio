"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Users } from "lucide-react";

// ------------------------------------------------------------------
// Data: Team Roster
// Note: Avatar URL automatic generate hoga name ke base par.
// ------------------------------------------------------------------
const team = [
  {
    name: "Ethan Brooks",
    role: "Founder & Project Manager",
    bio: "Bridging technical architecture with product strategy to ensure velocity.",
    color: "indigo",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Overseeing technical vision, scalability, and R&D initiatives.",
    color: "purple",
  },
  {
    name: "Alex Rivera",
    role: "Lead UI/UX Designer",
    bio: "Crafting intuitive user journeys that merge aesthetics with function.",
    color: "blue",
  },
  {
    name: "Michael O'Connell",
    role: "Backend Developer",
    bio: "Architecting robust APIs, databases, and server-side logic.",
    color: "emerald",
  },
  {
    name: "Sofia Martinez",
    role: "Frontend Engineer",
    bio: "Building pixel-perfect, responsive interactive experiences.",
    color: "cyan",
  },
  {
    name: "Kenji Tanaka",
    role: "AI Developer",
    bio: "Integrating LLMs and machine learning models into production apps.",
    color: "rose",
  },
  {
    name: "Maria Rodriguez",
    role: "UI Designer",
    bio: "Specializing in design systems, micro-interactions, and visual polish.",
    color: "fuchsia",
  },
  {
    name: "Elena Petrova",
    role: "SEO Specialist",
    bio: "Optimizing technical structure and content for maximum organic reach.",
    color: "amber",
  },
  {
    name: "David Smith",
    role: "Content Writer",
    bio: "Creating compelling narratives that articulate complex value propositions.",
    color: "orange",
  },
  {
    name: "James Wilson",
    role: "Sales Manager",
    bio: "Driving partnerships and understanding client business objectives.",
    color: "teal",
  },
];

// Helper to get Gradient for Hover Effect
const getGradient = (color) => {
    const gradients = {
        indigo: "from-indigo-600/80 to-blue-600/80",
        purple: "from-purple-600/80 to-pink-600/80",
        blue: "from-blue-600/80 to-cyan-600/80",
        emerald: "from-emerald-600/80 to-teal-600/80",
        cyan: "from-cyan-600/80 to-sky-600/80",
        rose: "from-rose-600/80 to-red-600/80",
        fuchsia: "from-fuchsia-600/80 to-purple-600/80",
        amber: "from-amber-600/80 to-yellow-600/80",
        orange: "from-orange-600/80 to-red-600/80",
        teal: "from-teal-600/80 to-emerald-600/80",
    }
    return gradients[color] || gradients.indigo;
}

export default function Team() {
  return (
    <section className="bg-[#0B0F19] py-12 md:py-24 font-sans relative overflow-hidden border-t border-white/5">
      
      <div className="container mx-auto px-6 md:px-20">
        
        {/* --------------------------------------------------
            1. SECTION HEADER
        -------------------------------------------------- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Users className="w-4 h-4 text-indigo-500" />
              <span className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
                Behind The Code
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Designers. Engineers. <br />
              <span className="text-slate-500">Strategists.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              A cross-functional team of senior problem-solvers. We don't just deliver features; we engineer outcomes.
            </motion.p>
          </div>

          {/* Philosophy Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="px-6 py-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-wide uppercase">
              Partners — Not Vendors
            </div>
          </motion.div>
        </div>

        {/* --------------------------------------------------
            2. TEAM GRID (Generated Avatars)
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 gap-y-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              
              {/* AVATAR CONTAINER */}
              <div className="relative aspect-square rounded-2xl mb-5 overflow-hidden bg-[#0F131F] border border-white/5 p-1">
                
                {/* Background Glow (Inactive) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Hover Gradient (Active) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(member.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Avatar Image (DiceBear API) */}
                <div className="relative h-full w-full bg-[#0B0F19] rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                        // Using 'notionists' style for clean, sketchy look. 
                        // You can change 'notionists' to 'avataaars' or 'micah' for different styles.
                        src={`https://api.dicebear.com/9.x/notionists/svg?seed=${member.name}&backgroundColor=transparent`}
                        alt={member.name}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                </div>

              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 min-h-[32px] flex items-center">
                  {member.role}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed border-l border-white/10 pl-3 line-clamp-3">
                  {member.bio}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}