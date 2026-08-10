"use client";

import React, { useRef, useState } from "react";
import { Play, FileVideo, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function IntroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Không thể phát video:", error);
    }
  };

  const handlePauseVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const toggleVideo = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await handlePlayVideo();
    } else {
      handlePauseVideo();
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section
      id="intro-video"
      className="relative py-20 sm:py-24 bg-bg-light overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-blue/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Giới thiệu chủ đề"
          title="HÀNH TRÌNH TƯ TƯỞNG"
          subtitle="Nhìn lại bối cảnh lịch sử và hành trình hình thành tư tưởng Hồ Chí Minh về độc lập dân tộc"
        />

        <motion.div
          initial={{ opacity: 0, y: 30, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-100px", }}
          transition={{ duration: 0.6, ease: "easeOut", }}
          className="max-w-5xl mx-auto mt-10"
        >

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-dark-navy border border-border-light shadow-2xl group">
            {/* ==========================================
                LOCAL VIDEO
            ========================================== */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              poster="/images/intro-hcm-poster.jpg"
              preload="metadata"
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source
                src="/video/intro-hcm.mp4"
                type="video/mp4"
              />

              Trình duyệt của bạn không hỗ trợ phát video.
            </video>

            {!isPlaying && (
              <div
                className=" absolute inset-0 bg-dark-navy/45 transition-opacity duration-300 pointer-events-none" />
            )}

            {/* ==========================================
                PLAY BUTTON
            ========================================== */}
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlayVideo}
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  z-20
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-full
                  bg-primary-blue
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-light-blue
                  hover:scale-110
                  active:scale-95
                  focus:outline-none
                  focus:ring-4
                  focus:ring-primary-blue/30
                "
                aria-label="Phát video giới thiệu"
              >
                <Play
                  className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1 "
                />
              </button>
            )}

            {!isPlaying && (
              <div
                className="absolute left-0 right-0 bottom-0 z-10 p-5 sm:p-7 pointer-events-none"
              >
                <div className="max-w-2xl">
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
                    Độc lập dân tộc và cách mạng giải phóng dân tộc
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-200 font-medium">
                    Khám phá hành trình hình thành và những luận điểm
                    sáng tạo trong tư tưởng Hồ Chí Minh.
                  </p>
                </div>
              </div>
            )}

            <div
              className="absolute top-4 left-4 z-20 bg-dark-navy/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[11px]
                font-bold text-white flex items-center gap-2 pointer-events-none"
            >
              <FileVideo className="w-3.5 h-3.5 text-light-blue" />

              <span>GIỚI THIỆU CHỦ ĐỀ</span>
            </div>

            {isPlaying && (
              <button
                type="button"
                onClick={handleFullscreen}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-lg bg-dark-navy/70 backdrop-blur-sm border border-white/10 text-white
                  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-primary-blue"
                aria-label="Xem toàn màn hình"
              >
                <Maximize className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* LEFT */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-very-light-blue border border-primary-blue/10 flex items-center justify-center">
                <FileVideo className="w-4 h-4text-primary-blue" />
              </div>

              <div>
                <p className="text-sm font-bold text-text-dark">
                  Video giới thiệu chủ đề
                </p>

                <p className="text-xs text-muted-gray mt-0.5">
                  Hành trình tư tưởng Hồ Chí Minh
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-gray">
              <span>Thời lượng</span>

              <span className=" px-2.5 py-1 rounded-md bg-very-light-blue text-primary-blue">
                03:45
              </span>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            SHORT DESCRIPTION
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, margin: "-80px", }}
          transition={{duration: 0.5, delay: 0.15,}}
          className=" max-w-3xl mx-auto mt-10 text-center"
        >
          <p className="text-sm sm:text-base leading-relaxed text-muted-gray">
            Video mở đầu giúp khái quát bối cảnh lịch sử, quá trình
            hình thành tư tưởng và những nội dung chính sẽ được trình
            bày trong các phần tiếp theo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}