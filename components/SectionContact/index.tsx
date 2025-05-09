import React from "react";
import { motion } from "framer-motion";
import s from "./SectionContact.module.css";
import { LineNumbers } from "@/components";

const SectionContact = () => {
  return (
    <motion.section
      className={s.container}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.3 }}
    >
      <LineNumbers>
        <h2>Contact me</h2>
      </LineNumbers>
    </motion.section>
  );
};

export default SectionContact;
