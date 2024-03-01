import { LoadingOutlined } from '@ant-design/icons';
import { Spin as SpinAntd } from 'antd';
import styled from 'styled-components';

export const Spinner = styled(LoadingOutlined)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Spin = styled(SpinAntd)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
