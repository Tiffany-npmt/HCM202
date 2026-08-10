"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface FlowNode {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

interface FlowDiagramProps {
  nodes: FlowNode[];
  highlightColor?: string;
  isDarkTheme?: boolean;
}

export default function FlowDiagram({ nodes, highlightColor = "bg-primary-blue", isDarkTheme = false }: FlowDiagramProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-4 my-8"
    >
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;

        return (
          <React.Fragment key={index}>
            {/* Flow Node Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`flex flex-col items-center justify-center p-5 rounded-xl border text-center min-w-[200px] max-w-[240px] w-full shadow-md smooth-transition ${
                isDarkTheme
                  ? "bg-slate-900 border-primary-blue/30 text-white hover:border-light-blue"
                  : "bg-white border-border-light text-text-dark hover:border-primary-blue"
              }`}
            >
              {node.icon && (
                <div className="mb-3 text-primary-blue bg-very-light-blue p-2.5 rounded-full">
                  {node.icon}
                </div>
              )}
              <div className="text-xs uppercase tracking-widest font-bold text-muted-gray mb-1">
                Bước {index + 1}
              </div>
              <h4 className="text-sm sm:text-base font-bold leading-tight">
                {node.title}
              </h4>
              {node.subtitle && (
                <p className="mt-1 text-xs text-muted-gray">
                  {node.subtitle}
                </p>
              )}
            </motion.div>

            {/* Connecting Arrow */}
            {!isLast && (
              <motion.div
                variants={arrowVariants}
                className="flex items-center justify-center text-muted-gray py-2 md:py-0 md:px-2"
              >
                {/* Horizontal Arrow for Desktop */}
                <ArrowRight className="hidden md:block w-6 h-6 animate-pulse text-primary-blue" />
                {/* Vertical Arrow for Mobile */}
                <ArrowDown className="block md:hidden w-6 h-6 animate-pulse text-primary-blue" />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
