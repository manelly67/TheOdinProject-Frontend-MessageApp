import styles from "../styles/DropdownMenu.module.css";
import no_avatar from "../assets/img/no_avatar.jpg";

const DropdownMenu = (props) => {
  const { element, looks, close, item } = styles;
  const { setShowMenu, setUsertoId, allUsers, submitSelect,userId } = props;

  return (
    <>
      <button
        onClick={() => {
          setShowMenu(false);
        }}
        className={close}
      >
        close
      </button>
      <select
        className={`${element} ${looks}`}
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
                        <div>
                          <p>{e.username}</p>
                          <p>{e.status}</p>
                        </div>
                      ) : (
                        <div className={item}>
                          {!e.profile.nametoshow ? (
                            <p>{e.username}</p>
                          ) : (
                            <div>
                              {!e.profile.avatar.src_image ? (
                                <img
                                  src={no_avatar}
                                  alt="avatar"
                                  width="50px"
                                  height="50px"
                                ></img>
                              ) : (
                                <img
                                  src={e.profile.avatar.src_image}
                                  alt="avatar"
                                  width="50px"
                                  height="50px"
                                ></img>
                              )}

                              <p>{e.profile.nametoshow}</p>
                              <p>{e.status}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </option>
                  )}
                </>
              );
            })}
      </select>
      <button
        onClick={(event) => {
          submitSelect(event);
        }}
      >
        submit
      </button>
    </>
  );
};

export default DropdownMenu;
