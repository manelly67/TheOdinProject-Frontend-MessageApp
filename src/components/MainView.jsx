import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";

const MainView = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  
  const token =
  localStorage.getItem("token") !== undefined
    ? JSON.parse(localStorage.getItem("token"))
    : null;

  
/* 
  const initScreen = useCallback(async () => {
    
  },[]); */

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

 /*  useEffect(() => {
    if (token === null) {
      initScreen();
    }
  }, [token, initScreen]);
 */
  return (
    <>
      <main>
        <section className="phonebox">
          <div>
            <ToggleTheme theme="light" />
            <Navbar screenWidth={screenWidth} />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainView;
