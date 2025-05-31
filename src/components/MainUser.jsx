import { useState } from "react";
import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/Chat.module.css";
import ProfileEdit from "./ProfileEdit";

const MainUser = (props) => {
  const bgcolor = "white";
  const txtcolor = "black";
  const { userDetails, userId, token, getAllChats, getListOfUsers } = props;
  const { profile } = userDetails;
  const { buttonEditProfile } = styles;
  const [showProfile, setShowProfile] = useState(false);


  return (
    <>
      <div
        style={{
          gridColumn: "1/2",
          gridRow: "1/2",
          backgroundColor: !profile ? bgcolor : `${profile.bgcolor.colorcode}`,
        }}
      >
        {!profile ? (
          <img
            src={no_avatar}
            alt="there is no avatar"
            width="50px"
            height="50px"
          ></img>
        ) : (
          <img
            src={profile.avatar.src_image}
            alt="avatar"
            width="50px"
            height="50px"
          ></img>
        )}
      </div>
      <div
        style={{
          gridColumn: "2/4",
          gridRow: "1/2",
          backgroundColor: !profile ? bgcolor : `${profile.bgcolor.colorcode}`,
          position: "relative",
          alignContent: "flex-start",
          paddingTop: "2px",
        }}
      >
        {!profile ? (
          <>
            <div>
              <p>{userDetails.username}</p>
              <div>
                <button
                  className={buttonEditProfile}
                  onClick={() => {
                    setShowProfile(true);
                  }}
                >
                  edit profile
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                color: !profile ? txtcolor : `${profile.textcolor.colorcode}`,
              }}
            >
              <p>{profile.nametoshow}</p>
              <div>
                <button
                  className={buttonEditProfile}
                  onClick={() => {
                    setShowProfile(true);
                  }}
                >
                  edit profile
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {!showProfile ? null : (
        <ProfileEdit
          profileToEdit={profile}
          setShowProfile={setShowProfile}
          userId={userId}
          token={token}
          getAllChats={getAllChats}
          getListOfUsers={getListOfUsers}
        />
      )}
    </>
  );
};

export default MainUser;
