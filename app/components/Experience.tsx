"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Calendar, Server, Cpu } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobs = [
    {
      title: "Lead Frontend Engineer",
      company: "Global Tech Enterprise",
      period: "2020 - Present",
      description: "Leading a cross-functional team of 12 engineers in building and maintaining enterprise-scale React micro-frontends. Enforced rigorous web performance patterns, reducing TTI by 40%. Implemented an overarching standardized UI system used across 5 flagship products.",
      tags: ["React architecture", "Team Leadership", "Micro-frontends", "Web Performance"],
      icon: Layout,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Senior Frontend Developer",
      company: "NextGen Software",
      period: "2016 - 2020",
      description: "Spearheaded the migration of legacy monolithic applications into sleek, fully responsive Next.js architectures. Engineered complex state management layers using Redux Toolkit, resulting in highly scalable and maintainable data models for financial dashboards.",
      tags: ["Next.js", "Redux Toolkit", "TypeScript", "Data Visualization"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Developer",
      company: "Startup Innovators",
      period: "2014 - 2016",
      description: "Developed core interactive user interfaces for B2B SaaS products. Collaborated directly with UI/UX designers to translate high-fidelity Figma mockups into perfectly matched, performant React and Vue.js web applications.",
      tags: ["React.js", "UI/UX", "JavaScript ES6+", "CSS3"],
      icon: Server,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 mb-6 tracking-wide">
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4">
            A Decade of Engineering
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            My professional journey across top-tier tech companies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative pl-0 md:pl-10 space-y-8"
          >
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-0 top-6 bottom-0 w-[3px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden md:block rounded-full" />

            {jobs.map((job, index) => (
              <div key={job.company} className="relative group">
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-[-40px] md:left-[-46px] top-8 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-50 dark:border-[#030014] hidden md:block shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

                <div className="glass-effect bg-white/70 dark:bg-white/5 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${job.color} p-[2px] flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <div className="w-full h-full bg-white dark:bg-[#030014] rounded-[15px] flex items-center justify-center">
                        <job.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-800 dark:text-white" />
                      </div>
                    </div>

                    <div className="flex-1 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                          {job.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-sm font-bold w-fit">
                          <Calendar className={`w-4 h-4`} />
                          <span>{job.period}</span>
                        </div>
                      </div>

                      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${job.color} font-bold text-lg md:text-xl mb-4`}>
                        {job.company}
                      </p>

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-medium mb-6">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors group-hover:border-slate-300 dark:group-hover:border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
