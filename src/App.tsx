import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import profileImg from "./assets/profile.jpg";

function App() {

    return (
        <div className="App">
            <Navigation/>
            <main className="c-container">
                <div className="hero">
                    <section className="hero__section">
                        <h1 className="hero__title">Hi, I'm Miia Nyyssönen</h1>
                        <p className="hero__info">Software Developer</p>
                        <p className="hero__info">and traveler || chef || dog servant || optimist || cleaning freak ||
                            huge Friends fan</p>
                    </section>
                </div>

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

                <div className="skills-container">
                    <h2 className="section-header text-start">Skills</h2>
                    <div className="icon-grid">
                        <div className="icon-grid__item">
                            <i className="devicon-nodejs-plain dev-icon"/>
                            <p>nodejs</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-html5-plain dev-icon"/>
                            <p>html5</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-nodejs-plain dev-icon"/>
                            <p>nodejs</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-html5-plain dev-icon"/>
                            <p>html5</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-heroku-original dev-icon"/>
                            <p>heroku</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-handlebars-plain dev-icon"/>
                            <p>handlebars</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-github-original dev-icon"/>
                            <p>github</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-git-plain dev-icon"/>
                            <p>git</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-express-original dev-icon"/>
                            <p>express</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-mongodb-plain dev-icon"/>
                            <p>mongodb</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-firebase-plain dev-icon"/>
                            <p>firebase</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-bootstrap-plain dev-icon"/>
                            <p>bootstrap</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-jest-plain dev-icon"/>
                            <p>jest</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-typescript-plain dev-icon"/>
                            <p>typescript</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-webpack-plain dev-icon"/>
                            <p>webpack</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-tailwindcss-plain dev-icon"/>
                            <p>tailwind</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-css3-plain-wordmark dev-icon"/>
                            <p>css3</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-react-original dev-icon"/>
                            <p>React</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-javascript-plain dev-icon"/>
                            <p>Javascript</p>
                        </div>
                        <div className="icon-grid__item">
                            <i className="devicon-azure-plain dev-icon"/>
                            <p>Azure</p>
                        </div>
                    </div>
                </div>


            </main>
            <Footer/>
        </div>
    );
}

export default App;
