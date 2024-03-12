import icons from '../../img/sprite.svg';
import {
  Diet,
  Wrapper,
  Button,
  Recommendation,
  SvgAdd,
  WrapperTop,
  WrapperRecommend,
  WrapperForTitle,
  SpanRun,
  SvgRun,
  Title,
  ProductList,
  ProductItem,
  SpanItem,
} from './ProductsItem.styled';

export const ProductsItem = ({
  product: { title, calories, category, weight, groupBloodNotAllowed },
  blood,
  isRecommend,
}) => {
  const recommendation = isRecommend(blood, groupBloodNotAllowed);
  return (
    <Wrapper>
      <WrapperTop>
        <Diet>DIET</Diet>
        <WrapperRecommend>
          <Recommendation>{recommendation}</Recommendation>
          <Button>
            Add
            <SvgAdd width="16" height="16">
              <use href={icons + '#icon-next'} />
            </SvgAdd>
          </Button>
        </WrapperRecommend>
      </WrapperTop>
      <WrapperForTitle>
        <SpanRun>
          <SvgRun width="14" height="16">
            <use href={icons + '#icon-running'} />
          </SvgRun>
        </SpanRun>
        <Title>{title}</Title>
      </WrapperForTitle>
      <ProductList>
        <ProductItem>
          calories: <SpanItem>{calories}</SpanItem>
        </ProductItem>
        <ProductItem>
          category: <SpanItem>{category}</SpanItem>
        </ProductItem>
        <ProductItem>
          weight: <SpanItem>{weight}</SpanItem>
        </ProductItem>
      </ProductList>
    </Wrapper>
  );
};
