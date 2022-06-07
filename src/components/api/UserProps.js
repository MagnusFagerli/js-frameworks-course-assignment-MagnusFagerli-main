import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserProps({ id, name }) {
  return (
    <Link to={`users/${id}`}>
      <div className="user-container">
        <p>User {id}</p>
        <h1>{name}</h1>
      </div>
    </Link>
  );
}

UserProps.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  website: PropTypes.string,
};

export default UserProps;
