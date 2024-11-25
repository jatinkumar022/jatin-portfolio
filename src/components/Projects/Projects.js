import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Agriculture from "../../Assets/Projects/Agriculture.jpg"
import Expence from "../../Assets/Projects/Expence.jpg"
import Nexura from "../../Assets/Projects/Nexura.jpg"
import Resotan from "../../Assets/Projects/Resotan.jpg"
import Task from "../../Assets/Projects/Task.jpg"
import Weather from "../../Assets/Projects/Weather.jpg"
import BG from "../../Assets/Projects/BG.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agriculture}
              isBlog={false}
              title="Agriculture Marketting"
              description="Agriculture Marketing is a basic PHP-based platform connecting farmers and traders. It enables easy product listing and inquiries, providing a simple and accessible solution for local agricultural trade."
              ghLink="https://github.com/jatinkumar022/agriculture-marketing/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nexura}
              isBlog={false}
              title="Nexura - Ecommerce"
              description="Nexura is a React and Firebase-powered e-commerce platform tailored for selling shoes. It offers seamless product browsing, secure transactions, and real-time data management for a smooth shopping experience."
              ghLink="https://github.com/jatinkumar022/nexura/"
              demoLink="https://nexura-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expence}
              isBlog={false}
              title="Finance Insight"
              description="Expense Tracker is a React and Firebase-based application that helps users manage their finances. It allows users to track income, expenses, and set budgets, with real-time data syncing and secure storage."
              ghLink="https://github.com/jatinkumar022/FinanceInsight/"
              demoLink="https://finance-insight-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resotan}
              isBlog={false}
              title="Restorn - Restaurant Site"
              description="Restorn is a restaurant website built with C# and ASP.NET, featuring an online menu, reservations, and order management for a smooth customer experience."
            // ghLink="https://github.com/soumyajit4419/Plant_AI"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              isBlog={false}
              title="Advanced Task-Manager"
              description="Advanced Task-Manager is a React app for organizing and tracking tasks with features like deadlines and prioritization."
              ghLink="https://github.com/jatinkumar022/new-task"
              demoLink="https://new-task-weld.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Weather is a React app that shows real-time weather updates and forecasts based on user search for a specific location."
              demoLink="http://rjweather.freewebhostmost.com/"
            />
          </Col>  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BG}
              isBlog={false}
              title="Background Removal"
              description="Background removal is type of website that cut and remove edge to edge background and give sharp output"
              ghLink="https://github.com/jatinkumar022/removebackground"
              demoLink="https://removebackground-iota.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
