//normal firebase way
/* import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>this is home</h2>
      <p>Current ser: {user ? user.displayName : "No Body"} </p>
    </div>
  );
};

export default Home; */

//firebase using react firebase

import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>this is home</h2>
      <p>Current User: {user ? user.displayName : "No Body"} </p>
    </div>
  );
};

export default Home;
