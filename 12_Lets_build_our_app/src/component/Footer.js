import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-10 m-5 text-center bg-pink-50">
      <h4>Footer</h4>
      <h1>{user.name}</h1>
    </div>
  );
};
export default Footer;

/* <UserContext.Consumer>
          {(value) => console.log(value)}
        </UserContext.Consumer> */
