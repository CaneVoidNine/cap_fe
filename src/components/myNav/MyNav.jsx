import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import "./myNav.css";
export default function MyNav() {
  return (
    <Container fluid className="nov">
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        }}
      >
        <Navbar.Brand href="/" style={{ marginRight: "1rem" }}>
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
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
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
                <Dropdown.Item href="/logister">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
