/* import { useParams } from "react-router-dom";
import { IMG_RES_URL } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurant from "../utils/useRestaurant";

// const {id} = useParams(); this is how to read a dynamic url params
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantFood = useRestaurant(resId);

  return !restaurantFood ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id:{resId}</h1>
      <h2>{restaurantFood?.name}</h2>
      <img src={IMG_RES_URL + restaurantFood?.cloudinaryImageId} alt="" />
      <h3>{restaurantFood?.areaName}</h3>
      <h3>{restaurantFood?.city}</h3>
      <h3>{restaurantFood?.avgRating}</h3>

      <h3>{restaurantFood?.costForTwoMessage}</h3>
    </div>
  );
};
export default RestaurantMenu;
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_RES_URL } from "./config";
import Shimmer from "./Shimmer";

// const {id} = useParams(); this is how to read a dynamic url params
const RestaurantMenu = () => {
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
    <div>
      <h1>Restaurant id:{id}</h1>
      <h2>{restaurantFood.name}</h2>
      <img src={IMG_RES_URL + restaurantFood.cloudinaryImageId} alt="" />
      <h3>{restaurantFood?.areaName}</h3>
      <h3>{restaurantFood?.city}</h3>
      <h3>{restaurantFood?.avgRating}</h3>

      <h3>{restaurantFood?.costForTwoMessage}</h3>
    </div>
  );
};
export default RestaurantMenu;
//<img src={IMG_RES_URL + restaurantFood.cloudinaryImageId} alt="" />
