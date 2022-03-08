import React from "react";
import ProjectDetails from "./ProjectItem";

import battleshipImage from "../assets/battleshipProject.jpg";
import weatherImage from "../assets/weatherProject.jpg";
import cvImage from "../assets/cvProject.jpg";
import superchatImage from "../assets/superchatProject.jpg";
import inventoryImage from "../assets/inventoryProject.jpg";
import azureImage from "../assets/azureProject.jpg";


function Projects() {

    return (
        <div id="projects" className="section-container light__accent">
            <div className="projects section">
                <div className="section-header">
                    <p className="section-subtitle">A Selection Of Stuff I've Built</p>
                    <h2 className="section-title">Portfolio</h2>
                </div>

                <div className="projects__flex">
                    <ProjectDetails image={ battleshipImage }/>
                    <ProjectDetails image={ weatherImage }/>
                    <ProjectDetails image={ cvImage }/>
                    <ProjectDetails image={ superchatImage }/>
                    <ProjectDetails image={ azureImage }/>
                    <ProjectDetails image={ inventoryImage }/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
