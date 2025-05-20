import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAddresses } from "./assets/urlAddresses";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";
import Imagen from "./components/Imagen";

const body = document.querySelector("body");
const titleDiv = document.querySelector("title");

function App() {
  
  if (body) {
    document.body.className = "light";
  }
  if (titleDiv) {
    titleDiv.textContent = 'MESSAGING APP';
  }

  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="phonebox">
          <div style={{position:'absolute', right:'10px'}}>
          <ToggleTheme theme="light" />
          </div>
          

          <button
            style={{ display: "flex", flexDirection:"column",justifyContent:"flex-start",alignItems:"center", gap:'30px' }}
            className="phonebutton"
            onClick={() => {
              navigate("/main_app", { replace: true });
            }}
          >
            <div
              style={{
                border: "1px solid black",
                borderRadius: "60px",
                width: "100px",
                height: "100px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent:"center",
              }}
            >
              <p style={{ fontSize: "3rem" }}>ON</p>
            </div>
            <Imagen/>

          </button>
        </section>
      </main>
    </>
  );
}

export default App;
