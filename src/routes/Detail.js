import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    console.log("getting movie data...");
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovieData(json.data.movie);
    console.log(json);
  };

  const validateID = function () {
    const parsedID = parseInt(id);
    if (parsedID === 0 || isNaN(parsedID)) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (validateID()) {
      getMovie();
    }
  }, []);

  if (!validateID() || movieData.id === 0 || movieData.id === undefined) {
    return (
      <div>
        <h1>No data found. Please try again.</h1>{" "}
        <Link to={`/movie/`}>Back to the main page</Link>
      </div>
    );
  } else {
    return (
      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <h1>{movieData.title_long}</h1>
            <img src={movieData.large_cover_image} alt={movieData.title} />
            <h3>Description</h3>
            <h5>{movieData.description_full}</h5>
            <h3>Genres</h3>
            <h5>
              {" "}
              {movieData.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </h5>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
