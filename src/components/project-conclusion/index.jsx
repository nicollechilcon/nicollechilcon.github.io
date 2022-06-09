import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectConclusion({ content }) {
  return (
    <article style={{ backgroundColor: content.theme }} className="conclusion">
      <div>
        <h4>Final thoughts + next steps <span>👆</span></h4>
        <p dangerouslySetInnerHTML={{ __html: content.final_thoughts }} />
        <h4>Next steps</h4>
        <ul>
          {content.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

ProjectConclusion.propTypes = {
  content: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    final_thoughts: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired
};
