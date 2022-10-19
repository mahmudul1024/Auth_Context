import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // creates a obstacle for next if condition ,so that it does not force to go to login on reload ,when its on the order page...i mean it returns from here if true
    return <div>loading....</div>;
  }

  //if there is still any user ,i mean loged in user
  if (user && user.uid) {
    return children;
  }
  //if all the above conditions fails then simply navigate to login
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
