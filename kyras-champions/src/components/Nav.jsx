import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li><Link to="/" title="Home">Home</Link></li>
        <li><Link to="/team" title="Team">Team</Link></li>
        <li><Link to="/contact" title="Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
