import css from 'styled-jsx/css';

export default css.global`
	@font-face {
		font-family: 'Fira Sans';
		src: url('/public/fonts/FiraSans-Book.otf');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	@font-face {
		font-family: 'Fira Code';
		src: url('/public/fonts/FiraCode-Retina.otf');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	:global(body) {
		margin: 0;
		font-family: 'Fira Sans', Helvetica, sans-serif;
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
		font-family: 'Fira Code', monospaced;
		font-size: 16px;
		text-decoration: none;
	}

	@media screen and (max-width: 600px) {
		#__next {
			padding: 0 20px;
		}
	}
`;
