import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>Interested in joining? Reach out below.</p>

      <form className="contact-form" action="#" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input id="name" className="input" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="input" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" className="input" />

        <button className="btn">Send</button>
      </form>
    </section>
  );
}
