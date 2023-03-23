import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Container, Table, Row, Col, ListGroup, Button } from "react-bootstrap";
import MyNav from "../myNav/MyNav";
import { useState } from "react";
import { useSelector } from "react-redux";
import { clearCalendarAction } from "../../redux/actions";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

export default function MyCalendar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [calendarEntries, setCalendarEntries] = useState([]);
  const myLikes = useSelector((state) => state.user.user.likes || []);
  const myToken = useSelector((state) => state.user.accessToken);
  const myCalendar = useSelector((state) => state.user.calendar);
  const dispatch = useDispatch();
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

  useEffect(() => {
    console.log(myLikes);
    console.log(myCalendar);
    console.log(calendarEntries);

    dispatch({ type: "ADD_CALENDAR_ENTRY", payload: calendarEntries });
  }, [calendarEntries, dispatch]);
  const handleClearCalendar = () => {
    dispatch(clearCalendarAction());
  };
  return (
    <>
      <MyNav />
      <Container
        className="mt-4 pb-4 pad"
        style={{
          backgroundColor: "#F5F5F5",
          paddingInline: "0",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #888888",
        }}
      >
        <Row
          className="mb-4"
          style={{
            width: "100%",

            marginInline: "0",
            paddingInline: "0",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
          }}
        >
          <Col className="py-2 d-flex justify-content-center">
            <h2>Calendar</h2>
          </Col>
        </Row>
        <Row className="px-4">
          <Col md={2}>
            <ListGroup
              style={{ overflowX: "auto", overflowY: "auto" }}
              vertical
            >
              {myLikes?.map((like) => (
                <ListGroup.Item
                  key={like}
                  onClick={() => setSelectedItem(like)}
                  active={selectedItem === like}
                  style={{ cursor: "pointer" }}
                >
                  {like}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={10}>
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
                        <td
                          key={`${day}-${hour}`}
                          onClick={() => {
                            const newEntry = { day, hour, item: selectedItem };
                            setCalendarEntries([...calendarEntries, newEntry]);
                            dispatch({
                              type: "SAVE_CALENDAR",
                              payload: newEntry,
                            });
                          }}
                        >
                          {myCalendar
                            .filter(
                              (entry) =>
                                entry.day === day && entry.hour === hour
                            )
                            .map((entry) => entry.item)
                            .join(", ")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Button onClick={handleClearCalendar}>Clear</Button>
      </Container>
    </>
  );
}
