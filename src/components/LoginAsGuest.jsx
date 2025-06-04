import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { ErrorMessage } from "./Error_message";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Form.module.css";

const titleDiv = document.querySelector("title");
const url = urlAddresses.login_as_guest;
let didInit = false;

const LoginAsGuest = () => {
  if (titleDiv) {
    titleDiv.textContent = "LOGIN AS GUEST";
  }

  const location = useLocation();
  const { token } = location.state !== null ? location.state : null;
  const [responseData, setResponseData] = useState("{}");
  const { formSection } = styles;

  const [activeToken, setActiveToken] = useState(token);

  const createGuest = useCallback(async () => {
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem("token", JSON.stringify(data.token));
          setActiveToken(data.token);
          setResponseData(data);
        }
        if (data.user === undefined) {
          setResponseData({ errors: data.errors, message: data.message });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

 
  useEffect(() => {
    if (didInit === false) {
      didInit = true;
      createGuest();
    }
  }, [createGuest]);

  return (
    <>
      <main>
        <section className="phonebox">
          <div>
            <ToggleTheme theme="light" />
            <Link
              to="/guest_view"
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
            {activeToken === null ? (
              <>
                <div style={{marginTop:"40px"}}>
                  <p>you will be granted a token for 1 hour</p>
                  {responseData.message ? <p>{responseData.message}</p> : null}
                  {responseData.errors === undefined ? null : (
                    <ErrorMessage errors={responseData.errors} />
                  )}
                </div>
              </>
            ) : (
              <Navigate to="/guest_view" replace={true} />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default LoginAsGuest;
