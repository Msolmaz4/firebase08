import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
//import { useUserAuth } from '../context/AuthContext'
import { login } from "../firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navi = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //burada dikkat et useAuth conterxt cagirdik
  //const {signup} = useUserAuth()
  //simdi buradan context bilgi gonderecegiy
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navi("/");
    } catch {
      setError("FAIILED TO CREATE AN COUNT");
    }
    setLoading(false);
  }

  /** burada dikkat edilecek olan usere current.value yaz yoksa komut satirini goruyorsun
  *  const donRef =useRef()

  const adana=()=>{
    console.log(donRef.current.value)
  }
  */

  /*
  returnden sonra deneme zaptim userref
  *<input type="text " ref={donRef} />
    <button onClick={adana}> button</button> */

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center  mb-4">LOGIN </h2>
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" ref={passwordRef} required />
          </Form.Group>

          <Button disabled={loading} className="w-100" type="submit">
            LOGIN
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
