"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, subtitle, children }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-navy/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl bg-white border border-border-light shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border-light bg-bg-light">
              <div>
                <h3 className="text-xl font-bold text-dark-navy sm:text-2xl">
                  {title}
                </h3>
                {subtitle && (
                  <p className="mt-1 text-sm text-muted-gray">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-gray hover:text-dark-navy hover:bg-border-light transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-blue"
                aria-label="Đóng cửa sổ"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 text-text-dark text-base leading-relaxed">
              {children}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border-light bg-bg-light flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg bg-primary-blue text-white font-medium hover:bg-light-blue active:scale-95 transition-all shadow-md cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
