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
        element: <About />,
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
