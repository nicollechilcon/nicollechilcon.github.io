import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectDesignProcess({ imageSrc }) {
  return (
    <article className="design-process">
      <h4>Design process</h4>
      <img src={imageSrc} alt="discover, define, ideate, design, testing"/>
    </article>

  );
}

ProjectDesignProcess.propTypes = {
  imageSrc: PropTypes.string.isRequired
};
