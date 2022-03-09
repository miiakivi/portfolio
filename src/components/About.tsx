import profileImg from "../assets/profile.jpg";
import React from "react";
import { Trans, useTranslation } from 'react-i18next';

function About() {
    const {t, i18n} = useTranslation();

    return (
        <>

            <div id="about" className="section-container dark__accent">
                <section className="about section">
                    <div className="section-header">
                        <p className="section-subtitle accent-subtitle">
                            <Trans i18nKey="about.subtitle"/>
                        </p>
                        <h2 className="section-title accent-title">
                            <Trans i18nKey="about.title"/>
                        </h2>
                    </div>
                    <div className="about__container">
                        <div>
                            <div className="about__img-container">
                                <small>Miia Nyyssönen - est 1992</small>

                                <img width={ 300 } src={ profileImg } alt="Miia's face"/>
                            </div>
                        </div>
                        <div className="about__container-item">
                            <p>
                                <strong>
                                    <Trans i18nKey="about.paragraph1"/>
                                </strong>
                            </p>
                            <p>
                                <Trans i18nKey="about.paragraph2"/>
                            </p>
                            <p>
                                <Trans i18nKey="about.paragraph3"/>
                            </p>
                            <button className="about__btn secondary-btn">
                                <Trans i18nKey="about.button"/>
                            </button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default About;
