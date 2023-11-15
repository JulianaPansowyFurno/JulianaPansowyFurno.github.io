// import React, {useState, useEffect} from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import axios from 'axios';
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     GetTrabajos()   
//   }, []);
  
//   const GetTrabajos = () => {
//     axios.get("./Trabajos.json")
//     .then((response) => {
//       setdata(response.data);
//     })
//     .catch((error) => alert("aca hay algo raro"));
//   }

//   return (
    
//       <Card className="project-card-view">
//         {data.map((d)=>
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//        )}
//     </Card>
   
   
//   );
// }
// export default ProjectCards;
