import { useState } from "react";
const Profile = (props) => {
  const [count] = useState(0);
  const [count2] = useState(00);
  const [count3, setCount3] = useState(1);
  return (
    <div className="">
      <h1>Profile Function</h1>
      <h2>Username : {props.name}</h2>
      <h2>Address</h2>
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Count3 : {count3}</h2>
      <button onClick={() => setCount3(count3 + 1)}>Count3 </button>
    </div>
  );
};
export default Profile;
