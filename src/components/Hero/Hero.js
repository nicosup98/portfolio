import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import TextAnimation from '../Animation/TextAnimation';

const Hero = () => (
    <Section row justify_center>
      <LeftSection>
        <SectionTitle main center>
          Hey there
        </SectionTitle>
        <SectionText>
          <TextAnimation text={`I'm Nicolangelo Damico, a full stack web developer.`} />
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
);

export default Hero;
