import { ProductsItem } from '../ProductsItem/ProductsItem';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products, isRecommend, blood }) => {
  return (
    <List className="movies-list">
      {products.map((product, idx) => (
        <li key={product._id + idx}>
          {console.log('🤬>>>  product._id + idx:\n', product._id + idx)}
          <ProductsItem
            product={product}
            isRecommend={isRecommend}
            blood={blood}
          />
        </li>
      ))}
    </List>
  );
};
