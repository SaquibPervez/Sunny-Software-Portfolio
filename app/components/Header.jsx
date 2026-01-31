'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, ExternalLink, Facebook } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { title: 'Home', href: '/', delay: 0.1 },
  { title: 'About', href: '/about-us', delay: 0.2 },
  { title: 'Contact', href: '/contact', delay: 0.4 },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/sunny-software-inc/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/sunnysoftware', label: 'Facebook' },
  { icon: Mail, href: 'mailto:sales@sunnysoftwareinc.com', label: 'Email' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    open: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  }

  const linkVariants = {
    closed: {
      y: 80,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    open: () => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  }

  const socialVariants = {
    closed: {
      y: 40,
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="fixed top-0 left-0 w-full z-[999] transition-all duration-500 bg-transparent"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-5 md:px-20 flex justify-between items-center">
          {/* Logo with Glow Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full blur-xl opacity-0" />
              <Image
                src="/Sunny-Logo.webp"
                alt="Logo"
                width={100}
                height={100}
                priority
                className="relative z-10 transition-all duration-300 hover:rotate-12"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  <span className="relative inline-block py-1">
                    {link.title}
                    {/* underline (single-line, no comments/newlines) */}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full origin-center scale-x-0 opacity-0 bg-gradient-to-r from-white/90 via-gray-300/90 to-white/90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:opacity-100" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-black/90 backdrop-blur-sm rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative md:hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative p-3">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white mb-1.5"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white mb-1.5"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white"
              />
            </div>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-black/90 backdrop-blur-sm rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </motion.button>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[998] origin-top bg-black/75 backdrop-blur-xl overflow-hidden"
          >
            {/* Base dark overlay to ensure visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

            {/* Animated Background Elements (deterministic, no Math.random) */}
            <div className="absolute inset-0 overflow-hidden">
              {(() => {
                const positionsX = ['-35%', '25%', '-20%']
                const positionsY = ['-28%', '18%', '-14%']
                return [...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full blur-[120px]"
                    initial={{ x: positionsX[i], y: positionsY[i], scale: 0 }}
                    animate={{ x: positionsX, y: positionsY, scale: 1 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                      width: `${300 + i * 200}px`,
                      height: `${300 + i * 200}px`,
                      background: `radial-gradient(circle, rgba(${120 + i * 40}, ${80 + i * 30}, 255, 0.15), transparent 70%)`
                    }}
                  />
                ))
              })()}
            </div>

            {/* Menu Content */}
            <div className="relative h-full w-full flex flex-col items-center justify-center px-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    custom={link.delay}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative block"
                    >
                      <motion.div
                        whileHover={{ x: 20 }}
                        className="flex items-center gap-6"
                      >
                        <span className="text-sm font-medium text-white/40 group-hover:text-white/60 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                          {link.title}
                        </span>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="hidden sm:block"
                        >
                          <ExternalLink className="w-8 h-8 text-white/40" />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-white/20 via-white/60 to-transparent"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={socialVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute bottom-12 flex items-center gap-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs font-medium bg-black/90 backdrop-blur-sm rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                variants={socialVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute bottom-6 text-xs font-medium text-white/30"
              >
                © {new Date().getFullYear()} Sunny Software Inc. All rights reserved.
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}