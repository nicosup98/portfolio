import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText,BoxTitle } from './AcomplishmentsStyles';
/**
 * {years: number,company: string, text: string}[]
 */
const data = [
  {
    company:"Megagroup",
    time: "4 years",
    text:"2 years as front end developer with angular and 2 years as fullstack developer with angular and spring boot"
  },
  {
    company: "Quik(yc w22)",
    time: "8 month",
    text: "angular developer with firebase as serverless backend and OAuth"
  }
];

const Acomplishments = () => (
  !!data.length && <Section id="experience">
    <SectionTitle>Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.time}`}</BoxNum>
          <BoxTitle>{card.company}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
