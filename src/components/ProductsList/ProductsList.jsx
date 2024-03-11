import { ProductsItem } from '../ProductsItem/ProductsItem';

export const ProductsList = ({ products, isRecommend, blood }) => {
  return (
    <ul className="movies-list">
      {products.map(product => (
        <li key={product._id}>
          <ProductsItem
            product={product}
            isRecommend={isRecommend}
            blood={blood}
          />
        </li>
      ))}
    </ul>
  );
};
