import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/index.css";
const Header = () => {
  return (
    <div>
      <ul className="Header-ui">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign_up">Sign Up</Link>
        </li>
        <li>
          <Link to="/log_in">Log In</Link>
        </li>
        <div></div>
      </ul>
    </div>
  );
};
export default Header;
