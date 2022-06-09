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

          <article className="design-process">
            <h4>Design process</h4>
            <img src={project.content.process} alt="discover, define, ideate, design, testing"/>
          </article>

          <article style={{ backgroundColor: project.content.research.dark_theme }} className="research">
            <div>
              <h4>Research</h4>
              <p>{project.content.research.description}</p> <br/>
              <p>You can find the complete research <b><a target="_blank" href={project.content.research.link} rel="noreferrer">here</a></b></p>
            </div>
          </article>

          <article className="problems">
            <div className="items-box">
              <h5 style={{ color: project.content.research.title_theme}}>Main problems we find</h5>
              <ul>
                {project.content.research.problems.map((problem, i) => (
                  <li key={i}>{problem}</li>
                ))}
              </ul>
            </div>
            <div className="insights">
              <div className="img-wrapper">
                <div className="line-y"></div>
                <div className="line-x"></div>
              </div>
              <div className="items-content">
                <h5 style={{ color: project.content.research.title_theme}}>Insight</h5>
                <p dangerouslySetInnerHTML={{ __html: project.content.research.insight }}/>
              </div>
            </div>
          </article>

          <article style={{ backgroundColor: project.content.research.light_theme }} className="solutions">
            <div className="items-box">
              <h4>Solutions</h4>
              <ul>
                {project.content.research.solutions.map((solution, i) => (
                  <li key={i}>
                    <span>0{i + 1}</span>
                    <p dangerouslySetInnerHTML={{ __html: solution }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="sketching">
              <h4>Sketching our ideas</h4>
              <p>{project.content.research.sketching}</p>
            </div>
            <img alt="sketching photos" src={project.content.research.sketchingImg} />
          </article>

          <article style={{ backgroundColor: project.content.conclusion.theme }} className="conclusion">
            <div>
              <h4>Final thoughts + next steps 👆</h4>
              <p dangerouslySetInnerHTML={{ __html: project.content.conclusion.final_thoughts }} />
              <h4>Next steps</h4>
              <ul>
                {project.content.conclusion.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      }
    </>
  );
}
