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
    <div fluid className="nov">
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#202124",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          margin: "0",
        }}
      >
        <Navbar.Brand href="/" style={{ marginLeft: "1rem" }}>
          <h1 style={{ color: "#C63B45" }}>VoidOuts</h1>
          {/* <img
            src="https://as2.ftcdn.net/v2/jpg/03/60/55/21/1000_F_360552123_UlehCaRx80fOT2sI48x0jKYreXL2wTxH.jpg"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="tbc"
              href="/"
              style={{
                marginRight: "1rem",
                fontSize: "1.5rem",
              }}
            ></Nav.Link>
            <Nav.Link
              className="tbc"
              href="/workouts"
              style={{
                color: "white",
                marginRight: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Workouts
            </Nav.Link>
            <Nav.Link
              className="tbc"
              href="/"
              style={{
                marginRight: "1rem",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Guides
            </Nav.Link>
            <Nav.Link
              className="tbc"
              href="/"
              style={{
                color: "white",
                marginRight: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Collections
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="tbc"
              href="/calendar"
              style={{
                marginRight: "1rem",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Calendar
            </Nav.Link>

            <Nav.Link
              className="tbc"
              href="/"
              style={{
                marginRight: "1rem",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Community
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="" id="profile-dropdown">
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

                <Dropdown.Item href="/">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut} href="/login">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
