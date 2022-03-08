import React from "react";

interface ProjectDetailsProps {
    image : string;

}

/*
<div>
    <img className="projects__item-img" src={ image } alt=""/>
</div>*/
function ProjectDetails( {image} : ProjectDetailsProps ) {
    return (
        <div style={ {backgroundImage: `url(${ image })`} } className="projects__item">

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

export default ProjectDetails;
