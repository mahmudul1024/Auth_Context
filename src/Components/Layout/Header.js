import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((er) => {
        console.error(er.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link
          to="/"
          className="btn btn-ghost lg:hiddenbtn btn-ghost normal-case text-xl"
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
          to="/orders"
        >
          Orders
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
        {user?.email && <span>Welcome , {user.email}</span>}
        {user?.email ? (
          <button onClick={handleLogout} className="btn btn-xs">
            Sign Out
          </button>
        ) : (
          <button className="btn btn-xs">
            {" "}
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
