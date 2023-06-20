import { Col, Container, Row, Button } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css"
export default function Home() {
    const [text] = useTypewriter({
        words: [" Software Engineer", " Full-Stack Developer"],
        loop: 0,
      });

    return(
        <section id="home" className="m-0">
           
            <Col className="home-info" lg={6} sm={12}>
                    <h3>👋 HI, I AM</h3>
                    <h1 className="h1-name">Camila</h1>
                    <h3>A <span>{text}</span>{" "}<span><Cursor /></span></h3>
                    
                </Col>
                <Col className="home-circle d-none d-lg-block">
                    <img src="images/circle.png" alt="White circle background" height={650} />
                </Col>
                <Col className="home-profile-picture" lg={4} sm={12}>
                    <img src="images/profile.png" alt="Camila Sandoval profile pic"  height={655} />
                </Col>
                <Col className="button-class d-none d-lg-block" lg={1}>
                    <a href="mailto:csandoval.eng@gmail.com">
                    <button   className="touch">Get in touch!</button>
                    </a>
                </Col>
            
        </section>      
    )
}