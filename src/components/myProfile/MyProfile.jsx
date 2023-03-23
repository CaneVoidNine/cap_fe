import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import MyCalendar from "../myCalendar/MyCalendar";
import MyNav from "../myNav/MyNav";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkoutsAction, saveUserAction } from "../../redux/actions";
import { useSSRSafeId } from "@react-aria/ssr";
export default function MyProfile() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = () => {
    // Handle saving changes here
    handleCloseModal();
  };

  const myProfile = useSelector((state) => state.user.user);
  return (
    <>
      <MyNav />
      <Container className="mt-4 pad">
        <Row
          className="pb-3"
          style={{
            backgroundColor: "#202124",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #C63B45",
          }}
        >
          <Row
            className="d-flex justify-content-center"
            style={{
              width: "100%",
              marginInline: "0",
              backgroundColor: "#202124",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #C63B45",
            }}
          >
            <Col className="py-2 d-flex justify-content-center">
              <h2>Profile Information</h2>
            </Col>
          </Row>

          <Col>
            <Row>
              <Col
                style={{
                  width: "20rem",
                }}
                className="p-4 m-4 d-flex justify-content-center"
              >
                <img
                  src={myProfile?.avatar}
                  alt="..."
                  style={{
                    width: "19rem",
                    height: "16rem",
                    backgroundColor: "#202124",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px #C63B45",
                  }}
                ></img>
              </Col>
              <Col className="pt-5">
                <h3>Firstname: {myProfile?.name}</h3>
                <h3 className="mt-5">Lastname: {myProfile?.lastName}</h3>
                <h3 className="mt-5">Email: {myProfile?.email}</h3>
                <Button
                  className="mt-4"
                  variant="primary"
                  onClick={handleShowModal}
                >
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
                <Form.Control type="text" value={name} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" />
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
    </>
  );
}
