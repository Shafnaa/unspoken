import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg d-flex p-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Unspoken
          </Link>
          <div className="align-self-end">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item fs-2 fw-bold">
                <Link to="/submit" className="nav-link">
                  <img
                    height={28}
                    width={28}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAz0lEQVRoge3ZQQrCMBCF4TfqPl5FFLz/AcSTuHDfOi7c1YkklMFH+r5lCp3+WKFpARHZBMs6sbtfABwXyw8zu2fMywyZATwXy8XM9hnzMkM8HGiWMnOXcdJ/UAgbhbBRCBuFsFEIG4WwGSYkfKR29xOAW+14ownAoWGthwM4R5uz2i9S8L0p6hVd8JoI4HNNJTowzK2lEDa1kOq92GFqXOtR/e/q5QMbhbBRCBuFsFEIG4WwUQibYULW7qF/eSH4GJo1LDPkiuDzdOI8EdmCNyEqI4JpdT0YAAAAAElFTkSuQmCC"
                    alt="plus sign"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
