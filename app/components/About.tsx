"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Code2, Users, Rocket } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Exp.", value: "10+", icon: Code2, color: "text-amber-500 dark:text-amber-400", bg: "bg-amber-500/10 dark:bg-amber-500/20" },
    { label: "Products", value: "30+", icon: Rocket, color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/10 dark:bg-blue-500/20" },
    { label: "Mentored", value: "50+", icon: Users, color: "text-green-500 dark:text-green-400", bg: "bg-green-500/10 dark:bg-green-500/20" },
    { label: "Location", value: "Global", icon: MapPin, color: "text-purple-500 dark:text-purple-400", bg: "bg-purple-500/10 dark:bg-purple-500/20" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-effect bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-2xl p-2 md:p-3">
              <div
                className="absolute inset-0 m-2 md:m-3 rounded-[1.5rem] md:rounded-[2.5rem] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/fariba.jpg')", backgroundPosition: "center 20%" }}
              />
              <div className="absolute inset-0 m-2 md:m-3 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-effect bg-white/90 dark:bg-[#05031b]/90 p-5 md:p-6 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Frontend</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">Architecture Expert</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 mb-6 tracking-wide">
                About My Journey
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Architecting interfaces on a{" "}
                <span className="text-gradient bg-gradient-to-r from-purple-600 to-blue-500">global scale.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                With over a decade of experience as a Senior Frontend Engineer, I have built and scaled enterprise-grade applications for millions of users worldwide. I specialize in the modern JavaScript ecosystem, focusing intensely on React, Next.js, Web Performance, and Frontend Architecture.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Beyond just writing code, I lead engineering teams, establish robust CI/CD frontend pipelines, and enforce rigorous accessibility and design system standards. I bridge the critical gap between complex business logic and fluid, pixel-perfect user experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <a
                href="mailto:tanzimfariba23@gmail.com"
                className="group inline-flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                tanzimfariba23@gmail.com
              </a>
              <a
                href="tel:+8801610340195"
                className="group inline-flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +8801610340195
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl glass-effect bg-white/60 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 hover:scale-105 transition-transform cursor-default flex-1"
                  >
                    <div className={`w-12 h-12 mb-3 rounded-xl ${stat.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <p className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
