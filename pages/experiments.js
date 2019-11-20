import React from 'react';
import Layout from '../components/Layout';
import experiments from '../styles/experiments';
import { RandomDogBreed } from '../apps/RandomDogBreed';

const Experiments = () => {
  return (
		<Layout>
			<p>A collection of apps I've worked on for fun or past job interviews.</p>
			<section className="experiments main">
				<div className="experiment">
					<h2>Dog Search</h2>
					<p>
						A simple search input that returns a random dog photo based on the
						breed.
					</p>
					<RandomDogBreed />
				</div>
			</section>
			<style jsx>{experiments}</style>
		</Layout>
	);
}

export default Experiments
