import React from "react";
import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <section className="home">
      <h1>Kyra's Champions</h1>
      <p className="lead">Community sports, mentoring, and leadership for youth.</p>

      <div className="hero-wrapper">
        <img src={hero} alt="Kyra coaching" className="hero" />
      </div>

      <article className="mission">
        <h2>Our Mission</h2>
        <p>
          Kyra's Champions empowers young athletes through coaching, mentorship,
          and life-skills programs. We emphasize teamwork, resilience, and
          community.
        </p>
      </article>
    </section>
  );
}
