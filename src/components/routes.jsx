import App from "../App";
import ErrorPage from "./Error_page";
import MainView from "./MainView";
import SignUp from "./SignUp";

const routes = [
  {
    path: "/",
    element: <App />,

    errorElement: <ErrorPage />,
  },
  {
    path: "sign_up",
    element: <SignUp />,
  },
  
  {
    path: "main_app",
    element: <MainView />,
    children: [
     
    ],
  },
];

export default routes;
