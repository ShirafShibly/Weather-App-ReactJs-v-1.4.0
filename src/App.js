import "./assets/WeatherApp.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./components/header";
import WeatherCard from "./components/WeatherCard";
import WeatherCardDetails from "./components/WeatherCardDetails";
import Footer from "./components/footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>404</div>,
    },
     {
       path: "/city",
       children: [
         {
           path: ":id",
           element: <Details />,
         },
       ],
     },
  ]);
  return (
    

    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />

  );
};

export default App;
