import { IMG_CON_URL } from "./config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50 ">
      <img src={IMG_CON_URL + cloudinaryImageId} alt="Food Image" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="rating">
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
