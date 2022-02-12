import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

import { Form, Button, Card } from "react-bootstrap";

function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Card style={{ width: "30rem" }} className="m-auto mt-5">
      <Form className="p-3 auto">
        <Card.Title className="pb-2">Sign in</Card.Title>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="p-2"
            type="email"
            onChange={handleEmailChange}
            placeholder="Enter email"
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="p-2"
            type="password"
            onChange={handlePasswordChange}
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSignIn}>
          Sign in
        </Button>
        <div className="pt-3">or create and account</div>
      </Form>
    </Card>
  );
}

export default Welcome;
