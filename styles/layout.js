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

	#__next {
		display: flex;
    min-height: 100vh;
		flex-direction: column;
		align-items: center;
	}

	section {
		text-align: center;
	}

	h1 {
		color: var(--palm-green);
		font-size: 32px;
	}

	a {
		color: var(--palm-green);
		font-size: 16px;
		text-decoration: none;
	}
`;
