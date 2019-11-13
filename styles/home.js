import css from 'styled-jsx/css';

export default css`
	.hero {
		background-image: url(/water.jpeg);
		background-size: 100%;
	}

	.title {
		color: black;
		background-color: white;
		mix-blend-mode: screen;
		font-size: 98px;
		font-weight: bolder;
		line-height: 210px;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.about {
		margin: 0 auto;
		text-align: justify;
		width: 600px;
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 49px;
			line-height: 105px;
		}

		.about {
			width: 100%;
		}
	}
`;