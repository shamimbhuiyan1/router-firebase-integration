import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Heree are all the product</h2>
      <p> {user ? user.email : "No User"}</p>
      <h4>{user ? user.displayName : "No User"} </h4>
    </div>
  );
};

export default Products;
