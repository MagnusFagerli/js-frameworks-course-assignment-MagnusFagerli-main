import { BASE_URL } from "../../constants/api";
import { useState, useEffect } from "react";
import React from "react";
import UserProps from "./UserProps";

function UserFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);

        if (response.ok) {
          const json = await response.json();
          //   console.log(json);
          setUsers(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="loader">An error occured: {error}.</div>;
  }

  return (
    <div className="page-card">
      {users.map(function (user) {
        const { id, name } = user;
        return <UserProps key={id} id={id} name={name} />;
      })}
    </div>
  );
}

export default UserFetch;
