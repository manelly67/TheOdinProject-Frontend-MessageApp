import styles from "../styles/Chat.module.css";

const MessagesInChat = (props) => {
  const { messages, userId } = props;
  const { dateTxt, txt, msgMe, msgOther } = styles;
  console.log(messages);

  return (
    <>
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
