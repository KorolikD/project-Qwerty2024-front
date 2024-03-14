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
  onChange,
  handleClear,
  inputValue,
  categories,
  onUpdateCategory,
  onUpdateRecommendation,
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
            value={inputValue}
            onChange={onChange}
          />
          <Button
            type="submit"
            onClick={(evt) => {
              onSubmit(inputValue);
              evt.preventDefault();
            }}
          ></Button>
          <SvgSearch width="24" height="24">
            <use href={icons + '#icon-search'} />
          </SvgSearch>

          {inputValue && (
            <ClearButton onClick={handleClear}>
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
          <Option value="">Categories</Option>
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
          <Option value="">All</Option>
          <Option value="Recommended">Recommended</Option>
          <Option value="Not recommended">Not recommended</Option>
        </RecommendationSelect>
      </Form>
    </Wrapper>
  );
};
