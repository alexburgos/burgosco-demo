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
		position: relative;
	}

	a:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -3px;
		left: 0;
		background-color: var(--palm-brown);
		visibility: hidden;
		border-radius: 5px;
		transform: scaleX(0);
		transition: 0.15s linear;
	}

	a:hover {
		color: var(--palm-brown);
	}

	a:hover:before,
	a:focus:before {
		visibility: visible;
		transform: scaleX(1);
	}

	@media screen and (max-width: 600px) {
		#__next {
			padding: 0 20px;
		}
	}
`;
