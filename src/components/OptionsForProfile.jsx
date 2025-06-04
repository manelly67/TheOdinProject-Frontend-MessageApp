import { useState } from "react";
import styles from "../styles/ProfileEdit.module.css";
import { mock_options_profile } from "../assets/mock_data";

const OptionsForProfile = (props) => {
  const { done } = styles;
  const {
    optionsForEdit,
    aboutme,
    setAboutme,
    nametoshow,
    setNametoshow,
    setAvatar,
    setAvatarId,
    setBackgroundColor,
    setBgcolorId,
    setTextColor,
    setTextcolorId,
  } = props;

  console.log(aboutme);

  const [showTextColors, setShowTextColors] = useState(false);
  const [showBgColors, setShowBgColors] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);

  const listColorsForText = !optionsForEdit
    ? null
    : optionsForEdit.available_colors.map((e) => (
        <div key={`${e.id}_div`}>
          <button
            key={e.id}
            style={{
              backgroundColor: `${e.colorcode}`,
            }}
            onClick={() => {
              setTextColor(e.colorcode);
              setTextcolorId(e.id);
            }}
            aria-label={`color ${e.name}`}
          ></button>
        </div>
      ));

  const listColorsForBg = !optionsForEdit
    ? null
    : optionsForEdit.available_colors.map((e) => (
        <div key={`${e.id}_div`}>
          <button
            key={e.id}
            style={{
              backgroundColor: `${e.colorcode}`,
            }}
            onClick={() => {
              setBackgroundColor(e.colorcode);
              setBgcolorId(e.id);
            }}
            aria-label={`color ${e.name}`}
          ></button>
        </div>
      ));

  const listAvatars = !optionsForEdit
    ? null
    : optionsForEdit.available_avatars.map((e) => (
        <div key={`${e.id}_div`} style={{ width: "35px", height: "35px" }}>
          <button
            key={e.id}
            onClick={() => {
              setAvatar(e.src_image);
              setAvatarId(e.id);
            }}
            aria-label={`avatar ${e.name}`}
          >
            <img
              src={e.src_image}
              alt="avatar"
              width="30px"
              height="30px"
            ></img>
          </button>
        </div>
      ));

  return (
    <>
      <div style={{ gridRow: "1/2", gridColumn: "1/4" }}>
        <div>
          <label htmlFor="nametoshow">name to show</label>
          <input
            id="nametoshow"
            type="text"
            name="nametoshow"
            value={nametoshow}
            onChange={(event) => setNametoshow(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="aboutme">about me</label>
          <textarea
            id="aboutme"
            type="text"
            name="aboutme"
            value={aboutme}
            onChange={(event) => setAboutme(event.target.value)}
          ></textarea>
        </div>
      </div>

      <button
        style={{ gridRow: "2/3", gridColumn: "1/2" }}
        onClick={() => {
          setShowBgColors(true);
          setShowTextColors(false);
          setShowAvatars(false);
        }}
      >
        change Bg Color
      </button>
      <button
        style={{ gridRow: "3/4", gridColumn: "1/2" }}
        onClick={() => {
          setShowBgColors(false);
          setShowTextColors(true);
          setShowAvatars(false);
        }}
      >
        change Text Color
      </button>
      <button
        style={{ gridRow: "4/5", gridColumn: "1/2" }}
        onClick={() => {
          setShowBgColors(false);
          setShowTextColors(false);
          setShowAvatars(true);
        }}
      >
        change Avatar
      </button>
      <section style={{ gridRow: "2/5", gridColumn: "2/4" }}>
        <div style={{zIndex:"2"}}>
          {!showBgColors ? null : listColorsForBg}

          {!showTextColors ? null : listColorsForText}

          {!showAvatars ? null : listAvatars}
        </div>

        <button
          className={done}
          onClick={() => {
            setShowBgColors(false);
            setShowTextColors(false);
            setShowAvatars(false);
          }}
        >
          done
        </button>
      </section>
    </>
  );
};

export default OptionsForProfile;
