import React from 'react';
import Layout from '../components/Layout';
import {
	StyledTitle,
	StyledHomeContainer,
	StyledAboutSection
} from '../styles/home';

const Home = ({ theme, themeToggler }) => (
  <Layout theme={theme} themeToggler={themeToggler}>
    <StyledHomeContainer>
      <StyledTitle>Alex Burgos</StyledTitle>

      <StyledAboutSection>
        Hi! I'm Alex, and I've been a Front End Engineer for 8+ years, focusing
        on clean, reusable, and performant UIs. I'm also a hobby film
        photographer, and have a record of social activism in Puerto Rico and
        New York, places I call home. I'm currently based in Helsinki, Finland
        and I'm part of a creative team @{' '}
        <a href='https://smartly.io'>Smartly</a> building a web based Editor for
        our platform.
      </StyledAboutSection>
    </StyledHomeContainer>
  </Layout>
);

export default Home;
