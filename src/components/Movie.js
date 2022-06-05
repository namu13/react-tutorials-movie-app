import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ name, englishName }) => {
  return (
    <div>
      <h2>
        <Link to="/movie">{name}</Link>
      </h2>
      <p>{englishName}</p>
    </div>
  );
};

Movie.propTypes = {
  name: propTypes.string.isRequired,
  englishName: propTypes.string.isRequired,
};

export default Movie;
