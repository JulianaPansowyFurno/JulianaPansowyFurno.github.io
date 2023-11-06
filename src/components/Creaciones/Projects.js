import {React, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Projects() {
  const [Creaciones, setCreaciones] = useState([]);
  const navigate = useNavigate();
  
  const GetProyectos = () => {
    axios.get('Trabajos.json') 
      .then((response) => {
        setCreaciones(response.data);
      })
      .catch((error) => alert("mallllll"));
  };

  const onNavigate = (e) => {
    e.preventDefault();
    navigate("/detalle");
  }

  console.log(Creaciones)

  useEffect(() => {
    GetProyectos();
  }, []);


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

        {Creaciones.map((e) => {
          return(
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e.imagen}
              title={e.titulo}
              description={e.descripcion}
              ghLink={e.url}
              detalle={onNavigate()}
            />
            </Col>
          );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
