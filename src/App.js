import React from "react";
import "./App.css";
import Row from "./Components/Row components/Row";
import requests from "./request";
import Banner from "./Components/Banner component/Banner";
import Nav from "./Components/Nav component/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
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
