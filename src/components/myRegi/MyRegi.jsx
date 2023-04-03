import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUserAction,
  saveTokenAction,
  saveUserAction,
} from "../../redux/actions";
export default function MyRegi() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regIn = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regIn),
      };
      const response = await fetch(
        `http://localhost:3002/users/register`,
        options
      );
      if (response.ok) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center">
      <Container
        className=""
        style={{
          backgroundColor: "#202124",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #C63B45",
        }}
      >
        <Row className="p-5 d-flex justify-content-md-center">
          <Col xs={12} md={6}>
            <h2>Register</h2>
            <Form
              style={{
                padding: "1rem",
                fontFamily: "Open Sans, sans serif",
                fontSize: "16px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formName">
                <Form.Label className="dfr" style={{ color: "#C63B45" }}>
                  Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mt-2" controlId="formLastName">
                <Form.Label className="dfr" style={{ color: "#C63B45" }}>
                  Last Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </Form.Group>
              <Form.Group className="mt-2" controlId="formBasicEmail">
                <Form.Label className="dfr" style={{ color: "#C63B45" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mt-2" controlId="formBasicPassword">
                <Form.Label className="dfr" style={{ color: "#C63B45" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                className="mt-3"
                style={{
                  marginTop: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
                variant="outline-success"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Register
              </Button>
              <Link to={"/login"}>
                <Button className="mt-3" variant="link">
                  Already have an account?
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
