import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function UserDetails() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const newUrl = BASE_URL + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(newUrl);

          if (response.ok) {
            const json = await response.json();
            // console.log(json);
            setUser(json);
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
    },
    [newUrl]
  );

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <h4>Registered Username: {user.username}</h4>
      <h5>Contact Information:</h5>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default UserDetails;
