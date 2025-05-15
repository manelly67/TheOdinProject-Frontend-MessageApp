import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";

const MainView = () => { 

const [screenWidth, setScreenWidth] = useState(0);
console.log(screenWidth);
// SI ES MENOR DE 360 MUESTRA UN SOLO BOTON QUE LLEVA AL NAVbar DROPDOWN MENU DE TRES BOTONES
// SI ES MAYOR MUESTRA DIRECTAMENTE LOS TRES BOTONES

useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

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