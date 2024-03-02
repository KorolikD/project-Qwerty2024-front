import styled from 'styled-components';

export const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 100px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
