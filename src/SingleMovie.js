import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Released: released,
    Actors: actors,
    Awards: awards,
    Director: director,
    Genre: genre,
    Rated: rated,
    Ratings: ratings,
    Runtime: runtime,
  } = movie;
  return (
    <section className="single-movie">
      <h1 className="ratings-title">{title}</h1>
      <div className="image-container">
        <img src={poster} alt={title} />
      </div>
      <div className="single-movie-info">
        <p>{plot}</p>
        <div className="tags">
          <div>
            <p>
              <strong>Genre: </strong> {genre}
            </p>
            <p>
              <strong>Rated:</strong> {rated}
            </p>
          </div>
          <div>
            <p>
              <strong>Runtime: </strong> {runtime}
            </p>
            <p>
              <strong>Released: </strong>
              {released}
            </p>
          </div>
        </div>
        <p>
          <strong>Actors: </strong>
          {actors}
        </p>
        {director !== "N/A" ? (
          <p>
            <strong>Director: </strong>
            {director}
          </p>
        ) : null}
        {awards !== "N/A" ? (
          <p>
            <strong>Awards: </strong>
            {awards}
          </p>
        ) : null}
        <div>
          <h3 className="ratings-title">Ratings: </h3>
          <div className="ratings">
            {ratings.map((el) => (
              <p key={el.Source}>
                <strong>{el.Source}: </strong>
                {el.Value}
              </p>
            ))}
          </div>
        </div>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
