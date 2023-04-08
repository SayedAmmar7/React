import { useState, useContext } from "react";
import foodvillalogo from "../assets/img/foodvillalogo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useSelector } from "react-redux";

export const Title = () => (
  <a href="/">
    <img className="h-28 px-2" alt="Logo" src={foodvillalogo} />
  </a>
);

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);
  console.log(user.name);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg  ">
      <Title />

      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2"> About</li>
          </Link>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <Link to="/cart">
            <li className="px-2">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
        )}
      </div>
    </div>
  );
};

export default Header;
