import React from "react";
import ProjectDetails from "./ProjectItem";

import { Trans, useTranslation } from 'react-i18next';


import { battleships, cvMaker, weather, superchat, chatBot, inventory } from "../projectDetails/projects";

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
                    <ProjectDetails project={ chatBot }/>
                    <ProjectDetails project={ battleships }/>
                    <ProjectDetails project={ cvMaker }/>
                    <ProjectDetails project={ weather }/>
                    <ProjectDetails project={ inventory }/>
                    <ProjectDetails project={ superchat }/>


                </div>
            </div>
        </div>
    );
}

export default Projects;
