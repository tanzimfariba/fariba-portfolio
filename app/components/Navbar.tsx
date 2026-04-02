"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
            ? "bg-slate-50/80 dark:bg-[#030014]/80 backdrop-blur-xl shadow-sm border-slate-200/50 dark:border-white/10 py-2 sm:py-3"
            : "bg-transparent border-transparent py-4 sm:py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Fariba.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] lg:text-base font-bold text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Download CV Button */}
              <a
                href="/cv/Fariba_Tanzim_Chowdhury_CV.pdf"
                download
                className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-lg shadow-purple-500/20 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
              >
                <FileDown className="w-4 h-4" />
                Resume
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-full glass-effect bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 hover:scale-110 transition-transform"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 sm:p-2.5 rounded-full glass-effect bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 hover:scale-110 transition-transform"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden overflow-hidden"
          >
            <div className="bg-white/95 dark:bg-[#030014]/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 shadow-xl">
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 px-2">
                  <a
                    href="/cv/Fariba_Tanzim_Chowdhury_CV.pdf"
                    download
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 py-3 w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg"
                  >
                    <FileDown className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
