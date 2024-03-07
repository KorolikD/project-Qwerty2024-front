export const ProductsFilters = ({
  onSubmit,
  categories,
  onUpdateCategory,
  onUpdateRecommendation,
}) => {
  return (
    <div>
      <h2>Products</h2>
      <form>
        <input type="text" autoComplete="off" autoFocus placeholder="Search" />

        <button
          type="submit"
          onClick={evt => {
            onSubmit(evt.target.previousElementSibling.value);
            evt.preventDefault();
          }}
        >
          Search
        </button>
        <select
          name="category"
          onChange={evt => onUpdateCategory(evt.target.value)}
        >
          <option value="categories">Categories</option>
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="recommendation"
          onChange={evt => onUpdateRecommendation(evt.target.value)}
        >
          <option value="All">All</option>
          <option value="Recommended">Recommended</option>
          <option value="Not recommended">Not recommended</option>
        </select>
      </form>
    </div>
  );
};
