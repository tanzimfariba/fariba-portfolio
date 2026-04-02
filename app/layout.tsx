import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fariba Tanzim Chowdhury | CSE Student & Developer",
  description:
    "Portfolio of Fariba Tanzim Chowdhury - CSE Student at United International University. Passionate about programming, web development, and software engineering.",
  keywords: [
    "Fariba Tanzim Chowdhury",
    "CSE Student",
    "Developer",
    "UIU",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Fariba Tanzim Chowdhury" }],
  openGraph: {
    title: "Fariba Tanzim Chowdhury | CSE Student & Developer",
    description:
      "Portfolio of Fariba Tanzim Chowdhury - CSE Student at United International University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="funnel-display-global min-h-full flex flex-col bg-slate-50 dark:bg-[#030014] text-slate-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
