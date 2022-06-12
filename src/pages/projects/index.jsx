import { ProjectDesignProcess } from '../../components/project-design-process';
import { ProjectMainSection } from '../../components/project-main-section';
import { ProjectResearchBox } from '../../components/project-research-box';
import { ProjectSolutions } from '../../components/project-solutions';
import { ProjectConclusion } from '../../components/project-conclusion';
import { ProjectProblems } from '../../components/project-problems';
import { ProjectPrototypes } from '../../components/project-prototypes';
import { ProjectLink } from '../../components/project-link';
import { ProjectHero } from '../../components/project-hero';
import topArrow from '../../assets/images/top-arrow.svg';
import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './index.css';

export function Projects() {
  const { id } = useParams();
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const project = projects.find(project => id === project.id);
  const [nextProject] = projects.filter(project => id !== project.id).sort(() => 0.5 - Math.random());

  const handleScrollBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollState = () =>  {
    const normalDistance = document.body.offsetHeight / 3;
    const scroll = window.scrollY + window.innerHeight;
    setShowScrollToTopBtn(scroll >= normalDistance);
  };

  useEffect(() => {
    handleScrollState();
    window.addEventListener('scroll', handleScrollState);

    return () => {
      window.removeEventListener('scroll', handleScrollState);
    };
  }, []);

  return (
    <>
      {project &&
        <div>
          <ProjectHero content={project.content.hero} />
          <ProjectMainSection content={project.content.main} name={project.name} />
          <ProjectDesignProcess imageSrc={project.content.process} />
          <ProjectResearchBox content={project.content.research} />
          <ProjectProblems content={project.content.research} />
          <ProjectSolutions content={project.content.research} />
          <ProjectPrototypes content={project.content.prototype} />
          <ProjectConclusion content={project.content.conclusion} />
          {nextProject && <ProjectLink id={nextProject.id} content={nextProject.link} />}
          {showScrollToTopBtn && (
            <button className="scroll-top-btn" onClick={handleScrollBackToTop} title="Scroll back to top">
              <img src={topArrow} alt="Scroll back to top" />
            </button>
          )}
        </div>
      }
    </>
  );
}
