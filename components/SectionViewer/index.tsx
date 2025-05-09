import React from "react";
import s from "./SectionViewer.module.css";
import SectionProfile from "../SectionProfile";
import SectionProjects from "../SectionProjects";
import SectionContact from "../SectionContact";

const SectionViewer = ({ section }: { section: string }) => {
  return (
    <div className={s.container}>
      {section === "profile" && <SectionProfile />}
      {section === "projects" && <SectionProjects />}
      {section === "contact" && <SectionContact />}
    </div>
  );
};

export default SectionViewer;
