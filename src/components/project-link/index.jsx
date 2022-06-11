import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectLink({ content, id }) {
  return (
    <div className="project-link">
      <Link to={`/projects/${id}`} style={{ backgroundColor: content.theme }}>
        <h5>There´s More!</h5>
        <img src={content.img} />
      </Link>
      <p>{content.title}</p>
    </div>
  );
}

ProjectLink.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};
