import React from "react";
import { Quote } from "lucide-react";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  source?: string;
  isDarkTheme?: boolean;
}

export default function QuoteBlock({ quote, author = "Hồ Chí Minh", source, isDarkTheme = false }: QuoteBlockProps) {
  return (
    <div
      className={`relative p-8 md:p-10 rounded-2xl overflow-hidden border ${isDarkTheme
          ? "bg-slate-900 border-primary-blue/30 text-white shadow-xl"
          : "bg-white border-border-light text-text-dark shadow-md"
        }`}
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 left-4 opacity-10">
        <Quote className={`w-16 h-16 ${isDarkTheme ? "text-light-blue" : "text-primary-blue"}`} />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full">
        <p className="text-xl md:text-2xl font-['Noto_Serif'] italic font-medium leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className={`w-8 h-0.5 ${isDarkTheme ? "bg-light-blue" : "bg-primary-blue"}`} />
          <div className="text-sm font-semibold tracking-wide">
            <span className={isDarkTheme ? "text-white" : "text-dark-navy"}>
              {author}
            </span>
            {source && (
              <span className={`font-normal ${isDarkTheme ? "text-slate-400" : "text-muted-gray"}`}>
                {" "}
                &bull; {source}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
