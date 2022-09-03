import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";
import { Serie } from "./types/Serie";
import * as MoviesService from "./services/movies";
import * as SeriesService from "./services/series";
import { Favorites } from "./components/Favorites";
import * as C from "./App.styles";
import { Homepage } from "./components/Homepage";
import { Showroom } from "./components/Showroom";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    const getData = async () => {
      setMovies(await MoviesService.getAll());
      setSeries(await SeriesService.getAll());
    };
    getData();
  }, []);

  return (
    <Router>
      <C.Container>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={<Homepage dataBase={movies} setDataBase={setMovies} />}
          ></Route>
          <Route
            path="/Favoritos"
            element={
              <Favorites
                movies={movies}
                series={series}
                setMovies={setMovies}
                setSeries={setSeries}
              />
            }
          ></Route>
          <Route
            path="/Filmes"
            element={<Showroom dataBase={movies} setDataBase={setMovies} />}
          ></Route>
          <Route
            path="/Series"
            element={<Showroom dataBase={series} setDataBase={setSeries} />}
          ></Route>
          <Route
            path="/Pesquisa"
            element={
              <Search
                movies={movies}
                series={series}
                setMovies={setMovies}
                setSeries={setSeries}
              />
            }
          ></Route>
        </Routes>
      </C.Container>
    </Router>
  );
};

export default App;
