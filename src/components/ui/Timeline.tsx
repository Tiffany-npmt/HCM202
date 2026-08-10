"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TimelineMilestone } from "@/data/timelineData";

interface TimelineProps {
  milestones: TimelineMilestone[];
  onNodeClick: (milestone: TimelineMilestone) => void;
}

export default function Timeline({ milestones, onNodeClick }: TimelineProps) {
  // Animation settings
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Horizontal Timeline (Desktop & Tablet) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:grid md:grid-cols-6 relative mt-16 mb-16 px-4"
      >

        {/* Highlighted progress line (simulated) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 right-0 top-[72px] h-[4px] bg-gradient-to-r from-primary-blue to-light-blue rounded-full origin-left z-0"
        />

        {milestones.map((m) => (
          <motion.div
            key={m.year}
            variants={itemVariants}
            onClick={() => onNodeClick(m)}
            className="relative z-10 flex flex-col items-center text-center cursor-pointer group min-w-0 px-2"
          >
            {/* Year Badge */}
            <div className="h-[46px] flex items-center justify-center">
              <span className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-very-light-blue border border-primary-blue/20 text-primary-blue text-lg font-extrabold tracking-wide whitespace-nowrap transition-all duration-300 group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue group-hover:shadow-md group-hover:scale-105">
                {m.year}
              </span>
            </div>

            {/* Timeline Dot */}
            <div className="relative z-20 w-10 h-10 -mt-[1px] rounded-full border-[6px] border-white bg-slate-200 shadow-md flex items-center justify-center transition-all duration-300 group-hover:bg-primary-blue group-hover:border-very-light-blue group-hover:shadow-lg group-hover:scale-125">
              <div className="w-3 h-3 rounded-full bg-muted-gray transition-all duration-300 group-hover:bg-white" />
            </div>

            {/* Event Name */}
            <div className="mt-7 w-full min-h-[60px] flex flex-col items-center justify-start">
              <h4 className="max-w-[180px] text-sm lg:text-base font-extrabold leading-snug text-dark-navy transition-colors duration-300 group-hover:text-primary-blue">
                {m.event}
              </h4>
            </div>

            {/* Click CTA */}
            <span className="mt-3 text-[10px] font-bold text-primary-blue opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-all duration-300">
              Chi tiết <ArrowRight className="w-3 h-3" />
            </span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
