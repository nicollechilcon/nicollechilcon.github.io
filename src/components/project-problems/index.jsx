import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectProblems({ content }) {
  return (
    <article className="problems">
      <div className="items-box">
        <h5 style={{ color: content.title_theme}}>Main problems we find</h5>
        <ul>
          {content.problems.map((problem, i) => (
            <li key={i}>{problem}</li>
          ))}
        </ul>
      </div>
      <div className="insights">
        <div className="img-wrapper">
          <div className="line-y"></div>
          <div className="line-x"></div>
        </div>
        <div className="items-content">
          <h5 style={{ color: content.title_theme}}>Insight</h5>
          <p dangerouslySetInnerHTML={{ __html: content.insight }}/>
        </div>
      </div>
    </article>
  );
}

ProjectProblems.propTypes = {
  content: PropTypes.shape({
    title_theme: PropTypes.string.isRequired,
    problems: PropTypes.arrayOf(PropTypes.string).isRequired,
    insight: PropTypes.string.isRequired,
  }).isRequired
};
