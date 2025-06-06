import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/Chat.module.css";

const MsgsModelChat = (props) => {
  const { messages, userTo, usersInChats } = props;
  const { dateTxt, txt, msgMe, msgOther, userImg } = styles;

  const [filtered] = usersInChats.filter((x) => {
    return x.userId === userTo;
  });

  
  return (
    <>
      {!userTo ? null : !filtered.userProfile ? (
        <img
          className={userImg}
          src={no_avatar}
          alt="there is no avatar"
          width="30px"
          height="30px"
        ></img>
      ) : (
        <img
          className={userImg}
          src={filtered.userProfile.avatar.src_image}
          alt="avatar"
          width="30px"
          height="30px"
        ></img>
      )}

      {messages.length === 0 ? null : (
        <>
          <ul>
            {messages.map((e) => (
              <li key={e.id}>
                <div className={dateTxt}>
                  <p>
                    {new Date(e.createdAt).toLocaleString("es-US", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
                <div
                  className={
                    e.userFromId === userTo
                      ? `${txt} ${msgMe}`
                      : `${txt} ${msgOther}`
                  }
                >
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default MsgsModelChat;
