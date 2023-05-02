import { useState } from "react";

import { Trans } from "react-i18next";
import ProjectDetails from "./ProjectDetails";

import projects from "../data/projectDetailsInfo";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Projects() {
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

        <div className="star-container">
          <div className="star">
            <span className="number">1</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            error. Nemo porro dolores impedit veritatis. Omnis iusto, ab,
            quaerat dolore porro fugit libero quo harum labore eligendi dolorum
            debitis sunt.
          </p>
        </div>

        <div className="projects__grid mt-4">
          {projects.map( ( project, index ) => {
            if ( showAllProjects || index <= 5 ) {
              return <ProjectDetails project={project} />;
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
