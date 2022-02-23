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
                        <p className="hero__info">and traveler || chef || dog servant || optimist || cleaning freak || huge Friends fan</p>
                    </section>
                </div>

                <section className="about">
                    <h2 className="section-header text-start">About</h2>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Who I am?</p>
                            <small>Miia Nyyssönen - est 1992</small>
                            <div className="about__img-container">
                                <img width={ 200 } src={ profileImg } alt="Miia's face"/>
                            </div>
                        </div>
                        <div className="flex-col-2">
                            <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis nam omnis! At
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

            </main>
            <Footer/>
        </div>
    );
}

export default App;
