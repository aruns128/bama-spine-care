import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        {/* Update href to link to a real section or valid URL */}
        <a className="navbar-brand" href="#home">
          <img
            src="images/company-logo.jpg"
            alt="Ayurveda Modern"
            className="img-fluid"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Services", "Contact"].map((section, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`#${section.toLowerCase()}`}>
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
