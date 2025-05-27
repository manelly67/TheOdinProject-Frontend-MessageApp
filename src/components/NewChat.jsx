import { useState } from "react";
import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/OptionsList.module.css";

import { urlAddresses } from "../assets/urlAddresses";

const NewChat = (props) => {
  const { userId, token, allUsers, getObjUsers, buttonNewChat } = props;
  const url = urlAddresses.new_chat;
  const [usertoId, setUsertoId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  console.log(usertoId);

  async function submitSelect(event) {
    event.preventDefault();
    console.log(usertoId);
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
        console.log(data);
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
  const { element, looks, close, submit } = props.styles;
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
    <div  className={`${element} ${looks}`}>
    
      <label htmlFor="selection">choose an user</label>
      <select
        id="selection"
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
                        <p>{`${e.username} | ${e.status}`}</p>
                      ) : !e.profile.nametoshow ? (
                        <p>{`${e.username} | ${e.status}`}</p>
                      ) : (
                        <p>{`${e.profile.nametoshow} | ${e.status}`}</p>
                      )}
                    </option>
                  )}
                </>
              );
            })}
            
      </select>
      <div>
      <button
      className={submit}
        onClick={(event) => {
          submitSelect(event);
        }}
      >
        submit
      </button>
      <button
        onClick={() => {
          setShowMenu(false);
        }}
        className={close}
      >
        cancel
      </button>

      </div>
      

    </div>
      
    </>
  );
}
