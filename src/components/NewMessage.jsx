import { useState } from "react";
import styles from "../styles/Chat.module.css";
import { urlAddresses } from "../assets/urlAddresses";
import { ErrorMessage } from "./Error_message";

const NewMessage = (props) => {
  const {
    selectedChat,
    userTo,
    token,
    filteredChatObj,
    setFilteredChatObj,
    getAllChats,
  } = props;
  const {
    buttonNewMsg,
    buttonClose,
    buttonSubmit,
    formTag,
    labelTag,
    textareaTag,
  } = styles;
  const url = `${urlAddresses.new_messages}/${selectedChat}/${userTo}`;
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [text, setText] = useState(null);

  async function handleSubmit(event, url, token) {
    event.preventDefault();
    setErrors(null);
    setFeedback(null);
    const postdata = {
      text: text,
    };
    await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
          setFeedback(data.message);
        } else {
          if (data.message_details) {
            let temp = filteredChatObj;
            temp.messages.push(data.message_details);
            setFilteredChatObj(temp);
            getAllChats();
          } else {
            setFeedback(data.message);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <button
        onClick={() => {
          setShow(true);
        }}
        style={{ gridRow: "1/2", gridColumn: "1/2" }}
        className={buttonNewMsg}
      >
        New Message
      </button>
      {!show ? null : (
        <section style={{ gridRow: "2/3", gridColumn: "1/4" }}>
          <button
            onClick={() => {
              setShow(false);
            }}
            className={buttonClose}
          >
            close
          </button>

          {selectedChat === null ? (
            <p> you must select an active chat </p>
          ) : (
            <div>
              {errors ? <ErrorMessage errors={errors} /> : null}
              {feedback ? <p>feedback</p> : null}
              <div>
                <form className={formTag}>
                  <label htmlFor="new_msg" className={labelTag}>
                    ➡️
                  </label>
                  <textarea
                    id="new_msg"
                    className={textareaTag}
                    name="text"
                    title="max 300 characters"
                    onChange={(event) => setText(event.target.value)}
                  ></textarea>
                  <div>
                    <button
                      onClick={(event) => {
                        handleSubmit(event, url, token);
                      }}
                      className={buttonSubmit}
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default NewMessage;
