import { useState, useEffect, useCallback } from "react";
import ToggleTheme from "./ToggleTheme";
import Navbar from "./Navbar";
import GuestChatView from "./GuestChatView";
import { urlAddresses } from "../assets/urlAddresses";
import styles from "../styles/Chat.module.css";
import { guestUserMock, resFetchAllChatsActiveUser } from "../assets/mock_data";

const GuestView = () => {
  const titleDiv = document.querySelector("title");
  if (titleDiv) {
    titleDiv.textContent = "YOU ARE A GUEST";
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
console.log(token);

 const userDetails =  
      (userId === null || allUsers === null)
        ? null
        : allUsers.filter((e) => e.id === userId)[0];

  console.log(userId);
  console.log(userDetails);
  console.log(message);
  console.log(allChats);
  console.log(allUsers);

  const callToServer = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.home, { mode: "cors" });
      const temp = await response.json();
      if (temp.message) {
        setMessage("Hello, You are in guest mode");
        setWakeUp(true);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, []);

  const getAllChats = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.chat_model, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const temp = await response.json();
      console.log(temp);
      if (temp.chat_model) {
        setAllChats([temp.chat_model]);
        setUserId(temp.user);
      }
      if(temp.err){
        setMessage(temp.err.message);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  },[token]);

  const getListOfUsers = useCallback(async () => {
    try {
      const response = await fetch(urlAddresses.available_users, {
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
      if(temp.err){
        setMessage(temp.err.message);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  },[token]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [screenWidth]);

  useEffect(() => {
    if ( wakeUp===true && token !== null) {
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
                  <p>loading...</p>
                  <hr></hr>
                  <p style={{ width: "70%", margin: "0 auto" }}>
                    Dear user, this is a study project, please wait 1 minute for
                    the server to wake up.
                  </p>
                </div>
              </>
            ) : !userId ? (
              <div style={{ gridColumn: "1/5", gridRow: "1/2" }}>
                <p>{message}</p>
              </div>
            ) : (
              <GuestChatView
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
      {!userDetails ? null : userDetails.username }
    </>
  );
};

export default GuestView;
