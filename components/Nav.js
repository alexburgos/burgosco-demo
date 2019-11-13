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
				<Link href="/resume">
					<a>Resume</a>
				</Link>
			</li>
			<li>
				<Link href="/experiments">
					<a>Playground</a>
				</Link>
			</li>
		</ul>

		<style jsx>{nav}</style>
	</nav>
);

export default Nav
