import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link
          className="btn btn-ghost lg:hiddenbtn btn-ghost normal-case text-xl"
          to="/"
        >
          Auth Context
        </Link>
        <Link
          className="btn btn-ghost lg:hiddenbtn btn-ghost normal-case text-xl"
          to="/"
        >
          Home
        </Link>
        <Link
          className="btn btn-ghost lg:hiddenbtn btn-ghost normal-case text-xl"
          to="/login"
        >
          login
        </Link>
        <Link
          className="btn btn-ghost lg:hiddenbtn btn-ghost normal-case text-xl"
          to="/registration"
        >
          registration
        </Link>
      </div>
    </div>
  );
};

export default Header;
