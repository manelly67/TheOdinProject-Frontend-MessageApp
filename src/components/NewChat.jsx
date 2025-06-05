import { useState } from "react";
import styles from "../styles/OptionsList.module.css";
import OptionsMenu from "./OptionsMenu";
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
          getListOfUsers();
          getAllChats();
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
          setUsertoId(null);
        }}
        className={buttonNewChat}
      >
        new CHAT
      </button>
      {!showMenu ? null : (
        <OptionsMenu
          setShowMenu={setShowMenu}
          usertoId={usertoId}
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
