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
            <h2>Register</h2>
            <Form
              style={{
                padding: "1rem",
                fontFamily: "Open Sans, sans serif",
                fontSize: "16px",
              }}
              //   onSubmit={handleSubmit}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  //   onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  //   onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  //   onChange={(e) => setEmail(e.target.value)}
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
                  //   onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                style={{
                  marginTop: "10px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
                variant="primary"
                type="submit"
                // onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
              <Link to={"/"}>
                <Button className="mt-2" variant="link">
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
