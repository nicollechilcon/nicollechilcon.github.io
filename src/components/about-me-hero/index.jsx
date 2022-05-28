import React from 'react';
import './index.css';
import me from '../../../src/assets/images/me.png';

export function AboutMeHero() {
  return (
    <main className="about-container">
      <section className="about-section">
        <h1>Nicolle Chilcón</h1>
        <h2>UX Designer</h2>
        <div>
          I have a passion for expressing my creativity through the design of digital platforms.
          Being a UX Designer, I seek to create the best experiences for users using my infinite curiosity and caffeine. More <strong>about me</strong> 👋
        </div>
      </section>
      <img alt="" src={me}/>
    </main>
  );
}
