import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectPrototypeChange({ content }) {
  return (
    <div className="prototypes-change">
      <div className="img-container">
        <span>Before</span>
        <img alt="prototype before" src={content.beforeImg} />
      </div>
      <p>{content.explanation}</p>
      <div className="img-container">
        <span>After</span>
        <img alt="prototype after" src={content.afterImg} />
      </div>
    </div>
  );
}

ProjectPrototypeChange.propTypes = {
  content: PropTypes.shape({
    beforeImg: PropTypes.string.isRequired,
    afterImg: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
  }).isRequired
};
