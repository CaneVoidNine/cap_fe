import React, { useEffect, useState } from "react";
import "./myDet.css";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  AccordionContext,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";

import MyNav from "../myNav/MyNav";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
function CustomToggle({ children, eventKey, callback }) {
  const [changeIcon, setChangeIcon] = useState(false);
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <div>
      {isCurrentEventKey ? (
        <MdOutlineExpandLess size={25} onClick={decoratedOnClick} />
      ) : (
        <MdOutlineExpandMore size={25} onClick={decoratedOnClick} />
      )}
    </div>
  );
}

export default function MyDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    try {
      const response = await fetch(`http://localhost:3002/workouts/${id}`);
      if (response.ok) {
        const details = await response.json();
        setMovie(details);
        console.log(details);
      } else {
        console.log("Error fetching!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail();
    console.log(id);
    console.log(movie);
  }, []);

  return (
    <>
      <MyNav />
      <Container
        className="mt-5 pade"
        // style={{ width: "100%", border: "1px solid" }}
      >
        <Row className="mx-1 d-flex justify-content-center">
          <Image
            className="my-3"
            src={movie?.image}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
              maxHeight: "25rem",
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
              <h1>{movie?.title}</h1>
            </Col>
            <Col md={12} className=" d-flex justify-content-center">
              <p style={{ fontSize: "1.3rem" }}>{movie?.info}</p>
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
            <Accordion>
              <Card className="accordion-post-group">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h2>Exercise 1</h2>
                  <CustomToggle eventKey="1"></CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <div className="py-3">
                    Exercise info here Exercise info here Exercise info here
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <Row
            className="p-4 my-2 mx-1"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Accordion>
              <Card className="accordion-post-group">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h2>Exercise 2</h2>
                  <CustomToggle eventKey="1"></CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <div>Exercise info here</div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <Row
            className="p-4 my-2 mx-1"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Accordion>
              <Card className="accordion-post-group">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h2>Exercise 3</h2>
                  <CustomToggle eventKey="1"></CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <div>Exercise info here</div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
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
