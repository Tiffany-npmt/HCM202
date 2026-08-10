"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Swords, Users } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Modal from "@/components/ui/Modal";
import { modalsData } from "@/data/modalData";

export default function Section04() {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModalId(id);
  const closeModal = () => setActiveModalId(null);

  const questionsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const questionItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as const,
    },
  };

  const currentModalData = activeModalId
    ? modalsData[activeModalId]
    : null;

  return (
    <section
      id="section-4"
      className="py-16 md:py-24 bg-white text-text-dark border-b border-border-light relative overflow-hidden scroll-mt-18"
    >
      {/* Subtle backgrounds */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-light-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <SectionHeader
          badge="PHẦN 04"
          title="TÍNH CHỦ ĐỘNG & BẠO LỰC CÁCH MẠNG"
          subtitle="Luận điểm sáng tạo lớn nhất về khả năng chủ động bùng nổ, giành thắng lợi và phương pháp đấu tranh quần chúng."
          isDarkTheme={false}
        />

        {/* Opening Questions */}
        <motion.div
          variants={questionsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto my-12 bg-white border border-border-light rounded-2xl p-8 text-center flex flex-col gap-6 relative shadow-md"
        >
          {/* Decorative Corner Lights */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary-blue rounded-full translate-x-[6px] translate-y-[6px]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-primary-blue rounded-full -translate-x-[6px] translate-y-[6px]" />

          <span className="text-[10px] uppercase font-extrabold text-primary-blue tracking-widest block">
            Câu hỏi gợi mở buổi thuyết trình
          </span>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

            <motion.div variants={questionItem} className="flex-1">
              <p className="text-lg md:text-xl font-serif italic text-text-dark">
                &ldquo;Cách mạng thuộc địa có phải ngồi chờ cách mạng chính quốc thắng lợi?&rdquo;
              </p>
            </motion.div>

            <div className="hidden md:block w-px h-16 bg-border-light" />

            <motion.div variants={questionItem} className="flex-1">
              <p className="text-lg md:text-xl font-serif italic text-text-dark">
                &ldquo;Và dân ta phải giành chính quyền bằng phương pháp nào?&rdquo;
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Creative Point 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mt-16 md:mt-24 pt-12 border-t border-border-light">

          {/* Left panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            <span className="text-xs uppercase font-extrabold text-primary-blue bg-primary-blue/10 px-2.5 py-1 rounded border border-primary-blue/20 inline-block w-fit mb-4">
              LUẬN ĐIỂM SÁNG TẠO 4 (Sáng tạo nhất)
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-dark-navy leading-tight">
              Tính chủ động giành thắng lợi của cách mạng thuộc địa
            </h3>

            <p className="mt-6 text-sm sm:text-base text-muted-gray leading-relaxed">
              Vượt qua sự thụ động của Quốc tế Cộng sản, Hồ Chí Minh chỉ ra thuộc địa là mắt xích yếu nhất của đế quốc, có thể nổ ra khởi nghĩa tự giải phóng trước chính quốc.
            </p>

            <p className="mt-4 text-xs font-semibold text-primary-blue italic">
              &ldquo;Hai cuộc cách mạng (chính quốc và thuộc địa) có quan hệ khăng khít, bình đẳng và bổ trợ lẫn nhau.&rdquo;
            </p>

            {/* Button */}
            <button
              onClick={() => openModal("con-dia-hai-voi")}
              className="mt-8 py-3.5 bg-white border border-primary-blue/40 hover:bg-primary-blue hover:text-white text-primary-blue font-bold text-xs tracking-wider uppercase text-center rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all active:scale-95"
            >
              GIẢI THÍCH HÌNH ẨNH ẨN DỤ
            </button>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-7 bg-white border border-border-light rounded-2xl p-6 md:p-8 relative shadow-md">

            <h4 className="text-xs font-extrabold tracking-widest text-muted-gray uppercase text-center mb-8">
              SƠ ĐỒ QUAN HỆ BÓC LỘT & ĐẤU TRANH (CON ĐỈA HAI VÒI)
            </h4>

            <div className="flex flex-col items-center gap-6 justify-center">

              {/* Central Node */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-red-50 border border-red-200 rounded-xl p-4 text-center min-w-[200px] z-10 shadow-sm relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                  Kẻ thù chung
                </div>

                <h5 className="font-extrabold text-red-600 text-sm tracking-wide">
                  CHỦ NGHĨA TƯ BẢN ĐẾ QUỐC
                </h5>

                <span className="text-[10px] text-muted-gray font-semibold block mt-1">
                  (Con quái vật hai vòi)
                </span>
              </motion.div>

              {/* Two sides */}
              <div className="w-full max-w-sm flex items-center justify-between gap-6 relative mt-4">

                {/* Left */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex-1 bg-slate-50 border border-border-light rounded-xl p-4 text-center z-10"
                >
                  <h6 className="font-bold text-xs text-dark-navy">
                    VÔ SẢN CHÍNH QUỐC
                  </h6>

                  <p className="text-[9px] text-muted-gray mt-1">
                    Đấu tranh chống tư sản nội địa
                  </p>
                </motion.div>

                {/* Connecting line */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 border-t border-primary-blue/20 -z-10" />

                {/* Right */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex-1 bg-primary-blue/5 border border-primary-blue/20 rounded-xl p-4 text-center z-10"
                >
                  <h6 className="font-bold text-xs text-primary-blue">
                    VÔ SẢN THUỘC ĐỊA
                  </h6>

                  <p className="text-[9px] text-muted-gray mt-1">
                    Giải phóng ách áp bức thực dân
                  </p>
                </motion.div>

              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-muted-gray font-medium block">
                  *Hai cuộc cách mạng bình đẳng cùng phối hợp chặt chẽ để cắt bỏ 2 vòi của chủ nghĩa đế quốc.
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Self-liberation Flow */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-border-light text-center">

          <span className="text-xs uppercase font-extrabold text-primary-blue tracking-widest block mb-4">
            Khẩu hiệu hành động tự lực tự cường
          </span>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-primary-blue">
            &ldquo;ĐEM SỨC TA MÀ TỰ GIẢI PHÓNG CHO TA&rdquo;
          </h3>

          {/* Flow list */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12 text-sm max-w-4xl mx-auto">

            {[
              "Lý luận khoa học",
              "Tinh thần đấu tranh",
              "Tự lực tự cường",
            ].map((step, idx) => (
              <React.Fragment key={idx}>

                <div className="bg-white border border-border-light rounded-xl px-4 py-2.5 font-bold text-xs text-dark-navy shadow-sm">
                  {step}
                </div>

                <ArrowRight className="w-4 h-4 text-primary-blue" />

              </React.Fragment>
            ))}

            {/* Main Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal("cach-mang-thang-tam")}
              className="bg-primary-blue hover:bg-light-blue text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md border border-primary-blue/30 cursor-pointer active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>Cách mạng Tháng Tám 1945</span>
              <Sparkles className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          <p className="text-xs text-muted-gray mt-4">
            *Nhấp vào nút &ldquo;Cách mạng Tháng Tám 1945&rdquo; để xem dẫn chứng thực tiễn.
          </p>
        </div>

        {/* Creative Point 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mt-16 md:mt-24 pt-16 border-t border-border-light">

          {/* Left diagram */}
          <div className="lg:col-span-7 bg-white border border-border-light rounded-2xl p-6 md:p-8 shadow-md">

            <h4 className="text-xs font-extrabold tracking-widest text-muted-gray uppercase text-center mb-8">
              SƠ ĐỒ PHƯƠNG PHÁP BẠO LỰC CÁCH MẠNG QUẦN CHÚNG
            </h4>

            <div className="space-y-6">

              {/* Central root */}
              <div className="flex justify-center">
                <div className="bg-primary-blue text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md border border-primary-blue/30 text-center uppercase tracking-wider">
                  BẠO LỰC CÁCH MẠNG QUẦN CHÚNG
                </div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-50 border border-border-light rounded-xl p-4 text-center">
                  <div className="text-primary-blue mb-1 flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" />

                    <span className="font-extrabold text-[10px] uppercase">
                      LỰC LƯỢNG CHÍNH TRỊ
                    </span>
                  </div>

                  <p className="text-[10px] text-muted-gray mt-1 leading-relaxed">
                    Đoàn thể quần chúng cách mạng rộng rãi (Mặt trận)
                  </p>
                </div>

                <div className="bg-slate-50 border border-border-light rounded-xl p-4 text-center">
                  <div className="text-primary-blue mb-1 flex items-center justify-center gap-1">
                    <Swords className="w-4 h-4" />

                    <span className="font-extrabold text-[10px] uppercase">
                      LỰC LƯỢNG QUÂN SỰ
                    </span>
                  </div>

                  <p className="text-[10px] text-muted-gray mt-1 leading-relaxed">
                    Lực lượng vũ trang nhân dân (quân chủ lực, du kích)
                  </p>
                </div>

              </div>

              <div className="text-center font-bold text-muted-gray text-xs my-1">
                +
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-50 border border-border-light rounded-xl p-4 text-center font-bold text-xs text-dark-navy">
                  ĐẤU TRANH CHÍNH TRỊ
                </div>

                <div className="bg-slate-50 border border-border-light rounded-xl p-4 text-center font-bold text-xs text-dark-navy">
                  ĐẤU TRANH VŨ TRANG
                </div>

              </div>

            </div>
          </div>

          {/* Right info */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            <span className="text-xs uppercase font-extrabold text-primary-blue bg-primary-blue/10 px-2.5 py-1 rounded border border-primary-blue/20 inline-block w-fit mb-4">
              LUẬN ĐIỂM SÁNG TẠO 5
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-dark-navy leading-tight">
              Phương pháp bạo lực cách mạng toàn dân
            </h3>

            <p className="mt-6 text-sm text-muted-gray leading-relaxed">
              Bạo lực cách mạng không phải khởi nghĩa quân sự đơn thuần mà là sự kết hợp giữa lực lượng chính trị, lực lượng quân sự, đấu tranh chính trị và đấu tranh vũ trang.
            </p>

            {/* Button */}
            <button
              onClick={() => openModal("bao-luc-cach-mang")}
              className="mt-8 py-3.5 bg-white hover:bg-primary-blue text-primary-blue hover:text-white font-bold text-xs tracking-wider uppercase text-center rounded-xl shadow-sm hover:shadow-md border border-primary-blue/40 cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>MINH CHỨNG CÁCH MẠNG THÁNG TÁM</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>

      {/* Modal */}
      <Modal
        isOpen={!!currentModalData}
        onClose={closeModal}
        title={currentModalData?.title || ""}
        subtitle={currentModalData?.subtitle}
      >
        {currentModalData && (
          <div className="space-y-6">

            {currentModalData.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-base text-text-dark leading-relaxed"
              >
                {p}
              </p>
            ))}

            {currentModalData.bulletPoints && (
              <div className="bg-bg-light rounded-xl p-5 border border-border-light">

                <span className="text-xs uppercase font-extrabold text-primary-blue tracking-wide block mb-3">
                  Luận điểm dẫn chứng chi tiết:
                </span>

                <ul className="space-y-2 text-sm text-text-dark">

                  {currentModalData.bulletPoints.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />

                      <span>{pt}</span>
                    </li>
                  ))}

                </ul>
              </div>
            )}

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