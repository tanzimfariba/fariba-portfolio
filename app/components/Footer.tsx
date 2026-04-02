"use client";

import { motion } from "framer-motion";

// Social icons as SVG components
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", Icon: FacebookIcon, color: "hover:bg-blue-500 hover:text-white hover:border-blue-500" },
  { name: "Instagram", href: "https://instagram.com", Icon: InstagramIcon, color: "hover:bg-pink-500 hover:text-white hover:border-pink-500" },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon, color: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
  { name: "GitHub", href: "https://github.com", Icon: GithubIcon, color: "hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 hover:border-slate-900 dark:hover:border-white" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#05031b] z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[100px]" />
      </div>

      <div className="relative z-10 glass-effect border-b-0 border-r-0 border-l-0 border-t border-slate-200/50 dark:border-white/10 rounded-t-[3rem] sm:rounded-t-[4rem] px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

            {/* Brand section */}
            <div className="md:col-span-5 space-y-6">
              <motion.a
                href="#"
                className="inline-block text-3xl sm:text-4xl font-black tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-slate-900 dark:text-white">Fariba</span>
                <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-500">.</span>
              </motion.a>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                Crafting modern, high-performance web applications with elegance and precision. Let's build something amazing together.
              </p>

              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 ${link.color} transition-all duration-300 shadow-sm`}
                    aria-label={link.name}
                  >
                    <link.Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <span className="w-0 h-px bg-purple-600 dark:bg-purple-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Let's Talk</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-1">Email</p>
                  <a href="mailto:tanzimfariba23@gmail.com" className="text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all">
                    tanzimfariba23@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-1">Phone</p>
                  <a href="tel:+8801610340195" className="text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    +8801610340195
                  </a>
                </li>
                <li>
                  <p className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-1">Location</p>
                  <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    Bakshibazar, Dhaka-1000
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/50 dark:border-white/10 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium text-center md:text-left">
              &copy; {currentYear} Fariba Tanzim Chowdhury. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm font-medium">
              Made with
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <HeartIcon />
              </motion.span>
              using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
