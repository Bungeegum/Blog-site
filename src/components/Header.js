import React from "react";
import { withSiteData } from "react-static";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : { className: "header-link" };
};

export default withSiteData(({ title }) => (
  <header className="header">
 
    <h1 className="header-h1">{title}</h1>
    <nav className="header-nav">
      <Link getProps={isActive} className="header-link" to="/">
        Home
      </Link>
      <Link getProps={isActive} className="header-link" to="/about">
        About
      </Link>
    </nav>

  </header>
));