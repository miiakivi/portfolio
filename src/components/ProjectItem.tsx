import React from "react";
import { Trans, useTranslation } from "react-i18next";

interface ProjectDetailsLanguages {
    en : {
        title : string;
        description : string;
    },
    fin : {
        title : string;
        description : string;
    }
}

interface ProjectDetailsProps {
    project : {
        image : string;
        url : string;
        text : ProjectDetailsLanguages;
    }
}

function ProjectDetails( {project} : ProjectDetailsProps ) {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.resolvedLanguage;
    const projectText = currentLanguage === 'en' ? project.text.en : project.text.fin;

    return (
        <div style={ {backgroundImage: `url(${ project.image })`} } className="projects__item">
            <div className="projects__item-overlay">
                <div className="overlay__text">
                    <h5>{ projectText.title }</h5>
                    <p>{ projectText.description }</p>
                    <div>
                        <a className="overlay__link " href={ project.url }>
                            <Trans i18nKey="projectDetails.button"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
