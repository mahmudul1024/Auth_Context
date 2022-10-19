import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebaseconfig.init";

export const AuthContext = createContext();

const auth = getAuth(app);
const Usercontext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Aaaksh" });

  const googleProvider = new GoogleAuthProvider();

  // Create user function defination

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // onAuthStateChanged on firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curuser) => {
      setUser(curuser);
      console.log("auth state changed", curuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // sign in function defination

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, signIn, logOut, signInGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Usercontext;
