import styled from 'styled-components';

export const StyledResumeSection = styled.section` 
	display: flex;
	flex-direction: column;
	width: 600px;

	p {
		text-align: justify;
	}

	span {
		color: var(--palm-green);
	}

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;