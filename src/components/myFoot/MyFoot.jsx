import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import FaPinterest from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "./myFoot.css";
export default function MyFoot() {
  return (
    <>
      <hr className="mt-5" />
      <footer className="footer">
        <Container className="my-4">
          <Row>
            <Col className="text-center">
              <AiFillGithub size={40} className="mr-2" />
              <AiOutlineTwitter size={40} className="mr-2" />
              <AiFillYoutube size={40} className="mr-2" />
              <AiFillInstagram size={40} className="mr-2" />
              <AiFillFacebook size={40} />
              <p className="mt-1">
                Example Info &copy;{new Date().getFullYear()} All Rights
                Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
