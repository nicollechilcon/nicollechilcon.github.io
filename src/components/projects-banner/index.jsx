import React from 'react';
import './index.css';
import { projects } from '../../data/projects';
import { ProjectCard } from '../project-card';

export function ProjectsBanner() {
  return (
    <section className="projects-section">
      <div className="header">
        <h3>RECENT PROJECTS</h3>
      </div>
      <div className="projects-wrapper">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
