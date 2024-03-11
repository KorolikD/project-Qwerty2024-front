export const ProductsItem = ({ product: {title, calories, category, weight, groupBloodNotAllowed}, blood, isRecommend } ) => {
  const recommendation = isRecommend(blood, groupBloodNotAllowed)
  return (
    <div>
      <p>Diet</p>
      <p>{recommendation}</p>
      <button>Add</button>
      <h3>{title}</h3>
      <ul>
        <li>calories: {calories}</li>
        <li>category: {category}</li>
        <li>weight: {weight}</li>
        </ul>
    </div>
  );
};
