import React, { useEffect } from "react";
import MyCards from "../myCards/MyCards";
import MyFoot from "../myFoot/MyFoot";
import MyJumbo from "../myJumbo/MyJumbo";
import MyNav from "../myNav/MyNav";
import MyStatic from "../myStatic/MyStatic";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkoutsAction } from "../../redux/actions";
export default function MyHome() {
  return (
    <>
      <MyNav />
      <MyJumbo />
      <MyCards />
      <MyStatic />
      <MyFoot />
    </>
  );
}
