import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation-bar">
        <Link to="/" className="navigation-select">
          Home
        </Link>
        <Link to="/audi/a4" className="navigation-select">
          AudiA4
        </Link>
        <Link to="/audi/a5" className="navigation-select">
          AudiA5
        </Link>
      </nav>
    );
  }
}

export default Navigation;
