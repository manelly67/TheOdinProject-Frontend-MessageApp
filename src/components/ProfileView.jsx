import styles from "../styles/Profile.module.css";

const ProfileView = (props) => {
  const { element, looks, close, profile } = styles;
  const { setShowProfile, profileToView } = props;
  const backgroundColor = !profileToView ? '':(!profileToView.bgcolor ? "#f5f8fa" : profileToView.bgcolor.colorcode);
  const textColor = !profileToView ? '' : (!profileToView.textcolor ? "#31485b" : profileToView.textcolor.colorcode);
  
  return (
    <>
      <section className={`${element} ${looks}`}>
        {!profileToView ? (
          <p>This user has no profile to show</p>
        ) : (
          <>
            <div
              className={profile}
              style={{
                backgroundColor: backgroundColor,
                color: textColor,
              }}
            >
              <p style={{gridColumn:"1/3",gridRow:"1/2"}}>{profileToView.aboutme}</p>
              <p style={{gridColumn:"1/2",gridRow:"2/3"}}>{`I am ${profileToView.nametoshow}`}</p>
              <img
               src={profileToView.avatar.src_image}
               alt="avatar"
               width="100px"
               height="100px"
               style={{gridColumn:"2/3",gridRow:"2/3"}}
              ></img>
            </div>
          </>
        )}

        <button className={close} onClick={() => setShowProfile(false)}>
          close
        </button>
      </section>
    </>
  );
};

export default ProfileView;
