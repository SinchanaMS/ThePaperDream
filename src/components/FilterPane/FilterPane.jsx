import "./FilterPane.css"
export default function FilterPane() {
  return (
    <>
        <section className="prod-child filter-pane shadow">

            <div className="pane-child clear-filter">
                <h4>Filters</h4>
                <button>Clear</button>
            </div>

            <div className="pane-child sort-by-filter">
                <h4>Sort by</h4>
                <div className="filter-child radio-btn" >
                    <label className="label">
                        <input type="radio" name="radio-btn"/>Price: Low to High
                    </label>
                </div>
                <div className="filter-child radio-btn" >
                    <label className="label">
                        <input type="radio" name="radio-btn"/>Price: High to Low
                    </label>
                </div>
                <div className="filter-child radio-btn">
                    <label className="label"> 
                        <input type="radio" name="radio-btn"/>Rating
                    </label>
                </div>
            </div>

            <div className="pane-child price-filter">
                <h4>Price</h4>
                <div className="price-range">
                    <p className="p-grey">250</p>
                    <p className="p-grey">500</p>
                    <p className="p-grey">750</p>
                </div>
                <input type="range" min="150" max="1000" value="100" className="price-slider" id="myRange"/>
            </div>

            <div className="pane-child category-filter">
                <h4>Category</h4>
                <div className="filter-child checkbox-btn">
                    <label className="label">
                        <input type="checkbox" name="checkbox"/>Planners
                    </label>
                </div>
                <div className="filter-child checkbox-btn">
                    <label className="label">
                        <input type="checkbox" name="checkbox"/>Journals
                    </label>
                </div>
                <div className="filter-child checkbox-btn">
                    <label className="label"> 
                        <input type="checkbox" name="checkbox"/>Washi Tapes
                    </label>
                </div>
                <div className="filter-child checkbox-btn">
                    <label className="label">
                        <input type="checkbox" name="checkbox"/>Pens
                    </label>
                </div>
                <div className="filter-child checkbox-btn">
                    <label className="label"> 
                        <input type="checkbox" name="checkbox"/>Stamps
                    </label>
                </div>
            </div>

            <div className="pane-child rating-filter">
                <h4>Ratings</h4>
                <div className="filter-child radio-btn">
                    <label className="label"> 
                        <input type="radio" name="radio-btn"/>4 stars & above
                    </label>
                </div>
                <div className="filter-child radio-btn">
                    <label className="label"> 
                        <input type="radio" name="radio-btn"/>3 stars & above
                    </label>
                </div>
                <div className="filter-child radio-btn">
                    <label className="label"> 
                        <input type="radio" name="radio-btn"/>2 stars & above
                    </label>
                </div>
                <div className="filter-child radio-btn">
                    <label className="label">
                        <input type="radio" name="radio-btn"/>1 star & above
                    </label>
                </div>
            </div>
        </section>
    </>
  )
}
