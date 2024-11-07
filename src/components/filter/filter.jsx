import './filter.scss'
function Filter() {
  return (
    <div className='filter'>
      <h1>Search results for  <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city"> Location</label>
          <input type='text' id='city' placeholder='City Location'></input>
        </div>
      </div>


      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      

      <div className="item">
        <label htmlFor="property">Property</label>
        <select name="property" id="property">
          <option value="any">Any</option>
          <option value="apartment">Apartment</option>
          <option value="apartment">Residential homes</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
      </div>

      <div className="item">
        <label htmlFor="minPrice">MinPrice</label>
        <input type='Number' id='minPrice' name='minPrice' placeholder='any'></input>
      </div>

      <div className="item">
        <label htmlFor="maxPrice">MaxPrice</label>
        <input type='Number' name="maxPrice" id='maxPrice' placeholder='any'></input>
      </div>


      <div className="item">
        <label htmlFor="bedroom">Bedroom</label>
        <input type='text' id='bedroom' placeholder='any' name='bedroom'></input>
      </div>

      <div>
        <button >
          <img src="/search.png" alt="" />
        </button>
      </div>
      </div>
    </div>
  )
}
export default Filter;