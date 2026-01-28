"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, ChevronLeft, ExternalLink, Play, Pause, ArrowRight } from "lucide-react";

// ------------------------------------------------------------------
// DATA SECTION
// ------------------------------------------------------------------
const slides = [
  {
    id: 1,
    title: "EchoGen",
    subtitle: "Call Center Automation Platform",
    description: "A modular web-based CCA platform unifying HR, payroll, and lead management for rapid-growth BPOs.",
    longDescription: "EchoGen connects every part of the business, from agent clock-in to sale closure, automating payroll, performance tracking, and lead management with a central dashboard.",
    image: "/EchoGen.jpg", // replace with your project image
    category: "Business Automation",
    metrics: ["Automated Payroll", "Centralized Leads", "Real-Time KPIs"],
    tech: ["React.js", "Node.js", "AWS", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Interactive Med Systems",
    subtitle: "Telemedicine Platform",
    description: "A scalable telemedicine platform connecting patients, doctors, call centers, and pharmacies with real-time communication tools.",
    longDescription: "IMS platform enables patients to receive care quickly, provides script pad and chat for physicians, and integrates with backend services for performance and scalability.",
    image: "/IMS.png", // replace with your project image
    category: "Healthcare Technology",
    metrics: ["Scalable Architecture", "User-Friendly UI", "Real-Time Communication"],
    tech: ["Flask", "Jinja2", "JavaScript", "MongoDB", "AWS"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "EDX Learning System",
    subtitle: "Learning Management System",
    description: "A flexible LMS enabling self-paced learning, course management, and secure communication for students and instructors worldwide.",
    longDescription: "EDX LMS supports scalable course content, secure data management, and microservices for appointments and marketing, ensuring seamless online education.",
    image: "/EDX.png", // replace with your project image
    category: "Education Technology",
    metrics: ["Scalable LMS", "Secure Data", "Global Reach"],
    tech: ["React.js", "Node.js", "PostgreSQL", "AWS"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "Steve On Digital",
    subtitle: "Business Model Canvas Web App",
    description: "A web application enabling users to create, edit, and download business model canvases with an intuitive interface.",
    longDescription: "Steve On Digital provides a scalable, user-friendly platform allowing businesses to visualize and manage their models online, enhancing collaboration and productivity.",
    image: "/Steve.png", // replace with your project image
    category: "Business Tools",
    metrics: ["Scalable Platform", "User-Friendly UI", "Real-Time Collaboration"],
    tech: ["Flask", "Jinja2", "JavaScript", "MongoDB", "AWS"],
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function FeaturedProjects() {
  const [activeId, setActiveId] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const total = slides.length;
  
  const goNext = useCallback(() => {
    setDirection(1);
    setActiveId((prev) => (prev % total) + 1);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveId((prev) => ((prev - 2 + total) % total) + 1);
  }, [total]);

  const goToSlide = useCallback((id) => {
    setDirection(id > activeId ? 1 : -1);
    setActiveId(id);
  }, [activeId]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(goNext, 10000);
    return () => clearInterval(id);
  }, [autoplay, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === " ") setAutoplay(prev => !prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const activeSlide = slides.find(s => s.id === activeId);

  return (
    <section className="min-h-screen w-full bg-[#0B0F19] overflow-hidden relative font-sans">
      
      {/* Top Header */}
      <div className="relative z-30 px-6 md:px-12 lg:px-20 py-12 md:py-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-5xl mx-auto flex flex-col items-center text-center"
  >
    {/* Badge */}
    <div className="inline-flex items-center gap-2 mb-6 justify-center">
      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/80 tracking-wider uppercase">
        Portfolio Showcase
      </span>
    </div>

    {/* Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We craft digital solutions for complex challenges.
          </h2>

    {/* Description */}
    <p className="text-lg text-white/60 max-w-2xl mb-8 leading-relaxed">
      Industry-defining solutions crafted with precision engineering and innovative design.
      Each project represents our commitment to solving complex challenges.
    </p>

    {/* Controls */}
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button
        onClick={() => setAutoplay(!autoplay)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-300"
      >
        {autoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span className="text-sm font-medium">
          {autoplay ? "Pause" : "Play"}
        </span>
      </button>
    </div>
  </motion.div>
</div>

      {/* Main Content Area */}
      <div className="relative z-10 px-6 md:px-12 pb-12">
        <div className="relative mx-auto w-full max-w-6xl h-[480px] md:h-[560px] lg:h-[620px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
          {/* Background Slides */}
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                scale: activeId === slide.id ? 1 : 1.05,
                opacity: activeId === slide.id ? 1 : 0
              }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center "
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-10 mix-blend-overlay`} />
            </motion.div>
          ))}

          {/* Content Overlay */}
          <div className="relative h-full w-full">
            {/* Left Navigation Dots */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <div className="flex flex-col gap-4">
                {slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(slide.id)}
                    className="relative group"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          width: activeId === slide.id ? 32 : 12,
                          backgroundColor: activeId === slide.id ? "white" : "rgba(255,255,255,0.2)"
                        }}
                        className="h-0.5 rounded-full transition-all duration-300"
                      />
                      <span className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        activeId === slide.id 
                          ? "text-white opacity-100 translate-x-0" 
                          : "text-white/40 opacity-0 group-hover:opacity-60 group-hover:translate-x-2"
                      }`}>
                        {slide.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeId}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className="max-w-3xl w-full px-6 md:px-0 space-y-6 md:space-y-8"
                >
                  {/* Category */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      <span className="text-sm font-medium text-white/80">
                        {activeSlide.category}
                      </span>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                  >
                    {activeSlide.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed"
                  >
                    {activeSlide.description}
                  </motion.p>

                  {/* Metrics */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-3"
                  >
                    {activeSlide.metrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <div className="text-xs text-white/70">{metric}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Tech Stack (moved inside main content area) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="flex flex-wrap gap-2"
                  >
                    <div className="w-full text-xs text-white/50">Tech Stack</div>
                    {activeSlide.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 text-xs"
                      >
                        {tech}
                      </div>
                    ))}
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom bar: arrows left/right, indicators centered */}
            <div className="absolute inset-x-0 bottom-4 md:bottom-6 z-20">
              <div className="flex items-center justify-between px-4 md:px-6">
                {/* Left Arrow */}
                <motion.button
                  aria-label="Previous project"
                  onClick={goPrev}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/8 hover:bg-white/12 border border-white/12 text-white transition shadow-lg backdrop-blur-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Indicators (centered) */}
                <div className="flex items-center gap-2">
                  {slides.map((slide) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(slide.id)}
                      className="relative group"
                    >
                      <motion.div
                        animate={{
                          width: activeId === slide.id ? 24 : 8,
                          backgroundColor: activeId === slide.id ? "white" : "rgba(255,255,255,0.3)"
                        }}
                        className="h-1 rounded-full transition-all duration-300"
                      />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="px-2 py-1 rounded bg-black/80 border border-white/10 backdrop-blur-sm">
                          <span className="text-xs text-white whitespace-nowrap">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                  aria-label="Next project"
                  onClick={goNext}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/8 hover:bg-white/12 border border-white/12 text-white transition shadow-lg backdrop-blur-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}