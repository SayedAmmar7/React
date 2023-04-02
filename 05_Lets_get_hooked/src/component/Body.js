import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  // this how you create variable in js => searchTxt = "KFC";

  //this how you create local state variable in React

  const [searchInput, setSearchInput] = useState("Search...");

  // useState is a hook
  // it returns = [ variable name,function to update the variable]
  //hook is a function at the end of the day
  // setSearchInput is a function
  //             OR
  //const searchvar = useState();
  //const [searchInput, setSearchInput] = searchvar;

  // const [btnClicked, setBtnClicked] = useState("false");

  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search ..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}
      </div>
    </>
  );
};

/* <button
          className="search-btn"
          onClick={() => {
            if (btnClicked === "false") {
              setBtnClicked("true");
            } else {
              setBtnClicked("false");
            }
          }}
        >
          Search
        </button>
        <h1>{btnClicked}</h1> */

export default Body;
