import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState("lateral animate-in");
  const { token } = props;
  console.log(token);
  function closeNav() {
    setShow(false);
  }

  return (
    <>
      {props.screenWidth < 431 ? (
        !show ? (
          <button
            style={{
              width: "50px",
              gridColumn: "1/2",
              gridRow: "1/2",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              setClasses("lateral animate-in");
              setShow(true);
            }}
          >
            |||
          </button>
        ) : null
      ) : (
        <nav>
          {token === null ? (
            <>
              <Link to="/sign_up">Sign Up</Link>
              <Link to="/login" state={{ token: token }}>
                Login
              </Link>
              <Link>Guest Mode</Link>
            </>
          ) : (
            <Link to="/logout">Logout</Link>
          )}
        </nav>
      )}

      {show ? (
        <LateralNavbar
          setShow={setShow}
          classes={classes}
          setClasses={setClasses}
          closeNav={closeNav}
          token={token}
        />
      ) : null}
    </>
  );
};

function LateralNavbar(props) {
  return (
    <>
      <nav className={`${props.classes}`}>
        {props.token === null ? (
          <>
            <Link to="/sign_up">Sign Up</Link>
            <Link to="/login" state={{ token: props.token }}>
              Login
            </Link>
            <Link>Guest Mode</Link>
          </>
        ) : (
          <Link to="/logout">Logout</Link>
        )}

        <button
          onClick={() => {
            props.setClasses("lateral animate-out");
            setTimeout(props.closeNav, 1300);
          }}
        >
          x
        </button>
      </nav>
    </>
  );
}

export default Navbar;
