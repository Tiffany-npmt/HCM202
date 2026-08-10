"use client";

import React from "react";
import { motion as dMotion } from "framer-motion";
import { ArrowRight, GraduationCap, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-24 pb-16 flex items-center bg-dark-navy overflow-hidden"
    >
      {/* Decorative background glow circles */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-light-blue/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Text Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Badge */}
            <dMotion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-light-blue bg-primary-blue/20 rounded-full border border-primary-blue/30 mb-6"
            >
              BÀI THUYẾT TRÌNH HỌC PHẦN
            </dMotion.span>

            {/* Main Title */}
            <dMotion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              TƯ TƯỞNG
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-light-blue">
                HỒ CHÍ MINH
              </span>
            </dMotion.h1>

            {/* Subtitle */}
            <dMotion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl sm:text-2xl font-bold text-slate-200 tracking-wide leading-snug"
            >
              Độc lập dân tộc và cách mạng giải phóng dân tộc
            </dMotion.h2>

            {/* Description */}
            <dMotion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Khám phá những luận điểm sáng tạo cốt lõi của Hồ Chí Minh về con đường cách mạng giải phóng dân tộc, vai trò helmsman của Đảng, sức mạnh đại đoàn kết toàn dân và ý chí tự lực tự cường giành thắng lợi tại các nước thuộc địa.
            </dMotion.p>

            {/* Action Buttons */}
            <dMotion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToId("overview")}
                className="px-6 py-3.5 rounded-xl bg-primary-blue hover:bg-light-blue text-white font-bold tracking-wide shadow-lg shadow-primary-blue/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2 group"
              >
                KHÁM PHÁ NỘI DUNG
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToId("intro-video")}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold tracking-wide active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                XEM VIDEO
                <Play className="w-4 h-4 fill-white text-white" />
              </button>
            </dMotion.div>
          </div>

          {/* RIGHT COLUMN: Historical Visual Framed */}
          <dMotion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square md:max-w-md lg:max-w-none mx-auto"
          >
            {/* Soft blue glow backdrop behind image */}
            <div className="absolute inset-0 bg-primary-blue/20 rounded-2xl filter blur-xl -z-10 translate-x-2 translate-y-2" />

            {/* Image Container with overlays */}
            <div className="w-full h-full rounded-2xl border border-white/15 overflow-hidden shadow-2xl relative group bg-slate-900 flex flex-col justify-center items-center p-8 select-none">
              
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-primary-blue/15 mix-blend-overlay z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent z-10 pointer-events-none" />

              {/* Tasteful vector representation representing history */}
              <div className="text-center relative z-20 flex flex-col items-center">
                <div className="w-20 h-20 bg-primary-blue/20 border border-primary-blue/30 text-light-blue rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-10 h-10" />
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">
                  HỒ CHÍ MINH
                </h3>
                <p className="text-xs text-light-blue font-bold tracking-widest uppercase mt-1">
                  1890 - 1969
                </p>

                {/* Classic Quote inside the card */}
                <div className="mt-6 max-w-xs border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-300 italic font-medium leading-relaxed font-serif">
                    &ldquo;Không có gì quý hơn độc lập, tự do.&rdquo;
                  </p>
                </div>
                
                {/* Historical design element */}
                <div className="mt-8 text-[10px] text-slate-500 font-bold uppercase tracking-widest border border-slate-700/50 px-3 py-1 rounded-md bg-slate-950/30">
                  Tài liệu học tập &bull; ĐH FPT
                </div>
              </div>

              {/* Decorative border corners inside */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary-blue/40" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary-blue/40" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary-blue/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary-blue/40" />
            </div>
          </dMotion.div>

        </div>
      </div>
    </section>
  );
}
