import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=08621ab417fa91991d102fcc19584dbd`
      )
    ).json();
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.movieCd}
            id={movie.movieCd}
            name={movie.movieNm}
            englishName={movie.movieNmEn}
          />
        ))
      )}
    </div>
  );
};

export default Home;
