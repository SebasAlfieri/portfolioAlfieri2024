import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProjects.module.css";
import { LineNumbers, ProjectItem } from "@/components";
import { projects } from "@/lib/dataset";

const SectionProjects = () => {
  return (
    <motion.section className={s.container}>
      <LineNumbers>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h2>Some Projects</h2>
          <article className={s.container__projects}>
            {projects.items.map((item) => (
              <ProjectItem key={item.link} {...item} />
            ))}
          </article>
        </motion.div>
      </LineNumbers>
    </motion.section>
  );
};

export default SectionProjects;
