import { Col, Container, Row } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import About from "./About"
export default function Home() {
    const [text] = useTypewriter({
        words: [" Software Engineer", " Full-Stack Developer", "Machine Learning Enthusiast"],
        loop: 0,
      });

    return(
        <section id="home">
            
                <div className="home-info">
                    <h3>👋 HI, I AM</h3>
                    <h1 className="h1-name">Camila</h1>
                    <h3>A <span>{text}</span>{" "}<span><Cursor /></span></h3>
                </div>
                <div className="home-circle">
                    <img src="images/circle.png" alt="Neon background" height={700}/>
                </div>
                <div className="home-profile-picture fluid">
                    <img src="images/profile.png" alt="Camila Sandoval profile pic"  height={750}/>
                </div>
            
        </section>      
    )
}