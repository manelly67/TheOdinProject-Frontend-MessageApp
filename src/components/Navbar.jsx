import { Link } from "react-router-dom";
import { useState } from "react";
import Imagen from "./Imagen";


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
              <Link to="/login_as_guest" state={{ token: token }}>Guest Mode</Link>
            </>
          ) : (
            <Link to="/logout" state={{ token: token }}>Logout</Link>
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
            <Link to="/login_as_guest" state={{ token: props.token }}>Guest Mode</Link>
          </>
        ) : (
          <Link to="/logout" state={{ token: props.token }}>Logout</Link>
        )}

        <button className="lateralButton"
          onClick={() => {
            props.setClasses("lateral animate-out");
            setTimeout(props.closeNav, 1300);
          }}
          aria-label={"close"}
          title="close"
        >
          <Imagen/>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
