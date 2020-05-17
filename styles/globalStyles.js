import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'Fira Sans';
		src: url('fonts/FiraSans-Book.otf');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	@font-face {
		font-family: 'Fira Code';
		src: url('fonts/FiraCode-Retina.otf') format('opentype'),
			url('fonts/FiraCode-Retina.woff') format('woff'),
			url('fonts/FiraCode-Retina.ttf') format('truetype');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	:root {
		--palm-green: #9BA36B;
		--palm-brown: #8b4513;
	}


	body{
		background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Fira Sans', Helvetica, sans-serif;
    transition: all 0.50s linear;
		margin: 0;
	}

	#__next {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
    align-items: center;
    position: relative;
	}

	.main {
		flex: 1;
	}

	section {
		flex: 1;
		text-align: center;
	}


	h1, h2, h3, h4, h5, h6 {
		color: var(--palm-green);
	}

	h1 {
		font-size: 32px;
	}

	a {
		color: var(--palm-green);
		cursor: pointer;
		font-family: 'Fira Code', monospace;
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
