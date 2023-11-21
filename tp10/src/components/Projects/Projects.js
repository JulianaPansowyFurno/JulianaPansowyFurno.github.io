import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from 'axios';
import {useProductsData} from "../MyContext"
import { useNavigate } from "react-router-dom";

function Projects() {
  const { data } = useProductsData();
  const navigate = useNavigate();
 
  

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
          {data.map((c) =>
          <Col md={4} className="project-card">
          <ProjectCard 
          key={c.id}
            imgPath={c.imagen}
            title={c.titulo}
            description={c.descripcion}
            ghLink={c.url}
            onClickDetalle={() => navigate(`/detalle/${c.id}`)}          
          />
        </Col>
          )}

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
