import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    setParams('');
  }, [setParams]);

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
  const [noProduct, setNoProduct] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const list = useRef('');

  useEffect(() => {
    const listCurrent = list.current;

    const handleScroll = () => {
      if (
        !isLoading &&
        hasMore &&
        listCurrent.scrollTop + listCurrent.clientHeight >=
          listCurrent.scrollHeight
      ) {
        setPageNumber((prevState) => prevState + 1);
        setScrollTop(listCurrent.scrollTop);
      }
    };

    if (listCurrent) {
      listCurrent.scrollTop = scrollTop;

      listCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listCurrent) {
        listCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasMore, isLoading, scrollTop]);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      try {
        const resultsProducts = await fetchProducts({
          pageNumber,
          category: currentCategory,
          allowed: recommendation,
          title,
        });

        if (!resultsProducts) {
          return;
        }

        const newProducts = resultsProducts.products;

        if (products.length === 0) {
          setProducts(newProducts);
        } else {
          setProducts((prevState) => {
            return [...prevState, ...newProducts];
          });
        }

        const resultsCategories = await fetchCategories();
        setCategories(resultsCategories.productsCategories);

        const resultsBlood = await fetchBlood();
        setBlood(resultsBlood.blood);

        resultsProducts.totalDocs === 0
          ? setNoProduct(true)
          : setNoProduct(false);

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

    getProducts();
  }, [pageNumber, currentCategory, recommendation, title]);

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

  return (
    <Wrapper>
      <ProductsFilters
        onSubmit={handleSubmit}
        onChange={handleChange}
        handleClear={handleClear}
        inputValue={inputValue}
        categories={categories}
        onUpdateCategory={updateCategory}
        onUpdateRecommendation={updateRecommendation}
      />
      {isLoading && <Loader />}

      {!isLoading && !noProduct && (
        <ProductsList
          products={products}
          blood={blood}
          isRecommend={isRecommend}
          listRef={list}
        />
      )}

      {noProduct && <NotFound />}

      {products.length !== 0}
    </Wrapper>
  );
};

export default ProductsPage;
