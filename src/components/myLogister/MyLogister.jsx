import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./myLogister.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  
  getUserAction,
  saveTokenAction,
  saveUserAction,
} from "../../redux/actions";
export default function MyLogister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logIn = { email: email, password: password };
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logIn),
      };
      const response = await fetch(
        `http://localhost:3002/users/login`,
        options
      );
      if (response.ok) {
        const data = await response.json();

        setToken(data.accessToken);

        console.log(data.accessToken);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(saveTokenAction(token));
    dispatch(getUserAction(token));
  }, [token]);

  return (
    <div className="center">
      <Container
        className=""
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #888888",
        }}
      >
        <Row className="p-5 d-flex justify-content-md-center">
          <Col xs={12} md={6}>
            <h2>{isLogin ? "Login" : "Register"}</h2>
            <Form
              style={{
                padding: "1rem",
                fontFamily: "Open Sans, sans serif",
                fontSize: "16px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mt-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {!isLogin && (
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
              )}

              <Button
                style={{
                  marginTop: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {isLogin ? "Login" : "Register"}
              </Button>

              <Button className="mt-2" variant="link" onClick={handleSwitch}>
                {isLogin
                  ? "Create an account"
                  : "Already have an account? Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
