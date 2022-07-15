import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  // Just some random changes
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      Welcome
      <div onClick={handleSignOut}>Signout</div>
    </div>
  );
}

export default HomePage;
