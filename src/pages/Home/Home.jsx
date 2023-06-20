import { Col, Container, Row, Button } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css"
export default function Home() {
    const [text] = useTypewriter({
        words: [" Software Engineer", " Full-Stack Developer"],
        loop: 0,
      });

    return(
        <section id="home">
            
                <div className="home-info">
                    <h3>👋 HI, I AM</h3>
                    <h1 className="h1-name">Camila</h1>
                    <h3>A <span>{text}</span>{" "}<span><Cursor /></span></h3>
                    <div style={{textAlign:"center"}}>
                    </div>
                </div>
                <div className="home-circle">
                    <img src="images/circle.png" alt="White circle background" height={660}/>
                </div>
                <div className="home-profile-picture">
                    <img src="images/profile.png" alt="Camila Sandoval profile pic"  height={650}/>
                </div>
                <div className="button-class d-none d-lg-block">
                    <a href="mailto:csandoval.eng@gmail.com">
                    <button   className="touch">Get in touch!</button>
                    </a>
                </div>
        </section>      
    )
}