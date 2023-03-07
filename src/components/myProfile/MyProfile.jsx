import React, { useState } from "react";

import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import MyCalendar from "../myCalendar/MyCalendar";
import MyNav from "../myNav/MyNav";

export default function MyProfile() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("555-555-5555");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleSaveChanges = () => {
    // Handle saving changes here
    handleCloseModal();
  };
  return (
    <>
      <MyNav />
      <Container className="mt-4 pad">
        <Row
          className="pb-3"
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
          }}
        >
          <Col>
            <h1 className="mb-4 pt-2 d-flex justify-content-center">
              Profile Information
            </h1>
            <hr />
            <Row>
              <Col className="d-flex justify-content-around">
                <img
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  alt="..."
                  style={{
                    width: "19rem",
                    height: "16rem",
                  }}
                ></img>
              </Col>
              <Col className="mt-5 ml-5">
                <p>Username: {name}</p>
                <p>Email: {email}</p>
                <p>Phone number: {phone}</p>
                <Button variant="primary" onClick={handleShowModal}>
                  Edit Information
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <MyCalendar />
    </>
  );
}
