import css from 'styled-jsx/css';

export default css`
	.experiments {
		display: flex;
		flex-direction: column;
	}

	.experiment {
		margin-top: 25px;
		border: 1px solid var(--palm-green);
		padding: 20px;
		border-radius: 4px;
	}

	.experiment h3 {
		margin: 0;
	}

	.experiment p {
		font-size: 13px;
		margin: 10px 0;
	}
`;
