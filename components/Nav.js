import React from 'react'
import Link from 'next/link'
// import nav from '../styles/nav';
import { StyledNav, StyledUl, StyledLi, StyledAnchor } from '../styles/nav';

const Nav = () => (
	<StyledNav>
		<StyledUl>
			<StyledLi>
				<Link href="/">
					<StyledAnchor>Home</StyledAnchor>
				</Link>
			</StyledLi>
			<StyledLi>
				<Link href="/resume">
					<StyledAnchor>Resume</StyledAnchor>
				</Link>
			</StyledLi>
		</StyledUl>
	</StyledNav>
);

export default Nav
