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
      console.log(newProducts);
      setProducts((prevState) => [...prevState, ...newProducts]);

      const resultsCategories = await fetchCategories();
      setCategories(resultsCategories.productsCategories);

      const resultsBlood = await fetchBlood();
      setBlood(resultsBlood.blood);

      setHasMore(resultsProducts.page < resultsProducts.totalPages);
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
    params.set('category', value);
    setParams(params);
    setCurrentCategory(value);
    setPageNumber(1);
    setProducts([]);
  };

  const updateRecommendation = (value) => {
    params.set('recommended', value);
    setParams(params);

    if (value === 'Recommended') {
      setRecommendation(true);
    } else if (value === 'Not recommended') {
      setRecommendation(false);
    } else {
      setRecommendation('');
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
  };

  const handleSubmit = (newQuery) => {
    if (title !== newQuery) {
      setTitle(newQuery);
      setPageNumber(1);
      console.log('submit reset');
      setProducts([]);
      params.set('query', newQuery);
      setParams({
        query: newQuery,
        category,
        recommended,
      });
    }
  };

  const handleScroll = () => {
    if (
      !isLoading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 20
    ) {
      setPageNumber((prevState) => prevState + 1);
    }
  };

  // const visibleProducts = products.filter((product) => {
  //   const hasProduct = product.title
  //     .toLowerCase()
  //     .includes(query.toLowerCase());

  //   const matchesCategory =
  //     category === 'categories' ||
  //     category === '' ||
  //     product.category === category;
  //   const matchesRecommendation =
  //     recommendation === 'All' ||
  //     recommendation === '' ||
  //     isRecommend(blood, product.groupBloodNotAllowed) === recommendation;

  //   return hasProduct
  //   && matchesCategory && matchesRecommendation;
  // });

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
      {!isLoading && products.length === 0 && (
        <>
          <p>
            Sorry, no results were found for the product filters you selected.
            You may want to consider other search options to find the product
            you want. Our range is wide and you have the opportunity to find
            more options that suit your needs. Try changing the search
            parameters.
          </p>
        </>
      )}
      {products.length > 0 && (
        <>
          <ProductsList
            products={products}
            blood={blood}
            isRecommend={isRecommend}
          />
        </>
      )}
    </Wrapper>
  );
};

export default ProductsPage;
