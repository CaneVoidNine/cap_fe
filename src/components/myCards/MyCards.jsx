import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../assets/100db.jpg";
import img2 from "../../assets/coa.jpg";
import img3 from "../../assets/february27.jpg";
import img4 from "../../assets/february2023.gif";
import img5 from "../../assets/february27.gif";
import { Link } from "react-router-dom";
import { fetchWorkoutsAction } from "../../redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function MyCards() {
  const dispatch = useDispatch();
  const myWork = useSelector((state) => state.work.workouts);
  const myProfile = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchWorkoutsAction());
    console.log(myProfile);
    console.log(myWork);
  }, []);
  return (
    <Container className="mb-4">
      <h2 className="mb-2 woit">Trending </h2>
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card className="card1">
            <Link to={`/details/${myWork[0]?._id}`}>
              <Card.Img
                variant="top"
                src={myWork[0]?.image}
                alt="Image 1"
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                  height: "30rem",
                }}
              />
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Row>
            <Col xs={12}>
              <Card className="card2">
                <Link to={`/details/${myWork[1]?._id}`}>
                  <Card.Img
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #888888",
                      height: "15rem",
                    }}
                    variant="top"
                    src={myWork[1]?.image}
                    alt="Image 2"
                  />
                </Link>
              </Card>
            </Col>

            <Col xs={12}>
              <Card className="card3">
                <Link to={`/details/${myWork[2]?._id}`}>
                  <Card.Img
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #888888",
                      height: "15rem",
                    }}
                    variant="top"
                    src={myWork[2]?.image}
                    alt="Image 3"
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <h2 className="woit">New exercises</h2>
      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to="/details">
              <Card.Img
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                }}
                src={img1}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to="/details">
              <Card.Img
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                }}
                src={img2}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to="/details">
              <Card.Img
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                }}
                src={img3}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to="/details">
              <Card.Img
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                }}
                src={img4}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
