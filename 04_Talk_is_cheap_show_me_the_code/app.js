import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img
    className="logo"
    alt="Logo"
    src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrauntList = [
  {
    type: "F",
    id: "381168",
    name: "Big Bite Bakers",
    uuid: "e6f061ca-4fb4-486b-80ba-6dc5bd34b3b9",
    city: "98",
    area: "Ambagan",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "apqdeiwifvj9lzqh2scg",
    avgRating: "3.0",
    cuisines: ["Bakery", "Desserts"],
  },

  {
    type: "F",
    id: "383698",
    name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
    uuid: "2ae3ad9d-617c-4977-a4f4-134278a559e8",
    city: "98",
    area: "Sakchi",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "ysu85zw2cu6n6bqrpojp",
    cuisines: [
      "Beverages",
      "Desserts",
      "Ice Cream",
      "Combo",
      "Waffle",
      "Bakery",
      "Healthy Food",
    ],
  },

  {
    type: "F",
    id: "281294",
    name: "CHEERS PARATHA",
    uuid: "9500f337-82d5-4b36-8ebc-1b2431ec3f00",
    city: "98",
    avgRating: "3.7",
    area: "Sakchi",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "rhuocb8rzunngkmdsrzk",
    cuisines: ["North Indian", "Chinese", "Continental"],
  },

  {
    type: "F",
    avgRating: "3.8",
    id: "127035",
    name: "The Villa (Malgudi Station)",
    uuid: "643e3abe-dee1-4786-baed-f4fbe01bfbd9",
    city: "98",
    area: "Sakchi",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "omjkwlcywa5mvjmz3u1x",
    cuisines: ["South Indian", "Desserts", "Chinese"],
  },

  {
    type: "F",
    id: "367523",
    name: "The Cake House",
    avgRating: "4.0",
    uuid: "94ca0e81-706f-499f-8a9c-ef0b95821a36",
    city: "98",
    area: "New Court",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "rmvxkltzv9j1k1koru7k",
    cuisines: ["Bakery"],
  },

  {
    type: "F",
    id: "414910",
    name: "DOSA JUNCTION",
    uuid: "6f6be1a2-7985-486f-81ca-147053d37a5f",
    city: "98",
    area: "Sakchi",
    avgRating: "3.9",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "8bb5cb672dbc229d5e240a54dc44fcef",
    cuisines: ["South Indian"],
  },
  {
    type: "F",
    id: "381376",
    name: "BANARSI PAAN BHANDHAR",
    avgRating: "2.7",
    uuid: "3fc474d1-e772-443f-bd36-0c5ef115e4bd",
    city: "98",
    area: "Sakchi",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "ldrttnzqmbmki74fuuxk",
    cuisines: ["Paan"],
  },

  {
    type: "F",
    id: "109550",
    name: "The Madrasi Hotel",
    uuid: "c6a62ef0-431a-4b8e-8a3a-70b7c8225077",
    city: "98",
    area: "Bistupur",
    avgRating: "4.7",
    totalRatingsString: "5000+ ratings",
    cloudinaryImageId: "hbtf39v85rmf0hitnrqk",
    cuisines: ["South Indian"],
  },

  {
    type: "F",
    id: "666862",
    name: "SHYAM SHAKES AND SNACKS",
    uuid: "00241417-01c4-4bba-b54e-50c9e8249096",
    city: "98",
    avgRating: "1.7",
    area: "Sakchi",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "354dbcc01259918b84aeda1a2b16017e",
    cuisines: ["North Indian"],
  },

  {
    type: "F",
    id: "288425",
    name: " Saraswati sweets and kitchen",
    uuid: "a8f02f73-97b8-431b-bc51-dc23bd12aa53",
    city: "98",
    area: "Sakchi",
    avgRating: "3.5",
    totalRatingsString: "100+ ratings",
    cloudinaryImageId: "ch3za8zrx0pxmstcgt9n",
    cuisines: ["Indian", "South Indian"],
  },

  {
    type: "F",
    id: "154840",
    name: "Anand",
    uuid: "76486c6f-2a15-4e2c-bef2-bdb036f4e9c0",
    city: "98",
    area: "Bistupur",
    totalRatingsString: "5000+ ratings",
    avgRating: "2.9",
    cloudinaryImageId: "virdsxocivnjsi71vsys",
    cuisines: ["South Indian", "Indian", "Chinese", "Tandoor", "Biryani"],
  },

  {
    id: "116273",
    name: "New Gangour Sweets (Bistupur)",
    uuid: "e616d37d-339f-4b19-81ce-9456bf5c720d",
    city: "98",
    area: "Bistupur",
    avgRating: "3.1",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "lvhn4vi4brckcltrejyw",
    cuisines: ["Sweets"],
  },

  {
    type: "F",
    id: "153653",
    name: "Shri Hira Sweets",
    uuid: "7c5b0a6b-34f5-4467-8f05-37a760c0ca5e",
    city: "98",
    area: "Telco",
    avgRating: "4.3",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "lkdytp9vbh8edcmhdyoc",
    cuisines: ["Sweets", "Snacks"],
  },
];

//Or use const RestrauntCard = ({restraunt}) => { && use <h2>{restraunt?.name}</h2>
/* const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.restraunt?.cloudinaryImageId
        }
        alt="Food Image"
      />
      <h2>{props.restraunt?.name}</h2>
      <h3>{props.restraunt?.cuisines.join(", ")}</h3>
      <h4>{props.restraunt?.avgRating} stars</h4>
    </div>
  );
}; */

const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Food Image"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <div className="rating">
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

/* const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Food Image"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
}; */

/* const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard restaurant ={restrauntList[0]} />
      <RestrauntCard restaurant ={restrauntList[1]} />
      <RestrauntCard restaurant ={restrauntList[2]} />

      <RestrauntCard restaurant ={restrauntList[3]} />

      <RestrauntCard restaurant ={restrauntList[4]} />
    </div>
  );
} */

/* const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard {...restrauntList[0]} />
      <RestrauntCard {...restrauntList[1]} />
      <RestrauntCard {...restrauntList[2]} />

      <RestrauntCard {...restrauntList[3]} />

      <RestrauntCard {...restrauntList[4]} />
    </div>
  );
}; */

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntList.map((restaurant) => {
        return <RestrauntCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>Footer</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />

      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
