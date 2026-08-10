"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface NavLink {
  label: string;
  targetId: string;
}

const navLinks: NavLink[] = [
  { label: "Trang chủ", targetId: "hero", },
  { label: "Phần 1", targetId: "section-1", },
  { label: "Phần 2", targetId: "section-2", },
  { label: "Phần 3", targetId: "section-3", },
  { label: "Phần 4", targetId: "section-4", },
  { label: "Ôn tập", targetId: "quiz", },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  /**
   * ==========================================
   * SCROLL PROGRESS
   * ==========================================
   */
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = "hero";
      navLinks.forEach((link) => {
        const element = document.getElementById(link.targetId);
        if (!element) return;
        if (scrollPosition >= element.offsetTop) {
          currentSection = link.targetId;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const navbarHeight = 68;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-dark-navy">
        <motion.div
          className="h-full bg-primary-blue"
          style={{
            width: `${scrollProgress}%`,
          }}
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 h-[68px]  bg-dark-navy border-b border-slate-800 shadow-lg"
      >
        <div
          className="max-w-7xl mx-auto h-full px-5 lg:px-8 flex items-center justify-between"
        >

          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2.5 shrink-0 cursor-pointer group text-left"
            aria-label="Về trang chủ"
          >

            {/* HCM LOGO */}
            <div
              className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-light-blue group-hover:scale-105">
               <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
            </div>

            {/* BRAND TEXT */}
            <div className="flex flex-col justify-center">
              <span className="text-white text-[17px]lg:text-[18px] font-bold leading-tight tracking-tight">
                Tư tưởng Hồ Chí Minh
              </span>

              <span className="mt-0.5 text-muted-gray text-[10px] lg:text-[11px] font-medium leading-tight whitespace-nowrap">
                Luận điểm sáng tạo về cách mạng giải phóng dân tộc
              </span>
            </div>
          </button>

          <nav className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;

              return (
                <button
                  key={link.targetId}
                  type="button"
                  onClick={() => scrollToSection(link.targetId)}
                  className={`relative px-3 lg:px-3.5 py-2 rounded-lg text-[13px] lg:text-[14px] font-semibold whitespace-nowrap cursor-pointer transition-all duration-200

                    ${isActive
                      ? `bg-primary-blue text-white shadow-sm`
                      : `text-muted-gray hover:text-white hover:bg-light-blue/10`
                    }
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}