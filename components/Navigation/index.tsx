"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import s from "./Navigation.module.css";
import { NavBar, SectionViewer } from "@/components";

const Navigation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = Number(searchParams.get("section")) || 1;

  const setActive = (query: number) => {
    router.push(`?section=${query}`);
  };

  return (
    <motion.div className={s.container}>
      <NavBar active={section} setActive={setActive} />
      <SectionViewer section={section} />
    </motion.div>
  );
};

export default Navigation;
