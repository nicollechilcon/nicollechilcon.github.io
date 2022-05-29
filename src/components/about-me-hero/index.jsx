import me from '../../../src/assets/images/me.png';
import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';

export function AboutMeHero() {
  return (
    <main className="about-hero-container">
      <section className="about-hero-section">
        <h1>Nicolle Chilcón</h1>
        <h2>UX Designer</h2>
        <div>
          I have a passion for expressing my creativity through the design of digital platforms.
          Being a UX Designer, I seek to create the best experiences for users using my infinite curiosity and caffeine.
          More <Link to="/about-me"><strong>about me</strong></Link> 👋
        </div>
      </section>
      <img alt="" src={me}/>
    </main>
  );
}
