import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart1 from "./components/Cart1.js";
import CategorySearch from "./components/CategorySearch.js";
import Footer from "./components/Footer.js";

//chunking
//code splitting
//dynamic bundling
//lazy loading (importing grocery)=on demand loading ,click on grocery

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

function Applayout() {
  const [userName, setUserName] = useState("@xyzabc");
  const [valVegBtn,setValVegBtn]=useState(0);
  const [valNonVegBtn,setValNonVegBtn]=useState(0);
  // console.log("username", userName);
  const [outletLoaded, setOutletLoaded] = useState(false);

  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName,vegBtn:valVegBtn,setValVegBtn,nonVegBtn:valNonVegBtn,setValNonVegBtn }}>
        <div className="app-layout flex flex-col h-svh justify-between">
          <Header />
          <Outlet />
          <Footer />

        </div>
      </UserContext.Provider>
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/collections/83637/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/cart",
        element:<Cart1/>
      },
      { path:"/collections/:entityId",
      element:<CategorySearch/>,
      }
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
