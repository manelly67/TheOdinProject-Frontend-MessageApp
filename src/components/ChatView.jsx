import { useState, useMemo, useCallback, useEffect } from "react";
import styles from "../styles/Chat.module.css";
import no_avatar from "../assets/img/no_avatar.jpg";
import MessagesInChat from "./MessagesInChat";
import NewMessage from "./NewMessage";

const ChatView = (props) => {
  
  const {
    grid,
    buttonNewChat,
    buttonEditProfile,
    chatsList,
    buttonImage,
    buttonViewProfile,
    displayMessages,
    NewMessageBox,
  } = styles;
  const { userDetails, userId, allChats, allUsers, token, getAllChats } = props;
  const { profile } = userDetails;
  const chats = allChats;
  const [selectedChat, setSelectedChat] = useState(null);
  const [userTo, setUserTo] = useState(null);
  const [filteredChatObj, setFilteredChatObj] = useState(null);
  const [messages, setMessages] = useState([]);
  

  const getObjUsers = useCallback(
    (chats, userId) => {
      switch(allUsers!==null){
        case true:{
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
          return array;
        }
        case false:
          return [];
      };
    },
    [allUsers]
  );

  const getMessages = useCallback((selectedChat)=>{
    switch(selectedChat===null){
      case true:
        setMessages([]);
      break;
      case false:{
        const filtered = chats.filter((e)=>e.id===selectedChat);
        setFilteredChatObj(filtered[0]);
        console.log(filtered[0]['messages']);
        setMessages(filtered[0]['messages']);
      }
      break;
    };
  },[chats]);

console.log(messages);

  // QUITAR ESTOS USE MEMO Y USAR USE STATE
  const usersInChats = useMemo(() => {
    if(chats){
      return getObjUsers(chats, userId);
    }else{
      return [];
    }
  }, [chats,getObjUsers,userId]);


  useEffect(()=>{
    return getMessages(selectedChat);
  },[getMessages,selectedChat]);

  const listItems = usersInChats.map((e) => (
    <li key={e.userId} id={e.userId}>
      <div>
        <button
          className={buttonImage}
          onClick={() => {
            setSelectedChat(e.chatId);
            setUserTo(e.userId);
          }}
          aria-label={`active chat user ${e.userProfile.nametoshow}`}
        >
          {!e.userProfile ? (
            <img
              src={no_avatar}
              alt="there is no avatar"
              width="50px"
              height="50px"
            ></img>
          ) : (
            <img
              src={e.userProfile.avatar.src_image}
              alt="avatar"
              width="50px"
              height="50px"
            ></img>
          )}
        </button>
      </div>
      <div>
        {e.userProfile === null ? (
          <p>no name</p>
        ) : (
          <p>{e.userProfile.nametoshow}</p>
        )}
        <button className={buttonViewProfile}>profile</button>
      </div>
    </li>
  ));

  return (
    <>
      <div style={{ gridColumn: "1/5", gridRow: "1/2" }}></div>

      <section className={grid}>
        <div
          style={{
            gridColumn: "1/2",
            gridRow: "1/2",
            backgroundColor: `${profile.bgcolor.colorcode}`,
          }}
        >
          {!profile ? (
            <img
              src={no_avatar}
              alt="there is no avatar"
              width="50px"
              height="50px"
            ></img>
          ) : (
            <img
              src={profile.avatar.src_image}
              alt="avatar"
              width="50px"
              height="50px"
            ></img>
          )}
        </div>
        <div
          style={{
            gridColumn: "2/4",
            gridRow: "1/2",
            backgroundColor: `${profile.bgcolor.colorcode}`,
            position: "relative",
            alignContent: "flex-start",
            paddingTop: "2px",
          }}
        >
          {!profile ? (
            <>
              <div>
                <p>{userDetails.username}</p>
                <div>
                  <button className={buttonEditProfile}>edit profile</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  color: `${profile.textcolor.colorcode}`,
                }}
              >
                <p>{profile.nametoshow}</p>
                <div>
                  <button className={buttonEditProfile}>edit profile</button>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          style={{
            gridColumn: "4/5",
            gridRow: "1/2",
            backgroundColor: `${profile.bgcolor.colorcode}`,
          }}
        >
          <div
            style={{
              color: `${profile.textcolor.colorcode}`,
            }}
          >
            <button className={buttonNewChat}>new CHAT</button>
          </div>
        </div>
        <div
          style={{
            gridColumn: "1/2",
            gridRow: "2/4",
            backgroundColor: `${profile.bgcolor.colorcode}`,
          }}
          className={chatsList}
        >
          {listItems.length === 0 ? (
            <p>No Active Chats</p>
          ) : (
            <>
              <p style={{ fontSize: "12px", width: "56px", margin: "0 auto" }}>
                active chats
              </p>
              <ul>{listItems.length > 0 ? <>{listItems}</> : null}</ul>
            </>
          )}
        </div>
        <div
          style={{
            gridColumn: "2/5",
            gridRow: "2/3",
          }}
          className={displayMessages}
        >
          <MessagesInChat
            messages={messages}
            userId={userId}
            selectedChat={selectedChat}
          />
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
            filteredChatObj={filteredChatObj}
            setFilteredChatObj={setFilteredChatObj}
            getAllChats={getAllChats}
          />
        </div>
      </section>
    </>
  );
};

export default ChatView;
