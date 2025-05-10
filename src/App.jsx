import { useState, useEffect } from "react";
import { urlAddresses } from "./assets/urlAddresses";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const body = document.querySelector("body");
  if (body) {
    document.body.className = "light";
  }

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <>
      <main>
        <section className="phonebox">
          <ToggleTheme theme="light"/>
          <div>
            <p>testing initial page</p>
          </div>
          <div>
            <button>ON</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
