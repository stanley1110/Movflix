import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchdata();
  }, [fetchurl]);
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
            src={` ${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}{" "}
      </div>
    </div>
  );
}

export default Row;
