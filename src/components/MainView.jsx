import { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";
import ChatView from "./ChatView";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Chat.module.css";
import {
  userDetails,
  resFetchAllChatsActiveUser,
  restFetchAllUsers,
} from "../assets/mock_data";

const MainView = () => {
  const location = useLocation();
  const [screenWidth, setScreenWidth] = useState(0);
  const [wakeUp, setWakeUp] = useState(true); // RECORDAR REGRESAR A FALSE
  const [message, setMessage] = useState(null);
  const [allChats, setAllChats] = useState(resFetchAllChatsActiveUser.chats); // RECORDAR REGRESAR A NULL
  const [allUsers, setAllUsers] = useState(restFetchAllUsers.list_of_users); // RECORDAR REGRESAR A NULL
  const { chatbox } = styles;

  const token =
    localStorage.getItem("token") !== undefined
      ? JSON.parse(localStorage.getItem("token"))
      : null;

 /*  const userDetails = useMemo(() => { //REMEMBER
    return getUserDetails(token, location.state);
  }, [token, location.state]);
 */
  const userId = userDetails === null ? null : userDetails.id;

  console.log(`token=${token} user=${userDetails} userId=${userId}`);
  console.log(allChats);

  function getUserDetails(token, arg2) {
    // arg2 is location.state
    switch (token === null) {
      case true:
        return null;
      case false:
        switch (arg2 !== null) {
          case true: {
            const { user } = arg2;
            console.log(user);
            return user;
          }
          case false:
            return null;
        }
    }
  }

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
      console.log(temp);
      if (temp.chats) {
        setAllChats(temp.chats);
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
      console.log(temp);
      if (temp.list_of_users) {
        setAllUsers(temp.list_of_users);
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

  /* 
  //HABILITAR AL FINAL
  useEffect(() => {
    if(token!==null){
      getAllChats();
      getListOfUsers();
    }
  }, [token,getAllChats,getListOfUsers]);

  useEffect(() => {
    callToServer();
  }, [callToServer]);

 */

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
                  <p>loading...</p>
                  <hr></hr>
                  <p style={{ width: "70%", margin: "0 auto" }}>
                    Dear user, this is a study project, please wait 1 minute for
                    the server to wake up.
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
              />
            )}
          </section>
        </section>
      </main>
    </>
  );
};

export default MainView;
