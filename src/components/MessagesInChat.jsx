import Icon from '@mdi/react';
import { mdiRefresh } from '@mdi/js';
import styles from "../styles/Chat.module.css";

const MessagesInChat = (props) => {
  const { messages, userId, getAllChats, getListOfUsers } = props;
  const { dateTxt, txt, msgMe, msgOther, refreshButton } = styles;
  console.log(messages);

  return (
    <>
      <button className={refreshButton}
      onClick={() => {
        getAllChats();
        getListOfUsers();
      }}
      aria-label="refresh"
      title='refresh'
      >
      <Icon path={mdiRefresh} size={1} />
      </button>
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
                    e.userFrom.id === userId
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

export default MessagesInChat;
