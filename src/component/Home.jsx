import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/register">REGISTER</Link>
      <br />
      <Link to="/Login">login</Link>
    </div>
  );
};

export default Home;
