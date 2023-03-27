import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

export default Router;