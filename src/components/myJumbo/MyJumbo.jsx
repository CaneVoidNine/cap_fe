import React from "react";
import "./MyJumbo.css";
import Container from "react-bootstrap/Container";
import "./MyJumbo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Image } from "react-bootstrap";
export default function MyJumbo() {
  return (
    <>
      <Container className="mt-3 mb-4 pad">
        <Row className="align-items-center">
          <Col
            xl={6}
            lg={12}
            className="p-5"
            style={{
              backgroundColor: "#202124",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #C63B45",
              minHeight: "24.5rem",
            }}
          >
            <h2 className="pb-2">Get stronger together!</h2>
            <p style={{ fontSize: "1.3rem" }}>
              Join our motivated community and begin your improvement journey
              today! We know that the most difficult step is the first one,
              thats why our website will help you search for workouts you may
              need and add them straight to your calendar! Keep our app close
              with integrated timer and set counter!
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Keep up the warrior mentality!
              </span>
            </p>
          </Col>
          <Col xl={6} lg={12} className="kek p-0">
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#202124",
                boxShadow: "0px 0px 10px #C63B45",
                maxHeight: "24.5rem",
              }}
            >
              <Image
                src="https://media.istockphoto.com/id/688040560/photo/happy-three-friends-at-sport-club.jpg?s=612x612&w=0&k=20&c=aX-iwWwGbChD4gGiklDB3pMOcmt5zpT0fpvqb4qtqUc="
                alt="Right Image"
                fluid
                style={{
                  border: "10px solid #202124",
                  borderLeft: "0px",
                  borderRadius: "0px 20px 20px 0px",
                  width: "100%",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
