import React from "react";
import ProjectDetails from "./ProjectItem";

import { battleships, cvMaker, weather, superchat, chatBot, inventory } from "../projectDetails/projects";

function Projects() {

    return (
        <div id="projects" className="section-container light__accent">
            <div className="projects section">
                <div className="section-header">
                    <p className="section-subtitle">A Selection Of Stuff I've Built</p>
                    <h2 className="section-title">Portfolio</h2>
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
