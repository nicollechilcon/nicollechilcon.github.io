import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectSolutions({ content }) {
  return (
    <article style={{ backgroundColor: content.light_theme }} className="solutions">
      <div className="items-box">
        <h4>Solutions</h4>
        <ul>
          {content.solutions.map((solution, i) => (
            <li key={i}>
              <span>0{i + 1}</span>
              <p dangerouslySetInnerHTML={{ __html: solution }} />
            </li>
          ))}
        </ul>
      </div>
      <div className="sketching">
        <h4>Sketching our ideas</h4>
        <p>{content.sketching}</p>
      </div>
      <img alt="sketching photos" src={content.sketchingImg} />
    </article>
  );
}

ProjectSolutions.propTypes = {
  content: PropTypes.shape({
    light_theme: PropTypes.string.isRequired,
    solutions: PropTypes.arrayOf(PropTypes.string).isRequired,
    sketching: PropTypes.string.isRequired,
    sketchingImg: PropTypes.string.isRequired,
  }).isRequired
};
