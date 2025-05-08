"use client";
import React from "react";
import { motion } from "framer-motion";
import s from "./TopMenu.module.css";
import { ReactSVG } from "react-svg";

const TopMenu = () => {
  return (
    <motion.div className={s.container}>
      <motion.div className={s.container__system}>
        <p>
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </p>
      </motion.div>
      <div className={s.container__search}>
        <ReactSVG
          src="/icons/magnifying.svg"
          wrapper="span"
          className={s.container__search__icon}
        />
        <p>sebastian-alfieri</p>
      </div>
    </motion.div>
  );
};

export default TopMenu;
