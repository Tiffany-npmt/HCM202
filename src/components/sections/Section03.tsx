"use client";

import React, { useState } from "react";
import { Users, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import QuoteBlock from "@/components/ui/QuoteBlock";

interface NodeData {
  id: string;
  label: string;
  description: string;
  pos: string; // Tailored CSS positions for the circular network layout
}

const networkNodes: NodeData[] = [
  { id: "cong-nhan", label: "Công nhân", description: "Giai cấp tiên phong, lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản.", pos: "top-[-40px] left-[50%] translate-x-[-50%]" },
  { id: "nong-dan", label: "Nông dân", description: "Lực lượng đông đảo nhất, là bạn đồng minh tự nhiên và trung thành nhất của giai cấp công nhân.", pos: "top-[10px] right-[10px]" },
  { id: "tri-thuc", label: "Trí thức", description: "Bộ phận quan trọng đóng vai trò truyền bá lý luận cách mạng và phát triển khoa học, văn hóa.", pos: "bottom-[30px] right-[10px]" },
  { id: "tieu-tu-san", label: "Tiểu tư sản", description: "Tầng lớp yêu nước, có tinh thần dân tộc cao và dễ tiếp thu tư tưởng tiến bộ xã hội.", pos: "bottom-[-40px] left-[50%] translate-x-[-50%]" },
  { id: "trung-nong", label: "Trung nông", description: "Lực lượng trung gian nông thôn cần được giáo dục, lôi kéo tham gia vào khối liên minh công nông.", pos: "bottom-[30px] left-[10px]" },
  { id: "tu-san-dan-toc", label: "Tư sản dân tộc", description: "Có tinh thần yêu nước chống đế quốc nhưng lập trường giai cấp không kiên định, cần được tập hợp hoặc trung lập.", pos: "top-[10px] left-[10px]" },
  { id: "yeu-nuoc", label: "Người yêu nước", description: "Tất cả các cá nhân, nhân sĩ và kiều bào có tấm lòng hướng về sự tự do độc lập của Tổ quốc.", pos: "top-[-20px] right-[30%] translate-x-[50%]" }
];

export default function Section03() {
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  return (
    <section
      id="section-3"
      className="py-16 md:py-24 bg-white border-b border-border-light scroll-mt-18"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badge="PHẦN 03"
          title="ĐẢNG LÃNH ĐẠO & ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC"
          subtitle="Vai trò nòng cốt của Đảng cách mạng bản địa và sức mạnh to lớn từ liên minh đại đoàn kết."
        />

        {/* 14.1 Party Leadership & Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-12">

          {/* Left: Metaphor & Formula */}
          <div className="lg:col-span-7 bg-bg-light border border-border-light rounded-2xl p-6 md:p-8 shadow-sm">
            <span className="text-xs uppercase font-extrabold text-primary-blue bg-very-light-blue px-2.5 py-1 rounded border border-primary-blue/10">
              Luận điểm sáng tạo 2
            </span>
            <h3 className="mt-4 text-xl font-bold text-dark-navy">
              VAI TRÒ LÃNH ĐẠO CỦA ĐẢNG CỘNG SẢN VIỆT NAM
            </h3>

            {/* Interactive Formula */}
            <div className="mt-8 p-6 bg-white border border-border-light rounded-xl">
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-4 text-center">
                CÔNG THỨC THÀNH LẬP ĐẢNG SÁNG TẠO
              </span>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                {/* Marxism-Leninism */}
                <div className="relative group">
                  <div className="px-4 py-3 rounded-lg bg-bg-light border border-border-light hover:border-primary-blue/30 text-center font-bold text-xs sm:text-sm text-dark-navy smooth-transition select-none">
                    Chủ nghĩa Mác - Lênin
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-slate-900 text-white text-[10px] rounded p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20 text-center shadow-md">
                    Hệ tư tưởng lý luận khoa học, cách mạng làm kim chỉ nam.
                  </div>
                </div>

                <span className="text-lg font-bold text-muted-gray">+</span>

                {/* Workers Movement */}
                <div className="relative group">
                  <div className="px-4 py-3 rounded-lg bg-bg-light border border-border-light hover:border-primary-blue/30 text-center font-bold text-xs sm:text-sm text-dark-navy smooth-transition select-none">
                    Phong trào Công nhân
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-slate-900 text-white text-[10px] rounded p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20 text-center shadow-md">
                    Lực lượng vật chất đi đầu trong sản xuất công nghiệp và cách mạng.
                  </div>
                </div>

                <span className="text-lg font-bold text-primary-blue">+</span>

                {/* Patriotic Movement */}
                <div className="relative group">
                  <div className="px-4 py-3 rounded-lg bg-primary-blue/10 border border-primary-blue/30 hover:bg-primary-blue/15 text-center font-bold text-xs sm:text-sm text-primary-blue smooth-transition select-none">
                    Phong trào Yêu nước
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-slate-900 text-white text-[10px] rounded p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20 text-center shadow-md">
                    Yếu tố đặc thù sáng tạo. Bệ đỡ tinh thần yêu nước rộng khắp của dân tộc.
                  </div>
                </div>

                <span className="text-lg font-bold text-muted-gray">=</span>

                {/* CPV */}
                <div className="px-4 py-3 rounded-lg bg-primary-blue text-white text-center font-extrabold text-xs sm:text-sm shadow-md">
                  Đảng Cộng sản VN
                </div>

              </div>

              <div className="mt-4 text-center">
                <span className="text-[10px] text-muted-gray font-semibold block italic">
                  *Rê chuột vào các ô để xem chú thích
                </span>
              </div>
            </div>

            {/* Metaphor: Party as the Helmsman */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-6 p-5 border border-dashed border-border-light rounded-xl bg-white">
              {/* Boat/Helm representation in SVG */}
              <div className="w-20 h-20 bg-slate-900 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M12 2a10 10 0 1 0 10 10M12 2a10 10 0 1 1-10 10" />
                  <circle cx="12" cy="12" r="3" fill="#2563EB" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-dark-navy text-sm sm:text-base">Đảng như &ldquo;Người cầm lái&rdquo;</h4>
                <p className="text-xs text-muted-gray leading-relaxed mt-1">
                  Đảng vạch lối đường đi, đóng vai trò lãnh đạo chèo lái con thuyền cách mạng. Nhưng để đưa thuyền vượt sóng gió cần sức mạnh cơ bắp của toàn thể Nhân dân trong khoang.
                </p>

                <div className="mt-3 flex gap-4 text-xs font-extrabold uppercase tracking-wider text-primary-blue">
                  <span>Đảng: Người cầm lái</span>
                  <span>&bull;</span>
                  <span>Nhân dân: Sức mạnh</span>
                  <span>&bull;</span>
                  <span>Cách mạng: Thắng lợi</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quote and quote blocks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <QuoteBlock
              quote="Cách mệnh trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi."
              source="Đường Kách mệnh, 1927"
            />
          </div>

        </div>

        {/* 14.3 National Unity Interactive Diagram */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border-light">

          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-very-light-blue text-primary-blue text-xs font-extrabold uppercase rounded border border-primary-blue/10 mb-3">
              Luận điểm sáng tạo 3
            </span>
            <h3 className="text-2xl font-bold text-dark-navy">
              CHIẾN LƯỢC ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray mt-2 max-w-xl mx-auto">
              Cách mệnh là việc chung cả dân chúng. Rê chuột vào các tầng lớp xung quanh nhân dân để tìm hiểu chiến lược liên minh rộng rãi của Người.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

            {/* Interactive Orbiting Circle Panel */}
            <div className="lg:col-span-7 flex justify-center py-10">
              <div className="relative w-100 h-100 rounded-full border border-dashed border-primary-blue/30 flex items-center justify-center">

                {/* Center Node */}
                <div className="w-24 h-24 rounded-full bg-primary-blue text-white flex flex-col items-center justify-center text-center shadow-lg relative z-10 border-4 border-white animate-pulse">
                  <Users className="w-6 h-6" />
                  <span className="font-extrabold text-sm uppercase mt-1 tracking-wider">
                    NHÂN DÂN
                  </span>
                </div>

                {/* Orbiting Nodes mapping */}
                {networkNodes.map((node, index) => {
                  const isHovered = hoveredNode?.id === node.id;

                  const angle = (index / networkNodes.length) * 2 * Math.PI - Math.PI / 2;

                  const radius = 45;

                  const left = 50 + radius * Math.cos(angle);
                  const top = 50 + radius * Math.sin(angle);

                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                      }}
                      className={`absolute w-32 min-h-16 px-3 py-3 text-center rounded-xl border text-sm font-bold tracking-wide cursor-pointer transition-all duration-300 z-10 -translate-x-1/2 -translate-y-1/2 ${isHovered
                          ? "bg-primary-blue border-primary-blue text-white scale-110 shadow-lg"
                          : "bg-white border-border-light text-dark-navy hover:border-primary-blue"
                        }`}
                    >
                      {node.label}
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Explanation Details Display Box */}
            <div className="lg:col-span-5">
              <div className="bg-bg-light border border-border-light rounded-xl p-6 min-h-[220px] flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-primary-blue tracking-widest border-b border-border-light pb-2 mb-3 flex items-center gap-1.5">
                    <Heart className="w-4 h-4 fill-primary-blue/20" />
                    <span>Lực lượng đại đoàn kết</span>
                  </h4>

                  {hoveredNode ? (
                    <div>
                      <h5 className="font-extrabold text-dark-navy text-base">
                        {hoveredNode.label}
                      </h5>
                      <p className="text-xs sm:text-sm text-text-dark leading-relaxed mt-2">
                        {hoveredNode.description}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-xs text-muted-gray font-medium">
                      Di chuột qua các vòng tròn liên kết ở bên trái để xem mô tả chi tiết chiến lược đoàn kết của Bác.
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-border-light text-[11px] text-muted-gray leading-normal">
                  <span className="font-extrabold text-dark-navy">Nền tảng cốt lõi: </span>
                  LIÊN MINH CÔNG NHÂN – NÔNG DÂN – TRÍ THỨC.
                </div>
              </div>
            </div>

          </div>

          {/* Relationship Footer Summary Block */}
          <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl border border-dashed border-primary-blue/30 bg-very-light-blue text-center">
            <span className="text-xs font-bold text-primary-blue">
              Hệ thống quan hệ: ĐẢNG LÃNH ĐẠO &rarr; NHÂN DÂN &rarr; ĐẠI ĐOÀN KẾT &rarr; SỨC MẠNH CÁCH MẠNG
            </span>
            <div className="text-sm font-['Noto_Serif'] italic text-dark-navy font-bold mt-2">
              &ldquo;Đảng lãnh đạo – Nhân dân là chủ thể – Đại đoàn kết tạo nên sức mạnh.&rdquo;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
