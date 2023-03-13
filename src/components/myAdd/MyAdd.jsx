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
export default function MyAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workIn = {
      title: title,
      info: info,
    };
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workIn),
      };
      const response = await fetch(`http://localhost:3002/workouts`, options);
      if (response.ok) {
        navigate("/workouts");
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
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #888888",
        }}
      >
        <Row className="p-5 d-flex justify-content-md-center">
          <Col xs={12} md={6}>
            <h2>Add new Workout!</h2>
            <Form
              style={{
                padding: "1rem",
                fontFamily: "Open Sans, sans serif",
                fontSize: "16px",
              }}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formTitle">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Workout name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => setInfo(e.target.value)}
                  type="text"
                  placeholder="Info about workout"
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
                onClick={(e) => handleSubmit(e)}
              >
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
