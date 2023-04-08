import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_RES_URL } from "./config";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// const {id} = useParams(); this is how to read a dynamic url params
const RestaurantMenu = () => {
  const menu = {
    items: [
      "chicken chilli",
      "pizza",
      "burger",
      "biryani",
      "momos",
      "chowmein",
      "pasta",
      "veg roll",
    ],
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };
  const params = useParams();
  const { id } = params;
  //console.log(params);

  const [restaurantFood, setRestaurantFood] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8047623&lng=86.2028402&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantFood(json.data.cards[0].card.card.info);
  }
  return !restaurantFood ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="">
        <h1>Restaurant id:{id}</h1>
        <h2>{restaurantFood.name}</h2>
        <img src={IMG_RES_URL + restaurantFood.cloudinaryImageId} alt="" />
        <h3>{restaurantFood?.areaName}</h3>
        <h3>{restaurantFood?.city}</h3>
        <h3>{restaurantFood?.avgRating}</h3>

        <h3>{restaurantFood?.costForTwoMessage}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {menu?.items.map((item) => (
            <li>
              {item}-{" "}
              <button
                className="p-1 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
//<img src={IMG_RES_URL + restaurantFood.cloudinaryImageId} alt="" />
/* <div>
        <button
          className="p-2 m-2 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div> */
