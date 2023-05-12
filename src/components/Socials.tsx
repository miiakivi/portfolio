import React from "react";

function Socials() {
  return (
    <div className="socials__fixed-container">
      <a
        className="socials__fixed-link"
        href="https://github.com/miiakivi"
        role="button"
      >
        <i className="devicon-github-original socials__fixed-icon" />
      </a>

      <a
        className="socials__fixed-link"
        href="https://www.linkedin.com/in/miia-kivisaari-66a0881b8/"
        role="button"
      >
        <i className="fab fa-linkedin-in socials__fixed-icon" />
      </a>

      <a
        className="socials__fixed-link"
        href="https://www.facebook.com/miia.nyyssonen.3"
        role="button"
      >
        <i className="fab fa-facebook-f socials__fixed-icon" />
      </a>

      <a
        className="socials__fixed-link"
        href="https://www.instagram.com/miiemilia/"
        role="button"
      >
        <i className="fab fa-instagram socials__fixed-icon" />
      </a>
    </div>
  );
}

export default Socials;
