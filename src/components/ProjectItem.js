import projectImg from "../assets/project.jpg";
import React from "react";

function ProjectItem () {
    return (
        <div className="projects__item">
            <img className="projects__item-img" src={ projectImg } alt=""/>
            <div className="projects__item-overlay">
                <div className="overlay__text">
                    <h5>battleships</h5>
                    <p>Game created with React and Webpack. Classic battleships game where the user plays against AI.
                        The whole game loop and players are created using JavaScript objects and classes. This was also
                        my first touch using TDD.</p>
                    <div>
                        <a className="overlay__link" href="#">Link to github repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
