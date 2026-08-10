"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { History, Calendar, CheckCircle2, HelpCircle, Shirt, House, BookOpen, Wheat } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteBlock from "@/components/ui/QuoteBlock";
import Timeline from "@/components/ui/Timeline";
import Modal from "@/components/ui/Modal";
import { timelineMilestones, TimelineMilestone } from "@/data/timelineData";
import { modalsData } from "@/data/modalData";
import Image from "next/image";

export default function Section01() {
  // Modal state
  const [isBoiCanhOpen, setIsBoiCanhOpen] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone | null>(null);

  const handleTimelineNodeClick = (milestone: TimelineMilestone) => {
    setSelectedMilestone(milestone);
  };

  const boiCanhData = modalsData["boi-canh-lich-su"];

  const milestoneImages: Record<string, string> = {
    1911: "/images/1911.jpg",
    1919: "/images/1919.jpg",
    1930: "/images/1930.jpg",
    1945: "/images/1945.png",
    1946: "/images/1946.jpg",
    1966: "/images/1966.png",
  };

  return (
    <section
      id="section-1"
      className="py-16 md:py-24 bg-white border-b border-border-light scroll-mt-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          title="ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI TỰ DO, HẠNH PHÚC"
          subtitle="Độc lập là quyền thiêng liêng và độc lập phải gắn với tự do, hạnh phúc của nhân dân."
        />

        {/* 1.1 Historical Context Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-12">
          {/* Left panel: Quick Context Stats */}
          <div className="lg:col-span-5 bg-bg-light border border-border-light rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 text-primary-blue mb-4">
                <History className="w-5 h-5" />
                <span className="font-bold text-xs uppercase tracking-wider">
                  Bối cảnh lịch sử
                </span>
              </div>
              <h3 className="text-xl font-bold text-dark-navy leading-tight">
                Nước mất nhà tan và sự bế tắc cứu nước
              </h3>

              <div className="mt-6 flex flex-col gap-5 text-sm">
                <div className="flex gap-3">
                  <span className="font-bold text-primary-blue text-base">1858</span>
                  <p className="text-muted-gray leading-relaxed font-semibold">
                    Thực dân Pháp nổ súng xâm lược Việt Nam tại Đà Nẵng.
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="font-bold text-red-500 text-base whitespace-nowrap">Bế tắc</span>
                  <p className="text-muted-gray leading-relaxed">
                    Các phong trào yêu nước chống Pháp theo khuynh hướng phong kiến, tư sản lần lượt thất bại.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary-blue text-base">05/06</span>
                  <p className="text-muted-gray leading-relaxed">
                    Năm 1911, Nguyễn Tất Thành ra đi tìm đường cứu nước từ Bến Nhà Rồng.
                  </p>
                </div>
              </div>
            </div>

            {/* Prompt Quote */}
            <div className="mt-8 pt-6 border-t border-border-light">
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-widest block mb-2">
                Trăn trở lịch sử
              </span>
              <p
                className="text-base italic text-dark-navy font-bold"
                style={{ fontFamily: '"Times New Roman", Times, serif', }}
              >
                &ldquo;Cứu nước bằng con đường nào để đi đến thắng lợi?&rdquo;
              </p>

              <button
                onClick={() => setIsBoiCanhOpen(true)}
                className="mt-6 w-full py-3 rounded-xl bg-white border border-border-light hover:border-primary-blue/30 text-primary-blue font-bold text-xs tracking-wider uppercase text-center active:scale-98 transition-all shadow-sm hover:shadow cursor-pointer"
              >
                XEM BỐI CẢNH CHI TIẾT
              </button>
            </div>
          </div>

          {/* Right panel: Core Principles Card Overview */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-dark-navy flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary-blue" />
              <span>4 LUẬN ĐIỂM VỀ ĐỘC LẬP</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Độc lập là quyền thiêng liêng", desc: "Độc lập là quyền tự quyết, bình đẳng giữa các quốc gia." },
                { num: "02", title: "Độc lập gắn với tự do, hạnh phúc", desc: "Nước độc lập nhưng dân phải ấm no, hạnh phúc, tự do." },
                { num: "03", title: "Độc lập thật sự, hoàn toàn", desc: "Không chấp nhận nền độc lập hình thức hay bù nhìn." },
                { num: "04", title: "Độc lập gắn với thống nhất toàn vẹn lãnh thổ", desc: "Nam Bắc một nhà, chủ quyền đất nước không thể chia cắt." }
              ].map((card) => (
                <motion.div
                  key={card.num}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white border border-border-light hover:border-primary-blue/20 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary-blue" />
                    <span className="text-xs font-extrabold text-primary-blue/40 uppercase">Luận điểm {card.num}</span>
                  </div>
                  <h4 className="mt-3 font-bold text-dark-navy text-sm sm:text-base leading-tight">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-gray leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 1.2 Interactive Milestones Timeline */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border-light">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-blue mb-2">ĐỘC LẬP LÀ QUYỀN THIÊNG LIÊNG</h2>
            <h3 className="text-xl font-bold text-dark-navy">HÀNH TRÌNH TƯ TƯỞNG QUA CÁC MỐC LỊCH SỬ</h3>
            <p className="text-xs sm:text-sm text-muted-gray mt-2">Nhấp vào từng năm trên dòng thời gian để xem chi tiết dấu ấn lịch sử.</p>
          </div>
          <Timeline
            milestones={timelineMilestones}
            onNodeClick={handleTimelineNodeClick}
          />
        </div>

        {/* 1.3 Independence & Happiness Quote Block */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border-light max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-2xl font-extrabold text-primary-blue">
              ĐỘC LẬP PHẢI GẮN VỚI TỰ DO, HẠNH PHÚC CỦA NHÂN DÂN
            </h2>
          </div>
          <QuoteBlock
            quote="Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
            source="Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng, 10/1945"
          />

          {/* 4 Nhu cầu cơ bản icons list */}
          <div className="mt-12 text-center">
            <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-8">
              MỤC TIÊU BẢO ĐẢM NHÂN QUYỀN
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Wheat, label: "Có ăn", desc: "Xóa nạn đói cấp bách" },
                { icon: Shirt, label: "Có mặc", desc: "Nhu yếu phẩm cơ bản" },
                { icon: House, label: "Có chỗ ở", desc: "An cư để lạc nghiệp" },
                { icon: BookOpen, label: "Có học hành", desc: "Diệt giặc dốt, bình dân học vụ" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-bg-light border border-border-light hover:border-primary-blue/30 rounded-xl p-5 shadow-sm smooth-transition flex flex-col items-center"
                >
                  <span className="text-4xl filter drop-shadow-sm mb-3">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="font-extrabold text-dark-navy text-sm tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-muted-gray mt-1 leading-none font-medium">
                    {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modal 1: Bối cảnh chi tiết */}
      <Modal
        isOpen={isBoiCanhOpen}
        onClose={() => setIsBoiCanhOpen(false)}
        title={boiCanhData.title}
        subtitle={boiCanhData.subtitle}
      >
        <div className="space-y-4">
          {boiCanhData.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {boiCanhData.bulletPoints && (
            <div className="mt-6 bg-bg-light rounded-xl p-5 border border-border-light">
              <span className="text-xs uppercase font-extrabold text-primary-blue tracking-wide block mb-3">
                Khuynh hướng cứu nước thất bại:
              </span>
              <ul className="space-y-2 text-sm text-text-dark">
                {boiCanhData.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-blue flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {boiCanhData.significance && (
            <div className="mt-6 border-l-4 border-primary-blue pl-4 py-1 italic text-muted-gray text-sm">
              {boiCanhData.significance}
            </div>
          )}
        </div>
      </Modal>

      {/* Modal 2: Chi tiết các mốc dòng thời gian */}
      <Modal
        isOpen={!!selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
        title={`Sự kiện Lịch sử Năm ${selectedMilestone?.year}`}
        subtitle={selectedMilestone?.event}
      >
        {selectedMilestone && (
          <div className="space-y-6">
            {/* Year Tag & Explanation */}
            <div>
              <span className="inline-block px-3 py-1 bg-very-light-blue text-primary-blue text-xs font-bold rounded border border-primary-blue/15 mb-3">
                Năm {selectedMilestone.year}
              </span>
              <p className="mt-4 text-sm text-text-dark leading-relaxed">
                {selectedMilestone.explanation}
              </p>
            </div>

            {/* Significance Highlight */}
            <div className="p-4 bg-very-light-blue border border-primary-blue/20 rounded-xl">
              <span className="text-xs uppercase font-extrabold text-primary-blue tracking-wide block mb-1">
                Ý nghĩa lịch sử:
              </span>
              <p className="text-sm text-dark-navy leading-relaxed font-medium">
                {selectedMilestone.significance}
              </p>
            </div>

            {/* Archival Graphic Placeholders */}
            <div className="h-64 rounded-xl bg-white border border-border-light overflow-hidden relative">
              {milestoneImages[selectedMilestone.year] ? (
                <Image
                  src={milestoneImages[selectedMilestone.year]}
                  alt={`Tư liệu lịch sử Việt Nam năm ${selectedMilestone.year}`}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-slate-50">
                  <Calendar className="w-8 h-8 text-primary-blue/50 mb-2" />

                  <span className="text-xs text-text-dark font-bold uppercase">
                    TƯ LIỆU LỊCH SỬ VIỆT NAM ({selectedMilestone.year})
                  </span>

                  <span className="text-[10px] text-muted-gray mt-1">
                    Nhóm 6 • Đại học FPT
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
