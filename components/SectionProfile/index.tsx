import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProfile.module.css";
import Image from "next/image";
import { LineNumbers } from "@/components";
import { experience, familiarities, skills } from "@/lib/dataset";

const SectionProfile = () => {
  return (
    <motion.section className={s.container}>
      <a href="/CV-SEBASTIAN-ALFIERI.pdf" download className={s.container__cv}>
        CV
      </a>
      <LineNumbers>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1>Front End Developer</h1>
          <div className={s.container__topside}>
            <Image
              className={s.container__topside__image}
              src={"/images/me.jpg"}
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
              <p>
                {" "}
                Knowledges{" "}
                <span>
                  (<em>+2years experience</em>){" "}
                  <span className={s.equal}>=</span>
                  {" ["}
                </span>
              </p>
              <ul>
                {skills.items.map((skill, index) => (
                  <li key={skill.id}>
                    &quot;{skill.name}&quot;
                    {index < skills.items.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>{" "}
              <span>{"]"}</span>
            </article>
            <article className={s.container__data__experience}>
              <p>
                Experiences <span className={s.equal}>=</span>
                <span>{" ["}</span>{" "}
              </p>{" "}
              <div>
                {experience.items.map((item, index) => (
                  <div
                    key={item.company}
                    className={s.container__data__experience__first}
                  >
                    <span
                      className={s.container__data__experience__first__sign}
                    >
                      {"{"}
                    </span>
                    <ul>
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
                    </ul>
                    <span
                      className={s.container__data__experience__first__sign}
                    >
                      {"}"}
                      {index < experience.items.length - 1 && <p>,</p>}
                    </span>
                    {/* <br /> */}
                  </div>
                ))}{" "}
                <span>{"]"}</span>
              </div>
            </article>
            <article className={s.container__data__knowledges}>
              <p>
                Familiar with <span className={s.equal}>=</span>{" "}
                <span>{" ["}</span>
              </p>
              <ul>
                {familiarities.items.map((skill, index) => (
                  <li key={skill.id}>
                    &quot;{skill.name}&quot;
                    {index < familiarities.items.length - 1 && <span>,</span>}
                  </li>
                ))}
              </ul>
              <span>{"]"}</span>
            </article>
          </div>
        </motion.div>
      </LineNumbers>
    </motion.section>
  );
};

export default SectionProfile;
