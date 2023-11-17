import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import axios from 'axios';
import ProjectCard from "../Projects/ProjectCards";
import { useNavigate } from "react-router-dom";

function Home2() {
  const navigate = useNavigate();
   
  
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          
        
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
            title="Hola"
            description="Muy Bueno"
            ghLink="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
            title="Hola"
            description="Muy Bueno"
            ghLink="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
            title="Hola SOY YP"
            description="Muy Bueno"
            ghLink="https://i.pinimg.com/474x/95/7f/c1/957fc1d05370489fe519edcb03d75ebc.jpg"
           
          />
        </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
