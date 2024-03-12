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
  const [products, setProducts] = useState([]);
  const [blood, setBlood] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [pageNumber, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const category = params.get('category') ?? '';
  const recommendation = params.get('recommendation') ?? 'All';
  // const pageNumber = params.get('pageNumber') ?? 1;

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const resultsProducts = await fetchProducts();
      const newProducts = resultsProducts.products;
      // setProducts((prevState) => [...prevState, ...newProducts]);
      setProducts(newProducts);

      const resultsCategories = await fetchCategories();
      setCategories(resultsCategories.productsCategories);

      const resultsBlood = await fetchBlood();
      setBlood(resultsBlood.blood);

      // params.set('pageNumber', Number(pageNumber) + 1 );
      // setParams(params);

      // setHasMore(newProducts.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const isRecommend = (UsersBlood, ProductsBlood) => {
    for (const key in ProductsBlood) {
      if (parseInt(key) === UsersBlood) {
        return ProductsBlood[key] ? 'Not recommended' : 'Recommended';
      }
    }
  };

  const updateCategory = (value) => {
    params.set('category', value);
    setParams(params);
  };

  const updateRecommendation = (value) => {
    params.set('recommendation', value);
    setParams(params);
  };

  const handleSubmit = (newQuery) => {
    // setPage(1),
    setProducts([]),
      setParams({
        query: newQuery,
        // pageNumber: 1,
        category,
        recommendation,
      });
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.previousElementSibling.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  // console.log(inputValue);

  // const handleScroll = () => {
  //   if (
  //     !isLoading &&
  //     hasMore &&
  //     window.innerHeight + document.documentElement.scrollTop >=
  //       document.documentElement.offsetHeight - 200
  //   ) {
  //     getProducts();
  //   }
  // };

  const visibleProducts = products.filter((product) => {
    const hasProduct = product.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesCategory =
      category === 'categories' ||
      category === '' ||
      product.category === category;
    const matchesRecommendation =
      recommendation === 'All' ||
      recommendation === '' ||
      isRecommend(blood, product.groupBloodNotAllowed) === recommendation;

    return hasProduct && matchesCategory && matchesRecommendation;
  });

  return (
    <Wrapper style={{ backgroundImage: `url('../../img/products-2x.jpg')` }}>
      {isLoading && (
        <>
          <Loader />
        </>
      )}
      <ProductsFilters
        onSubmit={handleSubmit}
        handleClear={handleClear}
        categories={categories}
        onUpdateCategory={updateCategory}
        onUpdateRecommendation={updateRecommendation}
        inputValue={inputValue}
      />
      {products.length === 0 && (
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
            products={visibleProducts}
            blood={blood}
            isRecommend={isRecommend}
          />
        </>
      )}
    </Wrapper>
  );
};

export default ProductsPage;
