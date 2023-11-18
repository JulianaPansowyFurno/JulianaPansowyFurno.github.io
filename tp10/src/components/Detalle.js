import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import {useProductsData} from "../components/MyContext"
import axios from 'axios';
import { useParams } from "react-router-dom";

function Detalle() {
    const {id} = useParams();
    const { data } = useProductsData([]);
    const [proyecto, setProyecto] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
      data.filter(d => 
        {
          if(d.id == id){
            setProyecto(d)
          }
        }
      )      
    }, [data])
    console.log(data[0].id == id)
    console.log(proyecto)
  return (
    <>
    <p>{proyecto.id}</p>   
    {/* <Container fluid className="project-section">
      <Particle />
      <Container> 
        
      </Container>
    </Container> */}
    </>
  );
}

export default Detalle;
