import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element:<div>Hello World!</div>
    },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>)