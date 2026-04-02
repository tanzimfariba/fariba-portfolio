"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Github = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const projects = [
  {
    title: "BirdSenger",
    subtitle: "Complex Dashboard UI",
    description:
      "A frontend masterpiece for a social & finance super app. Built highly responsive messaging interfaces, interactive payment dashboards, and seamless state management.",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    gradient: "from-purple-500 to-pink-500",
    category: "Frontend UI",
  },
  {
    title: "Tuition Fee Calculator",
    subtitle: "Interactive Data Visualization",
    description:
      "A dynamic React application featuring intelligent forms, smooth state transitions, and real-time Chart.js visualizations built directly into the student interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    gradient: "from-blue-500 to-cyan-500",
    category: "React App",
  },
  {
    title: "Rock Paper Scissors Web",
    subtitle: "Gamified React UI",
    description:
      "Modern interactive browser game featuring rich micro-animations, complex SVG manipulation, and an extremely responsive web layout tailored for competitive play.",
    tags: ["React.js", "CSS Animations", "Framer Motion", "Context API"],
    gradient: "from-green-500 to-emerald-500",
    category: "Creative Dev",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-[100px] translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-bold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 mb-6 tracking-wide">
            Featured Interface Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Frontend Showcases
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Highlighting my expertise in DOM manipulation and UI/UX implementation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 * (index + 1) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group glass-effect bg-white/60 dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 mb-4 border border-slate-200 dark:border-white/5">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} font-bold text-lg`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 text-base md:text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-white dark:bg-[#030014] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <button className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/10">
                      View Demo Space
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-effect bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5 group-hover/btn:text-purple-500 transition-colors" />
                      React Code
                    </button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`relative h-72 md:h-96 lg:h-auto overflow-hidden bg-slate-100/50 dark:bg-[#030014]/50 border-t lg:border-t-0 lg:border-l ${index % 2 === 1 ? "lg:order-1 border-r border-l-0" : ""} border-slate-200/50 dark:border-white/10`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 dark:opacity-10`} />

                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-20" style={{ backgroundImage: "url('/grid.svg')", backgroundPosition: "center" }} />

                  <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                    <div className="w-full max-w-sm lg:max-w-md aspect-video rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500 group-hover:shadow-purple-500/20">
                      <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                        <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <span className="text-4xl md:text-5xl drop-shadow-md">
                            {index === 0 ? "🖥️" : index === 1 ? "📊" : "🎮"}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-bold text-sm tracking-widest uppercase">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
