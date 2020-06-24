import styled from 'styled-components';

export default styled.button`
  font-family: inherit;
  font-size: 28px;
  background-color: inherit;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 5px;
  outline: none;
`;
