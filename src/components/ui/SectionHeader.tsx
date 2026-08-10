import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  isDarkTheme?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, isDarkTheme = false }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 ${
          isDarkTheme
            ? "bg-primary-blue/20 text-light-blue border border-primary-blue/30"
            : "bg-very-light-blue text-primary-blue border border-primary-blue/10"
        }`}
      >
        {badge}
      </span>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl ${
          isDarkTheme ? "text-white" : "text-dark-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-3xl mx-auto text-lg md:text-xl font-normal leading-relaxed ${
            isDarkTheme ? "text-slate-300" : "text-muted-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 w-24 h-1 mx-auto rounded-full ${
          isDarkTheme ? "bg-light-blue" : "bg-primary-blue"
        }`}
      />
    </div>
  );
}
