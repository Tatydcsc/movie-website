import React from "react";
import StarRating from "../StarRating";

export default function MovieCard({
  title,
  overview,
  poster_path,
  vote_average,
}) {
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      </div>
      <div className="movie-infos">
        <p className="movie-title">{title}</p>
        {vote_average > 0 && <StarRating rating={vote_average} />}

        <div className="hidden-content">
          {overview && (
            <p className="description">
              {overview.length > 80
                ? `${overview.substring(0, 80)}...`
                : overview}
            </p>
          )}

          <button className="btn-default">Ver mais</button>
        </div>
      </div>
    </li>
  );
}
