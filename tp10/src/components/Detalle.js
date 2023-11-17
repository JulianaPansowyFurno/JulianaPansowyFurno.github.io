import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import {useProductsData} from "../components/MyContext"
import axios from 'axios';
import { useParams } from "react-router-dom";

function Detalle() {
    const {id} = useParams();
    const { data } = useProductsData([]);
    const proyecto = data.find((elem) => elem.id === id)

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
       <h3>{proyecto.descripcion}</h3>
      </Container>
    </Container>
  );
}

export default Detalle;
