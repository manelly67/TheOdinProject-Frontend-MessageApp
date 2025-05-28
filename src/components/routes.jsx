import App from "../App";
import ErrorPage from "./Error_page";
import MainView from "./MainView";
import SignUp from "./SignUp";
import Login from "./Login";
import Logout from "./Logout";
import LoginAsGuest from "./LoginAsGuest";

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
    path: "login",
    element: <Login />,
  },
  {
    path: "login_as_guest",
    element: <LoginAsGuest />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  
  {
    path: "main_app",
    element: <MainView />,
    children: [
     
    ],
  },
];

export default routes;
