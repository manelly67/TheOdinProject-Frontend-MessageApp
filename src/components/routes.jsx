import App from "../App";
import ErrorPage from "./Error_page";
import MainView from "./MainView";

const routes = [
  {
    path: "/",
    element: <App />,

    errorElement: <ErrorPage />,
  },
  {
    path: "main_app",
    element: <MainView />,
  },
];

export default routes;
