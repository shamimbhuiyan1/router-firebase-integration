//normal way use custom hooks

/* import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Please login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="" placeholder="your email" id="" />
        <br />
        <input type="password" name="" placeholder="your password" id="" />
        <br />
        <input type="submit" name="" value="Login" />
      </form>
    </div>
  );
};

export default Login; */

//using react firebase hooks
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={() => signInWithGoogle()}>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="" placeholder="your email" id="" />
        <br />
        <input type="password" name="" placeholder="your password" id="" />
        <br />
        <input type="submit" name="" value="Login" />
      </form>
    </div>
  );
};

export default Login;
