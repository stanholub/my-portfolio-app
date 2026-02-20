"use client";

import React, { useState, useRef, useLayoutEffect } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipId = React.useId();

  useLayoutEffect(() => {
    if (isVisible && tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const padding = 16; // Maintain some padding from edge

      // Calculate the position as if offset was 0
      const rightEdgeUnadjusted = rect.right - offset;
      const leftEdgeUnadjusted = rect.left - offset;

      let newOffset = 0;

      // Check right overflow
      if (rightEdgeUnadjusted > viewportWidth - padding) {
        newOffset = -(rightEdgeUnadjusted - viewportWidth + padding);
      }
      // Check left overflow
      else if (leftEdgeUnadjusted < padding) {
        newOffset = padding - leftEdgeUnadjusted;
      }

      if (newOffset !== offset) {
        setOffset(newOffset);
      }
    }
  }, [isVisible, offset]);

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
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className="absolute z-10 w-64 p-3 mt-2 text-sm text-stone-100 bg-stone-900 rounded-lg shadow-xl dark:bg-stone-700 dark:text-white"
          style={{
            left: "50%",
            transform: `translateX(calc(-50% + ${offset}px))`,
          }}
        >
          {content}
          <div
            className="absolute top-0 left-1/2 -ml-1 -mt-1 w-2 h-2 bg-stone-900 dark:bg-stone-700 transform"
            style={{
              transform: `translateX(${-offset}px) rotate(45deg)`,
            }}
          />
        </div>
      )}
    </span>
  );
}
