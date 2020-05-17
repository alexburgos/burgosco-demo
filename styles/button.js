import styled from 'styled-components';

export default styled.button`
  background-color: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
  outline: none;
`;
