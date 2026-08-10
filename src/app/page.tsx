"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroVideoSection from "@/components/sections/IntroVideoSection";
import Section01 from "@/components/sections/Section01";
import Section02 from "@/components/sections/Section02";
import Section03 from "@/components/sections/Section03";
import Section04 from "@/components/sections/Section04";
import QuizSection from "@/components/sections/QuizSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress and Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Area */}
        <HeroSection />

        {/* Video Presentation Placeholder */}
        <IntroVideoSection />

        {/* Slide 1: Independence & Happiness (Member 1) */}
        <Section01 />

        {/* Slide 2: Real Independence & Road (Member 2) */}
        <Section02 />

        {/* Slide 3: Party Leadership & National Unity (Member 3) */}
        <Section03 />

        {/* Slide 4: Active Colonial Revolution & Violence (Member 4) */}
        <Section04 />

        {/* Knowledge Assessment Section */}
        <QuizSection />
      </main>

      {/* Footer Branding Area */}
      <Footer />
    </div>
  );
}
