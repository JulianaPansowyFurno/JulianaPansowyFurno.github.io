import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


function ProjectCards(props) {
  
  return (
    
      <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.corto}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickDetalle} // Add onClick handler here
        >
         <IoIosInformationCircle /> &nbsp;
          Detalle
        </Button>

        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickFavorito} // Add onClick handler here
        >
          <FaHeart /> &nbsp;
          Favorito
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
   
   
  );
}
export default ProjectCards;
