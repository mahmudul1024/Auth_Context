import React, { useContext } from "react";
import { AuthContext } from "./Context/Usercontext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>home for {user?.email}</h2>
    </div>
  );
};

export default Home;
