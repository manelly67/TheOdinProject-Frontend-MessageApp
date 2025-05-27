import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Chat.module.css";
import MainUser from "./MainUser";
import MessagesInChat from "./MessagesInChat";
import NewMessage from "./NewMessage";
import NewChat from "./NewChat";
import ListActiveChats from "./ListActiveChats";

const ChatView = (props) => {
  const bgcolor = 'white';
  const txtcolor = 'black';
  const { grid, chatsList, displayMessages, NewMessageBox, buttonNewChat } = styles;
  const { userDetails, userId, allChats, allUsers, token, getAllChats } = props;
  let profile = null;
  if(userDetails.profile){
    profile = userDetails.profile;
  }
  const chats = allChats;
  const [selectedChat, setSelectedChat] = useState(null);
  const [userTo, setUserTo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [usersInChats, setUsersInChats] = useState([]);

  const getObjUsers = useCallback(
    (chats, userId) => {
      if (chats) {
        switch (allUsers !== null) {
          case true: {
            let array = [];
            chats.map((e) => {
              let [user] = e.usersInChat.filter((x) => {
                return x !== userId;
              });
              let filtered = allUsers.filter((e) => {
                return e.id === user;
              });
              let obj = {
                chatId: e.id,
                userId: user,
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

  return (
    <>
      <div style={{ gridColumn: "1/5", gridRow: "1/2" }}></div>

      <section className={grid}>
        <MainUser userDetails={userDetails} />
        <div
          style={{
            gridColumn: "4/5",
            gridRow: "1/2",
            backgroundColor: !profile ? bgcolor :`${profile.bgcolor.colorcode}`,
          }}
        >
          <div
            style={{
              color: !profile ? txtcolor : `${profile.textcolor.colorcode}`,
            }}
          >
            <NewChat
              userId={userId}
              token={token}
              allUsers={allUsers}
              getObjUsers={getObjUsers}
              buttonNewChat={buttonNewChat}
            />
          </div>
        </div>

        <div
          style={{
            gridColumn: "1/2",
            gridRow: "2/4",
            backgroundColor: !profile ? bgcolor :`${profile.bgcolor.colorcode}`,
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
          }}
          className={displayMessages}
        >
          <MessagesInChat messages={messages} userId={userId} />
        </div>
        <div
          style={{
            gridColumn: "2/5",
            gridRow: "3/4",
          }}
          className={NewMessageBox}
        >
          <NewMessage
            selectedChat={selectedChat}
            userTo={userTo}
            token={token}
            getAllChats={getAllChats}
          />
        </div>
      </section>
    </>
  );
};

export default ChatView;
