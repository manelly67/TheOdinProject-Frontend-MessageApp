import { useState } from "react";
import Icon from '@mdi/react';
import { mdiThemeLightDark } from '@mdi/js';

const ToggleTheme = (props) => {
  const [theme, setTheme] = useState(props.theme);

  const body = document.querySelector("body");
  if (body) {
    document.body.className = theme;
  }

  function toggleTheme() {
    const newTheme = body.className === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <button
      style={{gridColumn: '2/3'}}
      className="themeButton"
      onClick={() => {
        toggleTheme();
      }}
      aria-label="toggle theme dark/light"
    >
      <Icon path={mdiThemeLightDark} size={1} />
    </button>
  );
};

export default ToggleTheme;