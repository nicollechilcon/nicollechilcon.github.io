import { ProjectPrototypeChange } from '../../components/prototype-change';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectPrototypes({ content }) {
  return (
    <article className="prototypes">
      <h4>The final prototype</h4>
      <p>{content.description}</p>
      <div className="prototypes-wrapper">
        {content.changes.map((change, i) => (
          <ProjectPrototypeChange key={i} content={change} />
        ))}
      </div>
      <div className="prototype-link-wrapper">
        <a target="_blank" href={content.link} rel="noreferrer">View  protoype</a>
      </div>
    </article>
  );
}

ProjectPrototypes.propTypes = {
  content: PropTypes.shape({
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    changes: PropTypes.arrayOf(PropTypes.shape({
      beforeImg: PropTypes.string.isRequired,
      afterImg: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired
    })),
  }).isRequired
};
