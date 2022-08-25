import React, { useState } from "react";
//import { adana } from '../firebase'
import { register } from "../firebase";

function Deneme() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handle = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handle}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">adam misin</button>
      </form>
    </div>
  );
}
export default Deneme;
