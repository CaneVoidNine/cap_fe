import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/critical.gif";
import "./myStatic.css";
export default function MyStatic() {
  return (
    <Container
      fluid
      className="bd px-2"
      style={{
        backgroundColor: "#202124",

        boxShadow: "0px 0px 10px #C63B45",
      }}
    >
      <div className="card-group">
        <Card className="col-sm-6 col-md-4 col-lg-3" style={{}}>
          <Card.Img src={img1} style={{ height: "100%" }} />
        </Card>
        <Card className="col-sm-6 col-md-4 col-lg-3">
          <Card.Body>
            <Card.Title className="text-left">GET STARTED</Card.Title>

            <ul>
              <li>Introduction</li>

              <li>Workout Manual</li>
              <li>Warmup & Stretching</li>
              <li>How to Pick a Program</li>
              <li>Training Plans</li>
              <li>Exercise Alternatives</li>
              <li>Website Functionality</li>
              <li>Video Exercise Library Help / Ask a Question</li>
            </ul>
          </Card.Body>
        </Card>

        <Card className="col-sm-6 col-md-4 col-lg-3">
          <Card.Body>
            <Card.Title className="text-left">COOL & USEFUL</Card.Title>

            <ul>
              <li>downloads & paperbacks</li>
              <li>cool posters</li>
              <li>cool printables</li>
              <li>mobile apps</li>
              <li>certificates & badges</li>
              <li>fitness test</li>
              <li>calories burned calculator</li>
              <li>universal timer</li>
              <li>print a t-shirt</li>
            </ul>
          </Card.Body>
        </Card>
        <Card className="col-sm-6 col-md-4 col-lg-3">
          <Card.Body>
            <Card.Title className="text-left">THE PROJECT</Card.Title>

            <ul>
              <li>about the project</li>
              <li>how we are supported & why</li>
              <li>why we have no ads</li>
              <li>team behind the project</li>
              <li>the internet of tomorrow</li>
              <li>initiatives & collaborations</li>
              <li>popular questions / answers</li>
              <li>copyright & terms of use</li>
              <li>support the project - donations</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
