import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProjects.module.css";

const SectionProjects = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      projects
    </motion.div>
  );
};

export default SectionProjects;
