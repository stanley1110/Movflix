import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Row from "./Components/Row components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1> lets build</h1>
      <Row
        title="Netflix originals"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchurl={requests.fetchTrending} />
      <Row title="Top rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchurl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
