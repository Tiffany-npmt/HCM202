"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Compass, Landmark, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FlowDiagram from "@/components/ui/FlowDiagram";
import Modal from "@/components/ui/Modal";
import { modalsData } from "@/data/modalData";
import Image from "next/image";

export default function Section02() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModalId(id);
  const closeModal = () => setActiveModalId(null);

  // Revolutionary path nodes for the FlowDiagram
  const flowNodes = [
    { title: "GIẢI PHÓNG DÂN TỘC", subtitle: "Nhiệm vụ hàng đầu, trên hết" },
    { title: "GIẢI PHÓNG XÃ HỘI", subtitle: "Xóa bỏ áp bức bất công" },
    { title: "GIẢI PHÓNG GIAI CẤP", subtitle: "Giải phóng sức lao động" },
    { title: "GIẢI PHÓNG CON NGƯỜI", subtitle: "Mục tiêu phát triển tự do" },
  ];

  const currentModalData = activeModalId ? modalsData[activeModalId] : null;

  return (
    <section
      id="section-2"
      className="py-16 md:py-24 bg-bg-light border-b border-border-light scroll-mt-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          title=""
          subtitle="Khẳng định quyền tự quyết hoàn toàn của quốc gia và sáng tạo lộ trình giải phóng thuộc địa."
        />

        {/* 13.1 Real Independence Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mt-12">

          {/* Left Panel: Infographic */}
          <div className="lg:col-span-7 bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-dark-navy text-center mb-6">
              ĐỘC LẬP THỰC QUYỀN (TOÀN DIỆN & TRIỆT ĐỂ)
            </h3>

            {/* Sơ đồ kết nối độc lập thực quyền */}
            <div className="relative p-6 border border-dashed border-primary-blue/20 rounded-xl bg-bg-light overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

              {/* Central Node */}
              <div className="flex justify-center mb-8 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary-blue text-white font-extrabold text-sm sm:text-base px-6 py-3 rounded-full shadow-lg border border-primary-blue/30 text-center tracking-wide"
                >
                  ĐỘC LẬP THỰC QUYỀN
                </motion.div>
              </div>

              {/* Surrounding Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
                {[
                  { icon: <Globe className="w-4.5 h-4.5" />, label: "Ngoại giao" },
                  { icon: <Compass className="w-4.5 h-4.5" />, label: "Quân đội" },
                  { icon: <Landmark className="w-4.5 h-4.5" />, label: "Tài chính" },
                  { icon: <Users className="w-4.5 h-4.5" />, label: "Chính phủ" },
                  { icon: <Landmark className="w-4.5 h-4.5" />, label: "Nghị viện" }
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="bg-white border border-border-light hover:border-primary-blue/20 rounded-xl p-3 shadow-sm flex flex-col items-center justify-center text-center smooth-transition"
                  >
                    <div className="text-primary-blue mb-2">{node.icon}</div>
                    <span className="font-extrabold text-dark-navy text-xs sm:text-sm tracking-wide">
                      {node.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-gray text-center leading-relaxed">
              &ldquo;Độc lập thực tế phải đi cùng quyền tự quyết về ngoại giao, quân đội, tài chính và tổ chức nhà nước.&rdquo;
            </p>

            <button
              onClick={() => openModal("hiep-dinh-so-bo")}
              className="mt-6 w-full py-3 bg-white border border-border-light hover:border-primary-blue/30 text-primary-blue font-bold text-xs tracking-wider uppercase text-center rounded-xl shadow-sm hover:shadow cursor-pointer transition-all active:scale-98"
            >
              XEM PHÂN TÍCH HIỆP ĐỊNH SƠ BỘ
            </button>
          </div>

          {/* Right Panel: Vietnam Map Visual & Territorial Unity */}
          <div className="lg:col-span-5 bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[460px]">
            <div>
              <span className="text-xs uppercase font-extrabold text-primary-blue bg-very-light-blue px-2.5 py-1 rounded border border-primary-blue/10">
                Toàn vẹn lãnh thổ
              </span>
              <h3 className="mt-4 text-xl font-bold text-dark-navy leading-tight">
                Độc lập gắn với Thống nhất đất nước
              </h3>

              {/* Vietnam map representation in simple stylized vector box */}
              <div className="my-6 h-56 rounded-xl bg-slate-900 border border-white/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary-blue/5 pointer-events-none" />

                <div className="w-full h-full relative">
                  <Image
                    src="/images/vietnam-map.png"
                    alt="Bản đồ Việt Nam"
                    fill
                    className="object-contain scale-200"
                  />
                </div>

                {/* Floating quote label */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 border border-white/10 rounded-lg p-2 text-center text-xs font-serif italic text-white z-20">
                  &ldquo;Nước Việt Nam là một, dân tộc Việt Nam là một.&rdquo;
                </div>
              </div>
            </div>

            <button
              onClick={() => openModal("thong-nhat-toan-ven")}
              className="w-full py-3 bg-white border border-border-light hover:border-primary-blue/30 text-primary-blue font-bold text-xs tracking-wider uppercase text-center rounded-xl shadow-sm hover:shadow cursor-pointer transition-all active:scale-98"
            >
              XEM CÁC DẪN CHỨNG LỊCH SỬ
            </button>
          </div>
        </div>

        {/* 13.3 Creative Point 1 (Lộ trình cách mạng) */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-navy">CON ĐƯỜNG VÀ LỘ TRÌNH GIẢI PHÓNG THUỘC ĐỊA</h3>
            <p className="text-xs sm:text-sm text-muted-gray mt-2 max-w-xl mx-auto">
              Đảo ngược lộ trình giải phóng kinh điển để đặt lợi ích của toàn thể dân tộc lên trên hết, trước hết.
            </p>
          </div>

          {/* Sequential Flow Component */}
          <FlowDiagram nodes={flowNodes} />

          {/* Special Highlight Label */}
          <div className="text-center mt-6">
            <span className="inline-block bg-primary-blue text-white font-extrabold text-sm px-6 py-2.5 rounded-full shadow-md">
              Học thuyết Hồ Chí Minh: &ldquo;Dân tộc trước hết, trên hết.&rdquo;
            </span>
          </div>

          <div className="max-w-md mx-auto mt-8">
            <button
              onClick={() => openModal("so-sanh-lo-trinh")}
              className="w-full py-3.5 bg-primary-blue text-white hover:bg-light-blue font-bold text-xs tracking-wider uppercase text-center rounded-xl shadow-md cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>SO SÁNH LỘ TRÌNH CHI TIẾT</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Shared Modals for Section 2 */}
      <Modal
        isOpen={!!currentModalData}
        onClose={closeModal}
        title={currentModalData?.title || ""}
        subtitle={currentModalData?.subtitle}
      >
        {currentModalData && (
          <div className="space-y-6">
            {/* Context Paragraphs */}
            {currentModalData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-text-dark leading-relaxed">
                {p}
              </p>
            ))}

            {/* Case: Comparison Columns (specifically for so-sanh-lo-trinh modal) */}
            {currentModalData.columns && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                {/* Column 1: Classical Theory */}
                <div className="bg-bg-light border border-border-light rounded-xl p-5">
                  <h4 className="font-extrabold text-muted-gray text-sm uppercase tracking-wide border-b border-border-light pb-2 mb-3">
                    {currentModalData.columns.col1Title}
                  </h4>
                  <ul className="space-y-3">
                    {currentModalData.columns.col1Content.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-text-dark flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: HCM Creative Theory */}
                <div className="bg-very-light-blue border border-primary-blue/20 rounded-xl p-5">
                  <h4 className="font-extrabold text-primary-blue text-sm uppercase tracking-wide border-b border-primary-blue/15 pb-2 mb-3">
                    {currentModalData.columns.col2Title}
                  </h4>
                  <ul className="space-y-3">
                    {currentModalData.columns.col2Content.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-text-dark flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                        <span className="font-medium text-dark-navy">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* Case: Bullet Points lists */}
            {currentModalData.bulletPoints && (
              <div className="bg-bg-light rounded-xl p-5 border border-border-light">
                <span className="text-xs uppercase font-extrabold text-primary-blue tracking-wide block mb-3">
                  Tài liệu dẫn chứng cốt lõi:
                </span>
                <ul className="space-y-3 text-sm text-text-dark">
                  {currentModalData.bulletPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Significance Highlight */}
            {currentModalData.significance && (
              <div className="border-l-4 border-primary-blue pl-4 py-1 italic text-muted-gray text-sm">
                {currentModalData.significance}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
