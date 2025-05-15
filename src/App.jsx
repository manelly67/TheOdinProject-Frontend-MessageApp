import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAddresses } from "./assets/urlAddresses";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const body = document.querySelector("body");
  if (body) {
    document.body.className = "light";
  }

  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  return (
    <>
      <main>
        <section className="phonebox">
          <ToggleTheme theme="light" />

          <button
            style={{ display: "flex", justifyContent: "center" }}
            className="phonebutton"
            onClick={() => {
              navigate("/main_app", {
                replace: true,
                state: { token: token },
              });
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
