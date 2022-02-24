import React from "react";
import projectImg from "../assets/project.jpg";


function Projects() {
    return (
        <div className="projects section-container">
            <p className="">A Selection Of Stuff I've Built</p>
            <h2 className="section-header">Portfolio</h2>
            <div className="projects__flex">
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
                <div className="projects__item">
                    <img src={projectImg} alt=""/>
                    <p>projects name</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
