import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectResearchBox({ content }) {
  return (
    <article style={{ backgroundColor: content.dark_theme }} className="research">
      <div>
        <h4>Research</h4>
        <p>{content.description}</p> <br/>
        <p>You can find the complete research <b><a target="_blank" href={content.link} rel="noreferrer">here</a></b></p>
      </div>
    </article>
  );
}

ProjectResearchBox.propTypes = {
  content: PropTypes.shape({
    dark_theme: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired
};
