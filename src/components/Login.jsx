import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Form.module.css";

const titleDiv = document.querySelector("title");
const url = urlAddresses.login;

const Login = () => {
  const location = useLocation();
  const { token } = location.state !== null ? location.state : null;
  const [responseData, setResponseData] = useState("{}");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { formSection } = styles;

  const [activeToken, setActiveToken] = useState(token);

  if (titleDiv) {
    titleDiv.textContent = "LOGIN";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const logindata = {
      username,
      password,
    };
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
      body: JSON.stringify(logindata),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
        if (data.token !== undefined) {
          localStorage.setItem("token", JSON.stringify(data.token));
          setActiveToken(data.token);
        }
        if (data.user === undefined) {
          setResponseData({ errors: "user or password invalid" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            {activeToken === null ? (
              <>
                <div>
                  <h2>Login</h2>
                  {responseData.message ? <p>{responseData.message}</p> : null}
                  {responseData.errors === undefined ? null : (
                    <p className="error"> {responseData.errors}</p>
                  )}
                </div>

                <form
                  id="sign_login"
                  action={url}
                  method="POST"
                  autoComplete="off"
                  noValidate
                >
                  <div>
                    <label htmlFor="user_n">Username:</label>
                    <input
                      id="user_login"
                      type="text"
                      name="username"
                      autoComplete="on"
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="passw_login">password:</label>
                    <input
                      id="passw_login"
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <button
                      onClick={(event) => {
                        handleSubmit(event);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <Navigate to="/main_app" replace={true} />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default Login;
