import { Col } from "react-bootstrap";
import "./Projects.css"
import { Github, Link45deg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Panel({data: {id, name, cover, website, about, type, skills, github}}) {
    return(
        <Col key={id} className="d-flex justify-content-center" sm={12} md={7} lg={6} xl={4}>
            <div className="card-wrapper">
                <img className="card-image" src={cover} alt={name}/>
                <div className="card-content">
                    <div className="relevant-info">
                    <div >
                        <h4>{name}</h4>
                        <small>{type}</small>
                    </div>
                    <div className="mt-2">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                        <Github className="icon" size={23} color="lightgrey" style={{marginRight: 5}}/>
                        </a>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                        <Link45deg className="icon" size={29} color="lightgrey"/>
                        </a>
                    </div> 
                    </div>
                    <ul className="skills">
                        {skills.slice(0, 4).map((skill, index) => (
                            <li key={index}> <button className="skills">{skill}</button></li>
                        ))}
                    </ul>
                    <small style={{color: "grey"}}>{about}</small>
                </div>
            </div>
        </Col>
    )
}
