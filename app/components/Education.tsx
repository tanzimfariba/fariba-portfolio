"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 mb-6 tracking-wide">
            Origins
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Educational Background
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            The solid computer science foundation that complements my frontend mastery
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect bg-white/70 dark:bg-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-200/50 dark:border-white/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg">
                    <div className="w-full h-full bg-white dark:bg-[#030014] rounded-[1.4rem] flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500" style={{ stroke: "url(#gradId)" }} />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                      Bachelor of Science in <br className="hidden md:block" /> Computer Science
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mt-2">
                      United International University (UIU)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-slate-200 font-bold self-start md:self-auto">
                  <Calendar className="w-4 h-4" />
                  <span>2010 - 2014</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-10 pb-10 border-b border-slate-200 dark:border-white/10 font-medium">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Graduated with Honors</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: "Final CGPA", value: "3.85", color: "from-amber-400 to-orange-500" },
                  { label: "Major", value: "SE", color: "from-blue-400 to-cyan-500" },
                  { label: "Thesis", value: "UI/UX", color: "from-green-400 to-emerald-500" },
                  { label: "Graduated", value: "2014", color: "from-purple-400 to-pink-500" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                  >
                    <p className={`text-4xl font-black text-gradient bg-gradient-to-r ${stat.color} mb-2`}>
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-relaxed">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Required for SVG Gradient stroke injection */}
      <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
        <linearGradient id="gradId" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </svg>
    </section>
  );
}
