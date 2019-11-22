import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: 'Fira Sans';
		src: url('/public/fonts/FiraSans-Book.otf');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	@font-face {
		font-family: 'Fira Code';
		src: url('/public/fonts/FiraCode-Retina.otf') format('opentype'),
			url('/public/fonts/FiraCode-Retina.woff') format('woff'),
			url('/public/fonts/FiraCode-Retina.ttf') format('truetype');
		font-weight: normal;
		font-display: auto;
		font-style: normal;
	}

	:root {
		--palm-green: #9BA36B;
		--palm-brown: #8b4513;
	}


	body{
		background-color: ${props =>
			props.theme.primary === 'dark' ? '#2E3440' : '#fff'};
		color: ${props => (props.theme.primary === 'dark' ? '#fff' : '#333')};
		margin: 0;
		font-family: 'Fira Sans', Helvetica, sans-serif;
	}

	#__next {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		align-items: center;
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


// export default css.global`
	
// `;
