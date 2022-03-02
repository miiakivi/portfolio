import React from "react";
/*
*  <p className="hero__info">Software Developer</p>
                    <p className="hero__info">and traveler || chef || dog servant || optimist || ukulele player ||
                        huge Friends fan</p>
* */
function Hero() {
    return (
        <div className="section-container">
            <div className="hero section">
                <section className="hero__section">
                    <h1 className="hero__title">Hi, I am <br/> <span>Miia Nyyssönen</span></h1>
                    <div className="hero__subtitle">
                        <p>Software Developer</p>
                        <div className="word-animation-wrapper">
                            <p>and</p>
                            <div className="word-animation__words">
                                <span className="word-animation__word">traveler</span>
                                <span className="word-animation__word">chef</span>
                                <span className="word-animation__word">optimist</span>
                                <span className="word-animation__word">ukulele player</span>
                                <span className="word-animation__word">traveler</span>
                            </div>
                        </div>
                    </div>



                    <button className="main-btn">Lets Talk</button>
                </section>
            </div>
        </div>
    );
}

export default Hero;
