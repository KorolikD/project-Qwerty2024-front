import { Header as AntHeader } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const Header = styled(AntHeader)`
  background: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
`;
