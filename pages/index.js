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

			<section className="hero">
				<h1 className="title">Alex Burgos</h1>
			</section>

			<style jsx>{home}</style>
		</Layout>
);

export default Home;
