import React from "react";
import { useState } from "react";

import { Trans, useTranslation } from "react-i18next";
import ProjectDetails from "./ProjectDetails";

import projects from "../data/projectDetailsInfo";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Projects() {
  const { t, i18n } = useTranslation();

  const [ showAllProjects, setShowAllProjects ] = useState( false );

  return (
    <div id="projects" className="section-container light__accent">
      <div className="projects section">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="section-header">
            <p className="section-subtitle">
              <Trans i18nKey="projects.subtitle" />
            </p>
            <h2 className="section-title">
              <Trans i18nKey="projects.title" />
            </h2>
          </div>
        </AnimationOnScroll>

        <div className="projects__grid mt-4">
          {projects.map( ( project, index ) => {
            if ( showAllProjects || index <= 5 ) {
              return (
                <ProjectDetails project={project} index={index} key={index} />
              );
            }
            return <></>;
          } )}
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          {!showAllProjects ? (
            <p>
              <i
                onClick={() => setShowAllProjects( !showAllProjects )}
                className="fa-solid fa-ellipsis projects__icon"
              />
            </p>
          ) : (
            <></>
          )}
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Projects;
