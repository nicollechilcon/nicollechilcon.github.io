import { ProjectDesignProcess } from '../../components/project-design-process';
import { ProjectMainSection } from '../../components/project-main-section';
import { ProjectResearchBox } from '../../components/project-research-box';
import { ProjectSolutions } from '../../components/project-solutions';
import { ProjectConclusion } from '../../components/project-conclusion';
import { ProjectProblems } from '../../components/project-problems';
import { ProjectHero } from '../../components/project-hero';
import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';
import React from 'react';

export function Projects() {
  const { id } = useParams();
  const project = projects.find(project => id === project.id);

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
          <ProjectConclusion content={project.content.conclusion} />
        </div>
      }
    </>
  );
}
