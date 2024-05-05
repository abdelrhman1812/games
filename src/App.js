import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Gamedetails from "./Components/Gamedetails/Gamedetails";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Category from "./Components/Categegory/Category";
import Stores from "./Components/Stores/Stores";
import Storydetails from "./Components/Storydetails/Storydetails";
import Creators from "./Components/Creators/Creators";
import SpecificCreator from "./Components/SpecificCreator/SpecificCreator";
import AllGames from "./Components/AllGames/AllGames";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "games", element: <AllGames /> },
        { path: "gamedetails/:id", element: <Gamedetails /> },
        { path: "category", element: <Category /> },
        { path: "stores", element: <Stores /> },
        { path: "storydetails/:id", element: <Storydetails /> },
        { path: "creators", element: <Creators /> },
        { path: "creatordetails/:id", element: <SpecificCreator /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
