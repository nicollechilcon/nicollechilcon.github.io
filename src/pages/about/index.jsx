import collage from '../../assets/images/collage-frame.png';
import cv from '../../assets/docs/cv.pdf';
import React from 'react';
import './index.css';

export function About() {
  return (
    <section className="about-section">
      <div>
        <img alt="photos of myself" src={collage}/>
      </div>
      <article>
        <h2>Nicolle Chilcón</h2>
        <p>
          I am a UX designer based in <strong>Lima, Peru.</strong> <br/>
          I have always loved the ability to transmit through visual art and photography. My capacity for attention to detail and creativity has allowed me to create visual content throughout my life. Currently, being a UX Designer, I have the tools to translate my visions into digital platforms, combining the artistic with functionality to generate unique solutions and experiences for the user.
          <br/><br/>
          My background in communication has allowed me to develop innovative ideas by empathizing and having a good understanding with users and examining the strategy on a large scale. I also took a Google UX certified course to strengthen my skills.
          I have an infinite curiosity and passion for offering the best experiences a user can have with perfectly balanced color photos, playful buttons and lots of fun. I have worked on projects with clients in Peru and Mexico.
          <br/><br/>
          When I&apos;m not at my laptop, you&apos;ll find me photographing sunsets, riding my bike, walking with beto, my dog, (the best gift I had during the pandemic) meeting new cafes, or exploring new places in Lima la gris.
          <br/><br/>
          My goal as a UX designer is to create a bridge between a product and its users. <br/>
          I design this portfolio that has experiences and stories that people can empathize and interact with.
          <br/><br/>
          I am currently open for designer positions. So if you are interested...
        </p>
      </article>
      <div className="cta-btns-container">
        <a target="_blank" href="mailto:nicollechilcon@gmail.com" rel="noreferrer">Contact me!</a>
        <a target="_blank" href={cv} rel="noreferrer">Résumé - CV</a>
      </div>
    </section>
  );
}
