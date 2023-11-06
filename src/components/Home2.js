import {React, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import ProjectCards from "./Creaciones/ProjectCards";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";

function Home2() {
  const [Creaciones, setCreaciones] = useState([]);
  
  const GetProyectos = () => {
    axios.get('Trabajos.json') 
      .then((response) => {
        setCreaciones(response.data);
      })
      .catch((error) => alert("mallllll"));
  };

  console.log(Creaciones)

  useEffect(() => {
    GetProyectos();
  }, []);


  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

{Creaciones.map((e) => {
  return(
    <Col md={4} className="project-card">
    <ProjectCards
      imgPath={e.imagen}
      title={e.titulo}
      description={e.descripcion}
      ghLink={e.url}
    />
    </Col>
  );
  })}
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
