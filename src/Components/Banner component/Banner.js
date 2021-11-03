import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const result = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    }

    fetchdata();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",

        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__buttons"> Play</button>
          <button className="banner__buttons">My List </button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
