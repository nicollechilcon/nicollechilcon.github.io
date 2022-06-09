import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectHero({ content }) {
  return (
    <div className="hero" style={{ backgroundColor: content.theme }}>
      <img alt="project title" src={content.titleImg} />
      <img alt="project cover" src={content.coverImg} />
    </div>
  );
}

ProjectHero.propTypes = {
  content: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    titleImg: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
  }).isRequired
};
