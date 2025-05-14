import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlAddresses } from "./assets/urlAddresses";
import "./styles/App.css";
import Icon from "@mdi/react";
import { mdiCellphoneBasic } from "@mdi/js";
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
            className="phonebutton"
            onClick={() => {
              navigate("/main_app", {
                replace: true,
                state: { token: token },
              });
            }}
          >
            <div>
              <p>ON/OFF</p>
              <Icon path={mdiCellphoneBasic} size={15} />
            </div>
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
