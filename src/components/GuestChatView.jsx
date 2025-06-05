import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Chat.module.css";
import MainUser from "./MainUser";
import MsgsModelChat from "./MsgsModelChat";
import ListActiveChats from "./ListActiveChats";

const GuestChatView = (props) => {
  const bgcolor = "white";
  const txtcolor = "black";
  const {
    grid,
    chatsList,
    displayMessages,
    NewMessageBox,
    buttonNewChat,
    buttonNewMsg,
  } = styles;
  const {
    userDetails,
    userId,
    allChats,
    allUsers,
    token,
    getAllChats,
    getListOfUsers,
  } = props;
  let profile = !userDetails
    ? null
    : !userDetails["profile"]
    ? null
    : userDetails.profile;

  const chats = allChats;
  const [selectedChat, setSelectedChat] = useState(null);
  const [userTo, setUserTo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [usersInChats, setUsersInChats] = useState([]);

  console.log(selectedChat);

  const getObjUsers = useCallback(
    (chats) => {
      if (chats) {
        switch (allUsers !== null) {
          case true: {
            let array = [];
            let chatId = chats[0]["id"];
            chats[0]["usersInChat"].map((user) => {
              let filtered = allUsers.filter((x) => {
                return x.id === user;
              });
              let obj = {
                chatId: chatId,
                userId: user,
                status: filtered[0].status,
                userProfile: filtered[0].profile,
              };
              array.push(obj);
            });
            setUsersInChats(array);
            break;
          }
          case false:
            setUsersInChats([]);
            break;
        }
      } else {
        setUsersInChats([]);
      }
    },
    [allUsers]
  );

  const getMessages = useCallback(
    (selectedChat) => {
      switch (selectedChat === null) {
        case true:
          setMessages([]);
          break;
        case false:
          {
            const filtered = chats.filter((e) => e.id === selectedChat);
            setMessages(filtered[0]["messages"]);
          }
          break;
      }
    },
    [chats]
  );

  console.log(usersInChats);

  useEffect(() => {
    return getObjUsers(chats, userId);
  }, [getObjUsers, chats, userId]);

  useEffect(() => {
    return getMessages(selectedChat);
  }, [getMessages, selectedChat]);

  
  function sendForbidden() {
    alert("You are in guest mode. This action is forbidden.");
  }

  return (
    <>
      <div style={{ gridColumn: "1/5", gridRow: "1/2" }}></div>

      <section className={grid}>
        <MainUser
          userDetails={userDetails}
          userId={userId}
          token={token}
          getAllChats={getAllChats}
          getListOfUsers={getListOfUsers}
        />
        <div
          style={{
            gridColumn: "4/5",
            gridRow: "1/2",
            backgroundColor: !profile
              ? bgcolor
              : `${profile.bgcolor.colorcode}`,
          }}
        >
          <div
            style={{
              color: !profile ? txtcolor : `${profile.textcolor.colorcode}`,
            }}
          >
            <button
              onClick={() => {
                sendForbidden();
              }}
              className={buttonNewChat}
            >
              new CHAT
            </button>
          </div>
        </div>

        <div
          style={{
            gridColumn: "1/2",
            gridRow: "2/4",
            backgroundColor: !profile
              ? bgcolor
              : `${profile.bgcolor.colorcode}`,
          }}
          className={chatsList}
        >
          <ListActiveChats
            usersInChats={usersInChats}
            setSelectedChat={setSelectedChat}
            setUserTo={setUserTo}
          />
        </div>

        <div
          style={{
            gridColumn: "2/5",
            gridRow: "2/3",
            position: "relative",
          }}
          className={displayMessages}
        >
          <MsgsModelChat
            messages={messages}
            userTo={userTo}
            usersInChats={usersInChats}
          />
        </div>
        <div
          style={{
            gridColumn: "2/5",
            gridRow: "3/4",
          }}
          className={NewMessageBox}
        >
          <button
            onClick={() => {
              sendForbidden();
            }}
            style={{ gridRow: "1/2", gridColumn: "1/2" }}
            className={buttonNewMsg}
          >
            New Message
          </button>
        </div>
      </section>
    </>
  );
};

export default GuestChatView;
