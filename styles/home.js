import styled from 'styled-components';

export const StyledTitle = styled.h1`
	font-size: 98px;
	font-weight: bolder;
	margin: 0;
	text-align: center;

	@media screen and (max-width: 600px) {
		font-size: 49px;
		line-height: 105px;
	}
`;

export const StyledHomeContainer = styled.main`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
`;

export const StyledAboutSection = styled.p`
	margin: 0 auto;
	text-align: justify;
	width: 600px;
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
