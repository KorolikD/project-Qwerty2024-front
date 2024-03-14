import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  fetchProducts,
  fetchCategories,
  fetchBlood,
} from '../../services/api/products';
import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/Loader/Loader';
import { Wrapper } from './ProductsPage.styled';
import { NotFound } from '../../components/NotFoundProducts/NotFound';

const ProductsPage = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const category = params.get('category') ?? '';
  const recommended = params.get('recommendation') ?? 'All';

  const [products, setProducts] = useState([]);
  const [blood, setBlood] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [recommendation, setRecommendation] = useState(recommended);
  const [title, setTitle] = useState(query);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, [pageNumber, currentCategory, recommendation, title]);

  async function getProducts() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const resultsProducts = await fetchProducts(
        pageNumber,
        currentCategory,
        recommendation,
        title
      );
      const newProducts = resultsProducts.products;
      setProducts((prevState) => [...prevState, ...newProducts]);

      const resultsCategories = await fetchCategories();
      setCategories(resultsCategories.productsCategories);

      const resultsBlood = await fetchBlood();
      setBlood(resultsBlood.blood);

      setHasMore(
        resultsProducts.page < resultsProducts.totalPages &&
          newProducts.length > 0
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const isRecommend = (UsersBlood, ProductsBlood) => {
    for (const key in ProductsBlood) {
      if (parseInt(key) === UsersBlood) {
        return ProductsBlood[key] ? 'Recommended' : 'Not recommended';
      }
    }
  };

  const updateCategory = (value) => {
    setCurrentCategory(value);
    setPageNumber(1);
    setProducts([]);
    if (value === '') {
      params.delete('category');
      setParams(params);
    } else {
      params.set('category', value);
      setParams(params);
    }
  };

  const updateRecommendation = (value) => {
    if (value === 'Recommended') {
      setRecommendation(true);
      params.set('recommended', value);
      setParams(params);
    } else if (value === 'Not recommended') {
      setRecommendation(false);
      params.set('recommended', value);
      setParams(params);
    } else {
      setRecommendation('');
      params.delete('recommended');
      setParams(params);
    }
    setPageNumber(1);
    setProducts([]);
  };

  const handleChange = (evt) => {
    evt.preventDefault();
    setInputValue(evt.target.value);
  };

  const handleClear = (evt) => {
    evt.preventDefault();
    setInputValue('');
    setTitle('');
    if (title) {
      setProducts([]);
    }
    params.delete('query');
    setParams(params);
  };

  const handleSubmit = (newQuery) => {
    if (title !== newQuery) {
      setTitle(newQuery);
      setPageNumber(1);
      setProducts([]);
      params.set('query', newQuery);
      setParams(params);
    }
    if (newQuery === '') {
      params.delete('query');
      setParams(params);
    }
  };

  const handleScroll = () => {
    if (
      !isLoading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
    ) {
      setPageNumber((prevState) => prevState + 1);
    }
  };

  return (
    <Wrapper>
      {isLoading && (
        <>
          <Loader />
        </>
      )}
      <ProductsFilters
        onSubmit={handleSubmit}
        onChange={handleChange}
        handleClear={handleClear}
        inputValue={inputValue}
        categories={categories}
        onUpdateCategory={updateCategory}
        onUpdateRecommendation={updateRecommendation}
      />
      {!isLoading && products.length > 0 && (
        <>
          <ProductsList
            products={products}
            blood={blood}
            isRecommend={isRecommend}
          />
        </>
      )}
      {!isLoading && products.length === 0 && (
        <>
          <NotFound />
        </>
      )}
    </Wrapper>
  );
};

export default ProductsPage;
