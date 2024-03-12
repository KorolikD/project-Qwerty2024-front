import icons from '../../img/sprite.svg';
import {
  Title,
  Form,
  Input,
  Button,
  CategorySelect,
  RecommendationSelect,
  Option,
  Wrapper,
  ClearButton,
  SvgSearch,
  SvgCross,
  InputWrapper,
} from './ProductsFilters.styled';

export const ProductsFilters = ({
  onSubmit,
  handleClear,
  categories,
  onUpdateCategory,
  onUpdateRecommendation,
  inputValue,
}) => {
  return (
    <Wrapper>
      <Title>Products</Title>
      <Form>
        <InputWrapper>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />

          <Button
            type="submit"
            onClick={(evt) => {
              onSubmit(evt.target.previousElementSibling.value);
              evt.preventDefault();
            }}
          >
            <SvgSearch width="24" height="24">
              <use href={icons + '#icon-search'} />
            </SvgSearch>
          </Button>

          {inputValue && (
            <ClearButton
              type="submit"
              onClick={(evt) => {
                handleClear;
                evt.preventDefault();
              }}
            >
              <SvgCross width="18" height="18">
                <use href={icons + '#icon-cross'} />
              </SvgCross>
            </ClearButton>
          )}
        </InputWrapper>
        <CategorySelect
          name="category"
          onChange={(evt) => onUpdateCategory(evt.target.value)}
        >
          <Option value="categories">Categories</Option>
          {categories.map((category) => (
            <Option value={category} key={category}>
              {category}
            </Option>
          ))}
        </CategorySelect>
        <RecommendationSelect
          name="recommendation"
          onChange={(evt) => onUpdateRecommendation(evt.target.value)}
        >
          <Option value="All">All</Option>
          <Option value="Recommended">Recommended</Option>
          <Option value="Not recommended">Not recommended</Option>
        </RecommendationSelect>
      </Form>
    </Wrapper>
  );
};
