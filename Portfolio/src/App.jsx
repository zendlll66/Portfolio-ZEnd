import React, { useState } from "react";
import HamberBtn from "./components/HamberBtn";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";
import MyComponent from "./page/MyComponent";

const App = () => {
  const [ClickSidebar, setClickSidebar] = useState(false);
  const MoveSidebar = () => {
    setClickSidebar(!ClickSidebar);
  };
  console.log(ClickSidebar);
  return (
    <>
      <div className="absolute right-0 m-10 z-50">
        <HamberBtn onClick={MoveSidebar} />
      </div>
      <div className="absolute z-10">
        <Sidebar ClickSidebar={ClickSidebar} setClickSidebar={setClickSidebar} />
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
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/My-component",
    element: <MyComponent />,
  },
]);

export default App;