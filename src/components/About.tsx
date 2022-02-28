import profileImg from "../assets/profile.jpg";
import React from "react";

function About() {
    return (
        <section className="about section-container">
            <div className="section-header">
                <p className="section-subtitle">Who I am</p>
                <h2 className="section-title">About</h2>
            </div>
            <div className="about__container">
                <div>
                    <small>Miia Nyyssönen - est 1992</small>
                    <div className="about__img-container">
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
                    <button className="main-btn">Click me</button>
                </div>
            </div>
        </section>
    );
}

export default About;
