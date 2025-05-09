import React from "react";
import { motion } from "framer-motion";
import s from "./SectionContact.module.css";

const SectionContact = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      contact
    </motion.div>
  );
};

export default SectionContact;
