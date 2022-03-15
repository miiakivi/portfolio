import React from "react";

import { Trans, useTranslation } from 'react-i18next';
import ProjectDetails from "./ProjectDetails";

import projects from "../projectInfo/projectDetailsInfo";
function Projects() {
    const {t, i18n} = useTranslation();

    return (
        <div id="projects" className="section-container light__accent">
            <div className="projects section">
                <div className="section-header">
                    <p className="section-subtitle">
                        <Trans i18nKey="projects.subtitle"/>
                    </p>
                    <h2 className="section-title">
                        <Trans i18nKey="projects.title"/>
                    </h2>
                </div>

                <div className="projects__flex">
                    { projects.map( project  => {
                        return <ProjectDetails project={ project }/>
                    } ) }
                </div>
            </div>
        </div>
    );
}

export default Projects;
