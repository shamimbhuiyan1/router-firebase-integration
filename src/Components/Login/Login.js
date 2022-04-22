import React from "react";
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

export default Login;
