import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export const WorkCard = ({ projects }) => {
  return (
    <>
      { projects.map(project => (
        <Card key={project.title} className="card">
          <a href={project.live_url} target="_blank" rel="noreferrer" alt={project.title}>
            <Card.Img
              variant="top"
              src={project.image}
              className="project-img"
            />
          </a>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.desc}
            </Card.Text>
            <div className="more-info">
              <span className="github-link">
                <span>
                  <Card.Link
                    href={project.live_url}
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                  >
                    Live demo
                </Card.Link>
                </span>
                <span>
                  <Card.Link
                    href={project.code_url}
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                  >
                    Code
                </Card.Link>
                </span>
              </span>
              <span className="tech">
                {project.tech.map(item => (
                  <span key={`${project.title}-${item}`}>
                    <Badge pill className="badge">{item}</Badge>
                  </span>
                ))}
              </span>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default WorkCard;
