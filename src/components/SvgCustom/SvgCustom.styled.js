import styled from 'styled-components';

export const SvgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  svg {
    fill: ${(props) => {
      if (
        props.svgName === 'icon-calendar' ||
        props.svgName === 'icon-logout' ||
        props.svgName === 'icon-settings' ||
        props.svgName === 'icon-trash'
      ) {
        return 'none';
      }
      return 'currentColor';
    }};
    stroke: currentColor;
  }
`;
