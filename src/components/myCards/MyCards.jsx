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
      <h2 className="mb-3 woit">Trending </h2>
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Card className="card1">
            <Link to={`/details/${myWork[4]?._id}`}>
              <Card.Img
                variant="top"
                src={myWork[4]?.image}
                alt="Image 1"
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",
                }}
              />
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Row>
            <Col xs={12}>
              <Card className="card2">
                <Link to={`/details/${myWork[6]?._id}`}>
                  <Card.Img
                    style={{
                      backgroundColor: "#202124",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #C63B45",
                    }}
                    variant="top"
                    src={myWork[6]?.image}
                    alt="Image 2"
                  />
                </Link>
              </Card>
            </Col>

            <Col xs={12}>
              <Card className="card3">
                <Link to={`/details/${myWork[5]?._id}`}>
                  <Card.Img
                    style={{
                      backgroundColor: "#202124",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px #C63B45",
                      height: "",
                    }}
                    variant="top"
                    src={myWork[5]?.image}
                    alt="Image 3"
                  />
                </Link>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <h2 className=" mb-3 woit">New exercises</h2>
      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to={`/details/${myWork[myWork.length - 1]?._id}`}>
              <Card.Img
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",
                  maxHeight: "15.3rem",
                }}
                src={myWork[myWork.length - 1]?.image}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to={`/details/${myWork[myWork.length - 2]?._id}`}>
              <Card.Img
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",
                  maxHeight: "15.3rem",
                }}
                src={myWork[myWork.length - 2]?.image}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to={`/details/${myWork[myWork.length - 3]?._id}`}>
              <Card.Img
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",
                  maxHeight: "15.3rem",
                }}
                src={myWork[myWork.length - 3]?.image}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
        <Col lg={6} className="mb-4">
          <Card>
            <Link to={`/details/${myWork[myWork.length - 4]?._id}`}>
              <Card.Img
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",
                  maxHeight: "15.3rem",
                }}
                src={myWork[myWork.length - 4]?.image}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
