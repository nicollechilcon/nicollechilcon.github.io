import linkedin from '../../assets/icons/linkedin.svg';
import behance from '../../assets/icons/behance.svg';
import email from '../../assets/icons/email.svg';
import React from 'react';
import './index.css';

export function Footer() {
  return (
    <footer id="footer">
      <p>let&apos;s create something together! 🙋‍♀️</p>
      <div className="socials-container">
        <a target="_blank" href="https://www.behance.net/nicollechsuarez" rel="noreferrer">
          <img alt="check out my behance account" src={behance} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nicollechilconsuarez/" rel="noreferrer">
          <img alt="check out my linkedin account" src={linkedin} />
        </a>
        <a target="_blank" href="mailto:nicollechilcon@gmail.com" rel="noreferrer">
          <img alt="send me an email" src={email} />
        </a>
      </div>
    </footer>
  );
}
