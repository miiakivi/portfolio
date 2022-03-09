import React from "react";

interface ProjectDetailsProps {
    project : {
        title : string;
        image : string;
        description : string;
        url : string;
    }
}

function ProjectDetails( {project} : ProjectDetailsProps ) {
    return (
        <div style={ {backgroundImage: `url(${ project.image })`} } className="projects__item">

            <div className="projects__item-overlay">
                <div className="overlay__text">
                    <h5>{ project.title }</h5>
                    <p>{ project.description }</p>
                    <div>
                        <a className="overlay__link " href={ project.url }>
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
