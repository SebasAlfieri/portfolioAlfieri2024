import React from "react";
import s from "./SectionViewer.module.css";
import SectionProfile from "../SectionProfile";
import SectionProjects from "../SectionProjects";
import SectionContact from "../SectionContact";

const SectionViewer = ({ section }: { section: number }) => {
  return (
    <div className={s.container}>
      {section === 1 && <SectionProfile />}
      {section === 2 && <SectionProjects />}
      {section === 3 && <SectionContact />}
    </div>
  );
};

export default SectionViewer;
