import Axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import domain from "../../util/domain";
import "./Navbar.scss";

function Navbar() {
  const { user, getUser } = useContext(UserContext);

  async function logOut() {
    await Axios.get(`${domain}/auth/logout`);
    await getUser();
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>Snippet Manager</h1>
      </Link>
      {user === null ? (
        <>
          <Link to="/login">Login </Link>
          <Link to="/register"> Register</Link>
        </>
      ) : (
        user && (
          <button className="btn-logout" onClick={logOut}>
            Logout
          </button>
        )
      )}
    </div>
  );
}

export default Navbar;
