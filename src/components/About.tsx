import profileImg from "../assets/profile.jpg";
import React from "react";

function About() {
    return (
        <section className="about">
            <h2 className="section-header text-start">About</h2>
            <div className="about__container d-flex justify-content-between">
                <div>
                    <p>Who I am?</p>
                    <small>Miia Nyyssönen - est 1992</small>
                    <div className="about__img-container">
                        <img width={ 200 } src={ profileImg } alt="Miia's face"/>
                    </div>
                </div>
                <div className="flex-col-2">
                    <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis nam omnis!
                        At
                        commodi corporis deleniti dicta eaque incidunt iste modi nobis odit quasi quia quidem
                        ratione similique tempore, voluptatibus.
                    </strong>
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
