import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Footer() {
    const {t, i18n} = useTranslation();

    return (
        <footer id="contact">
            <div className="section">
                <div className="word-animation-wrapper footer-animation">
                    <p>
                        <Trans i18nKey="footer.lets"/>
                    </p>
                    <div className="word-animation__words">
                        <span className="word-animation__word">
                            <Trans i18nKey="footer.words-animation.word1"/>
                        </span>
                        <span className="word-animation__word">
                            <Trans i18nKey="footer.words-animation.word2"/>
                        </span>
                        <span className="word-animation__word">
                            <Trans i18nKey="footer.words-animation.word3"/>
                        </span>
                        <span className="word-animation__word">
                            <Trans i18nKey="footer.words-animation.word4"/>
                        </span>
                        <span className="word-animation__word">
                            <Trans i18nKey="footer.words-animation.word1"/>
                        </span>
                    </div>
                </div>

                <h2 className="footer__cta">
                    <Trans i18nKey="footer.cta.part1"/>
                    <a href="#"><Trans i18nKey="footer.cta.part2"/></a>
                </h2>
                <p className="footer__socials-title">
                    <Trans i18nKey="footer.socials-title"/>
                </p>

                <div>
                    <div className="footer__socials">
                        <a className="social-link" href="https://github.com/MiiaNyy" role="button">
                            <i className="devicon-github-original social-icon"/>
                            Github
                        </a>


                        <a className="social-link" href="https://www.linkedin.com/in/miia-nyyss%C3%B6nen-66a0881b8/"
                           role="button">
                            <i className="fab fa-linkedin-in social-icon"/>
                            LinkedIn
                        </a>


                        <a className="social-link" href="https://www.facebook.com/miia.nyyssonen.3" role="button">
                            <i className="fab fa-facebook-f social-icon"/>
                            Facebook
                        </a>


                        <a className="social-link" href="https://www.instagram.com/miiemilia/" role="button">
                            <i className="fab fa-instagram social-icon"/>
                            Instagram
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
