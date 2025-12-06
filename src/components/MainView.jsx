import { useState, useEffect, useCallback } from "react";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";
import ChatView from "./ChatView";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Chat.module.css";

const MainView = () => {
  const titleDiv = document.querySelector("title");
  if (titleDiv) {
    titleDiv.textContent = "MESSAGING APP | USER";
  }

  const [screenWidth, setScreenWidth] = useState(0);
  const [wakeUp, setWakeUp] = useState(false);
  const [message, setMessage] = useState(null);
  const [allChats, setAllChats] = useState(null);
  const [userId, setUserId] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const { chatbox } = styles;

  const token =
    localStorage.getItem("token") !== undefined
      ? JSON.parse(localStorage.getItem("token"))
      : null;

  const userDetails =
    userId === null || allUsers === null
      ? null
      : allUsers.filter((e) => e.id === userId)[0];

  const getAllChats = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.chats_active_user, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const temp = await response.json();
      if (temp.chats) {
        setAllChats(temp.chats);
        setUserId(temp.user);
      }
      if (temp.err) {
        setMessage(temp.err.message);
      }
      if (temp.message) {
        setMessage(temp.message);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, [token]);

  const getListOfUsers = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.all_users, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const temp = await response.json();
      if (temp.list_of_users) {
        setAllUsers(temp.list_of_users);
      }
      if (temp.err) {
        setMessage(temp.err.message);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, [token]);

  const callToServer = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.home, { mode: "cors" });
      const temp = await response.json();
      if (temp.message) {
        setMessage(temp.message);
        setWakeUp(true);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  useEffect(() => {
    if (wakeUp === true && token !== null) {
      getListOfUsers();
      getAllChats();
    }
  }, [wakeUp, token, getAllChats, getListOfUsers]);

  useEffect(() => {
    callToServer();
  }, [callToServer]);

  return (
    <>
      <main>
        <section className="phonebox">
          <div>
            <ToggleTheme theme="light" />
            <Navbar screenWidth={screenWidth} token={token} />
          </div>
          <section className={chatbox}>
            {!wakeUp ? (
              <>
                <div style={{ gridColumn: "1/5", gridRow: "1/2" }}>
                  <p className="waitingMsg">
                    Please note that this project is intended for demonstration
                    purposes only. The host server may take a moment to
                    initialize after being powered on.
                  </p>
                  <hr></hr>
                  <p className="waitingMsg">
                    Kindly wait until the server is fully awake and responsive
                    before proceeding with any actions.
                  </p>
                  <hr></hr>
                  <p className="waitingMsg">
                    The project manages authorization: sign up and login. And
                    then the sending of private messages between two users.
                  </p>
                </div>
              </>
            ) : !userId ? (
              <>
                <div style={{ gridColumn: "1/5", gridRow: "1/2" }}>
                  <p>{message}</p>
                </div>
              </>
            ) : (
              <ChatView
                userDetails={userDetails}
                userId={userId}
                token={token}
                allChats={allChats}
                allUsers={allUsers}
                getAllChats={getAllChats}
                getListOfUsers={getListOfUsers}
              />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default MainView;
