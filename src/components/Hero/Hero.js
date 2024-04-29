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
        I am a software developer with over 3 years of experience in an educational background. I am very diligent and passionate about developing my career in software development who loves learning.
      </SectionText>
      <Button onClick={() => window.location = '#tech'}>Learn More</Button>
    </LeftSection>
  </Section>
);
 
export default Hero;