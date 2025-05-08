// NavBar.tsx
"use client";

import React from "react";
import s from "./NavBar.module.css";
import { navigation } from "@/lib/dataset";
import { NavItem } from "@/components";

type Props = {
  active: string;
  setActive: (link: string) => void;
};

const NavBar = ({ active, setActive }: Props) => {
  const handleClick = (link: string) => {
    setActive(link);
    console.log(link);
  };

  return (
    <nav className={s.container}>
      {navigation.items.map((item) => (
        <NavItem
          key={`${item.label}${item.id}`}
          label={item.label}
          onClick={() => handleClick(item.link)}
          active={active === item.link}
        />
      ))}
    </nav>
  );
};

export default NavBar;
