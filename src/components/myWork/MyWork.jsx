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
} from "../../redux/actions";

function MyComponent({ likes }) {
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const myWork = useSelector((state) => state.work.workouts);
  const myLikes = useSelector((state) => state.user.user.likes);

  const handleLike = (e, likes) => {
    e.preventDefault();
    if (myLikes.includes(likes)) {
      dispatch(unlikeWorkAction(likes));
    } else {
      dispatch(likeWorkAction(likes));
    }

    // console.log(likes);
    // dispatch(likeWorkAction(like));
  };

  const isLiked = myLikes?.includes(likes);

  useEffect(() => {
    dispatch(fetchWorkoutsAction());
    console.log(likes);
    console.log(myLikes);
  }, [likes]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const cardsPerPage = 4;
  const totalCards = 16;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = (activePage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const filteredCards = myWork.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cards = filteredCards.map((workout, i) => (
    <Col key={i}>
      <Row>
        <Card
          className="mb-4 "
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
            maxHeight: "40rem",
            overflowY: "hidden",
          }}
        >
          <Card.Body>
            <Link to={`/details/${filteredCards[i]?._id}`}>
              <Card.Img
                src={filteredCards[i]?.image}
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px #888888",
                  height: "30rem",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              ></Card.Img>
            </Link>
            <Card.Title>
              <Row className="mt-2">
                <Col>{filteredCards[i]?.title}</Col>
                <Col className="d-flex justify-content-end">
                  {myLikes?.includes(filteredCards[i]?.title) ? (
                    <AiFillHeart
                      style={{ cursor: "pointer" }}
                      onClick={(e) => handleLike(e, filteredCards[i]?.title)}
                    />
                  ) : (
                    <AiOutlineHeart
                      style={{ cursor: "pointer" }}
                      onClick={(e) => handleLike(e, filteredCards[i]?.title)}
                    />
                  )}
                </Col>
              </Row>
            </Card.Title>

            <Card.Text
              className="ml-1 ovef"
              style={{ maxHeight: "5rem", overflowY: "scroll" }}
            >
              {filteredCards[i]?.info}
            </Card.Text>
            <Card.Text className="ml-1"></Card.Text>
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
      <Container className="pad">
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            xl={6}
            lg={12}
            className="p-5"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
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
                backgroundColor: "#F5F5F5",
                boxShadow: "0px 0px 10px #888888",
                maxHeight: "22rem",
              }}
            >
              <Image
                className=""
                src="https://thumbs.dreamstime.com/b/diverse-group-friends-laughing-workout-session-sportswear-standing-arm-together-gym-class-149716233.jpg"
                alt="Right Image"
                style={{
                  border: "10px solid #F5F5F5",
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
              backgroundColor: "#F5F5F5",

              borderRadius: "10px",
              boxShadow: "0px 0px 10px #888888",
            }}
          >
            <Form
              className="d-flex"
              style={{
                width: "40rem",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px #888888",
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
                size="lg"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="outline-dark"
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
                variant="outline-dark"
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
      <Container className="mt-5">
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
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px #888888",
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
