import React from 'react';
import Layout from '../components/Layout';

const Resume = props => {
	return (
		<Layout>
			<section>
				<h1>Experience:</h1>
				<p>
					Food52 - Front End Engineer — NY — 2017 - 2019 As part of the Product
					and Engineering team for an e-commerce and editorial website we grew
					our traffic and consumer base, built new features, and improved our
					internal tools. During my first year I refactored old code and
					transitioned from Knockout.js to React and Redux. I built a new cart
					and checkout experience that was mobile optimized and implemented
					third party payment tools using Braintree.
				</p>

				<p>
					Wyng - Front End Developer — NY— 2015 - 2017 As a Front End Developer
					for the Professional Services team I worked on building client
					websites, email templates, and custom landing pages. We also built
					React components for our User Generated Content (UGC) platform that
					leveraged our API.
				</p>

				<p>
					Time, Inc - Front End Developer — NY— 2014 - 2015 Built features for
					and maintained the front end of Time.com. Besides building small
					modules for the website I worked on several bug fixes across sprints
					using a Marionette/Backbone framework on top of Wordpress. My largest
					project was building the Time Person of the Year (2015) page.
				</p>
				<p>
					MiMedia - UI Engineer — NY — 2013 - 2014 As a UI Engineer I worked
					with a front end stack (Backbone) to build features for a media
					storage and backup platform. I implemented a payment gateway using
					Stripe’s API and worked on the navigation elements of the platform.
				</p>
				<p>You can download a copy of my resume here.</p>
			</section>
		</Layout>
	);
};

export default Resume;
