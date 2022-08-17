import React from "react";

import instagram from "../logo/instagram-logo.svg";
import github from "../logo/github-logo.svg";
import linkedin from "../logo/linkedin-logo.svg";

export default function Footer() {
  return (
    <footer className="footer bg-dark mt-4">
      <div className="container footer-container">
        <a href="https://www.instagram.com/saujanashafi/">
          <img width={36} height={36} src={instagram} alt="instagram" />
        </a>
        <a href="https://github.com/Shafnaa">
          <img width={36} height={36} src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/saujana-shafi-61a948237/">
          <img width={36} height={36} src={linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}
