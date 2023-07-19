import { Col } from "react-bootstrap";
import "./Projects.css"

export default function Panel({data: {id, name, cover, website, about, type, skills}}) {
    return(
        <Col key={id} className="d-flex justify-content-center" sm={12} md={7} lg={5} xl={4}>
            <a className="links-cards" href={website} target="_blank" rel="noreferrer">
                <div className="card-wrapper">
                    <img className="card-image" src={cover} alt={name}/>
                    <div className="card-content">
                        <h3>{name}</h3>
                        <small>{about}</small>
                        <ul className="skills">
                            {skills.slice(0, 4).map((skill, index) => (
                                <li key={index}> <small>{skill}</small></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </Col>
    )
}
