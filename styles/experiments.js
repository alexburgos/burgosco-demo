import styled from 'styled-components';

export const StyledExperimentsSection = styled.section`
	display: flex;
	flex-direction: column;
`;

export const StyledExperiment = styled.div`
	margin-top: 25px;
	border: 1px solid var(--palm-green);
	padding: 20px;
	border-radius: 4px;

	h3 {
		margin: 0;
	}

	p {
		font-size: 13px;
		margin: 10px 0;
	}
`;
