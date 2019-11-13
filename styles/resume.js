import css from 'styled-jsx/css';

export default css`
	.experience {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 600px;
	}

	p {
		text-align: justify;
	}

	span {
		color: var(--palm-green);
	}

	@media screen and (max-width: 600px) {
		.experience {
			width: 100%;
		}
	}
`;