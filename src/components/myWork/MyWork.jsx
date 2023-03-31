import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import {
  Form,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Image,
} from "react-bootstrap";
import { Connect } from "react-redux";
import img from "../../assets/100db.jpg";
import { AiFillHeart, AiFillLike, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import PageItem from "react-bootstrap/PageItem";
import "./myWork.css";
import MyNav from "../myNav/MyNav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWorkoutsAction,
  likeWorkAction,
  unlikeWorkAction,
  saveLikesAction,
  deleteLikesAction,
} from "../../redux/actions";

function MyComponent({ workout }) {
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [likedWorkouts, setLikedWorkouts] = useState([]);
  const dispatch = useDispatch();
  const myWork = useSelector((state) => state.work.workouts);
  const myLikes = useSelector((state) => state.user.user.likes);
  const { user } = useSelector((state) => state.user.user);
  const handleLike = (e, workout) => {
    if (myLikes.includes(workout._id)) {
      dispatch(deleteLikesAction(workout._id));
    } else {
      dispatch(saveLikesAction(workout._id));
    }
  };

  // e.preventDefault();
  // if (myLikes.includes(likes)) {
  //   dispatch(unlikeWorkAction(likes));
  // } else {
  //   dispatch(likeWorkAction(likes));

  // const handleUnlike = () => {
  //   dispatch(deleteLikesAction(workout._id))
  // } here
  // console.log(likes);
  // dispatch(likeWorkAction(like));

  useEffect(() => {
    dispatch(fetchWorkoutsAction());
    console.log(user);
    console.log(myWork);
    console.log(workout);

    if (user && user.likes) {
      setLikedWorkouts(user.user.likes);
    }
    console.log(myLikes);
    console.log(likedWorkouts);
  }, [myLikes]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const cardsPerPage = 4;
  const totalCards = 40;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (activePage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const filteredCards = myWork.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cards = filteredCards.reverse().map((workout, i) => (
    <Col lg={6} md={12} key={i}>
      <Row>
        <Card
          className="mb-4 "
          style={{
            backgroundColor: "#202124",
            borderRadius: "0px",
            border: "1px solid white",
            boxShadow: "0px 0px 10px #C63B45",
            height: "30rem",
            overflowY: "scroll",
          }}
        >
          <Card.Body>
            <Link to={`/details/${filteredCards[i]?._id}`}>
              <Card.Img
                src={filteredCards[i]?.image}
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#202124",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #C63B45",

                  objectFit: "cover",
                }}
              />
            </Link>
            <Card.Title>
              <Row className="mt-2">
                <Col md={12} className="mt-1 d-flex justify-content-center">
                  <h2>{filteredCards[i]?.title}</h2>
                </Col>
                <Col className="d-flex justify-content-end ms-auto">
                  {myLikes.includes(filteredCards[i]._id) ? (
                    <AiFillHeart
                      style={{ cursor: "pointer" }}
                      color="#C63B45"
                      onClick={(e) => handleLike(e, filteredCards[i])}
                    />
                  ) : (
                    <AiOutlineHeart
                      style={{ cursor: "pointer" }}
                      color="#C63B45"
                      onClick={(e) => handleLike(e, filteredCards[i])}
                    />
                  )}
                </Col>
              </Row>
            </Card.Title>

            <Card.Text className="ml-1 pb-3 ovef" style={{}}>
              {filteredCards[i]?.info}
            </Card.Text>
            <Card.Text className=""></Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  ));

  const cardsToShow = cards.slice(startIndex, endIndex);

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        activeLabel=""
        key={i}
        active={i === activePage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <MyNav />
      <Container className="pad mt-3">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            xl={6}
            lg={12}
            className="p-5"
            style={{
              backgroundColor: "#202124",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #C63B45",
              minHeight: "20rem",
            }}
          >
            <h2 className="pb-2">Find your ideal workout routine!</h2>
            <p style={{ fontSize: "1.3rem" }}>
              Our team of dedicated trainers with help of other users present u
              our best exercises! Here you will find workout's for all your
              needs! Feel free to add those u find interesting to your personal
              calendar and enjoy your own personalized training routine!
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Keep up the warrior mentality!
              </span>
            </p>
          </Col>
          <Col xl={6} lg={12} className="kek p-0">
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#202124",
                boxShadow: "0px 0px 10px #C63B45",
                maxHeight: "22rem",
              }}
            >
              <Image
                className=""
                src="https://thumbs.dreamstime.com/b/diverse-group-friends-laughing-workout-session-sportswear-standing-arm-together-gym-class-149716233.jpg"
                alt="Right Image"
                style={{
                  border: "10px solid #202124",
                  borderLeft: "0px",
                  borderRadius: "0px 20px 20px 0px",
                  width: "100%",
                  height: "25rem",
                }}
              />
            </div>
          </Col>
          <Row
            className="mt-5 p-3"
            style={{
              backgroundColor: "#202124",

              borderRadius: "10px",
              boxShadow: "0px 0px 10px #C63B45",
            }}
          >
            <Form
              className="d-flex"
              style={{
                width: "40rem",
                backgroundColor: "#202124",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px #C63B45",
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className=" "
                aria-label="Search"
                size="lg"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="outline-danger"
                style={{
                  width: "4rem",
                  borderLeft: "",
                  borderRadius: "0px 10px 10px 0px",
                  height: "3rem",
                }}
              >
                <BsSearch style={{}} size={20} />
              </Button>
            </Form>
            <Link to={"/add"}>
              <Button
                className="ml-2"
                variant="outline-danger"
                style={{ height: "100%" }}
              >
                Add
              </Button>
            </Link>
          </Row>
        </Row>
      </Container>

      <Container
        fluid
        className="bg-dark mt-4 d-flex justify-content-center"
        style={{ color: "white" }}
      ></Container>
      <Container className="mt-2">
        <Row>{cardsToShow.slice(0, 2)}</Row>
        <Row>{cardsToShow.slice(2, 4)}</Row>
        <Row>{cardsToShow.slice(4, 6)}</Row>
        <Row>{cardsToShow.slice(6, 8)}</Row>
        <Row className=" justify-content-center">
          <Col className="py-2 d-flex justify-content-center">
            <Pagination
              size="lg"
              className="rounded pt-3 px-3"
              style={{
                backgroundColor: "#202124",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px #C63B45",
              }}
            >
              {paginationItems}
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyComponent;
