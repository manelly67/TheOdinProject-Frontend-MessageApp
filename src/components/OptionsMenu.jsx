import { useState } from "react";
import no_avatar from "../assets/img/no_avatar.jpg";

const OptionsMenu = (props) => {
  const { element, looks, close, submit } = props.styles;
  const { setShowMenu, usertoId, setUsertoId, usersFiltered, submitSelect } =
    props;
  const [userSelected, setUserSelected] = useState("nothing selected");

  function handleSubmit(event) {
    switch (!usertoId) {
      case true:
        alert("cannot be submitted if nothing has been selected");
        break;
      case false:
        submitSelect(event);
        setShowMenu(false);
        break;
    }
  }

  return (
    <>
      <section className={`${element} ${looks}`}>
        <p>Choose an user</p>
        <ul>
          {usersFiltered.map((e) => (
            <li key={e.id}>
              {!e.profile ? (
                <img
                  src={no_avatar}
                  alt="there is no avatar"
                  width="40px"
                  height="40px"
                ></img>
              ) : (
                <img
                  src={e.profile.avatar.src_image}
                  alt="avatar"
                  width="40px"
                  height="40px"
                ></img>
              )}

              <p>{!e.profile ? e.username : e.profile.nametoshow}</p>
              <button
                onClick={() => {
                  setUsertoId(e.id);
                  setUserSelected(e.username);
                }}
              >
                select
              </button>
            </li>
          ))}
        </ul>
        <p>
          Selected:
          <span
            style={{ fontStyle: "italic", fontWeight: "800" }}
          >{` ${userSelected}`}</span>
        </p>
        <div>
          <button
            className={submit}
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            submit
          </button>
          <button className={close} onClick={() => setShowMenu(false)}>
            close
          </button>
        </div>
      </section>
    </>
  );
};

export default OptionsMenu;
