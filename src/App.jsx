import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./pages/Home.jsx";
import Home from './pages/Home';
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import  Detail  from "./pages/Detail";
import { Country } from "./pages/Country";
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './components/ui/ErrorPage'
// import "./App.css";
import './Apptest.css'

let router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
         {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
