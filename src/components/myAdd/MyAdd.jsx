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
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
export default function MyAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [selectedOptions, setSelectedOptions] = useState({ 0: "Exercises" });
  const [numDropdowns, setNumDropdowns] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [exe, setExe] = useState([]);
  const [morb, setMorb] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    // const workIn = {
    //   title: title,
    //   info: info,
    // };
    formData.append("title", title);
    formData.append("info", info);
    // let noDuplicates = [...new Set(morb)];
    formData.append("exercises", morb);
    try {
      const options = {
        method: "POST",

        body: formData,
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

  const getExe = async () => {
    try {
      const response = await fetch(`http://localhost:3002/exercises`);
      if (response.ok) {
        const details = await response.json();
        setExe(details);
        console.log(details);
      } else {
        console.log("Error fetching!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getExe();
  }, []);
  useEffect(() => {
    console.log(morb);
  });
  const axe =
    exe && exe
      ? exe.map((exercise, i) => {
          return (
            <Dropdown.Item
              onClick={(e) => setMorb([...morb, exe[i]._id])}
              eventKey={exe[i].title}
            >
              {exe[i].title}
            </Dropdown.Item>
          );
        })
      : null;

  const dropdowns = [];
  for (let i = 0; i < numDropdowns; i++) {
    dropdowns.push(
      <Form.Group controlId={`formDropdown-${i}`} key={i}>
        <Form.Label>Select an exerise:</Form.Label>
        <Dropdown onSelect={(eventKey) => handleSelect(eventKey, i)}>
          <Dropdown.Toggle variant="dark">{selectedOptions[i]}</Dropdown.Toggle>
          <Dropdown.Menu>{axe}</Dropdown.Menu>
        </Dropdown>
      </Form.Group>
    );
  }
  return (
    <>
      <MyNav />
      <div className="center">
        <Container
          style={{
            width: "100%",
            marginInline: "0",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
          }}
        >
          <Row className="px-5 pb-5 d-flex justify-content-md-center">
            <Col xs={12} md={6}>
              <Row
                className="mt-4 d-flex justify-content-center"
                style={{
                  width: "100%",
                  marginInline: "0",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                }}
              >
                <Col className="p-2  d-flex justify-content-center">
                  <h2>Add New Workout!</h2>
                </Col>
              </Row>
              <Form
                className="p-4"
                style={{
                  fontFamily: "Open Sans, sans serif",
                  fontSize: "16px",
                  backgroundColor: "#F5F5F5",

                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px #888888",
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
                    size="lg"
                    column="true"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formFile">
                  <Form.Label>Select an image file:</Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "#F5F5F5", border: "none" }}
                    type="file"
                    onChange={(e) => handleFileChange(e)}
                    accept="image/*"
                  />
                </Form.Group>
                <Form>
                  <Form.Group controlId="formNumDropdowns">
                    <Form.Label>Number of Exercises:</Form.Label>
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
