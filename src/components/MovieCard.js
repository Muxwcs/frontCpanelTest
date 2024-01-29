import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-36 border shadow-md rounded-md overflow-hidden">
      <div className="flex">
        <img
          alt="test"
          src={movie.poster}
          className="w-auto h-28 object-cover"
        />
        <div className="flex flex-col items-start">
          <h2 className=" font-bold">{movie.title}</h2>
          <p>{movie.year}</p>
          <p className=" text-left">{movie.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
