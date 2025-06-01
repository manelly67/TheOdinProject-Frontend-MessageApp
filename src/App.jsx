import { useNavigate } from "react-router-dom";
import "./styles/App.css";
import ToggleTheme from "./components/ToggleTheme";

const body = document.querySelector("body");
const titleDiv = document.querySelector("title");

function App() {
  if (body) {
    document.body.className = "light";
  }
  if (titleDiv) {
    titleDiv.textContent = "MESSAGING APP";
  }

  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="phonebox">
          <div style={{ position: "absolute", right: "10px" }}>
            <ToggleTheme theme="light" />
          </div>

          <button
            className="phonebutton animate-in"
            onClick={() => {
              navigate("/main_app", { replace: true });
            }}
            aria-label={"ON - START"}
            title="ON"
          ></button>
        </section>
      </main>
    </>
  );
}

export default App;
