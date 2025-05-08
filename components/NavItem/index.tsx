"use client";
import React from "react";
import s from "./NavItem.module.css";
import { ReactSVG } from "react-svg";
import cs from "classnames";

const NavItem = ({
  onClick,
  label,
  active,
}: {
  onClick: () => void;
  label: string;
  active: boolean;
}) => {
  const button = cs(s.container, {
    [s.container__active]: active,
  });

  return (
    <button onClick={onClick} className={button}>
      <ReactSVG
        src="/icons/react.svg"
        wrapper="span"
        className={s.container__icon}
      />
      {label}
    </button>
  );
};

export default NavItem;
