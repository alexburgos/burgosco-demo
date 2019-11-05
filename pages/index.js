import React from 'react';
import Layout from '../components/Layout';
import home from '../styles/home';

const Home = () => (
	<Layout>
		<section className="main">
			<div className="hero">
				<h1 className="title">Alex Burgos</h1>
			</div>

			<section className="about">
				<p>
					Front End developer, film photographer, and social activist from
					Puerto Rico and New York but living in Stockholm. Currently learning and building @ <a href="https://tretton37.com">tretton37</a>.
				</p>
			</section>
		</section>

		<style jsx>{home}</style>
	</Layout>
);

export default Home;
