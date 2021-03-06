import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectCard(props) {
  const { project } = props;
  const { title, slogan, theme, cover } = project.banner;

  return (
    <Link to={`/projects/${project.id}`} style={{backgroundColor: theme }} className="project-card">
      <img src={cover} alt="" />
      <div style={{backgroundColor: `${theme}E6` }} className="project-cover">
        <h4>{slogan}</h4>
        <h5>{title}</h5>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.shape({
      title: PropTypes.string,
      slogan: PropTypes.string,
      cover: PropTypes.string,
      theme: PropTypes.string,
    })
  }).isRequired
};
