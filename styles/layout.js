import css from 'styled-jsx/css';

export default css.global`
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
			Helvetica, sans-serif;
	}

	:root {
		--palm-green: #598a78;
		--palm-brown: #8b4513;
	}

	section {
		text-align: center;
	}

	h1 {
		color: var(--palm-green);
	}

	a {
		color: var(--palm-brown);
		text-decoration: none;
	}
`;
