import imgLargeMedium from "./assets/img/paloma_medium_large.jpg";
import imgSmall from "./assets/img/paloma_small.jpg";
import { useNavigate } from "react-router-dom";
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
              style={{
                width: "95%",
                marginLeft:"2.5%",
                marginTop:"2%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "30px",
              }}
              className="phonebutton"
              onClick={() => {
                navigate("/main_app", { replace: true });
              }}
            >
              <div
                style={{
                  border: "2px solid burlywood",
                  borderRadius: "60px",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "3rem" , color:"burlywood"}}>ON</p>
              </div>
              <Imagen imgLargeMedium={imgLargeMedium} imgSmall={imgSmall} />
            </button>
         
        </section>
      </main>
    </>
  );
}

export default App;
