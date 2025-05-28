import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import ToggleTheme from "./ToggleTheme";
import { ErrorMessage } from "./Error_message";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Form.module.css";


const titleDiv = document.querySelector("title");
const url = urlAddresses.sign_up;
let didInit = false;

const SingUp = () => {
  const [responseData, setResponseData] = useState("{}");
  const [user, setUser] = useState(undefined);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { formSection } = styles;

  if (titleDiv) {
    titleDiv.textContent = "SIGN UP";
  }

  const passwordRequirements =
    responseData.passwordRequirements === undefined
      ? " "
      : responseData.passwordRequirements;

  const getInitUrl = useCallback(async () => {
    try {       
      const response = await fetch(url);
      const responseData = await response.json();
      if (responseData.message) {
        setResponseData(responseData);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    } 
  }, []);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      getInitUrl();
    }
  }, [responseData, getInitUrl]);

  function handleSubmit(e) {
    e.preventDefault();
    const userdata = {
      username,
      user_password: password,
      confirm_password: confirm,
      email,
      role: "USER",
    };
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data);
        if (data.user) {
          setUser(data.user);
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
            <Link to="/main_app"
            style={{
              width: "50px",
              gridColumn: "1/2",
              gridRow: "1/2",
              display: "flex",
              justifyContent: "center",
            }}
            >HOME</Link>
          </div>

          <section className={formSection}>
            {user === undefined ? (
              <>
                <div>
                  <h2>Sign Up Here:</h2>
                  {responseData.message ? (
                    responseData.message !== "sign up here" ? (
                      <p>{responseData.message}</p>
                    ) : null
                  ) : null}
                  <ErrorMessage errors={responseData.errors} />
                </div>

                <form
                  id="sign_up"
                  action={url}
                  method="POST"
                  autoComplete="off"
                  noValidate
                >
                  <div>
                    <label htmlFor="user_n">Username:</label>
                    <input
                      id="user_n"
                      type="text"
                      name="username"
                      autoComplete="on"
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email address:</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="on"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="passw">password:</label>
                    <input
                      id="passw"
                      type="password"
                      name="user_password"
                      autoComplete="off"
                      title={passwordRequirements}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm">confirm password:</label>
                    <input
                      id="confirm"
                      type="password"
                      name="confirm_password"
                      autoComplete="off"
                      onChange={(event) => setConfirm(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="role">Role:</label>
                    <input
                      id="role"
                      type="text"
                      name="role"
                      value="USER"
                      readOnly="USER"
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
              <>
                <h3> {responseData.text} </h3>
                <p> {`username: ${user.username}`} </p>
              </>
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default SingUp;
