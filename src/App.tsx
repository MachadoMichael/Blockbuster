import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";
import { Serie } from "./types/Serie";
import * as MoviesService from "./services/movies";
import * as SeriesService from "./services/series";
import { Favorites } from "./components/Favorites";
import * as C from "./App.styles";
import { List } from "./components/List";
import { Homepage } from "./components/Homepage";
import { ShowRoom } from "./components/ShowRoom";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      setMovies(await MoviesService.getAll());
    };
    getMovies();

    const getSeries = async () => {
      setSeries(await SeriesService.getAll());
    };
    getSeries();
  }, []);

  return (
    <Router>
      <C.Container>
        <C.Header>
          <C.Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/594px-Blockbuster_logo.svg.png"></C.Logo>
          <C.Nav>
            <List nav={["Inicio", "Series", "Filmes", "Favoritos"]}></List>
            <C.Search></C.Search>
          </C.Nav>
        </C.Header>

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
            element={<ShowRoom dataBase={movies} setDataBase={setMovies} />}
          ></Route>
          <Route
            path="/Series"
            element={<ShowRoom dataBase={series} setDataBase={setSeries} />}
          ></Route>
        </Routes>
      </C.Container>
    </Router>
  );
};

export default App;
