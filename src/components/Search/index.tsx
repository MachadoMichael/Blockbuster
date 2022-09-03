import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { Serie } from "../../types/Serie";
import { Banner } from "../Banner";
import * as C from "./styles";
import * as MoviesService from "../../services/movies";
import * as SeriesService from "../../services/series";

type Props = {
  movies: Movie[];
  series: Serie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSeries: React.Dispatch<React.SetStateAction<Serie[]>>;
};

export const Search = ({ movies, series, setMovies, setSeries }: Props) => {
  const [searchMovies, setSearchMovies] = useState<Movie[]>([]);
  const [searchSeries, setSearchSeries] = useState<Serie[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      const getSearchData = async () => {
        setSearchMovies(await MoviesService.searchMovie(movies, query));
        setSearchSeries(await SeriesService.searchSerie(series, query));
      };
      getSearchData();
    } else {
      alert("Digite um nome no campo pesquisa");
    }
  }, [query]);

  return (
    <C.Container>
      <C.Title>{query !== "" ? `Resultados para ${query}` : ""}</C.Title>
      <C.Favorites>
        <Banner list={searchMovies} setList={setSearchMovies}></Banner>
      </C.Favorites>
    </C.Container>
  );
};
