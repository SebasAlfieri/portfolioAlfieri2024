"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import s from "./Navigation.module.css";
import { NavBar, SectionViewer } from "@/components";

const Navigation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get("section") || "profile";

  const setActive = (link: string) => {
    router.push(`?section=${link}`);
  };

  return (
    <motion.article className={s.container}>
      <NavBar active={section} setActive={setActive} />
      <SectionViewer section={section} />
    </motion.article>
  );
};

export default Navigation;
