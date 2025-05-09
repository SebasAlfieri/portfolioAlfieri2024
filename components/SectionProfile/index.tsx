import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProfile.module.css";
import Image from "next/image";

const SectionProfile = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className={s.container__topside}></div>

      <Image
        className={s.container__topside__image}
        src={"/images/me-pixelated.jpg"}
        width={1199}
        height={900}
        alt="Me, hello!"
      />

      <div className={s.container__topside__text}>
        <h1 className={s.container__topside__text__title}>
          Hello, I&apos;m John Doe
        </h1>
      </div>
    </motion.div>
  );
};

export default SectionProfile;
