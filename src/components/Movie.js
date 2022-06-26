import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, name, englishName }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{name}</Link>
      </h2>
      <p>{englishName}</p>
    </div>
  );
};

Movie.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  englishName: propTypes.string.isRequired,
};

export default Movie;
