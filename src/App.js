import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav/MyNav";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyFoot from "./components/myFoot/MyFoot";
import MyHome from "./components/myHome/MyHome";
import MyWork from "./components/myWork/MyWork";
import MyDetails from "./components/myDetails/MyDetails";
import MyProfile from "./components/myProfile/MyProfile";
import MyCalendar from "./components/myCalendar/MyCalendar";
import MyLogister from "./components/myLogister/MyLogister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyLogister />} />
        <Route path="/workouts" element={<MyWork />} />
        <Route path="/details/:id" element={<MyDetails />} />
        <Route path="/profile" element={<MyProfile />} />

        <Route path="/home" element={<MyHome />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Container>
      <MyNav />
      <MyFoot />
    </Container> */
}
