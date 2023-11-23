import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";


function FavoritoCards(props) {
  const isFavorito = props.isFavorito;
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
        </Button>
        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickDetalle} // Add onClick handler here
        >
         <IoIosInformationCircle /> &nbsp;
          Detalle
        </Button>
        {isFavorito && (
        <Button
          className="boton"
          variant="danger"
          onClick={props.onClickFavorito}
        >
          <FaRegHeart /> &nbsp;
          Sacar
        </Button>
      )}
      {/* Show 'Add to Favoritos' button if it's not in favoritos */}
      {!isFavorito && (
        <Button
          className="boton"
          variant="primary"
          onClick={props.onClickFavorito}
        >
          <FaHeart /> &nbsp;
         Agregar
        </Button>
      )}

    
      </Card.Body>
    </Card>
   
   
  );
}
export default FavoritoCards;
