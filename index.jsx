import { createRoot } from "react-dom/client";
import App from "./App";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
          {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <h1>Contact page</h1>,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
