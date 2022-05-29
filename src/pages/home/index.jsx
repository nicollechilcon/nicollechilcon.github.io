import { AboutMeHero } from '../../components/about-me-hero';
import { ProjectsBanner } from '../../components/projects-banner';
import { ComingSoonBanner } from '../../components/coming-soon-banner';
import React from 'react';

export function Home() {
  return (
    <div>
      <AboutMeHero />
      <ProjectsBanner />
      <ComingSoonBanner />
    </div>
  );
}
