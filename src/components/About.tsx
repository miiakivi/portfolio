import profileImg from "../assets/profile.jpg";
import { Trans } from 'react-i18next';

import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
    return (
        <>
            <div id="about" className="section-container dark__accent">

                <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInUp">
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
                                    <img width={ 300 } src={ profileImg } alt="Miia's profile"/>
                                </div>
                            </div>
                            <div className="about__container-item">
                                <p>
                                    <strong><Trans i18nKey="about.paragraph1"/></strong>
                                </p>
                                <p><Trans i18nKey="about.paragraph2"/></p>
                                <p><Trans i18nKey="about.paragraph3"/></p>
                                <p>
                                    <em style={ {fontSize: '0.9rem'} }>
                                        <Trans i18nKey="about.paragraph4"/>
                                    </em>
                                </p>
                                <a className="btn about__btn secondary-btn"
                                  href="mailto:mi.nyyssonen@gmail.com?subject=Hello, I liked your portfolio&body=Hi, I liked your portfolio and would like to talk yo you about ...">
                                    <Trans i18nKey="about.button"/>
                                </a>
                            </div>
                        </div>
                    </section>
                </AnimationOnScroll>
            </div>
        </>
    );
}

export default About;
