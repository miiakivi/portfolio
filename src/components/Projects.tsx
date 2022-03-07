import React from "react";
import ProjectItem from "./ProjectItem";


function Projects() {

    return (
        <div id="projects" className="section-container light__accent">
            <div className="projects section">
                <div className="section-header">
                    <p className="section-subtitle">A Selection Of Stuff I've Built</p>
                    <h2 className="section-title">Portfolio</h2>
                </div>

                <div className="projects__flex">
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                    <ProjectItem/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
