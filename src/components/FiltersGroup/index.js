import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, changeCategory, changeRating} = props
  const onclikingCategory = categoryId => {
    changeCategory(categoryId)
  }

  const onclikginRating = ratingId => {
    changeRating(ratingId)
  }
  return (
    <div>
      <p>Category</p>
      <ul>
        {categoryOptions.map(eachCategory => (
          <li>
            <button onClick={onclikingCategory(eachCategory.categoryId)}>{eachCategory.name}</button>
          </li>
        ))}
      </ul>
      <p>Rating</p>
      <ul>
        {ratingsList.map(eachRating => (
          <li>
            <button onClick={onclikginRating(eachRating.ratingId)}>
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
              />
              <p>&up</p>
            </button>
          </li>
        ))}
      </ul>
      <button>Clear Filters</button>
    </div>
  )
}

export default FiltersGroup
