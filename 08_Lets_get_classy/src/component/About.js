import ProfileClass from "./ProfileClass";
import ProfileFunc from "./Profile";
import { Component } from "react";
/* const About = () => {
  return (
    <div className="">
      <h1>About Us Page</h1>
      <p>FoodVilla was created by xyz with the help of React. </p>
      <ProfileClass name={"XYZ"} />
      <ProfileFunc name={"XYZ"} />
    </div>
  );
};
// you can also use <Outlet /> instead of  <Profile />
export default About; */

// EITHER class About extends React.Component{} OR
class About extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount and useEffect are alternative
  // you can make componentDidMount async but you cannot make useEffect function async => why?

  // FIRST OF ALL constructor will be called then
  // render() will be called
  // componentDidMount will be called then

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>FoodVilla was created by xyz with the help of React. </p>
        <ProfileClass name={"XYZ"} />
        <ProfileFunc name={"XYZ"} />
      </div>
    );
  }
}

export default About;

/*
 * Parent Constructor
 * Parent Render
 *  First Child Constructor
 *  First Child Render
 *  Second Child Constructor
 *  Second Child Render
 *
 *  DOM UPDATED fir children
 *
 *  First Child - componentDidMount
 *  Second Child -componentDidMount
 * Parent - componentDidMount
 */
