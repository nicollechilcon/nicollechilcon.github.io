import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectCard(props) {
  const { project } = props;

  return (
    <div className="project-card">
      {project.banner.title}
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    banner: PropTypes.shape({
      title: PropTypes.string,
      slogan: PropTypes.string,
      imgs: PropTypes.arrayOf(PropTypes.string),
      theme: PropTypes.string,
    })
  }).isRequired
};
