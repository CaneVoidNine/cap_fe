import React, { useEffect, useState } from "react";
import "./myDet.css";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  AccordionContext,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const handleDelete = async (e) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `http://localhost:3002/workouts/${id}`,
        options
      );
      if (response.ok) {
        navigate("/workouts");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const exe =
    movie && movie.exercises
      ? movie.exercises.map((exercise, i) => {
          return (
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
                    <h2>Exercise {i + 1}</h2>
                    <CustomToggle eventKey="1"></CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <div className="py-3">{exercise?.title}</div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Row>
          );
        })
      : null;

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
        <Row className="d-flex justify-content-end mr-3">
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
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
          {exe}
        </Container>
      </Container>
    </>
  );
}
