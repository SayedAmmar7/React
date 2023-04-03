import { IMG_CON_URL } from "./config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CON_URL + cloudinaryImageId} alt="Food Image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="rating">
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
