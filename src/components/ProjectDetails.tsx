import { AnimationOnScroll } from "react-animation-on-scroll";
import { Trans, useTranslation } from "react-i18next";

import type { ProjectDetails as ProjectDetailsProps } from "../../types";

function ProjectDetails( { project }: ProjectDetailsProps ) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const projectText =
    currentLanguage === "en" ? project.text.en : project.text.fin;

  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className="projects__item"
      >
        <Star favorite={project.favorite}></Star>
        <div className="projects__item-overlay">
          <div className="overlay__text ">
            <h5>{projectText.title}</h5>
            <p>{projectText.description}</p>
            <div className="mt-4">
              <a className="overlay__link " href={project.url}>
                <Trans i18nKey="projectDetails.button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

interface StarProps {
  favorite: boolean | undefined;
}

function Star( { favorite }: StarProps ) {
  if ( favorite ) {
    return (
      <div className="star">
        <span>#1</span>
      </div>
    );
  }
  return <></>;
}

export default ProjectDetails;
