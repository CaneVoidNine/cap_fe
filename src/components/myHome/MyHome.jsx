import React, { useEffect } from "react";
import MyCards from "../myCards/MyCards";
import MyFoot from "../myFoot/MyFoot";
import MyJumbo from "../myJumbo/MyJumbo";
import MyNav from "../myNav/MyNav";
import MyStatic from "../myStatic/MyStatic";
import { useSelector } from "react-redux";
export default function MyHome() {
  const myProfile = useSelector((state) => state.user.user);
  useEffect(() => {
    console.log(myProfile);
  });
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
