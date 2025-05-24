import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Form.module.css";

const titleDiv = document.querySelector("title");
const url = urlAddresses.logout;
let didInit = false;

const Logout = () => {
  if (titleDiv) {
    titleDiv.textContent = "LOGOUT";
  }
  const location = useLocation();
  const { token } = location.state !== null ? location.state : null;
  const { formSection } = styles;
  const [responseData, setResponseData] = useState("{}");
  

  const logoutSession = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const temp = await response.json();
      console.log(temp);
      if (temp) {
        setResponseData(temp);
        localStorage.setItem("token", JSON.stringify(null));
      }
      return setResponseData;
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      logoutSession();
    }
  }, [logoutSession]);

  return (
    <>
      <main>
        <section className="phonebox">
          <div>
            <ToggleTheme theme="light" />
            <Link
              to="/main_app"
              style={{
                width: "50px",
                gridColumn: "1/2",
                gridRow: "1/2",
                display: "flex",
                justifyContent: "center",
              }}
            >
              HOME
            </Link>
          </div>

          <section className={formSection}>
            <div>
              {!responseData.text ? (
                <div>Logging out...</div>
              ) : (
                <h4>{responseData.text}</h4>
              )}
            </div>
            <div>
              {!responseData.err ? null : (
                <>
                  <p>{responseData.err}</p>
                  <p>You are already logout</p>
                </>
              )}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Logout;
