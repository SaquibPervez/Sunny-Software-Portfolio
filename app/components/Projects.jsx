"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, ChevronLeft, ExternalLink, Play, Pause, ArrowRight } from "lucide-react";
import {
  Code,
  Database,
  Cloud,
  Server,
  Cpu,
  Layers,
} from "lucide-react";
import Image from "next/image";


// Project Categories: Add projects under "our" or "other" via categoryType
const categories = [
  { id: "our", label: "Our Projects" },
  { id: "other", label: "Other Projects" },
];

const slides = [
  {
    id: 1,
    categoryType: "other",
    title: "Quick Process",
    subtitle: "Offset Printing & Packaging Solutions",
    description:
      "High-quality offset printing and packaging solutions designed to strengthen your brand identity and leave a lasting impression.",
    longDescription:
      "Quick Process provides professional printing and packaging solutions, including custom print materials, branded packaging, creative labels, large-format displays, premium finishing, and marketing collateral.",
    image: "/quick_process.jpg",
    category: "Printing & Packaging",
    metrics: [
      "Custom Print Solutions",
      "Branded Packaging",
      "Premium Finishing"
    ],
    color: "from-blue-500 to-cyan-500",
    link: "https://quickprocess.com.pk/",
  },
  {
    id: 2,
    categoryType: "other",
    title: "Pocket Perfume",
    subtitle: "Portable Solid Fragrance E-Commerce Platform",
    description:
      "A modern e-commerce platform offering portable solid perfume sticks with designer-inspired scents, subscriptions, bundles, and personalized scent discovery.",
    longDescription:
      "Pocket Perfume provides a complete online shopping experience for portable fragrance sticks, featuring 30+ designer-inspired scents, product categories, bundles, pocket+ subscriptions, scent discovery quizzes, and a responsive storefront designed for customers on the go.",
    image: "/pocket_perfume.jpg",
    category: "E-Commerce",
    metrics: [
      "30+ Fragrances",
      "Pocket+ Membership",
      "Scent Discovery Quiz"
    ],
    color: "from-pink-500 to-purple-500",
    link: "/",
  },
{
  id: 3,
  categoryType: "our",
  title: "WebNApp Agency",
  subtitle: "Digital Experiences & Technology Solutions",
  description:
    "A full-service digital agency creating impactful brand experiences through strategy, design, and high-performance web and mobile development.",
  longDescription:
    "WebNApp Agency brings together strategy, branding, UI/UX design, and modern technology to help businesses build memorable digital experiences. From responsive websites and mobile applications to creative campaigns and scalable digital products, we deliver cohesive solutions designed for growth.",
  image: "/web-app-agency.jpg",
  category: "Digital Agency",
  metrics: ["UI/UX Design", "Web & Mobile", "Digital Strategy"],
  color: "from-purple-500 to-pink-500",
  link: "https://web-and-app-agency.vercel.app/",
},
{
  id: 4,
  categoryType: "our",
  title: "Skillseval.ai",
  subtitle: "AI-Powered Talent Evaluation Platform",
  description:
    "An intelligent recruitment platform that automates candidate screening, skills assessment, and shortlisting to help teams hire faster and more objectively.",
  longDescription:
    "Skillseval.ai combines AI-driven candidate evaluation, automated skills testing, resume analysis, and smart shortlisting into one recruitment platform. It helps hiring teams assess candidates based on skills, generate actionable insights, and build a more efficient, data-driven hiring process.",
  image: "/skillseval.jpg",
  category: "AI & Recruitment",
  metrics: ["AI Screening", "Skills Assessment", "Smart Shortlisting"],
  color: "from-blue-500 to-cyan-500",
  link: "https://skillseval.ai",
},
{
  id: 5,
  categoryType: "other",
  title: "Mealvero",
  subtitle: "Food Delivery & Meal Ordering Platform",
  description:
    "A modern food delivery platform connecting customers with restaurants, meal plans, and convenient doorstep ordering.",
  longDescription:
    "Mealvero delivers a seamless food ordering experience where customers can explore restaurants, discover meal plans, place orders, and track their deliveries. The platform combines a clean, engaging interface with essential ordering features to make finding and enjoying great food simple and convenient.",
  image: "/mealvero.jpg",
  category: "Food & Delivery",
  metrics: ["Restaurant Discovery", "Meal Plans", "Order Tracking"],
  color: "from-orange-500 to-amber-500",
  link: "/",
},
];

const techIcons = {
  "React.js": <Code className="w-3.5 h-3.5" />,
  "Node.js": <Server className="w-3.5 h-3.5" />,
  "Flask": <Server className="w-3.5 h-3.5" />,
  "JavaScript": <Code className="w-3.5 h-3.5" />,
  "Jinja2": <Layers className="w-3.5 h-3.5" />,
  "MongoDB": <Database className="w-3.5 h-3.5" />,
  "PostgreSQL": <Database className="w-3.5 h-3.5" />,
  "AWS": <Cloud className="w-3.5 h-3.5" />,
};

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("our");
  const [activeId, setActiveId] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(1);

  const filteredSlides = slides.filter(
    (slide) => slide.categoryType === selectedCategory
  );
  const total = filteredSlides.length;

  const activeSlide =
    filteredSlides.find((s) => s.id === activeId) || filteredSlides[0] || slides[0];

  const handleCategoryChange = (catId) => {
    if (catId === selectedCategory) return;
    setSelectedCategory(catId);
    const newFiltered = slides.filter((s) => s.categoryType === catId);
    if (newFiltered.length > 0) {
      setDirection(1);
      setActiveId(newFiltered[0].id);
    }
  };

  const goNext = useCallback(() => {
    if (total <= 1) return;
    setDirection(1);
    const currentIndex = filteredSlides.findIndex((s) => s.id === activeSlide?.id);
    const nextIndex = (currentIndex + 1) % total;
    setActiveId(filteredSlides[nextIndex].id);
  }, [total, filteredSlides, activeSlide?.id]);

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    setDirection(-1);
    const currentIndex = filteredSlides.findIndex((s) => s.id === activeSlide?.id);
    const prevIndex = (currentIndex - 1 + total) % total;
    setActiveId(filteredSlides[prevIndex].id);
  }, [total, filteredSlides, activeSlide?.id]);

  const goToSlide = useCallback((id) => {
    setDirection(id > activeSlide?.id ? 1 : -1);
    setActiveId(id);
  }, [activeSlide?.id]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const id = setInterval(goNext, 10000);
    return () => clearInterval(id);
  }, [autoplay, goNext, total]);

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

  return (
    <section className="min-h-screen w-full bg-[#0B0F19] overflow-hidden relative font-sans">

      {/* Top Header */}
      <div className="relative z-30 px-6 md:px-20 pt-10 pb-6 md:pt-20 md:pb-10">
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

          {/* Category Tabs (Our Projects / Other Projects) & Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            {/* Category Switcher Tabs */}
            <div className="p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md inline-flex items-center gap-1 shadow-lg">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = slides.filter((s) => s.categoryType === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute inset-0 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{cat.label}</span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? "bg-white/20 text-white font-semibold"
                            : "bg-white/5 text-white/50"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Autoplay toggle */}
            <button
              onClick={() => setAutoplay(!autoplay)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              {autoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoplay ? "Pause" : "Play"}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 px-6 md:px-20 pb-12">
        <div className="relative mx-auto w-full max-w-6xl h-[480px] md:h-[560px] lg:h-[620px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
          {/* Background Slides */}
          {filteredSlides.map((slide) => (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                scale: activeSlide.id === slide.id ? 1 : 1.05,
                opacity: activeSlide.id === slide.id ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title ?? "Slide image"}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />

              {/* Color overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-10 mix-blend-overlay`}
              />
            </motion.div>
          ))}

          {/* Content Overlay */}
          <div className="relative h-full w-full">
            {/* Left Navigation Dots */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
              <div className="flex flex-col gap-4">
                {filteredSlides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(slide.id)}
                    className="relative group"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          width: activeSlide.id === slide.id ? 32 : 12,
                          backgroundColor: activeSlide.id === slide.id ? "white" : "rgba(255,255,255,0.2)"
                        }}
                        className="h-0.5 rounded-full transition-all duration-300"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-6 sm:px-12 md:px-24">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeSlide.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -100 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  className="max-w-4xl w-full space-y-4 md:space-y-6"
                >
                  {/* Category */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-3 md:mb-5"
                  >
                    <span className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                      <span className="text-xs font-medium text-white/80">
                        {activeSlide.category}
                      </span>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight pr-16 md:pr-0"
                  >
                    {activeSlide.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed pr-16 md:pr-0"
                  >
                    {activeSlide.description}
                  </motion.p>

                  {/* Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 md:gap-3"
                  >
                    {activeSlide.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <div className="text-xs text-white/70 text-center">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Circular Rotating Visit Site Button (Centered on Y-axis) */}
            <div className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20">
              <motion.a
                href={activeSlide?.link || "#"}
                target={activeSlide?.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={`Visit ${activeSlide?.title} site`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] md:w-[92px] md:h-[92px] rounded-full cursor-pointer select-none"
              >
                {/* Rotating curved text */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                      <path
                        id="visitSiteCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text
                      className="text-[8.5px] font-semibold uppercase fill-white/90"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      <textPath href="#visitSiteCirclePath" startOffset="0%">
                        VISIT SITE • VISIT SITE • VISIT SITE •&nbsp;
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Circle with White Arrow */}
                <div className="relative z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17 Q 13 15 17 7" />
                    <path d="M10 7 H 17 V 14" />
                  </svg>
                </div>
              </motion.a>
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
                  className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/8 hover:bg-white/12 border border-white/12 text-white transition shadow-lg backdrop-blur-md cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Indicators (centered) */}
                <div className="flex items-center gap-2">
                  {filteredSlides.map((slide) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(slide.id)}
                      className="relative group py-1 cursor-pointer"
                      aria-label={`Go to slide ${slide.title}`}
                    >
                      <motion.div
                        animate={{
                          width: activeSlide.id === slide.id ? 24 : 8,
                          backgroundColor: activeSlide.id === slide.id ? "white" : "rgba(255,255,255,0.3)"
                        }}
                        className="h-1 rounded-full transition-all duration-300"
                      />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
                  className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/8 hover:bg-white/12 border border-white/12 text-white transition shadow-lg backdrop-blur-md cursor-pointer"
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