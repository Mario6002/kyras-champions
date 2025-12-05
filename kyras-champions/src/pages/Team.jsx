import React from "react";
import champion1 from "../assets/champion1.jpg";
import champion1Small from "../assets/champion1-small.jpg";

export default function Team() {
  return (
    <section className="team">
      <h1>Meet the Team</h1>
      <p>Our champions and coaches.</p>

      <ul className="team-list">
        <li className="team-item">
          <h3>Alex "Dash" Rivera</h3>
          <p>Head Coach — speed training and leadership.</p>

          {/* Responsive image with srcset */}
          <a href="#light1">
            <img
              src={champion1Small}
              srcSet={`${champion1Small} 480w, ${champion1} 1024w`}
              sizes="(max-width: 600px) 90vw, 400px"
              alt="Alex Rivera"
              className="thumb"
            />
          </a>

          {/* pure CSS lightbox using :target and id */}
          <div id="light1" className="lightbox">
            <a className="close" href="#!">×</a>
            <img src={champion1} alt="Alex Rivera large" />
            <p className="caption">Coach Alex at practice.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
