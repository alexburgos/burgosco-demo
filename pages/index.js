import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import home from '../styles/home';

const Home = () => (
	<Layout>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<section className="main">
			<section className="hero">
				<h1 className="title">Alex Burgos</h1>
			</section>

			<section className="about">
				<p>
					Front End developer, film photographer, and social activist from
					Puerto Rico/New York, now based in Stockholm. Currently learning, building @ <a href="https://tretton37.com">tretton37</a>.
				</p>
			</section>
		</section>

		<style jsx>{home}</style>
	</Layout>
);

export default Home;
