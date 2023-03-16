import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import MyNav from "../myNav/MyNav";
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
  const [selectedOptions, setSelectedOptions] = useState({ 0: "Option 1" });
  const [numDropdowns, setNumDropdowns] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
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
  const handleNumChange = (event) => {
    let value = Number(event.target.value);
    if (value <= 0) {
      value = 1; // minimum value of 1
    }
    setNumDropdowns(value);
    setSelectedOptions({});
  };

  const handleSelect = (eventKey, index) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [index]: eventKey,
    }));
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const dropdowns = [];
  for (let i = 0; i < numDropdowns; i++) {
    dropdowns.push(
      <Form.Group controlId={`formDropdown-${i}`} key={i}>
        <Form.Label>Select an option:</Form.Label>
        <Dropdown onSelect={(eventKey) => handleSelect(eventKey, i)}>
          <Dropdown.Toggle variant="dark">{selectedOptions[i]}</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Option 1">Option 1</Dropdown.Item>
            <Dropdown.Item eventKey="Option 2">Option 2</Dropdown.Item>
            <Dropdown.Item eventKey="Option 3">Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
    );
  }
  return (
    <>
      <MyNav />
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
                <Form.Group controlId="formInfo">
                  <Form.Label>Info</Form.Label>
                  <Form.Control
                    onChange={(e) => setInfo(e.target.value)}
                    type="text"
                    placeholder="Info about workout"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formFile">
                  <Form.Label>Select an image file:</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F5F5F5", border: "none" }}
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </Form.Group>
                <Form>
                  <Form.Group controlId="formNumDropdowns">
                    <Form.Label>Number of dropdowns:</Form.Label>
                    <Form.Control
                      type="number"
                      value={numDropdowns}
                      onChange={handleNumChange}
                    />
                  </Form.Group>
                  {dropdowns}
                </Form>

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
    </>
  );
}
