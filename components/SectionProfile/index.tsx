import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProfile.module.css";
import Image from "next/image";
import { LineNumbers } from "@/components";
import { experience } from "@/lib/dataset";

const SectionProfile = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <LineNumbers>
        <h1>Front End Developer</h1>
        <div className={s.container__topside}>
          <Image
            className={s.container__topside__image}
            src={"/images/me-pixelated.jpg"}
            width={1199}
            height={900}
            alt="Me, hello!"
          />

          <div className={s.container__topside__text}>
            <h2 className={s.container__topside__text__title}>
              {"// "}Hello!
              <br />
              {"<--"} This is me
            </h2>
          </div>
        </div>
        <div className={s.container__data}>
          <h3>Let&apos;s make this simple</h3>
          <article className={s.container__data__knowledges}>
            <ul>
              Knowledges{" "}
              <span>
                (<em>+2years experience</em>)
              </span>
              <li>
                JavaScript<span>,</span>
              </li>
              <li>
                ReactJs<span>,</span>
              </li>
              <li>
                NextJs<span>,</span>
              </li>
              <li>
                TypeScript<span>,</span>
              </li>
              <li>
                NextJs<span>,</span>
              </li>
              <li>
                Api Integrations<span>,</span>
              </li>
              <li>Metrics</li>
            </ul>
          </article>
          <article className={s.container__data__experience}>
            <ul>
              Experiences{" "}
              {/* <span>
                (<em>+2years experience</em>)
              </span> */}
              {experience.items.map((item) => (
                <li
                  key={item.company}
                  className={s.container__data__experience__first}
                >
                  <ul>
                    {" "}
                    <span
                      className={s.container__data__experience__first__sign}
                    >
                      {"{"}
                    </span>
                    <li>
                      company: <span>{item.company}</span>
                    </li>
                    <li>
                      role:
                      <span> {item.role}</span>
                    </li>
                    <li>
                      info: <span>{item.info}</span>
                    </li>
                    <li>
                      dates: <span>{item.dates}</span>
                    </li>
                    <span
                      className={s.container__data__experience__first__sign}
                    >
                      {"}"}
                    </span>
                  </ul>
                  {/* <br /> */}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </LineNumbers>
    </motion.div>
  );
};

export default SectionProfile;
