import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import "./myNav.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkoutsAction } from "../../redux/actions";
import {
  getUserAction,
  saveTokenAction,
  saveUserAction,
} from "../../redux/actions";
export default function MyNav() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(getUserAction([]));
  };

  const myProfile = useSelector((state) => state.user.user);
  useEffect(() => {});
  return (
    <Container fluid className="nov">
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        }}
      >
        <Navbar.Brand href="/home" style={{ marginRight: "1rem" }}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/60/55/21/1000_F_360552123_UlehCaRx80fOT2sI48x0jKYreXL2wTxH.jpg"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="tbc"
              href="/home"
              style={{ marginRight: "1rem", fontSize: "1.5rem", color: "#333" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="tbc"
              href="/workouts"
              style={{ marginRight: "1rem", fontSize: "1.5rem", color: "#333" }}
            >
              Workouts
            </Nav.Link>
            <Nav.Link
              className="tbc"
              href="/home"
              style={{ marginRight: "1rem", fontSize: "1.5rem", color: "#333" }}
            >
              Guides
            </Nav.Link>
            <Nav.Link
              className="tbc"
              href="/home"
              style={{ marginRight: "1rem", fontSize: "1.5rem", color: "#333" }}
            >
              Collections
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="tbc"
              href="/home"
              style={{ marginRight: "1rem", fontSize: "1.5rem", color: "#333" }}
            >
              Community
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="profile-dropdown">
                <Image
                  src={myProfile?.avatar}
                  style={{
                    width: "3rem",
                    borderRadius: "50%",
                    height: "2.7rem",
                    aspectRatio: "1/1",
                    boxShadow: "0 0 3px rgba(0,0,0,0.3)",
                  }}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className=" dropdown-menu-right"
                style={{ fontSize: "1.2rem" }}
              >
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>

                <Dropdown.Item href="/home">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut()} href="/">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
