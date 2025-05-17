import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAddresses } from "./assets/urlAddresses";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";

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
          <ToggleTheme theme="light" />

          <button
            style={{ display: "flex", justifyContent: "center" }}
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "3rem" }}>ON</p>
            </div>
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
