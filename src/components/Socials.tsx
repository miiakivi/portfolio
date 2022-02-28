import React from "react";

function Socials() {
    return (
        <div className="socials__fixed-container">

            <a className="social-link" href="https://github.com/MiiaNyy" role="button">
                <i className="devicon-github-original social-icon"/>
            </a>

            <a className="social-link" href="https://www.linkedin.com/in/miia-nyyss%C3%B6nen-66a0881b8/" role="button">
                <i className="fab fa-linkedin-in social-icon"/>
            </a>

            <a className="social-link" href="https://www.facebook.com/miia.nyyssonen.3" role="button">
                <i className="fab fa-facebook-f social-icon"/>
            </a>

            <a className="social-link" href="https://www.instagram.com/miiemilia/" role="button">
                <i className="fab fa-instagram social-icon"/>
            </a>
        </div>
    );
}

export default Socials;
