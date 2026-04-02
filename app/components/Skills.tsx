"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Technologies",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "DOM API"],
    color: "from-blue-500 to-cyan-500",
    gradientText: "text-blue-500 dark:text-cyan-400",
  },
  {
    title: "React Ecosystem",
    skills: ["React.js", "Next.js", "Redux", "Zustand", "React Query"],
    color: "from-purple-500 to-pink-500",
    gradientText: "text-purple-500 dark:text-pink-400",
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Framer Motion", "SCSS", "Material UI", "Shadcn"],
    color: "from-green-500 to-emerald-500",
    gradientText: "text-green-500 dark:text-emerald-400",
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "Vercel", "Figma", "Webpack", "Vite", "Jest"],
    color: "from-orange-500 to-amber-500",
    gradientText: "text-orange-500 dark:text-amber-400",
  },
];

const skillIcons: Record<string, string> = {
  "JavaScript": "📜", "TypeScript": "🔷", "HTML5": "🌐", "CSS3": "🎨", "DOM API": "🧩",
  "React.js": "⚛️", "Next.js": "▲", "Redux": "🔄", "Zustand": "🐻", "React Query": "🔍",
  "Tailwind CSS": "🌊", "Framer Motion": "🎬", "SCSS": "🎀", "Material UI": "💠", "Shadcn": "⬛",
  "Git": "📦", "Vercel": "🚀", "Figma": "🎯", "Webpack": "📦", "Vite": "⚡", "Jest": "🃏"
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 mb-6 tracking-wide">
            Frontend Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Technologies I Master
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Tools, languages, and frameworks for performant web environments
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * (index + 1) }}
              className="glass-effect bg-white/70 dark:bg-white/5 rounded-3xl p-8 border border-slate-200/50 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all shadow-xl group"
            >
              <h3 className={`text-2xl font-black mb-6 ${category.gradientText}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-[#030014] border border-slate-200 dark:border-slate-800 shadow-sm group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors cursor-default"
                  >
                    <span className="text-lg md:text-xl drop-shadow-sm">{skillIcons[skill] || "💻"}</span>
                    <span className="text-sm md:text-base font-bold text-slate-700 dark:text-slate-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-16 bg-white/50 dark:bg-[#030014]/50 border border-slate-200/50 dark:border-white/10 rounded-3xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Frontend", level: "95%", color: "bg-gradient-to-r from-purple-500 to-pink-500", glow: "shadow-purple-500" },
              { label: "UI / UX", level: "90%", color: "bg-gradient-to-r from-green-500 to-emerald-500", glow: "shadow-green-500" },
              { label: "Performance", level: "85%", color: "bg-gradient-to-r from-blue-500 to-cyan-500", glow: "shadow-blue-500" },
              { label: "Architecture", level: "85%", color: "bg-gradient-to-r from-orange-500 to-yellow-500", glow: "shadow-orange-500" },
            ].map((item, i) => (
              <div key={item.label} className="text-center group flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                  {item.level}
                </div>
                <div className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="w-full max-w-[120px] h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: item.level } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 + i * 0.1 }}
                    className={`h-full ${item.color} rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] ${item.glow}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
