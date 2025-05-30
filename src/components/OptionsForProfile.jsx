import { useState } from "react";
import styles from "../styles/ProfileEdit.module.css";

const OptionsForProfile = (props) => {
  const { close } = styles;
  const {
    userId,
    optionsForEdit,
    setAboutme,
    setNametoshow,
    setAvatar,
    setAvatarId,
    setBackgroundColor,
    setBgcolorId,
    setTextColor,
    setTextcolorId,
  } = props;

  const [showTextColors, setShowTextColors] = useState(false);
  const [showBgColors, setShowBgColors] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);

  const listColorsForText = !optionsForEdit
    ? null
    : optionsForEdit.available_colors.map((e) => (
        <button
          key={e.id}
          style={{
            width: "5px",
            height: "5px",
            padding: "0px",
            margin: "0px",
            backgroundColor: `${e.colorcode}`,
          }}
          onClick={() => {
            setTextColor(e.colorcode);
            setTextcolorId(e.id);
          }}
          aria-label={`color ${e.name}`}
        ></button>
      ));

  const listColorsForBg = !optionsForEdit
    ? null
    : optionsForEdit.available_colors.map((e) => (
        <button
          key={e.id}
          style={{
            width: "5px",
            height: "5px",
            padding: "0px",
            margin: "0px",
            backgroundColor: `${e.colorcode}`,
          }}
          onClick={() => {
            setBackgroundColor(e.colorcode);
            setBgcolorId(e.id);
          }}
          aria-label={`color ${e.name}`}
        ></button>
      ));

  const listAvatars = !optionsForEdit
    ? null
    : optionsForEdit.available_avatars.map((e) => (
        <button
          key={e.id}
          style={{
            width: "15px",
            height: "15px",
            padding: "0px",
            margin: "0px",
          }}
          onClick={() => {
            setAvatar(e.src_image);
            setAvatarId(e.id);
          }}
          aria-label={`avatar ${e.name}`}
        ></button>
      ));

  return (
    <>
      <input style={{ gridRow: "1/2", gridColumn: "1/2" }} />
      <textarea style={{ gridRow: "1/2", gridColumn: "2/4" }}></textarea>
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
        {!showBgColors ? null : listColorsForBg}

        {!showTextColors ? null : listColorsForText}

        {!showAvatars ? null : listAvatars}

        <button
          className={close}
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
