import UserContext from "../utils/UserContext";
import { IMG_CON_URL } from "./config";
import { useContext } from "react";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CON_URL + cloudinaryImageId} alt="Food Image" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="rating">
        <h4>{avgRating} stars</h4>
      </div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default RestaurantCard;
