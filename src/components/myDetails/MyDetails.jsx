import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
import { Accordion } from "react-bootstrap-accordion";
import img from "../../assets/100db.jpg";
import MyNav from "../myNav/MyNav";
export default function MyDetails() {
  return (
    <>
      <MyNav />
      <Container
        fluid
        className="mt-5 pade"
        // style={{ width: "100%", border: "1px solid" }}
      >
        <Row className="d-flex justify-content-center">
          <Image
            src={img}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          ></Image>
        </Row>
        <Container
          className="mt-3 pb-3"
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
          }}
        >
          <Row>
            <Col
              md={12}
              style={{ height: "100%" }}
              className="mt-2 d-flex justify-content-center"
            >
              <h1>Dumbell workouts</h1>
            </Col>
            <Col md={12} className=" d-flex justify-content-center">
              <p style={{ fontSize: "1.3rem" }}>
                Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
                ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
                ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
                ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,
              </p>
            </Col>
          </Row>

          <Row
            className="p-4 my-2 mx-1"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Col className=" d-flex justify-content-start">
              <h2>Exercise 1</h2>
            </Col>
          </Row>

          <Row
            className="p-4 my-2 mx-1"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Col className=" d-flex justify-content-start">
              <h2>Exercise 2</h2>
            </Col>
          </Row>

          <Row
            className="p-4 my-2 mx-1"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Col className=" d-flex justify-content-start">
              <h2>Exercise 3</h2>
            </Col>
          </Row>
          <Row className="mt-2 d-flex justify-content-around">
            <Col md={6} className="mt-2 d-flex justify-content-around">
              Timer
            </Col>
            <Col md={6} className="mt-2 d-flex justify-content-around">
              Sets
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
