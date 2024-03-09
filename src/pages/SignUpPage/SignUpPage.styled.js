import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  width: 335px;
  height: 368px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.formBorder};
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  margin-top: 14px;
`;
