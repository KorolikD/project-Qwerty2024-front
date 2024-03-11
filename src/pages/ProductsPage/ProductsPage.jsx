import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, fetchCategories, fetchBlood } from '../../services/api/products';
import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../components/ProductsList/ProductsList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [blood, setBlood] = useState('');
  const [categories, setCategories] = useState([]);
  // const [page, setPage] = useState(1);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const category = params.get('category') ?? '';
  const recommendation = params.get('recommendation') ?? 'All';

  useEffect(() => {
    async function getProducts() {
      try {
        const resultsProducts = await fetchProducts();
        setProducts(resultsProducts.products);

        const resultsCategories = await fetchCategories();
        setCategories(resultsCategories.productsCategories);

        const resultsBlood = await fetchBlood();
        setBlood(resultsBlood.blood);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
  }, []);

  const isRecommend = (UsersBlood, ProductsBlood) => {
    for (const key in ProductsBlood) {
        if (parseInt(key) === UsersBlood) {
          return ProductsBlood[key] ? 'Not recommended' : 'Recommended';
        }
    }
  };

  const updateCategory = value => {
    params.set('category', value);
    setParams(params);
  };

  const updateRecommendation = value => {
    params.set('recommendation', value);
    setParams(params);
  };

  const handleSubmit = newQuery => {
    setParams({
      query: newQuery,
      category,
      recommendation,
    });
  };

  const visibleProducts = products.filter(product => {
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
    <div>
      <ProductsFilters
        onSubmit={handleSubmit}
        categories={categories}
        onUpdateCategory={updateCategory}
        onUpdateRecommendation={updateRecommendation}
      />
      {products.length === 0 && (
        <>
           <p>Sorry, no results were found for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs.
        Try changing the search parameters.</p>
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
    </div>
  );
};

export default ProductsPage;

 