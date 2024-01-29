import React, { useEffect, useState } from "react";
import { getMovies } from "../lib";
import MovieCard from "./MovieCard";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies();
      setIsError(res.error);
      setMovies(res.data);
      setisLoading(false);
    };
    fetchData();
    return () => {};
  }, []);

  if (loading) {
    <div className="text-center">Loading ...</div>;
  }
  if (!loading && isError) {
    return <div className="text-center">Sorry an error ocurred</div>;
  }
  return (
    <>
      {movies &&
        movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)}
    </>
  );
};

export default AllMovies;
