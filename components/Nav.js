import React from 'react'
import Link from 'next/link'
import nav from '../styles/nav';

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
			<li>
				<Link href="/resume">
					<a>Resume</a>
				</Link>
			</li>
			<li>
				<Link href="/experiments">
					<a>Experiments/Playground</a>
				</Link>
			</li>
		</ul>

		<style jsx>{nav}</style>
	</nav>
);

export default Nav
