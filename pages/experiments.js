import React from 'react';
import Layout from '../components/Layout';
import { RandomDogBreed } from '../apps/RandomDogBreed';
import { StyledExperimentsSection, StyledExperiment } from '../styles/experiments';

const Experiments = () => {
  return (
		<Layout>
			<p>A collection of apps I've worked on for fun or past job interviews.</p>
			<StyledExperimentsSection>
				<StyledExperiment>
					<h2>Dog Search</h2>
					<p>
						A simple search input that returns a random dog photo based on the
						breed.
					</p>
					<RandomDogBreed />
				</StyledExperiment>
			</StyledExperimentsSection>
		</Layout>
	);
}

export default Experiments
