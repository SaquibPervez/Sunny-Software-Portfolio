"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FaGoogle, FaYelp } from "react-icons/fa6"; 
import { SiTrustpilot } from "react-icons/si";

// ------------------------------------------------------------------
// DATA: Reviews with Ratings (3, 4, 5 Stars)
// ------------------------------------------------------------------
const reviews = [
  {
    name: "Amira Khan",
    role: "Head of Product, TechWave Solutions",
    text: "Working with Sunny Software has been transformative. They helped us pivot to a microservices architecture with zero downtime and clear communication throughout.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    platform: "Google Reviews",
    rating: 5,
  },
  {
    name: "Liam O’Connor",
    role: "Founder & CEO, HealthLink Co.",
    text: "The team’s expertise in AI-assisted workflows is top-tier. The only downside was a slight delay due to scope changes — but the final product was exceptional.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    platform: "Trustpilot",
    rating: 4,
  },
  {
    name: "Priya Desai",
    role: "Senior PM, Retail Connect",
    text: "Overall a solid experience. The headless commerce solution met our expectations, though sync times could be improved. Great team and support.",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    platform: "Yelp",
    rating: 3,
  },
  {
    name: "Carlos Mendez",
    role: "CTO, SecureBank",
    text: "We prioritized security and compliance, and Sunny Software delivered a thoroughly audited system with automated threat monitoring and strong documentation.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    platform: "Google Reviews",
    rating: 5,
  },
  {
    name: "Sofia Rossi",
    role: "CEO, StartupSphere",
    text: "Very professional team. They didn’t just build features — they suggested product improvements. A couple of minor issues popped up at launch but were resolved quickly.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    platform: "Trustpilot",
    rating: 4,
  },
];

// Helper to get Platform Icon
const getPlatformIcon = (type) => {
  switch (type) {
    case "google":
      return <FaGoogle className="text-[#4285F4]" size={18} />;
    case "trustpilot":
      return <SiTrustpilot className="text-[#00b67a]" size={20} />;
    case "yelp":
      return <FaYelp className="text-[#ff1a1a]" size={20} />;
    default:
      return <Star className="text-yellow-500" size={18} />;
  }
};

// Reusable Review Card
const ReviewCard = ({ review }) => (
<div className="
  w-[350px] md:w-[450px]
  p-8 rounded-2xl
  bg-[#0B0F19]/70
  border border-white/10
  backdrop-blur-md
  shadow-xl shadow-black/40
  hover:border-indigo-500/30
  transition-all duration-300
  mx-4 flex flex-col justify-between
  relative group
  hover:-translate-y-2
">

  {/* Glass highlight layer */}
  <div className="
    absolute inset-0 rounded-2xl
    bg-gradient-to-br from-white/10 via-transparent to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity
    pointer-events-none
  " />

  {/* Hover glow */}
  <div className="
    absolute inset-0 rounded-2xl
    bg-indigo-500/10
    opacity-0 group-hover:opacity-100
    transition-opacity
    pointer-events-none
  " />

    {/* Platform Badge */}
    <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
      {getPlatformIcon(review.platform)}
    </div>

    <div className="relative z-10">
      <Quote className="w-8 h-8 text-indigo-500/50 mb-4" />
      <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
        "{review.text}"
      </p>
    </div>

    <div className="relative z-10 flex items-center gap-4">
      <img 
        src={review.image} 
        alt={review.name} 
        className="w-12 h-12 rounded-full border border-white/10 object-cover"
      />
      <div>
        <h4 className="text-white font-bold">{review.name}</h4>
        <p className="text-indigo-400 text-xs font-bold tracking-wide uppercase">{review.role}</p>
      </div>
      
      {/* Dynamic Stars Logic */}
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-slate-700 fill-transparent"}`} 
          />
        ))}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-10 md:py-24 bg-[#0B0F19] relative overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 justify-center">
      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 tracking-wider uppercase">
        Our Reviews
      </span>
    </div>
           <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-4xl md:text-5xl font-bold text-white my-6 leading-tight"
                        >
                           Trusted by Visionaries
                        </motion.h2>
        </motion.div>

        {/* --------------------------------------------------
            AGGREGATE RATINGS (Top Badges)
        -------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
            {/* Google Badge */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <FaGoogle className="text-[#4285F4]" size={28} />
                <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-lg leading-none">Google</span>
                        <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-500 fill-yellow-500"/>)}
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium tracking-wide">5.0/5.0 RATING</p>
                </div>
            </div>

            {/* Trustpilot Badge */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <SiTrustpilot className="text-[#00b67a]" size={32} />
                <div className="text-left">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-lg leading-none">Trustpilot</span>
                        <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-white fill-[#00b67a]"/>)}
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium tracking-wide">4.9/5.0 RATING</p>
                </div>
            </div>

            {/* Yelp Badge */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <FaYelp className="text-[#ff1a1a]" size={28} />
                <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-bold text-lg leading-none">Yelp</span>
                        <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-500 fill-yellow-500"/>)}
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium tracking-wide">4.8/5.0 RATING</p>
                </div>
            </div>
        </motion.div>

      </div>

      {/* --------------------------------------------------
          INFINITE SCROLLING ROWS
      -------------------------------------------------- */}
      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0B0F19] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0B0F19] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <motion.div
          className="flex w-max"
          animate={{ x: "-50%" }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`row1-${i}`} review={review} />
          ))}
        </motion.div>

        {/* Row 2: Moves Right */}
        <motion.div
          className="flex w-max"
          animate={{ x: "0%" }}
          initial={{ x: "-50%" }}
          transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={`row2-${i}`} review={review} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}