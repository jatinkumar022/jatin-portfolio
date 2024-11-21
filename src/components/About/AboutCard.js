import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{ color: '#00b7ff' }}>Jatin Ramani </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently employed as a software developer at <a style={{ textDecoration: "none" }} href="https://dvijinfotech.com/" target="_blank" className="purple">Dvij Infotech.</a>
            <br />
            In addition to my job, I am pursuing a <span className="purple"> Master's in Computer Applications (MCA)</span> at Jain University, which complements my hands-on experience and allows me to dive deeper into advanced technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#ff3333" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jatin Ramani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
