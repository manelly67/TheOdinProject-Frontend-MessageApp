import { useState } from "react";
import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/OptionsList.module.css";

import { urlAddresses } from "../assets/urlAddresses";

const NewChat = (props) => {
  
  const { userId, token, allUsers, getObjUsers, buttonNewChat } = props;
  const url = urlAddresses.new_chat;
  const [usertoId, setUsertoId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  async function submitSelect(event) {
    event.preventDefault();
    const bodydata = {
      usertoId,
    };
    fetch(`${url}`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodydata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        }
        if (data.chat) {
          getObjUsers();
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
          setShowMenu(true);
        }}
        className={buttonNewChat}
      >
        new CHAT
      </button>
      {!showMenu ? null : (
        <DropMenu
          setShowMenu={setShowMenu}
          setUsertoId={setUsertoId}
          allUsers={allUsers}
          submitSelect={submitSelect}
          userId={userId}
          no_avatar={no_avatar}
          styles={styles}
        />
      )}
    </>
  );
};

export default NewChat;

function DropMenu(props) {
  const { element, looks, close, item } = props.styles;
  const {
    setShowMenu,
    setUsertoId,
    allUsers,
    submitSelect,
    userId,
    no_avatar,
  } = props;
  return (
    <>
      <button
        onClick={() => {
          setShowMenu(false);
        }}
        className={close}
      >
        close
      </button>
      <select
        className={`${element} ${looks}`}
        name="userTo"
        onChange={(event) => setUsertoId(event.target.value)}
      >
        {!allUsers
          ? null
          : allUsers.map((e) => {
              return (
                <>
                  {e.id === userId ? null : (
                    <option key={e.id} value={e.id}>
                      {!e.profile ? (
                        <div>
                          <p>{e.username}</p>
                          <p>{e.status}</p>
                        </div>
                      ) : (
                        <div className={item}>
                          {!e.profile.nametoshow ? (
                            <p>{e.username}</p>
                          ) : (
                            <div>
                              {!e.profile.avatar.src_image ? (
                                <img
                                  src={no_avatar}
                                  alt="avatar"
                                  width="50px"
                                  height="50px"
                                ></img>
                              ) : (
                                <img
                                  src={e.profile.avatar.src_image}
                                  alt="avatar"
                                  width="50px"
                                  height="50px"
                                ></img>
                              )}

                              <p>{e.profile.nametoshow}</p>
                              <p>{e.status}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </option>
                  )}
                </>
              );
            })}
      </select>
      <button
        onClick={(event) => {
          submitSelect(event);
        }}
      >
        submit
      </button>
    </>
  );
}
