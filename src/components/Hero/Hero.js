import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name is <br />
        Olu-Ajimati Victor
      </SectionTitle>
      <SectionText>
        With nearly five years of hands-on experience in software development, I specialize in designing, building, and optimizing scalable, user-focused solutions. My expertise spans the full development lifecycle, combining a strong foundation in both frontend and backend technologies with a commitment to delivering high-quality, innovative software that drives impactful results.
      </SectionText>
      <Button onClick={() => window.location = '#tech'}>Learn More</Button>
    </LeftSection>
  </Section>
);
 
export default Hero;
