"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./LineNumbers.module.css";

interface LineNumbersProps {
  children: React.ReactNode;
}

const LineNumbers: React.FC<LineNumbersProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numberOfLines, setNumberOfLines] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateLineCount = () => {
      const viewportHeight = window.innerHeight;
      const containerHeight = containerRef.current?.offsetHeight || 0;
      const lineHeight = 24; // altura de cada línea en píxeles
      const minLines = Math.ceil(viewportHeight / lineHeight);
      const lines = Math.max(minLines, Math.ceil(containerHeight / lineHeight));
      setNumberOfLines(lines);
    };

    const resizeObserver = new ResizeObserver(updateLineCount);
    resizeObserver.observe(containerRef.current);

    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener("resize", updateLineCount);

    // Actualizar inicialmente
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
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default LineNumbers;
