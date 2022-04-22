//normal firebase way

/* import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Heree are all the product</h2>
      <p> {user ? user.email : "No User"}</p>
      <h5>{user ? user.displayName : "No User"} </h5>
    </div>
  );
};

export default Products; */

//firebase using react firebase

import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Heree are all the product</h2>
      <p> {user ? user.email : "No User"}</p>
      <h5>{user ? user.displayName : "No User"} </h5>
    </div>
  );
};

export default Products;
