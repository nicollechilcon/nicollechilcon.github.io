import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export function ProjectMainSection({ content, name }) {
  return (
    <article className="main">
      <div className="description">
        <h4>What is <span style={{ color: content.theme }}>{name}</span>?</h4>
        <p>{content.description}</p>
      </div>
      <div className="challenge">
        <h4>What was the <span style={{ color: content.theme }}>challenge</span>?</h4>
        <p>{content.challenge}</p>
      </div>
      <div className="additional-info">
        <div className="goals">
          <h5>Project Goal</h5>
          <p>{content.goal}</p>
        </div>
        <div className="roles">
          <h5>Role</h5>
          <p>{content.roles.map((role, i) => <span key={i}>{role} </span>)}</p>
        </div>
        <div className="tools">
          <h5>Tools</h5>
          <p>{content.tools.map((tool, i) => <span key={i}>{tool} </span>)}</p>
        </div>
        <div className="team">
          <h5>Team</h5>
          <p>{content.team}</p>
        </div>
        <div className="duration">
          <h5>Duration</h5>
          <p>{content.duration}</p>
        </div>
      </div>
    </article>
  );
}

ProjectMainSection.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    team: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired
  }).isRequired
};
