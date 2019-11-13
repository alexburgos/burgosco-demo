import css from 'styled-jsx/css';

export default css`
	nav {
		text-align: center;
	}
	ul {
		display: flex;
	}
	nav > ul {
		padding: 4px 16px;
	}
	li {
		display: flex;
		padding: 6px 8px;
	}
	a {
		cursor: pointer;
		text-decoration: none;
		font-size: 16px;
	}
`;