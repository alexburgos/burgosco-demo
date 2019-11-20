import css from 'styled-jsx/css';

export default css`
	.Suggestions {
		border: 2px solid var(--palm-brown);
		list-style: none;
		max-height: 150px;
		margin: 3px auto 0;
		overflow-y: auto;
		padding-left: 0;
		text-align: left;
		width: 100%;
	}

	.Suggestions li {
		border-bottom: 1px solid #999;
		cursor: pointer;
		font-size: 18px;
		padding: 5px 10px;
	}

	.Suggestions--active,
	.Suggestions li:hover {
		background-color: var(--palm-brown);
		color: white;
	}
`;