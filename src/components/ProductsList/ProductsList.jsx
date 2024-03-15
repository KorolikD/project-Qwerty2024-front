import { ProductsItem } from '../ProductsItem/ProductsItem';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products, isRecommend, blood, listRef }) => {
  return (
    <List className="movies-list" ref={listRef}>
      {products.map((product, idx) => (
        <li key={product._id + idx}>
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
