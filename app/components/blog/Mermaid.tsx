"use client";

import React, { useEffect, useState, useId } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { PiMagnifyingGlassPlus, PiMagnifyingGlassMinus, PiArrowsOut } from "react-icons/pi";

// Helper component for controls
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="absolute bottom-4 right-4 flex gap-2 z-10">
      <button
        onClick={() => zoomIn()}
        className="p-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-subtle-dark rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-subtle-dark transition-colors text-stone-600 dark:text-stone-300"
        aria-label="Zoom in"
        title="Zoom In"
      >
        <PiMagnifyingGlassPlus />
      </button>
      <button
        onClick={() => zoomOut()}
        className="p-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-subtle-dark rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-subtle-dark transition-colors text-stone-600 dark:text-stone-300"
        aria-label="Zoom out"
        title="Zoom Out"
      >
        <PiMagnifyingGlassMinus />
      </button>
      <button
        onClick={() => resetTransform()}
        className="p-2 bg-white dark:bg-surface-dark border border-gray-200 dark:border-subtle-dark rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-subtle-dark transition-colors text-stone-600 dark:text-stone-300"
        aria-label="Reset zoom"
        title="Reset"
      >
        <PiArrowsOut />
      </button>
    </div>
  );
};

interface MermaidProps {
  code: string;
  caption?: string;
}

const Mermaid = ({ code, caption }: MermaidProps) => {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const id = useId().replace(/:/g, ""); // unique ID for mermaid
  const containerId = `mermaid-${id}`;

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        // Detect theme
        const isDark = document.documentElement.classList.contains("dark");

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "var(--font-jakarta)",
          themeVariables: {
            fontFamily: "var(--font-jakarta)",
            primaryColor: "#F59E0B",
            primaryTextColor: isDark ? "#FAFAF9" : "#1C1917",
            primaryBorderColor: "#F59E0B",
            lineColor: isDark ? "#A8A29E" : "#57534E",
            secondaryColor: isDark ? "#292524" : "#FFFFFF",
            tertiaryColor: isDark ? "#292524" : "#FFFFFF",
          }
        });

        const { svg } = await mermaid.render(containerId, code);
        setSvg(svg);
        setError(null);
      } catch (err) {
        console.error("Mermaid rendering failed:", err);
        setError("Failed to render diagram.");
      }
    };

    renderDiagram();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          renderDiagram();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [code, containerId]);

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm my-8">
        <p className="font-bold">Error rendering diagram</p>
        <p>{error}</p>
        <pre className="mt-2 text-xs overflow-auto bg-red-100 p-2 rounded">{code}</pre>
      </div>
    );
  }

  return (
    <figure className="my-8 flex flex-col items-center w-full">
        <div className="w-full border border-gray-100 dark:border-subtle-dark rounded-xl overflow-hidden bg-white dark:bg-surface-dark relative shadow-sm">
          {svg ? (
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={4}
              centerOnInit
            >
              <>
                <Controls />
                <TransformComponent
                  wrapperStyle={{ width: "100%", height: "100%", minHeight: "300px" }}
                  contentStyle={{ width: "100%" }}
                >
                  <div
                    className="w-full flex items-center justify-center p-4 mermaid-container"
                    dangerouslySetInnerHTML={{ __html: svg }}
                  />
                </TransformComponent>
              </>
            </TransformWrapper>
          ) : (
            <div className="w-full h-[300px] flex items-center justify-center text-gray-400 animate-pulse bg-gray-50 dark:bg-subtle-dark">
              Loading diagram...
            </div>
          )}
        </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Mermaid;
