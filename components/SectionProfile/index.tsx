import React from "react";
import { motion } from "framer-motion";
import s from "./SectionProfile.module.css";
import Image from "next/image";
import { LineNumbers } from "@/components";
import { experience } from "@/lib/dataset";

const SectionProfile = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/cv-sebastian-alfieri.pdf`;
    link.download = "cv-sebastian-alfieri.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section className={s.container}>
      {/* <a href="/cv-sebastian-alfieri.pdf" download className={s.container__cv}>
        CV
      </a> */}
      <button onClick={() => handleDownload()} className={s.container__cv}>
        CV
      </button>
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
                  &quot;JavaScript&quot;<span>,</span>
                </li>
                <li>
                  &quot;ReactJs&quot;<span>,</span>
                </li>
                <li>
                  &quot;NextJs&quot;<span>,</span>
                </li>
                <li>
                  &quot;TypeScript&quot;<span>,</span>
                </li>
                <li>
                  &quot;NextJs&quot;<span>,</span>
                </li>
                <li>
                  &quot;Api Integrations&quot;<span>,</span>
                </li>
                <li>&quot;Metrics&quot;</li>
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
        </motion.div>
      </LineNumbers>
    </motion.section>
  );
};

export default SectionProfile;
