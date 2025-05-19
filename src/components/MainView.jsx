import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";

const MainView = () => {
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(0);

  const token =
    localStorage.getItem("token") !== undefined
      ? JSON.parse(localStorage.getItem("token"))
      : null;

  const userDetails = useMemo(() => {
    return getUserDetails(token, location.state);
  }, [token,location.state]);

  const userId = userDetails === null ? null : userDetails.id;
  
  console.log(`token=${token} user=${userDetails} userId=${userId}`);

  function getUserDetails(token, arg2) {
    // arg2 is location.state
    switch (token === null) {
      case true:
        return null;
      case false:
        switch (arg2 !== null) {
          case true: {
            const { user } = arg2;
            return user;
          }
          case false:
            return null;
        }
    }
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  return (
    <>
      <main>
        <section className="phonebox">
          <div>
            <ToggleTheme theme="light" />
            <Navbar screenWidth={screenWidth} token={token} />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainView;
