"use client";

import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = React.useId();

  return (
    <span className="relative inline-block">
      <span
        aria-describedby={tooltipId}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="cursor-help decoration-dashed decoration-stone-400 decoration-2 underline-offset-4 underline"
        tabIndex={0}
      >
        {children}
      </span>
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute z-10 w-64 p-3 mt-2 text-sm text-stone-100 bg-stone-900 rounded-lg shadow-xl dark:bg-stone-700 dark:text-white"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {content}
          <div className="absolute top-0 left-1/2 -ml-1 -mt-1 w-2 h-2 bg-stone-900 dark:bg-stone-700 rotate-45 transform" />
        </div>
      )}
    </span>
  );
}
