import { useEffect, useState } from "react";
import app from "../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  useEffect(() => {}, []);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errors = error.message;
        setError(errors);
      });
    console.log("sign in soon");
  };

  //signout
  const handleSignOut = () => {
    signOut(auth).then(() => {});
  };

  //user state changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  //ei props gulo amra header pathacchi
  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
