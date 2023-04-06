import { useState } from "react";
import foodvillalogo from "../assets/img/foodvillalogo.png";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img className="logo" alt="Logo" src={foodvillalogo} />
  </a>
);

const loggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li> About</li>
          </Link>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
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
