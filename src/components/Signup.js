import React, { useState } from "react";

import { Form, Card, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigateSignin = () => {
    navigate("/");
  };
  return (
    <Card style={{ width: "30rem" }} className="m-auto mt-5">
      <Form className="p-4 auto">
        <Card.Title className="pb-2">Sign up</Card.Title>
        <Form.Group controlId="formFirstName">
          <Row>
            <Col className="pe-1">
              <Form.Control
                className="mb-3 p-2 custom-rounded ps-3"
                onChange={handleEmailChange}
                placeholder="First name"
                value={email}
              />
            </Col>
            <Col>
              <Form.Control
                className="mb-3 p-2 custom-rounded ps-3"
                onChange={handleEmailChange}
                placeholder="Last name"
                value={email}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formAddress">
          <select
            class="form-select mb-3 p-2 custom-rounded ps-3"
            aria-label="Default select example"
          >
            <option value="">Choose Barangay</option>
            <option value="1">Poblacion</option>
            <option value="1">Curvada</option>
            <option value="2">Butadon</option>
            <option value="3">Sta. Cruz</option>
            <option value="3">Balili</option>
            <option value="3">Dongoan</option>
            <option value="3">Lapinig</option>
            <option value="3">Margos</option>
            <option value="3">Taguitic</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control
            className="mb-3 p-2 custom-rounded ps-3"
            type="email"
            onChange={handleEmailChange}
            placeholder="Email"
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
        <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
          <Form.Control
            className="mb-3 p-2 custom-rounded ps-3"
            type="password"
            onChange={handlePasswordChange}
            placeholder="Confirm password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Container>
            <Row>
              <Col>
                <Form.Check
                  className="inline-checkbox"
                  type="checkbox"
                  label=""
                />
                <span>
                  I agree with{" "}
                  <span className="r-color fw-bold link c-pointer">
                    privacy
                  </span>{" "}
                  and{" "}
                  <span className="r-color fw-bold link c-pointer">policy</span>
                </span>
              </Col>
            </Row>
          </Container>
        </Form.Group>
        <div className="d-grid gap-2">
          <button
            className="btn btn-login custom-rounded bp-color w-color"
            type="button submit"
          >
            Sign up
          </button>
        </div>
        <div className="separator pt-5 pb-4">or</div>
        <Container>
          <div className="text-center">Sign up with</div>
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
            Already have an account?
            <span
              className="ms-4 r-color fw-bold c-pointer link"
              onClick={navigateSignin}
            >
              Sign in
            </span>
          </div>
        </Container>
      </Form>
    </Card>
  );
}

export default Signup;
