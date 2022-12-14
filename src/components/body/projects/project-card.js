import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="button-75"><span>
                <i class="fi-rr-globe"></i>
                Demo
                </span></div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="button-75"><span>
                <i class="devicon-github-original colored"></i> GIthub
                </span></div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="project ss" />
    </div>
  );
}

export default ProjectCard;
