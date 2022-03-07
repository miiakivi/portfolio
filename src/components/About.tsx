import profileImg from "../assets/profile.jpg";
import React from "react";

function About() {
    return (
        <>

            <div id="about" className="section-container dark__accent">
                <section className="about section">
                    <div className="section-header">
                        <p className="section-subtitle accent-subtitle">Who I am</p>
                        <h2 className="section-title accent-title">About</h2>
                    </div>
                    <div className="about__container">
                        <div>
                            <div className="about__img-container">
                                <small>Miia Nyyssönen - est 1992</small>

                                <img width={ 200 } src={ profileImg } alt="Miia's face"/>
                            </div>
                        </div>
                        <div className="about__container-item">
                            <p>
                                <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis nam omnis!
                                    At
                                    commodi corporis deleniti dicta eaque incidunt iste modi nobis odit quasi quia quidem
                                    ratione similique tempore, voluptatibus.
                                </strong>
                            </p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis nam omnis! At
                                commodi corporis deleniti dicta eaque incidunt iste modi nobis odit quasi quia quidem
                                ratione similique tempore, voluptatibus.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis nam omnis! At
                                commodi corporis deleniti dicta eaque incidunt iste modi nobis odit quasi quia quidem
                                ratione similique tempore, voluptatibus.
                            </p>
                            <button className="about__btn secondary-btn">Click me</button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default About;
