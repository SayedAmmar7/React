import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 100,
      count2: 200,
      count3: 300,
      userInfo: {
        name: "Dummy Name",
        login: "Dummy login",
      },
    };
    // OR const {count} = this.state
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sayedammar7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div className="">
        <h1>Profile Class Component</h1>
        <h2>Full Name: {this.state.userInfo.name}</h2>
        <h2>login: {this.state.userInfo.login}</h2>
        <h2>Name: {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <h2>Count2 : {this.state.count2}</h2>
        <h2>Count3 : {this.state.count3}</h2>
        <button
          onClick={() => {
            // WE DO NOT CHANGE STATE DIRECTLY
            // NEVER DO this.state = something
            this.setState({
              count3: 10,
              count2: 99,
            });
          }}
        >
          Count3
        </button>
      </div>
    );
  }
}

export default Profile;
