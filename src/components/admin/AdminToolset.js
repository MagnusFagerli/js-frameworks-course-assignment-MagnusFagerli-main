import React from "react";
import { Link } from "react-router-dom";

function AdminToolset() {
  return (
    <>
      <nav className="dashboard">
        <Link to="/dashboard/posts">Add/Edit Posts</Link>
        <Link to="/dashboard/posts">Add/Edit Users</Link>
      </nav>
    </>
  );
}

export default AdminToolset;
