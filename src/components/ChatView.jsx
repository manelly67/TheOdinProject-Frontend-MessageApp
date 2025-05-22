import { useMemo } from "react";
import styles from "../styles/Chat.module.css";

const ChatView = (props) => {
  const { grid, buttonNewChat, buttonEditProfile, chatsList, buttonImage, buttonViewProfile } = styles;
  const userDetails = props.userDetails;
  const userId = props.userId;
  const { profile } = userDetails;
  const chats = props.allChats;
  const allUsers = props.allUsers;

  const usersInChats = useMemo(() => {
    return getObjUsers(chats, userId);
  }, [chats, userId]);

  console.log(usersInChats);

  function getObjUsers(chats, userId) {
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

  const listItems = usersInChats.map((e) => (
    <li key={e.userId} id={e.userId}>
      <div>
        <button className={buttonImage} onClick={() => openChat(e.chatId)}>
        {!e.userProfile ? (
            <img
              id="no_avatar"
              src=""
              alt="there is no avatar"
              width="50px"
              height="50px"
            ></img>
          ) : (
            <img
              id="my_avatar"
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
              id="no_avatar"
              src=""
              alt="there is no avatar"
              width="50px"
              height="50px"
            ></img>
          ) : (
            <img
              id="my_avatar"
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
          {chats.length === 0 ? (
            <p>No Active Chats</p>
          ) : (
            <>
              <p style={{fontSize:"10px",width:"56px",margin:"0 auto"}}>active chats</p>
              <ul>{listItems.length > 0 ? <>{listItems}</> : null}</ul>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ChatView;
