import styled from 'styled-components';

export default styled.button`
  font-family: inherit;
  font-size: 18px;
  background-color: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
  outline: none;
`;
