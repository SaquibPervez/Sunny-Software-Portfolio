"use client";

import { ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterMinimal() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={16} />, url: "https://www.linkedin.com/company/sunny-software-inc/" },
    { name: "Instagram", icon: <Instagram size={16} />, url: "https://www.instagram.com/sunny.software/" },
    { name: "Facebook", icon: <Facebook size={16} />, url: "https://www.facebook.com/sunnysoftware" },
  ];
  return (
    <footer className="bg-[#0B0F19] min-h-screen flex flex-col justify-between px-6 py-10 md:px-12 md:py-16 font-sans text-white relative overflow-hidden">
      
      {/* --------------------------------------------------
          0. BACKGROUND ATMOSPHERE (The Sunrise Glow)
      -------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* The "Sunrise" Glow at bottom */}
        <motion.div 
            animate={{ 
                opacity: [0.4, 0.6, 0.4], 
                scale: [1, 1.1, 1] 
            }}
            transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-indigo-600/20 blur-[150px] rounded-full" 
        />
        
        {/* Secondary Accent Glow (Right Side) */}
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full opacity-50" />
        
        {/* Grid Floor (Perspective Texture) */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(99,102,241,0.03)_1px)] bg-[size:100%_60px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>


      <div className="flex justify-center items-end lg:justify-end relative z-10 pb-12 md:pb-16 border-b border-white/5">
        {/* Back to Top Button */}
        <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-semibold tracking-wider hover:text-indigo-400 transition-colors cursor-pointer"
        >
            <span className="text-slate-400">Back to Top</span>
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-300">
                <ArrowUp size={20} className="text-slate-400 group-hover:text-indigo-400" />
            </div>
        </button>
      </div>

      {/* --------------------------------------------------
          2. MAIN CONTENT SECTION: Contact CTA
      -------------------------------------------------- */}
      <div className="flex flex-col justify-center items-center flex-1 relative z-10 text-center py-14 md:py-20">
        
        {/* Contact Prompt */}
        <div className="mb-12">
          <p className="text-indigo-400 text-xs md:text-sm font-semibold tracking-[0.2em] mb-2 uppercase">
            Ready to Collaborate?
          </p>
          <h2 className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
            Transform your vision into reality
          </h2>
        </div>
        
        {/* Primary CTA */}
        <div className="mb-16">
          <a 
            href="mailto:sales@sunnysoftwareinc.com" 
            className="group block transition-all duration-500 hover:scale-105"
          >
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 tracking-tighter select-none">
              LET'S TALK
            </h1>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-700 mx-auto"></div>
          </a>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm md:text-base text-slate-400 font-medium">
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <span>50 Meridian Street #456</span>
            </div>
            
            <div className="hidden md:block text-white/10">|</div>
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <a href="tel:+12392176013" className="hover:text-white transition-colors duration-300">
                (+1) 239 217-6013
              </a>
            </div>
            
            <div className="hidden md:block text-white/10">|</div>
            
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <a href="mailto:sales@sunnysoftwareinc.com" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                sales@sunnysoftwareinc.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* --------------------------------------------------
          3. BOTTOM SECTION: Social & Legal
      -------------------------------------------------- */}
    
   <div className="border-t border-white/10 px-6 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <Image src="/Sunny-Logo.webp" alt="Sunny Software Logo" width={150} height={50} />

        {/* Social Links */}
        <div className="flex items-center gap-4 md:gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              {social.icon} <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} SUNNY SOFTWARE INC.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
          </div>
    </footer>
  );
}