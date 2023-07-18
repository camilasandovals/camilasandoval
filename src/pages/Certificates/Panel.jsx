import { Col} from "react-bootstrap";
import "./Certificates.css"

export default function Panel({data: {id, name, link}}) {
    return(
        <Col className="d-flex justify-content-center" key={id} sm={12} md={6} lg={4}>
            <a className="links-cards" href={link} target="_blank">
            <div className="card-wrapper-cert">
                <img className="card-image-cert" src={`certificates/${id}.jpeg`}/>
                <div className="hover-content">
                    <p>Click to Learn More</p>
                </div>
            </div>
            </a>
        </Col>
    )
}
