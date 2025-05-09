"use client";
import React from "react";
import { motion } from "framer-motion";
import s from "./SectionContact.module.css";
import { LineNumbers } from "@/components";
import { ReactSVG } from "react-svg";

const SectionContact = () => {
  const handleLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <motion.section className={s.container}>
      <LineNumbers>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={s.helper}
        >
          <h2>Contact me</h2>
          <div className={s.container__buttons}>
            <button
              className={s.container__buttons__wsp}
              onClick={() => handleLink("https://wa.me/5491122251843")}
            >
              <ReactSVG
                src="/icons/whatsapp.svg"
                wrapper="span"
                className={s.container__buttons__wsp__icon}
              />
            </button>
            <button
              className={s.container__buttons__email}
              onClick={() => handleLink("mailto:sebasalfieri@gmail.com")}
            >
              {" "}
              <ReactSVG
                src="/icons/email.svg"
                wrapper="span"
                className={s.container__buttons__email__icon}
              />
            </button>
            <button
              className={s.container__buttons__github}
              onClick={() => handleLink("https://github.com/SebasAlfieri")}
            >
              {" "}
              <ReactSVG
                src="/icons/github.svg"
                wrapper="span"
                className={s.container__buttons__github__icon}
              />
            </button>
            <button
              className={s.container__buttons__linkedin}
              onClick={() =>
                handleLink("https://www.linkedin.com/in/sebastianalfieri/")
              }
            >
              {" "}
              <ReactSVG
                src="/icons/linkedin.svg"
                wrapper="span"
                className={s.container__buttons__linkedin__icon}
              />
            </button>
          </div>
        </motion.div>
      </LineNumbers>
    </motion.section>
  );
};

export default SectionContact;
