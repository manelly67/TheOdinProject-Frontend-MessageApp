import { useState } from "react";
import styles from "../styles/Chat.module.css";
import { urlAddresses } from "../assets/urlAddresses";
import { DropdownMenu } from "./DropdownMenu";


const NewChat = (props) => {
  const { userId, token, allUsers, getObjUsers } = props;
  const { buttonNewChat } = styles;
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
        <DropdownMenu
          setShowMenu={setShowMenu}
          setUsertoId={setUsertoId}
          allUsers={allUsers}
          submitSelect={submitSelect}
          userId={userId}
        />
      )}
    </>
  );
};

export default NewChat;
