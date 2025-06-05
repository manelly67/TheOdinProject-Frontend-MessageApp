import { useState, useEffect, useCallback } from "react";
import styles from "../styles/ProfileEdit.module.css";
import { urlAddresses } from "../assets/urlAddresses";
import OptionsForProfile from "./OptionsForProfile";
import { ErrorMessage } from "./Error_message";

const ProfileEdit = (props) => {
  const url = `${urlAddresses.profiles}`; // for POST and PUT method same for roles USER or GUEST
  const url_guest = `${urlAddresses.guest_profile}`;

  const { element, looks, close, profile, options } = styles;
  const {
    setShowProfile,
    userId,
    userDetails,
    token,
    getAllChats,
    getListOfUsers,
  } = props;
  const [profileToEdit, setProfileToEdit] = useState(null);
  const [optionsForEdit, setOptionsForEdit] = useState(null);
  const [errArray, setErrArray] = useState(null);
  const [textcolorId, setTextcolorId] = useState(null);
  const [bgcolorId, setBgcolorId] = useState(null);
  const [avatarId, setAvatarId] = useState(null);
  const [aboutme, setAboutme] = useState(
    !profileToEdit ? "" : profileToEdit.aboutme
  );
  const [nametoshow, setNametoshow] = useState(
    !profileToEdit ? "" : profileToEdit.nametoshow
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
      ? "#ffffff"
      : !profileToEdit.bgcolor
      ? "#ffffff"
      : profileToEdit.bgcolor.colorcode
  );
  const [textColor, setTextColor] = useState(
    !profileToEdit
      ? "#000000"
      : !profileToEdit.textcolor
      ? "#000000"
      : profileToEdit.textcolor.colorcode
  );

  // get initial options with useEffect
  const getOptions = useCallback(
    async (url) => {
      try {
        const response = await fetch(url, {
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
        }
        if (temp.user_profile) {
          setProfileToEdit(temp.user_profile);
          if (temp.user_profile.avatar) {
            setAvatar(temp.user_profile.avatar.src_image);
            setAvatarId(temp.user_profile.avatar.id);
          }
          if (temp.user_profile.nametoshow) {
            setNametoshow(temp.user_profile.nametoshow);
          }
          if (temp.user_profile.aboutme) {
            setAboutme(temp.user_profile.aboutme);
          }
        }
        if (!temp.user_profile) {
          setAvatarId("no_avatar");
          setBgcolorId("color_2");
          setTextcolorId("color_1");
        }
        if (temp.err) {
          alert(temp.err.message);
        }
      } catch (error) {
        alert("Something was wrong. try again later");
        console.log(error);
      }
    },
    [token]
  );

  useEffect(() => {
    if (userId !== null && userDetails !== null) {
      switch (userDetails.role === "USER") {
        case true:
          getOptions(`${url}/${userId}`);
          break;
        default:
          getOptions(`${url_guest}/${userId}`);
          break;
      }
    }
  }, [getOptions, userId, userDetails, url, url_guest]);

  // handle submit for create or update profile
  function handleSubmit(event) {
    event.preventDefault();
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
    event.preventDefault();
    const bodydata = {
      aboutme,
      nametoshow,
      avatarId,
      bgcolorId,
      textcolorId,
    };
    fetch(`${url}/${userId}`, {
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
        if (data.errors) {
          setErrArray(data.errors);
        }
        if (data.err) {
          alert(data.err.message);
        }
        if (data.user_profile) {
          setErrArray(null);
          getListOfUsers();
          getAllChats();
          setShowProfile(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function updateProfile(event) {
    event.preventDefault();
    const bodydata = {
      aboutme,
      nametoshow,
      avatarId,
      bgcolorId,
      textcolorId,
    };
    fetch(`${url}/${userId}`, {
      method: "PUT",
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
        if (data.errors) {
          setErrArray(data.errors);
        }
        if (data.err) {
          alert(data.err.message);
        }
        if (data.user_profile) {
          setErrArray(null);
          getListOfUsers();
          getAllChats();
          setShowProfile(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          {!errArray ? null : <ErrorMessage errors={errArray} />}
        </div>
        <div className={options}>
          <OptionsForProfile
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
