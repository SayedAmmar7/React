//import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const { user, setUser } = useContext(UserContext);
  // nerver write useState inside of if-else and for loop
  const [searchInput, setSearchInput] = useState("Search...");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  // if we do not put [] then the callback function in useEffect will called everytime when something is rendered

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8047623&lng=86.2028402&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline,please check your connection!!</h1>;
  }

  if (!allRestaurants) return null; // if allRestaurants is not there return null

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-2">
        <input
          type="text"
          className="focus:bg-gray-50 p-2 m-2 "
          placeholder="Search ..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-purple-700 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          placeholder={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
            })
          }
        />
      </div>

      <div className="flex flex-wrap justify-center ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
