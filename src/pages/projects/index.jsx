import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';
import React from 'react';
import './index.css';

export function Projects() {
  const { id } = useParams();
  const project = projects.find(project => id === project.id);

  return (
    <>
      {project &&
        <div>
          <div className="hero" style={{ backgroundColor: project.content.hero.theme }}>
            <img alt="project title" src={project.content.hero.titleImg} />
            <img alt="project cover" src={project.content.hero.coverImg} />
          </div>
          <article className="main">
            <div className="description">
              <h4>What is <span style={{ color: project.content.main.theme }}>{project.name}</span>?</h4>
              <p>{project.content.main.description}</p>
            </div>
            <div className="challenge">
              <h4>What was the <span style={{ color: project.content.main.theme }}>challenge</span>?</h4>
              <p>{project.content.main.challenge}</p>
            </div>
            <div className="additional-info">
              <div className="goals">
                <h5>Project Goal</h5>
                <p>{project.content.main.goal}</p>
              </div>
              <div className="roles">
                <h5>Role</h5>
                <p>{project.content.main.roles.map((role, i) => <span key={i}>{role} </span>)}</p>
              </div>
              <div className="tools">
                <h5>Tools</h5>
                <p>{project.content.main.tools.map((tool, i) => <span key={i}>{tool} </span>)}</p>
              </div>
              <div className="team">
                <h5>Team</h5>
                <p>{project.content.main.team}</p>
              </div>
              <div className="duration">
                <h5>Duration</h5>
                <p>{project.content.main.duration}</p>
              </div>
            </div>
          </article>
        </div>
      }
    </>
  );
}
