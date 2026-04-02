"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Music, Plane, Pencil } from "lucide-react";

const hobbies = [
  {
    title: "Singing & Music",
    description: "Expressing creativity through vocals and enjoying diverse music genres to unwind.",
    icon: Music,
    color: "from-pink-500 to-rose-500 bg-clip-text text-transparent",
    bgIcon: "from-pink-500 to-rose-500",
  },
  {
    title: "Traveling",
    description: "Exploring new places, learning diverse cultures, and broadening perspectives.",
    icon: Plane,
    color: "from-blue-500 to-sky-500 bg-clip-text text-transparent",
    bgIcon: "from-blue-500 to-sky-500",
  },
  {
    title: "Sketching",
    description: "Creating visual art and bringing abstract ideas directly to life through drawings.",
    icon: Pencil,
    color: "from-purple-500 to-violet-500 bg-clip-text text-transparent",
    bgIcon: "from-purple-500 to-violet-500",
  },
];

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hobbies"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/5 dark:bg-pink-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400 mb-6 tracking-wide">
            Beyond Coding
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Things I enjoy when I&apos;m not studying or building software
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -10 }}
                className="group p-8 md:p-10 rounded-[2rem] glass-effect bg-white/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 hover:border-pink-500/30 dark:hover:border-pink-500/30 transition-all duration-300 shadow-xl"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-gradient-to-br ${hobby.bgIcon} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <h3 className={`text-2xl md:text-3xl font-black mb-4 bg-gradient-to-r ${hobby.color}`}>
                  {hobby.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
