import "./FilterPane.css";
import { useFilter } from "../../contexts/FilterContext";
export default function FilterPane() {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div>
      <section className="prod-child filter-pane shadow">
        <div className="pane-child clear-filter">
          <h4>Filters</h4>
          <button onClick={() => filterDispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </div>

        <div className="pane-child sort-by-filter">
          <h4>Sort by</h4>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                name="sort-btn"
                checked={filterState.sortby === "LOW-TO-HIGH"}
                onChange={() =>
                  filterDispatch({ type: "SORT_BY", payload: "LOW-TO-HIGH" })
                }
              />
              Price: Low to High
            </label>
          </div>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                name="sort-btn"
                checked={filterState.sortby === "HIGH-TO-LOW"}
                onChange={() =>
                  filterDispatch({ type: "SORT_BY", payload: "HIGH-TO-LOW" })
                }
              />
              Price: High to Low
            </label>
          </div>
        </div>

        <div className="pane-child price-filter">
          <h4>Price</h4>
          <div className="price-range">
            <p>200</p>
            <p>1000</p>
          </div>
          <input
            type="range"
            min="200"
            max="1000"
            step="100"
            className="price-slider"
            id="range"
            value={filterState.range}
            onChange={(e) =>
              filterDispatch({ type: "PRICE-RANGE", payload: e.target.value })
            }
          />
          <div>{`Rs.0 to Rs.${filterState.range}`}</div>
        </div>

        <div className="pane-child category-filter">
          <h4>Category</h4>
          <div className="filter-child checkbox-btn">
            <label className="label">
              <input
                type="checkbox"
                name="category"
                checked={filterState.category.some(
                  (category) => category === "Planners"
                )}
                value="Planners"
                onChange={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Planners
            </label>
          </div>
          <div className="filter-child checkbox-btn">
            <label className="label">
              <input
                type="checkbox"
                name="category"
                checked={filterState.category.some(
                  (category) => category === "Journals"
                )}
                value="Journals"
                onChange={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Journals
            </label>
          </div>
          <div className="filter-child checkbox-btn">
            <label className="label">
              <input
                type="checkbox"
                name="category"
                checked={filterState.category.some(
                  (category) => category === "Washi Tapes"
                )}
                value="Washi Tapes"
                onChange={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Washi Tapes
            </label>
          </div>
          <div className="filter-child checkbox-btn">
            <label className="label">
              <input
                type="checkbox"
                name="category"
                checked={filterState.category.some(
                  (category) => category === "Pens"
                )}
                value="Pens"
                onChange={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Pens
            </label>
          </div>
          <div className="filter-child checkbox-btn">
            <label className="label">
              <input
                type="checkbox"
                name="category"
                checked={filterState.category.some(
                  (category) => category === "Stamps"
                )}
                value="Stamps"
                onChange={(e) =>
                  filterDispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Stamps
            </label>
          </div>
        </div>

        <div className="pane-child rating-filter">
          <h4>Ratings</h4>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                value="4"
                name="rating"
                checked={filterState.rating === "4"}
                onChange={(e) =>
                  filterDispatch({ type: "RATING", payload: e.target.value })
                }
              />
              4 stars & above
            </label>
          </div>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                value="3"
                name="rating"
                checked={filterState.rating === "3"}
                onChange={(e) =>
                  filterDispatch({ type: "RATING", payload: e.target.value })
                }
              />
              3 stars & above
            </label>
          </div>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                value="2"
                name="rating"
                checked={filterState.rating === "2"}
                onChange={(e) =>
                  filterDispatch({ type: "RATING", payload: e.target.value })
                }
              />
              2 stars & above
            </label>
          </div>
          <div className="filter-child radio-btn">
            <label className="label">
              <input
                type="radio"
                value="1"
                name="rating"
                checked={filterState.rating === "1"}
                onChange={(e) =>
                  filterDispatch({ type: "RATING", payload: e.target.value })
                }
              />
              1 star & above
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}
