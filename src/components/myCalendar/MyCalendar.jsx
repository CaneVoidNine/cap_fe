import React from "react";
import { Container, Table, Row, Col, ListGroup } from "react-bootstrap";
import MyNav from "../myNav/MyNav";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

export default function MyCalendar() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hours = Array.from({ length: 15 }, (_, i) => i + 8);

  return (
    <>
      <MyNav />
      <Container
        className="mt-4 p-4"
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #888888",
        }}
      >
        <Row></Row>
        <Row>
          <Col md={2}>
            <h2 className="d-flex justify-content-center">List</h2>
            <ListGroup
              style={{ overflowX: "auto", overflowY: "auto" }}
              vertical
            >
              {items.map((item) => (
                <ListGroup.Item key={item}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={10}>
            <h2 className="d-flex justify-content-center">Calendar</h2>
            <div style={{ overflowX: "auto", overflowY: "auto" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    {hours.map((hour) => (
                      <th key={hour}>{hour}:00</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) => (
                    <tr key={day}>
                      <td>{day}</td>
                      {hours.map((hour) => (
                        <td key={`${day}-${hour}`}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
