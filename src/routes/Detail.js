import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();

  const getMovie = async () => {
    const { movieInfoResult: data } = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=08621ab417fa91991d102fcc19584dbd&movieCd=${id}`
      )
    ).json();
    setLoading(false);
    setMovie(data.movieInfo);
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  //   movie.genres.map((item) => {
  //     console.log(item.genreNm);
  //   });

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>
            {movie.movieNm}({movie.movieNmEn})
          </h1>
          <div>
            {movie.genres.map((item) => {
              <p>{item.genreNm}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
