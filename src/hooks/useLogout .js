import { useState } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("user logged out");
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };
  return { error, logout };
};
