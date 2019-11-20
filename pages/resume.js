import React from 'react';
import Layout from '../components/Layout';
import resume from '../styles/resume';

const Resume = props => {
	return (
		<Layout>
			<section className="experience main">
				<h1>Experience:</h1>
				<p>
					<span>Food52 - Front End Engineer — NY — 2017 - 2019</span> As part of the Product
					and Engineering team for an e-commerce and editorial website we grew
					our traffic and consumer base, built new features, and improved our
					internal tools. During my first year I refactored old code and
					transitioned from Knockout.js to React and Redux. I built a new cart
					and checkout experience that was mobile optimized and implemented
					third party payment tools using Braintree.
				</p>

				<p>
					<span>Wyng - Front End Developer — NY— 2015 - 2017</span> As a Front End Developer
					for the Professional Services team I worked on building client
					websites, email templates, and custom landing pages. We also built
					React components for our User Generated Content (UGC) platform that
					leveraged our API.
				</p>

				<p>
					<span>Time, Inc - Front End Developer — NY— 2014 - 2015</span> Built features for and maintained the front end of Time.com. Besides building small modules for the website I worked on several bug fixes across sprints
					using a Marionette/Backbone framework on top of Wordpress. My largest
					project was building the Time Person of the Year (2015) page.
				</p>
				<p>
					<span>	MiMedia - UI Engineer — NY — 2013 - 2014</span> As a UI Engineer I worked with a front end stack (Backbone) to build features for a media storage and backup platform. I implemented a payment gateway using Stripe’s API and worked on the navigation elements of the platform.
				</p>
			</section>
			<style jsx>{resume}</style>
		</Layout>
	);
};

export default Resume;
