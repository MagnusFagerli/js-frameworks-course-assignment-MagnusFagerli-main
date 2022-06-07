import React from "react";
import UserFetch from "../api/UserFetch";
import Header from "../header/Header";

function Home() {
  return (
    <div>
      <Header>Users</Header>

      <UserFetch />
    </div>
  );
}

export default Home;
