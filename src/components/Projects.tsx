import React from "react";
import projectImg from "../assets/project.jpg";


function Projects() {
    return (
        <div id="projects" className="section-container light__accent">
            <div className="projects section">
                <div className="section-header">
                    <p className="section-subtitle">A Selection Of Stuff I've Built</p>
                    <h2 className="section-title">Portfolio</h2>
                </div>

                <div className="projects__flex">
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                    <div className="projects__item">
                        <img className="projects__item-img" src={ projectImg } alt=""/>
                        <div className="projects__item-overlay">
                            <div className="overlay__text">
                                <h5>projects name</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi aspernatur at
                                    deleniti doloremque dolorum enim esse eum iste magnam maiores mollitia necessitatibus
                                    obcaecati quasi repellendus repudiandae, ullam voluptas!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Projects;
