import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`;

export const WrapperRecommend = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`;

export const Diet = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const Recommendation = styled.p`
  font-size: 12px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ children }) => (children === 'Not recommended' ? 'red' : 'green')};
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: none;
`;

export const WrapperForTitle = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const ProductItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textWhite40};
`;

export const SpanItem = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const SvgAdd = styled.svg`
  stroke: ${({ theme }) => theme.colors.primary};
`;

export const SpanRun = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
`;

export const SvgRun = styled.svg`
  fill: white;
`;