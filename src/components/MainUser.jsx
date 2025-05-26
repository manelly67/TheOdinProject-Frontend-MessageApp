import no_avatar from "../assets/img/no_avatar.jpg";
import styles from "../styles/Chat.module.css";

const MainUser = (props) => {
const { userDetails } = props;
const { profile } = userDetails;
const { buttonEditProfile} = styles;

return(
    <>
     <div
          style={{
            gridColumn: "1/2",
            gridRow: "1/2",
            backgroundColor: `${profile.bgcolor.colorcode}`,
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
            backgroundColor: `${profile.bgcolor.colorcode}`,
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
                  <button className={buttonEditProfile}>edit profile</button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  color: `${profile.textcolor.colorcode}`,
                }}
              >
                <p>{profile.nametoshow}</p>
                <div>
                  <button className={buttonEditProfile}>edit profile</button>
                </div>
              </div>
            </>
          )}
        </div>
    </>
);

};

export default MainUser;