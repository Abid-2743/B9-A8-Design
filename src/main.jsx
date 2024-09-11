import './index.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home';
import Listed from './components/Listed/Listed';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Pages from './components/Pages/Pages';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/listed',
      element: <Listed></Listed>
    },
    {
      path:'/pages',
      element:<Pages></Pages>
    },
    {
      path:'/Books/:id',
      element:<BookDetails></BookDetails>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
