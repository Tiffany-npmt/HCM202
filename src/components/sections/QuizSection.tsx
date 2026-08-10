"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, RotateCcw, ArrowUp, Check, X, ShieldQuestion } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { quizQuestions } from "@/data/quizData";

type QuizState = "start" | "question" | "result";

export default function QuizSection() {
  // States
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | "C" | "D" | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizState("question");
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsConfirmed(false);
    setScore(0);
  };

  const handleSelectAnswer = (optionKey: "A" | "B" | "C" | "D") => {
    if (isConfirmed) return; // Prevent changing after confirmation
    setSelectedAnswer(optionKey);
  };

  const handleConfirm = () => {
    if (!selectedAnswer) return;
    setIsConfirmed(true);
    
    // Check if correct
    const currentQ = quizQuestions[currentIdx];
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsConfirmed(false);
    } else {
      setQuizState("result");
    }
  };

  const scrollToTop = () => {
    const el = document.getElementById("section-1");
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

  // Helper for results page message
  const getResultMessage = (score: number) => {
    if (score === 7) return { title: "Xuất Sắc!", desc: "Bạn đã trả lời đúng tất cả 7/7 câu hỏi! Bạn đã nắm vững các luận điểm sáng tạo của Hồ Chí Minh." };
    if (score >= 5) return { title: "Rất Tốt!", desc: `Bạn trả lời đúng ${score}/7 câu hỏi. Sự hiểu biết của bạn về đề tài này rất sâu sắc!` };
    if (score >= 3) return { title: "Khá Tốt!", desc: `Bạn trả lời đúng ${score}/7 câu hỏi. Bạn nên xem kỹ lại một số luận điểm sáng tạo để trình bày tốt hơn.` };
    return { title: "Cố Lên!", desc: `Bạn trả lời đúng ${score}/7 câu hỏi. Hãy xem lại kiến thức các phần để ôn tập tốt hơn nhé!` };
  };

  const currentQuestion = quizQuestions[currentIdx];
  const progressPercent = ((currentIdx + (isConfirmed ? 1 : 0)) / quizQuestions.length) * 100;

  return (
    <section
      id="quiz"
      className="py-16 md:py-24 bg-white border-b border-border-light scroll-mt-18"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="🎯 THỬ THÁCH KIẾN THỨC"
          title="ÔN TẬP KIẾN THỨC CHUYÊN ĐỀ"
          subtitle="Hãy tự đánh giá sự hiểu biết của bạn về những luận điểm sáng tạo của Hồ Chí Minh thông qua 7 câu hỏi trắc nghiệm khách quan."
        />

        <div className="bg-bg-light border border-border-light rounded-2xl p-6 md:p-8 shadow-md min-h-[400px] flex flex-col justify-center select-none relative overflow-hidden">
          {/* Background grid pattern decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* 1. START STATE */}
            {quizState === "start" && (
              <motion.div
                key="start-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10 py-10"
              >
                <div className="w-16 h-16 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldQuestion className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-navy sm:text-2xl">
                  Bạn đã sẵn sàng tham gia ôn tập?
                </h3>
                <p className="text-sm text-muted-gray mt-3 max-w-sm mx-auto">
                  Trắc nghiệm gồm 7 câu hỏi chính xác từ học liệu gốc môn học Tư tưởng Hồ Chí Minh.
                </p>
                <button
                  onClick={startQuiz}
                  className="mt-8 px-8 py-3.5 bg-primary-blue hover:bg-light-blue text-white font-bold tracking-wide rounded-xl shadow-lg shadow-primary-blue/20 active:scale-95 transition-all cursor-pointer inline-block"
                >
                  BẮT ĐẦU ÔN TẬP
                </button>
              </motion.div>
            )}

            {/* 2. QUESTION ACTIVE STATE */}
            {quizState === "question" && currentQuestion && (
              <motion.div
                key={`q-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Progress bar and Question index header */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                  <span>CÂU HỎI {currentQuestion.id} / 7</span>
                  <span>{Math.round(progressPercent)}% Hoàn thành</span>
                </div>
                <div className="w-full h-1.5 bg-border-light rounded-full mb-6 overflow-hidden">
                  <div
                    className="h-full bg-primary-blue smooth-transition"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-lg font-bold text-dark-navy leading-snug">
                  {currentQuestion.question}
                </h3>

                {/* Option Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                  {(["A", "B", "C", "D"] as const).map((key) => {
                    const optionText = currentQuestion.options[key];
                    const isSelected = selectedAnswer === key;
                    const isCorrectAnswer = currentQuestion.correctAnswer === key;

                    // Class names logic based on confirmed state
                    let btnStyle = "border-border-light bg-white text-text-dark hover:border-primary-blue/30";
                    if (isSelected && !isConfirmed) {
                      btnStyle = "border-primary-blue bg-very-light-blue text-primary-blue font-semibold ring-1 ring-primary-blue/20";
                    } else if (isConfirmed) {
                      if (isCorrectAnswer) {
                        btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold ring-1 ring-emerald-500/20";
                      } else if (isSelected && !isCorrectAnswer) {
                        btnStyle = "border-rose-500 bg-rose-50 text-rose-800 font-semibold ring-1 ring-rose-500/20";
                      } else {
                        btnStyle = "border-border-light bg-white text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={key}
                        disabled={isConfirmed}
                        onClick={() => handleSelectAnswer(key)}
                        className={`flex items-start gap-3 p-4 rounded-xl border text-left text-sm smooth-transition w-full cursor-pointer focus:outline-none ${btnStyle}`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isSelected && !isConfirmed
                            ? "bg-primary-blue text-white"
                            : isConfirmed && isCorrectAnswer
                            ? "bg-emerald-500 text-white"
                            : isConfirmed && isSelected && !isCorrectAnswer
                            ? "bg-rose-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}>
                          {key}
                        </span>
                        <span className="leading-snug">{optionText}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Answer Feedback Banner (after confirmation) */}
                {isConfirmed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-5 rounded-xl border text-sm ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-800"
                        : "bg-rose-500/10 border-rose-500/30 text-rose-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold mb-1.5">
                      {selectedAnswer === currentQuestion.correctAnswer ? (
                        <>
                          <Check className="w-5 h-5 text-emerald-600" />
                          <span>✓ Chính xác!</span>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 text-rose-600" />
                          <span>✕ Chưa chính xác</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      <span className="font-bold text-dark-navy">Đáp án đúng: </span>
                      {currentQuestion.correctAnswer} - {currentQuestion.options[currentQuestion.correctAnswer]}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      <span className="font-bold text-dark-navy">Giải thích: </span>
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Confirm/Next Button controls */}
                <div className="mt-8 flex justify-end">
                  {!isConfirmed ? (
                    <button
                      onClick={handleConfirm}
                      disabled={!selectedAnswer}
                      className={`px-6 py-3 rounded-lg font-bold tracking-wide text-xs sm:text-sm cursor-pointer shadow-md select-none transition-all ${
                        selectedAnswer
                          ? "bg-primary-blue text-white hover:bg-light-blue active:scale-95"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      XÁC NHẬN ĐÁP ÁN
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-primary-blue hover:bg-light-blue text-white font-bold tracking-wide text-xs sm:text-sm cursor-pointer shadow-md active:scale-95 transition-all"
                    >
                      {currentIdx < quizQuestions.length - 1 ? "CÂU TIẾP THEO" : "XEM KẾT QUẢ"}
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* 3. RESULTS SCREEN STATE */}
            {quizState === "result" && (
              <motion.div
                key="result-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10 py-10"
              >
                <div className="w-20 h-20 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10" />
                </div>
                
                {/* Score badge with simple counting animation simulated */}
                <h3 className="text-4xl sm:text-5xl font-extrabold text-primary-blue tracking-tight">
                  {score} / 7
                </h3>

                <h4 className="text-xl font-bold text-dark-navy mt-4">
                  {getResultMessage(score).title}
                </h4>
                
                <p className="text-sm text-muted-gray mt-2 max-w-md mx-auto leading-relaxed">
                  {getResultMessage(score).desc}
                </p>

                {/* Score Controls */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={startQuiz}
                    className="px-6 py-3 bg-primary-blue hover:bg-light-blue text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>CHƠI LẠI</span>
                  </button>

                  <button
                    onClick={scrollToTop}
                    className="px-6 py-3 bg-white border border-border-light hover:border-primary-blue/30 text-primary-blue font-bold text-xs tracking-wider uppercase rounded-xl shadow-sm active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowUp className="w-4 h-4" />
                    <span>XEM LẠI KIẾN THỨC</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
