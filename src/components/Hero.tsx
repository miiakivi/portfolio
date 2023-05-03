import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero__section">
      <h1 className="hero__title">
        <Trans i18nKey="hero.title" />
        <br />
        <span>Miia Nyyssönen</span>
      </h1>
      <div className="hero__subtitle">
        <p>
          <Trans i18nKey="hero.subtitle" />
        </p>
        <div className="word-animation-wrapper">
          <p>
            <Trans i18nKey="hero.and" />
          </p>
          <div className="word-animation__words">
            <span className="word-animation__word">
              <Trans i18nKey="hero.words-animation.word1" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="hero.words-animation.word2" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="hero.words-animation.word3" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="hero.words-animation.word4" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="hero.words-animation.word1" />
            </span>
          </div>
        </div>
      </div>

      <a
        className="btn main-btn"
        href="mailto:mi.nyyssonen@gmail.com?subject=Hello, I liked your portfolio&body=Hi, I liked your portfolio and would like to talk yo you about ..."
      >
        <Trans i18nKey="hero.button" />
      </a>
    </section>
  );
}

export default Hero;
