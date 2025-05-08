// NavBar.tsx
"use client";

import React from "react";
import s from "./NavBar.module.css";
import { navigation } from "@/lib/dataset";
import { NavItem } from "@/components";

type Props = {
  active: number;
  setActive: (id: number) => void;
};

const NavBar = ({ active, setActive }: Props) => {
  const handleClick = (id: number) => {
    setActive(id);
    console.log(id);
  };

  return (
    <nav className={s.container}>
      {navigation.items.map((item) => (
        <NavItem
          key={`${item.label}${item.id}`}
          label={item.label}
          onClick={() => handleClick(item.id)}
          active={active === item.id}
        />
      ))}
    </nav>
  );
};

export default NavBar;
