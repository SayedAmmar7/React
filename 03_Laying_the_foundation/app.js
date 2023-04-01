import React from "react";
import ReactDOM from "react-dom/client";

// below is a react element
const heading1 = (
  <h1 id="title" key="h1">
    Hello Hello Hello from heading1
  </h1>
);

// use Title instead od Heading2
const Heading2 = () => (
  <h1 id="title" key="h2">
    Everyone this is heading2
  </h1>
);

/* const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
); */

// React Component
// Functional component - New
//Name of the component start with capital letter

// const HeaderComponent =function () {}  OR
const HeaderComponent = () => {
  return (
    <div>
      {console.log("use can use any piece of js code here")}
      {1 + 2}
      {heading1}
      {Heading2()}
      <h1>Bye</h1>
      <h2>Everyone</h2>
    </div>
  );
};
// you can use either {Heading2()} or <Heading2 />

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
