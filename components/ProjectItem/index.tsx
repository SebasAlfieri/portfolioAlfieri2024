"use client";
import React, { FC, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import s from "./ProjectItem.module.css";
import { projectsDataSetType } from "@/types/model";
import cs from "classnames";

const ProjectItem: FC<projectsDataSetType> = ({
  company,
  name,
  description,
  technologies,
  link,
}) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [lineCount, setLineCount] = useState(0);

  // Función para calcular cuántos caracteres // caben en el contenedor
  const calculateLines = () => {
    const container = containerRef.current;
    if (container) {
      const lineHeight = 20; // Ajusta según el tamaño de la línea
      const containerHeight = container.offsetHeight;
      setLineCount(Math.floor(containerHeight / lineHeight));
    }
  };

  // Calcular el número de líneas al cargar o cuando se redimensione
  useEffect(() => {
    calculateLines();
    window.addEventListener("resize", calculateLines);
    return () => window.removeEventListener("resize", calculateLines);
  }, []);

  const handleClick = () => {
    window.open(link, "_blank");
  };

  const container = cs(s.container, {
    [s.container__contenidos]: company === 1,
    [s.container__metros]: company === 2,
    [s.container_freelance]: company === 3,
  });

  // const slashes = "//".repeat(lineCount);

  return (
    <motion.button
      ref={containerRef}
      className={container}
      onClick={handleClick}
    >
      <div className={s.container__lineNumbers}>
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i} className={s.container__lineNumbers__line}>
            {"//"}
          </div>
        ))}
      </div>
      <div className={s.container__project}>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.button>
  );
};

export default ProjectItem;
