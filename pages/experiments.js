import React from 'react';
import Layout from '../components/Layout';
import experiments from '../styles/experiments';

const Experiments = () => {
  return (
		<Layout>
			<section>
				<h2>Some fun things I've built</h2>
			</section>

			<section className="experiments">
			</section>
			<style jsx>{experiments}</style>
		</Layout>
	);
}

export default Experiments
