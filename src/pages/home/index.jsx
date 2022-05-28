import { AboutMeHero } from '../../components/about-me-hero';
import { ProjectsBanner } from '../../components/projects-banner';
import React from 'react';
import './index.css';

export function Home() {
  return (
    <div>
      <AboutMeHero />
      <ProjectsBanner />
    </div>
  );
}
