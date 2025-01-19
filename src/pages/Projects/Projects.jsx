import React, { useState, useEffect } from "react";
import { Container, Row, Form } from "react-bootstrap";
import Panel from "./Panel";
import data from "../../data/portfolio.json";
import "./Projects.css";

export default function Projects() {
  const [selectedType, setSelectedType] = useState("Web Development");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered = data.filter(project => project.type === selectedType);
    setFilteredProjects(filtered);
  }, [selectedType]);

  return (
    <Container id="projects">
      <h1>Projects</h1>
      <Row className="m-4 justify-content-center">
        <div className="filter-section mb-4">
          <Form.Select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ maxWidth: "300px", margin: "0 auto" }}
          >
            <option value="Web Development">Web Development</option>
            <option value="Machine Learning">Machine Learning</option>
          </Form.Select>
        </div>

        {filteredProjects.map((element) =>
          element ? <Panel key={element.id} data={element} /> : <p>Loading...</p>
        )}
      </Row>
    </Container>
  );
}
