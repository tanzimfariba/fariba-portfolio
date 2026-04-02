"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030014] transition-colors duration-300">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/20 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-20" style={{ backgroundImage: "url('/grid.svg')", backgroundPosition: "center" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 hidden sm:inline-flex"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect bg-white/40 dark:bg-black/40 border border-slate-200 dark:border-slate-800 shadow-sm text-sm font-medium text-slate-800 dark:text-slate-200">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold">Open to Staff / Lead Engineering Roles</span>
                <span className="flex h-2 w-2 relative ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            >
              Fariba <br className="hidden lg:block" />
              <span className="text-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
                Tanzim
              </span>{" "}
              Chowdhury
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-8 max-w-2xl"
            >
              Senior Frontend Engineer with 10+ years of experience architecting large-scale React applications and crafting pixel-perfect, highly interactive web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                View High-Impact Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv/Fariba_Tanzim_Chowdhury_CV.pdf"
                download
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-effect bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-4 flex-wrap"
            >
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Frontend Stack</span>
              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Micro-Frontends"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-purple-400 dark:hover:border-purple-500 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right side floating elements / Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 max-w-full">
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" />
              <div className="absolute inset-4 rounded-[2rem] border-2 border-purple-500/30 dark:border-purple-400/30 transform rotate-3 transition-transform hover:rotate-6 duration-500" />
              <div className="absolute inset-4 rounded-[2rem] border-2 border-pink-500/30 dark:border-pink-400/30 transform -rotate-3 transition-transform hover:-rotate-6 duration-500" />

              {/* Actual Profile Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-2xl">
                <img
                  src="/fariba.jpg"
                  alt="Fariba Tanzim Chowdhury"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-effect bg-white/80 dark:bg-black/60 p-4 rounded-2xl shadow-xl border border-white/50 dark:border-white/10 flex items-center justify-center p-5"
              >
                <div className="text-xl md:text-2xl text-purple-600 dark:text-purple-400 font-bold leading-none tracking-tighter">10+ <span className="text-pink-500 text-sm md:text-base">Years Exp</span></div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 glass-effect bg-white/80 dark:bg-black/60 p-4 rounded-2xl shadow-xl border border-white/50 dark:border-white/10"
              >
                <div className="text-sm font-bold text-slate-800 dark:text-white">Enterprise React</div>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">+ Frontend Architecture</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center p-1 hover:border-purple-500 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
