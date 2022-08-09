import React from "react";
import "./Contact.css";
import contactImage from "../assets/photo.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form id="contact-form">
          <lable htmlFor="name">Full Name</lable>
          <input type="text" placeholder="Enter Name" />
          <lable htmlFor="name">Email</lable>
          <input type="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label>
          <textarea rows="8" placeholder="Enter Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
