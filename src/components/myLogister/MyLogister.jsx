import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./myLogister.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function MyLogister() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const details = {
      email: email,
      password: password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchURL = "http://localhost:3001/users/login";

    try {
      let response = await fetch(fetchURL, options);

      if (response.ok) {
        const data = await response.json();

        console.log(response.status);
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/");
      } else {
        console.log(response.status);
      }
    } catch (error) {}
  };

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login/register logic here
  };

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
                  value={email}
                  onChange={(event) => handleEmail(event)}
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
                  onChange={(event) => handlePassword(event)}
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
                onClick={handleLogin}
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
