import styled from 'styled-components';

export const SvgWrap = styled.svg`
  stroke: ${(props) =>
    props.$color || props.$stroke
      ? props.$color || props.$stroke
      : props.theme.colors.secondary};
  fill: ${(props) => (props.$color ? props.$color : 'none')};
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
  transition:
    fill 350ms ease,
    stroke 350ms ease;
  &:hover {
    stroke: ${(props) => props.$hover};
    fill: ${(props) => (props.$color ? props.$hover : 'none')};
  }
  @media screen and (min-width: 768px) {
    width: ${(props) => `${props.$tabSize}px`};
    height: ${(props) => `${props.$tabSize}px`};
  }
`;
