import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/component/Header";

import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/component/About";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Profile from "./src/component/Profile";

// donot create component inside a component like creating
// const food = () => { } this inside AppLayout
const AppLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />, // parentpath/{path} => localhost1244/about
        children: [
          {
            path: "profile", // parentpath/{path} => localhost1244/about/profile
            element: <Profile />, // donot use /profile in path it means => localhost1244/profile
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
