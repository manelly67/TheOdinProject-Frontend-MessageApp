import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/Chat.module.css";

const ListActiveChats = (props) => {

const {buttonImage, buttonViewProfile} = styles;
const { usersInChats, setSelectedChat, setUserTo } = props;

    const listItems = usersInChats.map((e) => (
        <li key={e.userId} id={e.userId}>
          <div>
            <button
              className={buttonImage}
              onClick={() => {
                setSelectedChat(e.chatId);
                setUserTo(e.userId);
              }}
              aria-label={`active chat user ${e.username}`}
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
              <>
              <p>no name</p>
              <p>{e.status}</p>
              </>
              
            ) : (
              <>
                <p>{e.userProfile.nametoshow}</p>
                <p>{e.status}</p>
              </>
            )}
            <button className={buttonViewProfile}>profile</button>
          </div>
        </li>
      ));

    return(
        <>
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
        </>
    );

};

export default ListActiveChats;