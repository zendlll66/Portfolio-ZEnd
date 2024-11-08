import React, { useState } from "react";
import HamberBtn from "./components/HamberBtn";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";

const App = () => {
  const [ClickSidebar, setClickSidebar] = useState(false);
  const MoveSidebar = () => {
    setClickSidebar(!ClickSidebar);
  };
  console.log(ClickSidebar);
  return (
    <>
      <div className="">
        <HamberBtn onClick={MoveSidebar} />

        <div className="absolute ">
          <Sidebar ClickSidebar={ClickSidebar} setClickSidebar={setClickSidebar} />
        </div>
      </div>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Portfolio",
    element: <Portfolio/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
]);

export default App;