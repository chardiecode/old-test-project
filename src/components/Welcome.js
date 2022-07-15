import "../App.css";
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

import { Form, Card, Container, Row, Col, Image } from "react-bootstrap";

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

  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <Card style={{ width: "30rem" }} className="m-auto mt-5">
      <Form className="p-4 auto">
        <Card.Title className="pb-2">Sign in</Card.Title>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control
            required={true}
            className="mb-3 p-2 custom-rounded ps-3"
            type="email"
            onChange={handleEmailChange}
            placeholder="Enter email"
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Control
            className="mb-3 p-2 custom-rounded ps-3"
            type="password"
            onChange={handlePasswordChange}
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Container>
            <Row>
              <Col>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
              <Col className="text-end r-color fs-6 fw-bold c-pointer link">
                Forgot password
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <div className="d-grid gap-2">
          <button
            className="btn btn-login custom-rounded bp-color w-color"
            type="button submit"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </div>
        <div className="separator pt-5 pb-4">or</div>
        <Container>
          <div className="text-center">Sign in with</div>
          <div className="text-center mt-3">
            <Image
              className="me-2 c-pointer img-hover"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
            <Image
              className="me-2 c-pointer img-hover"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
            <Image
              className="me-2 c-pointer img-hover"
              src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
              alt="Twitter..."
            />
          </div>
          <div className="text-center mt-3">
            Don't have an account yet?
            <span
              className="ms-4 r-color fw-bold c-pointer link"
              onClick={navigateSignup}
            >
              Sign up
            </span>
          </div>
        </Container>
      </Form>
    </Card>
  );
}

// <a href="https://icons8.com/icon/CtrV2SV33rD9/facebook-circled">Facebook Circled icon by Icons8</a>

export default Welcome;
