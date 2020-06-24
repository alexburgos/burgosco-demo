import React from 'react';
import Layout from '../components/Layout';
import {
	StyledTitle,
	StyledHomeContainer,
	StyledAboutSection
} from '../styles/home';

const Home = ({theme, themeToggler}) => (
	<Layout theme={theme} themeToggler={themeToggler} >
		<StyledHomeContainer>
			<StyledTitle>Alex Burgos</StyledTitle>

			<StyledAboutSection>
					Front End developer, film photographer, and social activist from
					Puerto Rico and New York, currently based in Stockholm. Currently learning
					and building @ <a href="https://schibsted.com">Schibsted</a>.
			</StyledAboutSection>
		</StyledHomeContainer>
	</Layout>
);

export default Home;
