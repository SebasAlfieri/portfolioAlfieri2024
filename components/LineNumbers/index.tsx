"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./LineNumbers.module.css";

interface LineNumbersProps {
  children: React.ReactNode;
}

const LineNumbers: React.FC<LineNumbersProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [numberOfLines, setNumberOfLines] = useState(0);

  useEffect(() => {
    const updateLineCount = () => {
      const lineHeight = 24; // o el valor real de tu CSS
      const contentHeight = contentRef.current?.scrollHeight || 0;
      const lines = Math.ceil(contentHeight / lineHeight);
      setNumberOfLines(lines);
    };

    if (!contentRef.current) return;

    const resizeObserver = new ResizeObserver(updateLineCount);
    resizeObserver.observe(contentRef.current);

    window.addEventListener("resize", updateLineCount);
    updateLineCount();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLineCount);
    };
  }, []);

  return (
    <div ref={containerRef} className={s.container}>
      <div className={s.lineNumbers}>
        {Array.from({ length: numberOfLines }, (_, i) => (
          <div key={i} className={s.lineNumber}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className={s.content} ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default LineNumbers;
