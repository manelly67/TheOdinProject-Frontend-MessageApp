import { useState, useEffect, useCallback } from "react";
import styles from "../styles/ProfileEdit.module.css";
import { urlAddresses } from "../assets/urlAddresses";
import OptionsForProfile from "./OptionsForProfile";
import { userDetailsMock, mock_options_profile } from "../assets/mock_data";

const ProfileEdit = (props) => {
  const url = `${urlAddresses.profiles}`;
  const { element, looks, close, profile, options } = styles;
  const { setShowProfile, userId, token } = props;
  /* const [profileToEdit, setProfileToEdit] = useState(null);
  const [optionsForEdit, setOptionsForEdit] = useState(null); */

  const profileToEdit = userDetailsMock.profile;
  const optionsForEdit = mock_options_profile;

  const [textcolorId, setTextcolorId] = useState(null);
  const [bgcolorId, setBgcolorId] = useState(null);
  const [avatarId, setAvatarId] = useState(null);
  const [aboutme, setAboutme] = useState(
    !profileToEdit ? null : profileToEdit.aboutme
  );
  const [nametoshow, setNametoshow] = useState(
    !profileToEdit ? null : profileToEdit.nametoshow
  );
  const [avatar, setAvatar] = useState(
    !profileToEdit
      ? null
      : !profileToEdit.avatar
      ? null
      : profileToEdit.avatar.src_image
  );
  const [backgroundColor, setBackgroundColor] = useState(
    !profileToEdit
      ? "#f5f8fa"
      : !profileToEdit.bgcolor
      ? "#f5f8fa"
      : profileToEdit.bgcolor.colorcode
  );
  const [textColor, setTextColor] = useState(
    !profileToEdit
      ? "#31485b"
      : !profileToEdit.textcolor
      ? "#31485b"
      : profileToEdit.textcolor.colorcode
  );

console.log(avatar);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userId);
    console.log(aboutme);
    console.log(nametoshow);
    console.log(avatarId);
    console.log(bgcolorId);
    console.log(textcolorId);
    switch (profileToEdit === null) {
      case true:
        createProfile(event);
        break;
      case false:
        updateProfile(event);
        break;
    }
  }

  async function createProfile(event) {
    console.log("funcion create profile");
  }

  async function updateProfile(event) {
    console.log("funcion update profile");
  }

  /*  const getOptions = useCallback(async () => {
    try {
      const response = await fetch(`${url}/${userId}`, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const temp = await response.json();
      if (temp.profile_options) {
        setOptionsForEdit(temp.profile_options);
        setProfileToEdit(temp.user_profile);
      }
      if (temp.err) {
        alert(temp.err.message);
      }
    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }, [token, url, userId]);
 */
  /* useEffect(() => {
    if (userId !== null) {
      getOptions();
    }
  }, [getOptions, userId]);
 */

  return (
    <>
      <section className={`${element} ${looks}`}>
        <div style={{ gridColumn: "1/2", gridRow: "1/2" }}>
          <div
            className={profile}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
            }}
          >
            {!aboutme ? (
              <p></p>
            ) : (
              <p
                style={{
                  gridColumn: "1/3",
                  gridRow: "1/2",
                  overflowY: "scroll",
                  zIndex: "1",
                  width: "95%",
                }}
              >
                {aboutme}
              </p>
            )}

            {!nametoshow ? (
              <p></p>
            ) : (
              <p
                style={{ gridColumn: "1/2", gridRow: "2/3" }}
              >{`I am ${nametoshow}`}</p>
            )}

            {!avatar ? (
              <p>no avatar selected</p>
            ) : (
              <img
                src={avatar}
                alt="avatar"
                width="100px"
                height="100px"
                style={{ gridColumn: "2/3", gridRow: "2/3" }}
              ></img>
            )}
          </div>

          <button className={close} onClick={() => setShowProfile(false)}>
            close
          </button>

          <button className={close} onClick={(event) => handleSubmit(event)}>
            save changes
          </button>
        </div>
        <div className={options}>
          <OptionsForProfile
            userId={userId}
            optionsForEdit={optionsForEdit}
            aboutme={aboutme}
            setAboutme={setAboutme}
            nametoshow={nametoshow}
            setNametoshow={setNametoshow}
            setAvatar={setAvatar}
            setAvatarId={setAvatarId}
            setBackgroundColor={setBackgroundColor}
            setBgcolorId={setBgcolorId}
            setTextColor={setTextColor}
            setTextcolorId={setTextcolorId}
          />
        </div>
      </section>
    </>
  );
};

export default ProfileEdit;
