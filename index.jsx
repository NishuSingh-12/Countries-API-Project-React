import { createRoot } from "react-dom/client";
import App from "./App";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
          {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <h1>Contact page</h1>,
      },
        {
        path: "/country",
        element: <CountryDetail/>,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
