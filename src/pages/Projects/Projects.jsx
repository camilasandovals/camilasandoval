import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Panel from "./Panel";
import data from "../../data/portfolio.json";
import "./Projects.css";

export default function Projects() {
  const [numProjectsDisplayed, setNumProjectsDisplayed] = useState(3);

  const loadMoreProjects = () => {
    setNumProjectsDisplayed(prevNum => prevNum + 5);
  };

  return (
    <Container id="projects">
      <h1>Projects</h1>
      <Row className="m-4 justify-content-center">
          <h4>Each project is a unique piece of development</h4>
          {data.slice(0, numProjectsDisplayed).map((element) =>
            element ? <Panel data={element} /> : <p>Loading...</p>
          )}
          {numProjectsDisplayed < data.length && (
            <div>
            <button className="load-more" onClick={loadMoreProjects}>
              Load More
            </button>
            </div>
            
          )}
      </Row>
    </Container>
  );
}
