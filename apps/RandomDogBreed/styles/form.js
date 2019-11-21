import css from 'styled-jsx/css';

export default css`
	.Search {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25px;
	}

	.Search label {
		display: block;
		font-size: 13px;
		margin-bottom: 5px;
	}

	.Search__arrow {
		position: relative;
		top: 5px;
		left: 5px;
	}

	.Search input {
		border: 2px solid var(--palm-green);
		border-radius: 0;
		color: #444;
		font-size: 16px;
		padding: 5px;
		height: 20px;
		width: 250px;
		-webkit-appearance: none;
	}

	.Search__history {
		margin-top: 15px;
	}

	.Search__result {
		border-radius: 50%;
		margin-top: 20px;
		height: 200px;
		width: 200px;
	}

	@media (min-width: 500px) {
		.Search input {
			width: 500px;
		}
	}

	/*  Loading animation */

	.loading {
		animation: blink 1s linear infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
`;