import React from "react";
import ReactDOM from "react-dom/client";

// while importing you can choose to name example you can use NewHeader instead of Header
// named Import  || {Title,Header}
// import { Title } from "./src/component/Header";

// Header is default import and Title is named import below
//import Header, { Title } from "./src/component/Header";

// Default import
import Header from "./src/component/Header";
// To import everything as an object (Instead of Obj You can use any name like XYZ )
//import * as Obj from "./src/component/Header";
//Obj.Header;

import Body from "./src/component/Body";
import Footer from "./src/component/Footer";

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
