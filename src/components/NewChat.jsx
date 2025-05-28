import { useState } from "react";
import styles from "../styles/OptionsList.module.css";

import { urlAddresses } from "../assets/urlAddresses";

const NewChat = (props) => {
  const {
    userId,
    token,
    allUsers,
    getAllChats,
    getListOfUsers,
    buttonNewChat,
  } = props;
  const url = urlAddresses.new_chat;
  const [usertoId, setUsertoId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const usersFiltered = !allUsers
    ? []
    : allUsers.filter((e) => e.id !== userId);
  
    console.log(usertoId);

  async function submitSelect(event, usertoId) {
    event.preventDefault();
    console.log("llamando la funcion New Chat");
    console.log(usertoId); // REVISAR PORQUE NO QUIERE ACTUALIZAR LA FUNCION SETUSERTOID
 /*    const bodydata = {
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
          getListOfUsers();
          getAllChats();
        }
      })
      .catch((err) => {
        console.log(err);
      }); */
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
          usersFiltered={usersFiltered}
          submitSelect={submitSelect}
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
    usersFiltered,
    submitSelect,
  } = props;
 
  return (
    <>
      <div className={`${element} ${looks}`}>
        <div>
          <label htmlFor="selection">choose an user</label>
          <select
            id="selection"
            name="userTo"
            onChange={(event) => setUsertoId(event.target.value)}
          >
            {usersFiltered.map((e) => (
              <option key={e.id} value={e.id}>
                {!e.profile
                  ? `${e.username} | ${e.status}`
                  : !e.profile.nametoshow
                  ? `${e.username} | ${e.status}`
                  : `${e.profile.nametoshow} | ${e.status}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            className={submit}
            onClick={(event) => {
              submitSelect(event, event.target.value);
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
