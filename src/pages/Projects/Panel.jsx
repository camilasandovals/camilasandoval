import { Col, Card, Image } from "react-bootstrap";
import "./Projects.css"

export default function Panel({data: {id, name, cover, website}}) {
    return(
            <Col className="d-flex justify-content-center" key={id} sm={12} md={6} lg={4}>
                <a href={website} target="_blank">
                <div className="card-wrapper">
                    <img className="card-image" src={cover}/>
                <div className="card-content">
                    <h3>{name}</h3>
                </div>
                </div>
                
                </a>
            </Col>

            
    )
}