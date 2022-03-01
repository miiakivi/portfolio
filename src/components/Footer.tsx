import React from "react";

function Footer() {
    return (
        <footer>
            <div className="section">
                <div className="word-animation-wrapper footer-animation">
                    <p>Lets</p>
                    <div className="word-animation__words">
                        <span className="word-animation__word">work together</span>
                        <span className="word-animation__word">collaborate</span>
                        <span className="word-animation__word">meet in teams</span>
                        <span className="word-animation__word">have lunch</span>
                        <span className="word-animation__word">work together</span>
                    </div>
                </div>

                <h2 className="footer__cta">Drop me an <a href="#">Email </a></h2>
                <p className="footer__socials-title">Or just say hi!</p>

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
