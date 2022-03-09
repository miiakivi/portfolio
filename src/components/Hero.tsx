import React from "react";
import { Trans, useTranslation } from 'react-i18next';

function Hero() {
    const {t, i18n} = useTranslation();

    return (
        <div className="section-container">
            <div className="hero section">
                <section className="hero__section">
                    <h1 className="hero__title">
                        <Trans i18nKey="hero.title"/>
                        <br/>
                        <span>Miia Nyy</span>
                    </h1>
                    <div className="hero__subtitle">
                        <p>
                            <Trans i18nKey="hero.subtitle"/>
                        </p>
                        <div className="word-animation-wrapper">
                            <p>
                                <Trans i18nKey="hero.and"/>
                            </p>
                            <div className="word-animation__words">
                                <span className="word-animation__word">
                                    <Trans i18nKey="hero.words-animation.word1"/>
                                </span>
                                <span className="word-animation__word">
                                    <Trans i18nKey="hero.words-animation.word2"/>
                                </span>
                                <span className="word-animation__word">
                                    <Trans i18nKey="hero.words-animation.word3"/>
                                </span>
                                <span className="word-animation__word">
                                    <Trans i18nKey="hero.words-animation.word4"/>
                                </span>
                                <span className="word-animation__word">
                                    <Trans i18nKey="hero.words-animation.word1"/>
                                </span>
                            </div>
                        </div>
                    </div>


                    <button className="main-btn">
                        <Trans i18nKey="hero.button"/>
                    </button>

                </section>
            </div>
        </div>
    );
}

export default Hero;
